// @ts-nocheck
import { usersCount,userFindByUserName,userValidatePassword, userStripField } from '$db/users.js'; // import usersCount, and userFindByUserName from the users DataBase

/**
 * 
 * @param string {cookies} 
 * @returns bool (loggedIn)
 */
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
        // data is the passed in form data from the server
        // data can be collected from the request in the form of request.formData()
        const data = await request.formData();
        // specific fields of the formData() can be acquired and collected using data.get('fieldName')
        let userName=data.get('uname');
        let passWord=data.get('upass');
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
            // console.log('Found The User :\t',theUser)
            // console.log(`Password ${passWord}`);
            let eq =await userValidatePassword(theUser['_id'],passWord)
            console.log(`Awaited Validation ${eq}`)
            if (eq) {
                // console.log(`Awaited Validation2 ${eq}`)
                theUser.err=false
                theUser.message=null
                cookies.set('Authorized',true,{httpOnly:true,maxAge:300,sameSite:'strict'})
            }else{
                // console.log(`Awaited Validation3 ${eq}`)
                theUser.err = true
                theUser.message="Error UserName/Password Incorrect"
            }
            
        }else{
            theUser.err=true
            theUser.message="Error UserName/PassWord Incorrect"
        }
        
        theUser['_id']=theUser['_id'].toString();
        const theUser2Send = userStripField(['password'],theUser) 
        console.log(theUser2Send);
        
        return theUser
    }
}