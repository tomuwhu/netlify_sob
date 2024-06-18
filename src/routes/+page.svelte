<script>
    export let data
</script>
<h1>SOB FullStack Példaoldal</h1>

<div>Counter: <span>{data.x}</span></div>


<p>
    <a target="_blank" href="https://svelte.dev">Svelte</a> + 
    <a target="_blank" href="https://kit.svelte.dev">SvelteKit</a> + 
    <a target="_blank" href="https://vitejs.dev">Vite</a>
</p>

<style>
    :global(body) {
        background-color: #e9e8cd;
        text-align: center;
        color: rgb(11, 55, 40);
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