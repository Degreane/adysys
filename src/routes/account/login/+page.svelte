<script>
    let loggedIn
</script>

<div class="container">
    <form method="post" action="?/login">
        <label>
            <span>UserName: </span><input type="text" autocomplete="off" id="uname" name="uname"/>
        </label>
        <br>
        <label>
            <span>PassWord: </span><input type="password" autocomplete="off" id="upass" name="upass"/>
        </label>
        <hr>
        <input type="submit" value="Submit"/>
    
    </form>
    
</div>

<style>
    form {
        max-width: 20em;
        text-align: center;
        background-color: lightblue;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 0px 20px 28px inset lightsteelblue;
    }
    .container {
        display: flex;
        justify-content: center;
        margin-top: 50px;

    }
    input {
        padding: 5px;
        margin-left: 10px;
        border-radius: 5px;
        text-align: center;
    }
    label {
        display: flex;
        justify-content: space-between;
        vertical-align: middle;
        
    }
    label > span {
        display:inline-block;
        
    }
</style>