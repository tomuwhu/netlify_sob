import { store } from '$lib/store'

export async function load(event) {
    if (store.size == 0) {
        event.cookies.delete('user', {path: '/'})
    }
    const userstr = event.cookies.get('user')
    if (userstr) {
        var user = JSON.parse(userstr)
        return { user }
    }
    return { user: null }
}