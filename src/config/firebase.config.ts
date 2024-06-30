import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBOVcrJj1frMD58PLhreHvTZiu0auGM06o',
  authDomain: 'club-ecommerce-c73ce.firebaseapp.com',
  projectId: 'club-ecommerce-c73ce',
  storageBucket: 'club-ecommerce-c73ce.appspot.com',
  messagingSenderId: '212033752913',
  appId: '1:212033752913:web:e0f8dcf47b4bd057cb8d70'
}



export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
