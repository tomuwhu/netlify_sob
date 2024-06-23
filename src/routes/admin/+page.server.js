import { db } from '$lib/db'
import { store } from '$lib/store'

export async function load({ cookies }) {
    if (store.size == 0) {
        cookies.delete('user', {path: '/'})
    }
    const userstr = cookies.get('user')
    var velemenyek = []
    if (userstr) {
        var user = JSON.parse(userstr)
        var velemenyek = await db.getall("SELECT u1.name u1_name, u2.name u2_name, velemeny, stars FROM user u1, user u2, velemeny WHERE u1.email = velemeny.velemenyezo and u2.email = velemeny.portfolio")
        return { user, velemenyek }
    }
    return { user: null, velemenyek }
}