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
        if (store &&store.has(user)) {
            event.cookies.delete(user, {path: '/'})
        }
    }
    var c = await db.getall("SELECT * FROM tematika Order By subject")
	return { c }
}