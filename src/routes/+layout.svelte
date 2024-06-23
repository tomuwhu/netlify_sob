<script>
    import { page } from '$app/stores'
    $: currentRoute = $page.url.pathname
    export let data
    const menu = data.user?.email ?
        [   
            {name: 'Kezdőoldal', href: '/'}, 
            {name: 'Felhasználók portfóliói', href: '/listall'},
            {name: 'Portfólió toplista', href: '/toplist'}, 
            {name: 'Tárgyi tematikák, követelmények', href: '/tematikak'}, 
            {name: 'Felhasználói adatlap', href: '/login'}
        ] : [   
            {name: 'Kezdőoldal', href: '/'}, 
            {name: 'Regisztráció', href: '/reg2'}, 
            {name: 'Bejelentkezés', href: '/login'}
        ]
</script>
<div class="menu">
    {#each menu as item}
        <a class={currentRoute === item.href ? 'selected' : 'norm'} href={item.href}>{item.name}</a>
    {/each}
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
        text-align: right;
    }
    div.menu a {
        all: unset;
        padding: 2px;
        margin: 5px;
        padding-left: 15px;
        padding-right: 15px;
    }
    div.menu a.norm {
        background-color: black;
        color: rgb(213, 236, 228);
        cursor: pointer;
        display: inline-block;
    }
    div.menu a.selected {
        border-radius: 10px;
        color: rgb(8, 36, 34);
        background-color: #e9e8cd;
        text-shadow: 0px 0px 2px gray;
    }
    div.menu a.norm:visited {
        color: rgb(218, 222, 198);
    }
    div.menu a.norm:hover {
        border-radius: 10px;
        color: rgb(195, 253, 249);
        background-color: #46463c;
        text-shadow: 0px 0px 2px gray;
    }
    div.menu a.norm:active {
        border-radius: 10px;
        color: rgb(126, 15, 3);
        background-color: #ffffa7;
        text-shadow: 0px 0px 2px gray;
    }
</style>