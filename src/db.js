import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyCqSMIkgWZ2vEXJeM_zvD3Psqi6NLRhA4U",
    authDomain: "bijou-bar.firebaseapp.com",
    projectId: "bijou-bar",
    storageBucket: "bijou-bar.appspot.com",
    messagingSenderId: "1095312023795",
    appId: "1:1095312023795:web:f4b69f040b6757a26e5786"
    })
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })