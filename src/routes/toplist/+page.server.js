import { db } from '$lib/db'
import {store} from '$lib/store'

export async function load({ params, cookies }) {
    if (store.size == 0) {
        cookies.delete('user', {path: '/'})
    }
    const userstr = cookies.get('user')
    var toplist = []
    if (userstr) {
        var user = JSON.parse(userstr)
        var n = await db.getall("SELECT count(*) n FROM velemeny")
        toplist = await db.getall("SELECT user.name, user.pfurl, user.email, avg(stars) st, avg(stars) + avg(stars)*count(*)/? score ,count(*) n FROM velemeny, user WHERE user.email = velemeny.portfolio and user.pfurl != 'admin' GROUP BY user.email ORDER BY score desc LIMIT 10", [n[0]?.n || 1])
        return { user, loggedinusers: Array.from(store), toplist }
    }
    return { user: null, loggedinusers: null, toplist}
}