import { MYSQL_HOST } from '$env/static/private';
import { MYSQL_PASS } from '$env/static/private';
import Db from 'mysql2-async'
export const db = new Db({
    host: MYSQL_HOST,
    user: 'avnadmin',
    port: 19701,
    password: MYSQL_PASS,
    database: 'docstore'
})