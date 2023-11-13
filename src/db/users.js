// @ts-nocheck
import db from '$db/mongodb';
import moment from 'moment';
import { ObjectId } from 'mongodb';
import { SALTS } from "$env/static/private";
import bcrypt from "bcrypt"

export const users = db.collection('users');

export const userFindByUserName = async (/** @type {String} */ uname) =>{
    const theUser=await users.findOne({'uname':uname})
    // console.log("Found User in DB\t",theUser);
    return theUser
}

export const userValidatePassword = async ( id,upass) =>{
    // console.log(`The ID is ${id}`)
    const theUser=await users.findOne({'_id':id})
    // const salt=await bcrypt.genSalt(Number(SALTS));
    // const thePassword=await bcrypt.hash(upass,salt);
    // console.log("The User In Validation is\t", theUser);
    // console.log(`ThePassWord   ${thePassword}`)
    console.log(`The User Pass ${theUser['password']}`)
    return await bcrypt.compare(upass,theUser['password'])
}
export const usersCount =  async (/** @type {Object} */ filter) => {
    //console.debug(filter)
    const count=await users.countDocuments(filter)
    // console.log("Found Count in DB Of \n",count);
    return count
}
export const userStripField = (fields,obj) =>{
    if (Array.isArray(fields) && fields !== null) {
        let obj2return={}
        Object.keys(obj).forEach((val)=>{
            if (fields.indexOf(val) == -1) {
                console.log(`${val} is not in obj`);
                obj2return[val]=obj[val]
            }
        })
        return obj2return
    }else {
        return obj
    }
    
}
export const userInsert = async (/** @type {Object} */ doc) => {
    let theUser = {...doc}
    if (!Object.hasOwn(theUser,'createdAt')) {
        const createdAt ={'createdAt':moment.now()}
        theUser={...theUser,...createdAt}
    }
   const inserted = await users.insertOne(theUser)
   return inserted
}