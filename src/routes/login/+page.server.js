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
export async function load({ cookies }) {
    const userstr = cookies.get('user')
    if (userstr) {
        var user = JSON.parse(userstr)
        return { user }
    }
    return { user: null }
}
export const actions = {
    login: async ({ request, cookies }) => {
        const formData = await request.formData()
        const username = formData.get('username')
        const password = formData.get('password')
        var c = await db.getall("SELECT * FROM user WHERE email = ? AND pwsha = ?", [username, password])
        if (c.length == 0) {
            return { user : null, wp: 1 }
        }
        store.add(c[0].email)
        cookies.set('user', JSON.stringify(c[0]), {path: '/'})
    },
    logout: async ({ cookies }) => {
        const userstr = cookies.get('user')
        if (userstr) {
            var user = JSON.parse(userstr)
            store.delete(user.email)
        }
        cookies.delete('user', {path: '/'})
    },
    update: async ({ request, cookies }) => {
        const userstr = cookies.get('user')
        var username = null
        if (userstr) {
            var user = JSON.parse(userstr)
            username = user.email
        }
        const formData = await request.formData()
        const password = formData.get('password1')
        const url = formData.get('url')
        if (password == 'da39a3ee5e6b4b0d3255bfef95601890afd80709') {
            await db.update("UPDATE user SET pfurl = ? WHERE email = ?", [url, username])
            user.pfurl = url
            cookies.set('user', JSON.stringify(user), { path: '/' })
            return { user }
        } else {
            await db.update("UPDATE user SET pwsha = ? WHERE email = ?", [password, username])
        }
    }
}