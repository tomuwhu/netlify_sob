import { db } from '$lib/db'
import {store} from '$lib/store'
export async function load(event) {
    if (store.size == 0) {
        event.cookies.delete('user', {path: '/'})
    }
    var { value } = await db.getrow("SELECT value FROM variables WHERE name='counter'")
    var n = Number(value)
    const rowsAffected = await db.update("UPDATE variables SET value = ? WHERE name='counter'", [n + 1])
	return { x: n + 1, n: store.size }
}