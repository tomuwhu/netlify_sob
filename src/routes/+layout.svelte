<div class="menu">
    <a href="/">Kezdőoldal</a>
    <a href="/tematikak">Tematikák</a>
</div>
<slot/>
<style>
    :global(body) {
        background-color: #e9e8cd;
        text-align: center;
        color: rgb(11, 55, 40);
    }
    div.menu a {
        all: unset;
        color: rgb(11, 55, 40);
        padding: 10px;
        cursor: pointer;
    }
    div.menu a:hover {
        text-shadow: 1px 1px 4px gray;
        color: rgb(122, 123, 25);
    }
    div.menu a:active {
        color: rgb(11, 35, 55);
    }
    div.menu a:visited {
        color: rgb(4, 53, 93);
    }
</style>