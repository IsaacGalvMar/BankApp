import { MongoClient } from 'mongodb'
import {} from 'jsonwebtoken'
import {readFileSync} from 'fs'

const url = 'mongodb://admin:br2Pvru6@localhost:27017';
const client = new MongoClient(url);

export async function getAllAccounts(){

}

export async function getAccountById(id) {
  
}

export async function getUserSecurityLevel(token){

  let cert = readFileSync("public.pem");
  verify(token, cert,(payload)=> {

  });

}



async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db("bank");
    const collection = db.collection('accounts');
  
  
    const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
    console.log('Inserted documents =>', insertResult);
    // the following code examples can be pasted here...
  
    return 'done.';
  }
  