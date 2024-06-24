import { db } from '$lib/db'
import {store} from '$lib/store'

export async function load({ cookies }) {
    if (store.size == 0) {
        cookies.delete('user', {path: '/'})
    }
    const userstr = cookies.get('user')
    var velemenyek = []
    if (userstr) {
        var user = JSON.parse(userstr)
        var velemenyek = await db.getall("SELECT * FROM velemeny WHERE velemeny.portfolio = ?", [user.email])
        return { user, velemenyek }
    }
    return { user: null, velemenyek }
}