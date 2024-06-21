import { db } from '$lib/db'
export const actions = {
    default: async ({ request, cookies }) => { 
        const formData = await request.formData()
        const name = formData.get('name')
        const email = formData.get('email')
        const password = formData.get('password')
        const url = formData.get('url')
        var c = await db.getall("SELECT * FROM user WHERE email = ?", [name])
        if (c.length > 0) {
            return { user : null, wp: 2 }
        }
        await db.insert("INSERT INTO user (email, pwsha, name, pfurl) VALUES (?, ?, ?, ?)", [email, password, name, url])
        return {
            user: {
                name, 
                email,
                pfurl: url
            },
            wp: 1
        }
    }
}