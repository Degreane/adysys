import { connect_to_db } from "$db/mongodb";


// connect_to_db() actually connects to the database provided that the database is already running
connect_to_db().then(function(){
    console.log("Connected To MongoDB");
}).catch(function(e){
    console.log(e)
})