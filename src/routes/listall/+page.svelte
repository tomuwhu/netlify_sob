<script>
    export let data
    import { browser } from '$app/environment'
    import { goto } from '$app/navigation'
    if (browser && data.user == null) goto('/login')
</script>
{#if data.user == null}
    <h3>Nincs bejelentkezve!</h3>
{:else}
    <h3>Bejelentkezve: <i>{data.user.name}</i></h3>
    <div class="fc">
    {#each data.alluser as user}
        <div class={data?.loggedinusers.includes(user.email) ? (user.email == data.user?.email ? 's1' : 's2') : 's3'}>
            <a target="_blank" href="{user.pfurl}">{user.name}</a>
        </div>
    {/each}
    </div>
{/if}
<style>
    i {
        color: rgb(97, 62, 62);
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
        padding-left:30px;
        padding-right:30px;
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
    :global(div.fc div a) {
        all: unset;
        cursor: pointer;
    }
</style>
