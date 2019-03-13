import { defaultState } from './defaultState';
import { connectDB } from './connect-db';
import { AsyncResource } from 'async_hooks';
import { Collection } from 'mongodb';

async function initializeDB() {
    let db = await connectDB();
    let user = await db.collection(`users`).findOne({id:"U1"});
    console.log("User?", user);

    if (!user) {
        for (let collectionName in defaultState) {
            let collection = db.collection(collectionName);
            await collection.insertMany(defaultState[collectionName]);
        }
    }
}

initializeDB();