<script>
    export let data
</script>
{#if data.user == null}
    <h3>Nincs bejelentkezve!</h3>
{:else}
    <h3>Bejelentkezve: {data.user.name}</h3>
    <div class="fc">
    {#each data.alluser as user}
        <div class={data?.loggedinusers.includes(user.email) ? (user.email == data.user?.email ? 's1' : 's2') : 's3'}>
            <a target="_blank" href="{user.pfurl}">{user.name}</a>
        </div>
    {/each}
    </div>
{/if}
<style>
    div.fc {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    :global(div.fc div) {
        display: inline-block;
        background-color: aquamarine;
        padding: 10px;
        margin: 10px;
        border-radius: 16px;
        border: solid 2px green;
        box-shadow: 1px 1px 3px black;
    }
    :global(div.fc div.s1) {
        background-color: rgb(221, 190, 155);
    }
    :global(div.fc div.s1:hover) {
        background-color: rgb(255, 189, 189);
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
        background-color: rgb(179, 191, 72);
    }
    :global(div.fc div.s3:hover) {
        background-color: rgb(155, 167, 50);
    }
    :global(div.fc div a) {
        all: unset;
        cursor: pointer;
    }
</style>
