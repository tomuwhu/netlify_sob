<script>
    export let data
    import { browser } from '$app/environment'
    import { goto } from '$app/navigation'
    if (browser && data.user == null) goto('/login')
</script>
<h1>Toplista</h1>
<table>
    <tr>
        <th>Név</th>
        <th>Hivatkozás</th>
        <th>Átlagos értékelés</th>
    </tr>
{#each data.toplist as row}
    <tr>
        <td class="l"><div>{row.name}</div></td>
        <td class="l"><a href={row.pfurl} class="view" target="_blank">{row.pfurl}</a></td>
        <td class="c">{Number(row.st).toFixed(2)}</td>
    </tr>
{/each}
</table>
<style>
    h1 {
        padding-top: 20px;
    }
    table {
        margin: 0 auto;
        border-spacing: 10px;
        border: solid 2px gray;
        box-shadow: 0px 0px 8px black;
        border-radius: 15px;
        background-color: rgb(218, 241, 234);
    }
    td {
        padding: 5px;
        padding-left: 15px;
        padding-right: 15px;
        border-radius: 9px;
        box-shadow: 1px 1px 3px black;
        background-color: rgba(255, 255, 255, 0.5);
    }
    td.l {
        text-align: left;
    }
    td.c {
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
        background-color: rgb(27, 81, 81);
        color: rgb(235, 237, 207);
        font-weight: bold;
    }
    td a {
        all: unset;
        cursor: pointer;
        color: rgb(90, 149, 129);
        text-shadow: 1px 1px 3px gray;
    }
    td a:hover {
        all: unset;
        cursor: pointer;
        color: rgb(129, 98, 35);
        text-shadow: 1px 1px 3px gray;
    }
</style>
