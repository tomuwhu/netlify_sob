<script>
    import sha1 from 'sha1'
    export let data
    export let form
    import { browser } from '$app/environment'
    import { goto } from '$app/navigation'
    if (browser && form?.wp == 3) goto('/listall')
    const valid_url = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/
    var password, passwordcheck, url = data?.user?.pfurl
</script>
{#if form?.wp } <h2>Hibás felhasználónev vagy jelszó</h2> {/if}
{#if data?.user == null}
<form action="?/login" method="POST" on:submit={() => password = sha1(password)}>
    <br>
    <h1>Bejelentkezés</h1>
    <input type="text" name="username">
    <br><br>
    <input type="password" name="password" bind:value={password}>
    <br><br>
    <input type="submit" value="Bejelentkezés">
</form>
<br><hr>
{:else}
<br>
<h1>Bejelentkezve: {data?.user?.name}</h1>
<br>
<form action="?/update" method="POST" on:submit={() => {
    if (password?.length>3 && password == passwordcheck) password = sha1(password)
    else password = 'da39a3ee5e6b4b0d3255bfef95601890afd80709'
    }}>
    <input type="text" name="name" bind:value={data.user.name} disabled>
    <br><br>
    <input type="text" name="email" bind:value={data.user.email} disabled>
    <br><br>
    <input type="password" name="password1" bind:value={password} placeholder="Új Jelszó">
    <br><br>
    <input type="password" name="password2" bind:value={passwordcheck} placeholder="Új Jelszó megerősítése">
    {#if password?.length>3 && password == passwordcheck }
        <br><br>
        <input type="submit" value="Jelszómódositás">
    {:else}
        <br><br>
        <input type="text" name="url" bind:value={url} placeholder="Portfólió URL">
        <br><br>
        {#if valid_url.test(url)}
        <div class="url">
            <span>Portfólió URL:</span>
            <a href="{url}" target="_blank">{url}</a>
        </div>
        
        {/if}
    {/if}
    <br><br>
    {#if url != data?.user?.pfurl}
        <input type="submit" value="Portfólió URL módosítása">
    {/if}
</form>
<hr>
<form action="?/logout" method="POST" name="Login" id="Login" >
    <br>
    <input type="submit" value="Kijelentkezés">
</form>
{/if}
<style>
div.url {
    background-color: rgb(197, 238, 238);
    padding: 10px;
    border-top: solid 1px green;
    border-bottom: solid 1px green;
}
input[name=url] {
    background-color: rgb(234, 250, 250);
}
input[type=password] {
    background-color: rgb(255, 255, 248);
}
input[disabled] {
    font-size: 16px;
    color: rgb(43, 79, 106);
    text-shadow: 1px 1px 3px gray;
    border: none;
    background-color: rgb(250, 247, 242);
    text-align: center;
}
</style>