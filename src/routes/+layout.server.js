export async function load(event) {
    const userstr = event.cookies.get('user')
    if (userstr) {
        var user = JSON.parse(userstr)
        return { user }
    }
    return { user: null }
}