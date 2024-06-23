<script>
    export let data
    import { browser } from '$app/environment'
    import { goto } from '$app/navigation'
    import Stars from '$components/Stars.svelte'
    if (browser && data.user == null) goto('/login')
</script>
<h1>Értékelesek, vélemények a portfóliómról</h1>
{#each data.velemenyek as v, i}
    <div class="velemeny">
    <table >
        <tr><td class="z">{i+1}.</td><td class=r><Stars id=sc bind:sv={v.stars} disabled=true/></td>
        <tr><td colspan=2 class=cont>{@html v.velemeny}</td></tr>
    </table>
    </div>
{/each}
<style>
    table {
        border-collapse: separate;
        border-spacing: 8px;
    }
    h1 {
        padding-top: 10px;
    }
    div.velemeny {
        display: inline-block;
        padding: 10px;
        background-color: aquamarine;
        padding: 3px;
        margin: 10px;
        border-radius: 15px;
        border: solid 3px grey;
    }
    td.z {
        background-color: rgb(244, 248, 202);
        border-radius: 50%;
        width: 27px;
        height: 20px;
        text-align: center;
        box-shadow: 1px 1px 3px black;
        border:solid 3px black
    }

    td.r {
        text-align: right;
    }
    td.cont {
        padding: 10px;
        background-color: rgb(250, 230, 180);
        border-radius: 6px;
        border: solid 2px gray;
        box-shadow: 1px 1px 3px gray;
        text-align: left;
    }
    :global(#scx) {
        padding: 1px;
        padding-left: 6px;
        padding-right: 6px;
        margin-top: 0px;
        border-radius: 8px;
    }
    :global(#scx button) {
        font-size: 16px;
        padding: 1px;
    }
</style>