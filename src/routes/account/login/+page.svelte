<script>
	import { enhance } from '$app/forms';

    let loggedIn
    export let form;
    let username_Valid = false
    let password_Valid = false
    $: form_Valid = username_Valid && password_Valid
</script>


<div class="container">
    
    <form use:enhance method="post" action="?/login" class="{form_Valid?'valid':'invalid'}">
        <label>
            <span>UserName: </span><input class="{username_Valid?'valid':'invalid'}" required type="text" value={form?.uname || ''} autocomplete="off" id="uname" name="uname" on:input={(e)=>{if (e.target?.value?.trim().length > 5){
                username_Valid=true
            }else{
                username_Valid=false
            }}}/>
        </label>
        <br>
        <label>
            <span>PassWord: </span><input class="{password_Valid?'valid':'invalid'}" required type="password" autocomplete="off" id="upass" name="upass" on:input={(e)=>{if (e.target?.value?.trim().length > 5){
                password_Valid=true
            }else{
                password_Valid=false
            }}}/>
        </label>
        <hr>
        <input type="submit" value="Submit"/>
        {#if form?.err} 
            <div>{form.message}</div>
        {/if}
    </form>
    
</div>

<style>
    form {
        width: 50%;
        text-align: center;
        background-color: lightblue;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 0px 20px 28px inset lightsteelblue,0px 0px 19px 2px darkblue;
    }
    form.invalid,input.invalid{
        border-color: red;
        border-width:0.5px;
        border-style: solid;
    }
    form.valid,input.valid{
        border-color:lightblue;
    }
    .container {
        display: flex;
        justify-content: center;
        position:fixed;
        top:20%;
        left:25%;
        width:50%;

    }
    @media only screen and (max-width : 600px) {
        .container {
            width:100%;
            padding:0px;
            left:0px;
            top:0px;
            margin-top:10%;
        }
        form {
            width:100%;
            padding:10px;
        }
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
