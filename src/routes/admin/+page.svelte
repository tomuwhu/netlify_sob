<script>
    export let data
    import { browser } from '$app/environment'
    import { goto } from '$app/navigation'
    if (browser && data.user?.pfurl != 'admin') goto('/login')
    const stb = ['💩','👊','👎','👦','👍','👏']
</script>
<h1>Összes értékelés</h1>
<table>
{#each data.velemenyek as velemeny, i}
    <tr>
        <td class=r>{i}</td>
        <td class=l>{velemeny.u1_name}</td>
        <td>{stb[velemeny.stars]}</td>
        <td class=l>{velemeny.u2_name}</td>
        <td>{velemeny.stars}</td>
        <td class=l>{@html velemeny.velemeny || '---'}</td>
        <td>{stb[velemeny.stars]}</td>
    </tr>
{/each}
</table>
<style>
    h1 {
        padding-top: 20px;
    }
    table {
        border-collapse: collapse;
        margin: 0px auto;
        border: solid 2px black;
    }
    tr:nth-child(2n) {
        background-color: beige;
    }
    tr:nth-child(2n + 1) {
        background-color: rgb(226, 226, 165);
    }
    td {
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 1px;
    }
    td.l {
        text-align: left;
    }
    td.r {
        text-align: right;
        padding-right: 10px;
        padding-left: 30px;
    }
</style>