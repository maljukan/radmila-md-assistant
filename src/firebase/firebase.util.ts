import firebase, { firestore } from 'firebase';
import 'firebase/auth';
import { Patient } from '../model/Patient';

const FIREBASE_CONFIG = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(FIREBASE_CONFIG);

export const Auth = firebase.auth();
export const Firestore = firebase.firestore();

const authProvider = new firebase.auth.GoogleAuthProvider();
authProvider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => Auth.signInWithPopup(authProvider);

export const dateToFirestoreTimestamp = (date: Date) => firestore.Timestamp.fromDate(date);

export default firebase;
