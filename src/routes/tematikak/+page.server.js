import { db } from '$lib/db'
import {store} from '$lib/store'
export async function load(event) {
    var user
    if (user = event.cookies.get('user')) {
        if (store &&store.has(user)) {
            event.cookies.delete(user, {path: '/'})
        }
    }
    var c = await db.getall("SELECT * FROM tematika Order By subject")
	return { c }
}