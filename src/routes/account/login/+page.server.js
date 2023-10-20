// @ts-nocheck
import { usersCount,userFindByUserName } from '$db/users.js';
export function load({ cookies }) {
	let loggedIn=cookies.get('loggedIn');
    return loggedIn;
}

export const actions ={
    login: async ({cookies,request}) =>{
        let theUser   = {
            err:false,
            message:null,
            uname:null
        }
        const data = await request.formData();
        let userName=data.get('uname');
        let passWord=data.get('upass')
        theUser.uname=userName;
        if (userName && passWord) {
            userName =userName.toString();
            passWord = passWord.toString();
        }else{
            
            theUser.err=true
            theUser.message="Unknown Error"
            return theUser
        }
        /**
         * upon login we should check 
         * 1- the user if exists
         */
        if (await usersCount({ 'uname': userName }) == 1) {
            theUser = {...theUser,...await userFindByUserName(userName)}
            console.log('Found The User :\t',theUser)
        }
        
        console.log(data.get('uname'));
    }
}