import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAPwAkdOKhJj680NZi_5D4y2cfGeMuWmL0",
  authDomain: "ninja-chat-e8a95.firebaseapp.com",
  databaseURL: "https://ninja-chat-e8a95.firebaseio.com",
  projectId: "ninja-chat-e8a95",
  storageBucket: "ninja-chat-e8a95.appspot.com",
  messagingSenderId: "953583253135",
  appId: "1:953583253135:web:ee8caca7d5f4d985"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({timestampsInSnapshots: true})

export default firebaseApp.firestore()
