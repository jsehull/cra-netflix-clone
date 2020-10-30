import Firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import { seedDatabase } from '../seed'

const config = {
  apiKey: 'AIzaSyCVh2Y2gkR1kXaARrfTqpDZRZrlmVWnBoA',
  authDomain: 'netflix-clone-f4489.firebaseapp.com',
  databaseURL: 'https://netflix-clone-f4489.firebaseio.com',
  projectId: 'netflix-clone-f4489',
  storageBucket: 'netflix-clone-f4489.appspot.com',
  messagingSenderId: '1075578387653',
  appId: '1:1075578387653:web:4f52062c09f9155a34c4ac'
}

const firebase = Firebase.initializeApp(config)

// DO NOT UNCOMMENT === DUPLICATE DATA
// seedDatabase(firebase)

export { firebase }
