<script>
    export let form
    import sha1 from 'sha1'
    import { browser } from '$app/environment'
    import { goto } from '$app/navigation'
    if (browser && form?.wp == 1) goto('/login')
    const valid_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const valid_name = /[\wà-úÀ-Ú]*\s[\wà-úÀ-Ú]*/
    const valid_url = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/
    var name, email, password, passwordcheck, url
</script>
<form method="POST" on:submit={() => {
        if (password?.length>3 && password == passwordcheck) {
            password = sha1(password)
            passwordcheck = sha1(passwordcheck)
        }
        else {
            password = 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
            passwordcheck = 'da39a3ee5e6b4b0d3255bfef95601890afd80709'
        }
    }}>
    <br>
    <h1>Regisztráció</h1>
    <input type="text" name="name" bind:value={name} placeholder="Név">
    <br><br>
    <input type="text" name="email" bind:value={email} placeholder="E-mail cím">
    <br><br>
    <input type="password" name="password" bind:value={password} placeholder="Jelszó">
    <br><br>
    <input type="password" name="passwordcheck" bind:value={passwordcheck} placeholder="Jelszó megerősítése">
    <br><br>
    <input type="text" name="url" bind:value={url} placeholder="Portfólió URL">
    <br><br>
    {#if valid_url.test(url)}
    <a href={url} target="_blank">Ellenőrzés</a>
    {/if}
    {#if valid_email.test(email) && valid_name.test(name) && password?.length>3 && password == passwordcheck && (valid_url.test(url) || url == 'admin')}
        <br><br>
        <input type="submit" value="Regisztráció">
    {/if}
</form>