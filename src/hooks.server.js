import { connect_to_db } from "$db/mongodb";
import { countUsers,insertUser } from "$db/users"
import { SALTS } from "$env/static/private";
import moment from "moment"
import bcrypt from "bcrypt"

// connect_to_db() actually connects to the database provided that the database is already running
connect_to_db().then(async function(){
    console.log("Connected To MongoDB");
    if (await countUsers({'uname':'Admin'}) == 0 ){
    // if (await users.countDocuments({'uname':'Admin'}) == 0 ) {
        const salt = await bcrypt.genSalt(Number(SALTS))
        const thePassword=await bcrypt.hash('NimdaPass',salt)
        const theUser = {
            'name': 'System Admin',
            'info': 'Admin User Created By The System',
            'uname': 'Admin',
            'password':thePassword,
            'createdAt': moment.now()
        }
        insertUser(theUser).then((doc)=>{
            console.log(`The Document ${doc.insertedId} Has been successfully Inserted In The Database`)
        }).catch((e)=>{
            console.log(`Could Not Insert Document For ${e}`)
        })
    }
    
}).catch(function(e){
    console.log(e)
})