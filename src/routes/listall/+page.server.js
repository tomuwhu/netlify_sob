import { db } from '$lib/db'
import {store} from '$lib/store'

export async function load({ cookies }) {
    const userstr = cookies.get('user')
    var alluser = await db.getall("SELECT * FROM user ORDER BY name")
    if (userstr) {
        var user = JSON.parse(userstr)
        return { user, alluser, loggedinusers: Array.from(store) }
    }
    return { user: null, loggedinusers: null, alluser }
}