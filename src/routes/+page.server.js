import { MYSQL_HOST } from '$env/static/private';
import { MYSQL_PASS } from '$env/static/private';
import Db from 'mysql2-async'
import {store} from '$lib/store'
const db = new Db({
    host: MYSQL_HOST,
    user: 'avnadmin',
    port: 19701,
    password: MYSQL_PASS,
    database: 'docstore'
})
export async function load(event) {
    var user
    if (user = event.cookies.get('user')) {
        console.log(!store.has(user))
        if (!store.has(user)) {
            event.cookies.delete(user, {path: '/'})
        }
    }
    var { value } = await db.getrow("SELECT value FROM variables WHERE name='counter'")
    var n = Number(value)
    const rowsAffected = await db.update("UPDATE variables SET value = ? WHERE name='counter'", [n + 1])
	return { x: n + 1, n: store.size }
}