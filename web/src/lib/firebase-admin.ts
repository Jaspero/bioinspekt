import admin from 'firebase-admin';
import * as key from '../../key.json';

admin.initializeApp({
  credential: admin.credential.cert(key as admin.ServiceAccount),
  databaseURL: `https://jp-bioinspekt.firebaseio.com`
});

export const fs = admin.firestore();