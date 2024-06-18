<script>
    export let data
    import markdownit from 'markdown-it'
    const md = markdownit()
</script>
<div class="tv">
    <select bind:value={data.selected}>
    {#each data.c as c, key}
        <option value={key}>{c.subject}</option>
    {/each}
    </select>
</div>
<br> {@html md.render(data.c[data.selected]?.md || '')}
<style>
    :global(img) {
        width: 60px;
    }
    :global(body) {
        background-color: #e9e8cd;
        text-align: left;
        padding: 20px;
        color: rgb(11, 55, 40);
    }
    :global(h1) {
        text-align: center;
        color: rgb(116, 43, 23);
        text-shadow: 1px 1px 3px gray;
    }
    div.tv {
        text-align: center;
    }
    div.tv select {
        font-size: 20px;
        padding: 10px;
    }
</style>