<script>
    export let data
    import { browser } from '$app/environment'
    import { goto } from '$app/navigation'
    import Stars from '$components/Stars.svelte'
    if (browser && data.user == null) goto('/login')
    var vto = null
</script>
<h1 class='pl'>Portfóliók listája</h1>
{#if data.user == null}
    <h3>Nincs bejelentkezve!</h3>
{:else}
    <h3>Bejelentkezve: <i>{data.user.name}</i></h3>
    <div class="fc">
    {#each data.alluser as user}
        <div class={data?.loggedinusers.includes(user.email) ? (user.email == data.user?.email ? 's1' : 's2') : 's3'}>
            <span>{user.email != data.user?.email ? user.name : 'Saját portfólióm'}</span> <a title='Megnéz' class="view" target="_blank" href="{user.pfurl}">👓</a>
            {#if user.email != data.user?.email}
            <button title='Vélemény írása' on:click={() => {
                if (vto?.email == user.email) 
                    vto = null
                else 
                    vto = user
            }}>📝</button>
            {/if}
        </div>
    {/each}
    </div>
{/if}
{#if vto != null}
    <div class=vto>
        <form action="?/insert" method="POST">
            <span class=x>Vélemény írása <i>{vto?.name}</i> részére:</span><br>
            <input type=hidden name=email value={vto.email}>
            <textarea name=vto placeholder=Vélemény></textarea>
            <br>
            <Stars sv=3/>
            <br>
            <input type=submit value="Vélemény rögzítése">
        </form>

    </div>
{/if}
<style>
    span.x {
        width: 300px;
        display: inline-block;
        padding: 6px;
        background-color: azure;
        border-radius: 6px;
        border: solid 2px gray;
        margin: 3px
    }
    .pl {
        padding-top: 20px;
    }
    i {
        color: rgb(97, 62, 62);
        text-shadow: 1px 1px 3px gray;
    }
    h3 {
        text-shadow: 1px 1px 3px gray;
    }
    div.fc {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    :global(div.fc div) {
        display: inline-block;
        background-color: aquamarine;
        padding: 5px;
        margin: 10px;
        border-radius: 7px;
        border: solid 2px rgb(107, 138, 119);
        box-shadow: 1px 1px 3px rgb(41, 36, 36);
        text-shadow: 1px 1px 3px gray;
        white-space: nowrap;
        
    }
    :global(div.fc div.s1) {
        background-color: rgb(251, 242, 232);
        border:solid 2px rgb(139, 163, 197);
    }
    :global(div.fc div.s1:hover) {
        background-color: rgb(238, 227, 227);
        border:solid 2px rgb(128, 86, 86);
    }
    :global(div.fc div.s2) {
        background-color: rgb(215, 188, 90);
        color:rgb(165, 89, 14);
        text-shadow: 1px 1px 3px gray;
    }
    :global(div.fc div.s2:hover) {
        background-color: rgb(241, 224, 163);
        color:rgb(165, 89, 14);
        text-shadow: 1px 1px 3px gray;
    }
    :global(div.fc div.s3) {
        background-color: rgb(209, 213, 173);
    }
    :global(div.fc div.s3:hover) {
        background-color: rgb(236, 244, 170);
    }
    :global(a.view, button) {
        all: unset;
        display: inline-block;
        border: solid 1px rgb(214, 183, 183);
        border-radius: 6px;
        cursor: pointer;
        padding: 4px;
        background-color: antiquewhite;
    }
    :global(a.view:hover, button:hover) {
        border: solid 1px rgb(119, 22, 22);
    }
    :global(div.fc div span) {
        display: inline-block;
        padding-right: 11px;
        padding-left: 18px;
    }
    :global(textarea) {
        width: 300px;
        height: 100px;
        border-radius: 10px;
        background-color: rgb(230, 242, 207);
        box-shadow: 1px 1px 3px inset rgb(119, 22, 22);
        padding: 10px;
    }
</style>
