import db from '$db/mongodb';
import moment from 'moment';

export const users = db.collection('users');

export const userFindByUserName = async (/** @type {String} */ uname) =>{
    const theUser=await users.findOne({'uname':uname}) 
    return theUser
}
export const usersCount =  async (/** @type {Object} */ filter) => {
    //console.debug(filter)
    const count=await users.countDocuments(filter)
    return count
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