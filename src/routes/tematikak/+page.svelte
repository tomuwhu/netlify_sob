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
        color: rgb(36, 57, 66);
        display: inline-block;
        border: solid 1px gray;
        border-radius: 17px;
        padding: 20px;
        background-color: rgb(193, 229, 216);
        box-shadow: 1px 1px 3px inset black;
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
    :global(a) {
        all: unset;
        cursor: pointer;
        color: gray;
    }
    :global(a:hover) {
        text-shadow: 1px 1px 3px gray;
    }
    :global(a:visited) {
        color: rgb(74, 20, 20);
    }
</style>