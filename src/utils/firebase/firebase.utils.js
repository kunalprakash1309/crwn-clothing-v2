import { initializeApp } from 'firebase/app'
import { 
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore' 

const firebaseConfig = {
  apiKey: "AIzaSyA7XREFGDNJMC0j-JhYQE1jU2zgINs8g10",
  authDomain: "crwn-clothing-97348.firebaseapp.com",
  projectId: "crwn-clothing-97348",
  storageBucket: "crwn-clothing-97348.appspot.com",
  messagingSenderId: "13539972814",
  appId: "1:13539972814:web:b1324215ad4f451b44a29f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// it provide everytime fresh class to start
const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  // Gets a DocumentReference instance that refers to the document at the specified absolute path.
  // address
  const userDocRef = doc(db, 'users', userAuth.uid)

  //Reads the document referred to by this DocumentReference
  // data
  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()){
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        photoURL,
        createdAt
      })
    } catch(err) {
      console.log('error creating the user', err.message)
    }
  }

  return userDocRef
}