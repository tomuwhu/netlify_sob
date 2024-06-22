<script>
    export let data
</script>
<br>
<h1>SOB Backend/FullStack alkalmazásfejlesztés</h1>
{#if data.user == null}
<h3>Dr. Németh Tamás</h3>
{:else}
<h3>Bejelentkezve: {data.user.name}</h3>
{/if}
<div class="mc">
<div>Nézettség: <span>{data.x}</span></div>,<div><span>{data.n}</span> aktív felhasználó</div>
</div>
<hr>
<p>
    <a target="_blank" href="https://svelte.dev">Svelte</a>
    <a target="_blank" href="https://kit.svelte.dev">SvelteKit</a>
    <a target="_blank" href="https://vitejs.dev">Vite</a>
    <a target="_blank" href="https://www.netlify.com">Netlify</a>
    <a target="_blank" href="https://aiven.io/free-mysql-database">MySQL on aiven</a>
    <br>
    <a target="_blank" href="https://github.com/tomuwhu/netlify_sob"><img class="gh" src="https://cdn.iconscout.com/icon/free/png-256/free-github-169-1174970.png" alt="GitHub"></a>
</p>

<style>
    a {
        all: unset;
        cursor: pointer;
        color: rgb(65, 48, 27);
        font-weight: bold;
        border-radius: 7px;
        border: solid 1px;
        padding: 6px;
        margin: 10px;
        display: inline-block;
    }
    a:hover {
        background-color: rgb(220, 205, 187);
    }
    .mc {
        display:inline-block;
        border-radius: 20px;
        padding: 40px;
        border: solid 7px rgb(218, 222, 190);
        background-color: beige;
        margin: 30px;
    }
    .mc div {
        display: inline-block;
        font-family: 'Times New Roman', Times, serif;
        font-size: 20px;
        color: rgb(65, 48, 27);
        padding: 10px;
    }
    span {
        color: rgb(27, 65, 64);
        font-weight: bold;
        border-radius: 7px;
        border: solid 1px;
        padding: 6px;
        background-color: #e9e8cd;
    }
    h3 {
        text-shadow: 1px 1px 3px gray;
    }
    img.gh {
        width: 30px;
    }
</style>