<script>
    export let data
</script>
<div class="menu">
    <a href="/">Kezdőoldal</a>
    {#if data.user?.email}
    <a href="/tematikak">Tematikák</a>
    <a href="/login">Felhasználói adatlap</a>
    {:else}
    <a href="/reg">Regisztráció</a>
    <a href="/login">Bejelentkezés</a>
    {/if}
</div>
<slot/>
<style>
    :global(body) {
        background-color: #e9e8cd;
        text-align: center;
        color: rgb(31, 82, 64);
    }
    div.menu {
        background-color: black ;
    }
    div.menu a {
        all: unset;
        background-color: black;
        color: rgb(173, 208, 196);
        padding: 5px;
        margin: 0px;
        cursor: pointer;
        display: inline-block;
    }
    div.menu a:hover {
        text-shadow: 1px 1px 4px gray;
        color: rgb(255, 255, 240);
    }
    div.menu a:active {
        color: rgb(106, 238, 132);
    }
    div.menu a:visited {
        color: rgb(133, 177, 213);
    }
</style>