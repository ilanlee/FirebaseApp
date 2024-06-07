import Dexie from 'dexie';

export const db = new Dexie('your_database_name');

db.version(1).stores({
  user: 'id++, jwt, uid' // Define the 'user' table with 'id', 'jwt', and 'uid' columns
});