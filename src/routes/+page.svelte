<script>
    export let data
</script>
<h1>SOB FullStack Példaoldal</h1>

<div>Counter: <span>{data.x}</span></div>

<hr>
<p>
    <a target="_blank" href="https://github.com/tomuwhu/netlify_sob">Forrás a GitHub-on</a>
    <br>
    <a target="_blank" href="https://svelte.dev">Svelte</a>
    <a target="_blank" href="https://kit.svelte.dev">SvelteKit</a>
    <a target="_blank" href="https://vitejs.dev">Vite</a>
    <a target="_blank" href="https://www.netlify.com">Netlify</a>
    <a target="_blank" href="https://aiven.io/free-mysql-database">MySQL on aiven</a>
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
    div {
        font-family: 'Times New Roman', Times, serif;
        font-size: 20px;
        color: rgb(65, 48, 27);
        padding: 50px;
    }
    span {
        color: rgb(27, 65, 64);
        font-weight: bold;
        border-radius: 7px;
        border: solid 1px;
        padding: 6px;
    }
</style>