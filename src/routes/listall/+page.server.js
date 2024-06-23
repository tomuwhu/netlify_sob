import { db } from '$lib/db'
import {store} from '$lib/store'

export async function load({ cookies }) {
    if (store.size == 0) {
        cookies.delete('user', {path: '/'})
    }
    const userstr = cookies.get('user')

    if (userstr) {
        var user = JSON.parse(userstr)
        var alluser = await db.getall("SELECT * FROM user LEFT JOIN (SELECT * FROM velemeny WHERE velemeny.velemenyezo = ?) AS myvelemeny ON myvelemeny.portfolio = user.email WHERE user.pfurl != 'admin' ORDER BY name", [user.email])
        return { user, alluser, loggedinusers: Array.from(store) }
    }
    return { user: null, loggedinusers: null, alluser }
}

export const actions = {
    insert: async ({ request, cookies }) => {
        const formData = await request.formData()
        const vuser = JSON.parse(cookies.get('user'))
        const id = formData.get('id')
        const velemenyezo = vuser.email
        const portfolio = formData.get('email')
        var stars = formData.get('stars')
        const velemeny = formData.get('vto')
        if (id) {
            if (!stars) stars = 0
            await db.update("UPDATE velemeny SET velemeny = ?, stars = ? WHERE id = ?", [velemeny, stars, id])
        } else {
            if (!stars) stars = 0
            await db.insert("INSERT INTO velemeny (velemenyezo, portfolio, velemeny, stars) VALUES (?, ?, ?, ?)", [velemenyezo, portfolio, velemeny, stars])
        }
        var alluser = await db.getall("SELECT * FROM user LEFT JOIN (SELECT * FROM velemeny WHERE velemeny.velemenyezo = ?) AS myvelemeny ON myvelemeny.portfolio = user.email ORDER BY name", [vuser.email])
        return { user: vuser, alluser, loggedinusers: Array.from(store) }
    }
}