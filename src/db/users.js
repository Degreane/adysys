import db from '$db/mongodb';
import moment from 'moment';

export const users = db.collection('users');

export const findUserByUname = async (/** @type {String} */ uname) =>{
    const theUsers=await users.find({'uname':uname}) 
    return theUsers
}
export const countUsers =  async (/** @type {Object} */ filter) => {
    //console.debug(filter)
    const count=await users.countDocuments(filter)
    return count
}

export const insertUser = async (/** @type {Object} */ doc) => {
    let theUser = {...doc}
    if (!Object.hasOwn(theUser,'createdAt')) {
        const createdAt ={'createdAt':moment.now()}
        theUser={...theUser,...createdAt}
    }
   const inserted = await users.insertOne(theUser)
   return inserted
}