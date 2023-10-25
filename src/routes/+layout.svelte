<script lang="js">
    import image from "$assets/images/AdySys.png"
    let loggedIn = false;
</script>

<header>
  <nav class="navbar space-between"   aria-label="site navigation"> 
      <div class="navbar-brand ">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a class="navbar-item" href="#">
            <img src={image}  height="64" alt={image}>
          </a>
      </div>
      <!-- <div class="spacer vcenter">L</div>
      <div class="inline-block vcenter">block inside spacer</div>
      <div class="spacer  vcenter">R</div> -->
    <ul class="navbar space-between">
      <li class="navbar-element">
        {#if loggedIn}
        <a href="/account/logout">LogOut</a>
        {:else}
        <a href="/account/login">Login</a>
        {/if}
      </li>
      <li class="navbar-element">
        <a href="/about">About</a>
      </li>
    </ul>      
  </nav>
</header>

<slot/>


<style>
  header {
    background-color:  rgba(173, 216, 230,1);
  }

  header .navbar {
    padding:5px 10px;
    display:flex;
  }
  .navbar-brand {
    flex-grow: 0;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 1px 1px rgba(220,220,220,1), 0px 0px 2px 2px rgb(96 64 128);
  }
  .space-between {
    justify-content: space-between;
  }
  li.navbar-element {
    list-style-type: none;
    padding:0px 5px;
  }

</style>