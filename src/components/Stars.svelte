<script>
    export let sv = 0
    var nsv = sv
</script>
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:mouseleave={() => sv = nsv}>
<!-- svelte-ignore a11y-no-static-element-interactions -->
{#each [1,2,3,4,5] as _, i}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<i on:mousemove={() => sv = i + 1} on:click={() => nsv = sv}>
{#if sv > i}★{:else}☆{/if}
</i>
{/each}
</div>
<style>
    i {
        all: unset;
        font-size: 35px;
        cursor: pointer;
    }
</style>
