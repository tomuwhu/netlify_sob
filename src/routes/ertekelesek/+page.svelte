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
        <h2>{i+1}. <Stars bind:sv={v.stars} disabled=true/></h2>
        <div class="cont">
            {@html v.velemeny}
        </div>
    </div>
{/each}
<style>
    h1 {
        padding-top: 14px;
    }
    div.velemeny {
        display: inline-block;
        border: solid 2px gray;
        border-radius: 16px;
        padding: 10px;
        margin-bottom: 20px;
        margin: 10px;
    }
    div.cont {
        padding: 10px;
        background-color: rgb(250, 230, 180);
        border-radius: 6px;
        border: solid 2px gray;
        box-shadow: 1px 1px 3px gray;
        text-align: left;
    }
</style>