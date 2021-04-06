import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
//your personal firebase app configuration
var firebaseConfig = {
  apiKey: ************************,
  authDomain: ************************,
  databaseURL:************************,
  projectId: ************************,
  storageBucket: ************************,
  messagingSenderId: ************************,
  appId: ************************
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
