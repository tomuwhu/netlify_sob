import { db } from '$lib/db'
import {store} from '$lib/store'

export async function load({ params, cookies }) {
    console.log(params.n)
    if (store.size == 0) {
        cookies.delete('user', {path: '/'})
    }
    const userstr = cookies.get('user')
    var toplist = []
    if (userstr) {
        var user = JSON.parse(userstr)
        toplist = await db.getall("SELECT user.name, user.pfurl, user.email, avg(stars) st ,count(*) n FROM velemeny, user WHERE user.email = velemeny.portfolio GROUP BY user.email ORDER BY st desc LIMIT 10")
        return { user, loggedinusers: Array.from(store), toplist }
    }
    return { user: null, loggedinusers: null, toplist}
}