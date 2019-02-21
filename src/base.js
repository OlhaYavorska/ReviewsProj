import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE__KEY,
    authDomain: process.env.REACT_APP_FIREBASE__DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE__DATABASE,
    projectId: process.env.REACT_APP_FIREBASE__PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE__STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE__SENDER_ID

};

const app = firebase.initializeApp(config)
const database = Rebase.createClass(app.database())
const auth=app.auth();


export { app, database,auth }