import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


export const putDb = async (content) => {
 
  const jatesDb = await openDB('jate', 1);
  const tx = jatesDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ id:1, value: content});
  const result = await request;
  console.log('Data saved to the database', result.value);
};


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {

  const jatesDb = await openDB('jate', 1);
  const tx = jatesDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.get(1);
  const result = await request;
  console.log('result.value', result);
  return result?.value;


}

initdb();
