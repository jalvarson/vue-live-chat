import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCM5TMvxHYfIqYzkAD8oWIkht90Vh4hr4A',
  authDomain: 'vue-live-chat-96ba7.firebaseapp.com',
  projectId: 'vue-live-chat-96ba7',
  storageBucket: 'vue-live-chat-96ba7.appspot.com',
  messagingSenderId: '657017650493',
  appId: '1:657017650493:web:bab0c42071f6d7f9351954',
}

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }
