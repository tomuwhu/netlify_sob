<script>
    export let sv = 0
    export let disabled = false
    var nsv = sv
</script>
<button class=sc on:mouseleave={disabled ? () => {} : () => sv = nsv}>
{#each Array(5).fill() as _, i}
    <button class={disabled ? 'd': 'i'} on:mousemove={disabled ? () => {} : () => sv = i + 1} on:click={disabled ? () => {} : () => nsv = sv}>
    {#if sv > i}★{:else}☆{/if}
    </button>
{/each}
</button>
<style>
    .sc {
        background-color: rgb(101, 134, 117);
        margin-top: 20px;
        display: inline-block;
        padding-top: 0px;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 4px;
        border-radius: 20px;
        border: solid 3px gold;
        box-shadow: 0px 0px 5px black;
    }
    .i {
        all: unset;
        font-size: 25px;
        cursor: pointer;
        color:gold;
    }
    .d {
        all: unset;
        font-size: 20px;
        color:gold;
        padding: 4px;
    }
</style>
