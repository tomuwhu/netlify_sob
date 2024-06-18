import { MYSQL_HOST } from '$env/static/private';
import { MYSQL_PASS } from '$env/static/private';
import Db from 'mysql2-async'
const db = new Db({
    host: MYSQL_HOST,
    user: 'avnadmin',
    port: 19701,
    password: MYSQL_PASS,
    database: 'docstore'
})
export async function load() {
    var c = await db.getrow("SELECT value FROM variables WHERE name='counter'")
    var n = Number(c.value)
    const rowsAffected = await db.update("UPDATE variables SET value = ? WHERE name='counter'", [n + 1])
	return { x: n + 1 }
}