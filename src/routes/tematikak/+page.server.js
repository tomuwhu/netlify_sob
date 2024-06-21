import { db } from '$lib/db'
import {store} from '$lib/store'
export async function load({ cookies }) {
    var c, user = {}
    var co = cookies.get('user')
    if (co) {
        user = JSON.parse(co)
        c = await db.getall("SELECT * FROM tematika Order By subject")
    } else c = [{}]
	return { c, user }
}