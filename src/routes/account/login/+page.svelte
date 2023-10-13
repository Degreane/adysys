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
        width: 50%;
        text-align: center;
        background-color: lightblue;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 0px 20px 28px inset lightsteelblue;
    }
    .container {
        display: flex;
        justify-content: center;
        position:fixed;
        top:20%;
        left:25%;
        width:50%;

    }
    input {
        width:90%;
        padding: 5px;
        margin-left: 10px;
        border-radius: 10px;
        border-color:teal;
        text-align: center;
        border-style: solid;
        border-width: 1px;
    }
    input:focus {
        box-shadow:0px 0px 5px 2px inset lightsteelblue,0px 0px 5px 2px  gray;
    }
    input[type="submit"] {
        width:10em;
        padding:10px;
        border-color:lightblue;
        border-radius:10px;
        background-color:teal;
        opacity:0.5;
        transition: 200ms;

    }
    input[type="submit"]:hover {
        opacity:0.8;
        box-shadow:0px 0px 5px 2px inset lightsteelblue,0px 0px 5px 2px  gray;
        font-weight: bold;
    }
    label {
        display: flex;
        justify-content: space-around;
        vertical-align: middle;
        
    }
    label > span {
        display:inline-block;
        
    }
    hr {
        /* height:5px; */
        border-radius:5px;
        border-width:1px;
        box-shadow:1px 1px 2px 1px gray;
    }
</style>