<script>
    export let data
    import { browser } from '$app/environment'
    import { goto } from '$app/navigation'
    if (browser && data.user == null) goto('/login')
    function f1(n, x) {
        return Math.log(1+Number(n) * 5 - Math.round(Number(n) * Number(x)))
    }
    function f2 (n, x) {
        return Math.log(1 + Number(n) * Number(x))
    }
    function f3 (n, x) {
        return Number(n) * 5 - Math.round(Number(n) * Number(x))
    }
    function f4 (n, x) {
        return Number(n) * Number(x)
    }
</script>
<h1>Toplista</h1>
<table>
    <tr class="head">
        <th></th>
        <th>Név</th>
        <th>Hivatkozás</th>
        <th colspan=2 class=the>Értékelés</th>
        <th>Pontszám</th>
    </tr>
{#each data.toplist as row, rid}
    <tr>
        <th class=rid>{rid+1}.</th>
        <td class=l><div>{row.name}.</div></td>
        <td class=l><a href={row.pfurl} class="view" target="_blank">{row.pfurl}</a></td>
        <td class=c>{Number(row.st).toFixed(2)}</td>
        <td class=r>{#each Array(Math.round(f1(row?.n, row?.st))).fill() as x, i}<i>☆</i>{/each}{#each Array(Math.round(f2(row?.n, row?.st))).fill() as x, i}★{/each} <b> | <em>{f3(row?.n, row?.st)}</em> + {f4(row?.n, row?.st)} </b></td>
        <td class="r x">{Number(row.score).toFixed(2)}</td>
    </tr>
{/each}
</table>
<style>
    tr.head th {
        color: rgb(168, 165, 0);
    }
    h1 {
        padding-top: 20px;
    }
    th.the {
        text-align: left;
    }
    th.thr {
        text-align: left;
    }
    th.rid {
        text-align: right;
        padding-right: 18px;
        color:rgb(164, 139, 0);
        text-shadow: 0px 0px 3px rgb(136, 136, 136);
        font-size: 20px;
    }
    table {
        margin: 0 auto;
        border-spacing: 10px;
        border: solid 2px gray;
        box-shadow: 0px 0px 8px black;
        border-radius: 15px;
        background-color: rgb(237, 241, 218);
        border: solid 10px rgb(88, 82, 0);
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
        box-shadow: 1px 1px 3px inset rgb(200, 200, 200);
    }
    td.c {
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
        background-color: rgb(35, 121, 121);
        color: rgb(235, 237, 207);
        font-weight: bold;
    }
    td.r {
        text-align: right;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 11px;
        background: transparent;
        box-shadow: none;
        color:gold;
        text-shadow: 0px 0px 2px black;
    }
    td.r i {
        all: unset;
        color:gold;
        text-shadow: none;
        text-shadow: 0px 0px 2px rgb(137, 137, 137);
    }
    td.r b {
        all: unset;
        font-size: 14px;
        color: rgb(20, 109, 0);
        text-shadow: none;
    }
    td.r em {
        all: unset;
        font-size: 14px;
        color: rgb(239, 191, 0);
        text-shadow: none;
    }
    td a {
        all: unset;
        cursor: pointer;
        color: rgb(90, 149, 129);
        text-shadow: 0px 0px 2px gray;
    }
    td a:hover {
        all: unset;
        cursor: pointer;
        color: rgb(129, 98, 35);
        text-shadow: 1px 1px 3px gray;
    }
    td.x {
        font-size: 17px;
        color: rgb(125, 139, 0);
        background: none;
        box-shadow: none;
        text-shadow: 0px 0px 2px rgb(137, 137, 137);
        padding: 2px;
    }
</style>
