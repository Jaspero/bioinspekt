import admin from 'firebase-admin';
import {join} from 'path';

let environment: any;

if (environment === 'd') {
	environment = {
		projectId: 'jp-bioinspekt'
	};
} else {
	environment = {
		credential: admin.credential.cert(join(process.cwd(), 'key.json')),
		databaseURL: `https://jp-bioinspekt.firebaseio.com`
	};
}

admin.initializeApp(environment);

export const fs = admin.firestore();