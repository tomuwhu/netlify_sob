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
<br> 
<div class="cont">
{@html md.render(data.c[data.selected]?.md || '')}
</div>
<style>
    .cont {
        text-align: left;
    }
    :global(img) {
        width: 60px;
    }
    :global(h1) {
        text-align: center;
        color: rgb(116, 43, 23);
        text-shadow: 1px 1px 3px gray;
    }
    div.tv {
        padding-top: 20px;
        text-align: center;
    }
    div.tv select {
        font-size: 20px;
        padding: 10px;
    }
</style>