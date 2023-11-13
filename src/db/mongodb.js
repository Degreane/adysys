import { MongoClient } from "mongodb";

import { MONGO_URL } from "$env/static/private";
const client = new MongoClient( MONGO_URL);

export function connect_to_db() {
    console.log(`Starting MongoDB Connection to ${MONGO_URL}`);
    //client.connect().then((cl)=>{
    //    return cl.db("adysys")
    //});
    //return client_db.db("adysys")
    return client.connect();
}

export default client.db("adysys");
