<script>
    export let loggedIn = false;
</script>

<div class="navparent">
    <nav>
        <a href="/">Home</a>
        <span>
            {#if loggedIn}
                <a href="/account/logout">LogOut</a>
            {:else}
                <a href="/account/login">LogIn</a>
            {/if}
            
            <a href="/about">About</a>
        </span>
        
    </nav>
    
</div>

<slot/>


<style>
    .navparent {
        position:relative;
        min-width: 100vw;
    }
    div.navparent > nav {
        /* min-width: 90vw; */
        position:fixed;
        display: flex;
        justify-content: space-between;
        background-color: lightblue;
        padding: 10px 10px;
        border-radius: 10px;
        /* margin: -5px 5px 10px 0px; */
        top:0px;
        left:1%;
        width:97%;
        border-color: lavenderblush;
        border-width: 0.1px;
        border-style: solid;
        box-shadow: 1px 2px gray;
    }
</style>