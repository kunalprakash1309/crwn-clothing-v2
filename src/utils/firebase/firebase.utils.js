import { initializeApp } from 'firebase/app'
import { 
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore' 

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
const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth();


export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)


export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db)

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log('done')
}

// for fetching collections from our database
export const getCategoriesAndDocuments = async (collectionKey) => {
  const collectionRef = collection(db, collectionKey);
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)

  return querySnapshot.docs.map((doc) => doc.data())
}


export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {

  if(!userAuth) return;

  // Gets a DocumentReference instance that refers to the document at the specified absolute path.
  // userDocRef = address of user not value of user(like pointer)
  const userDocRef = doc(db, 'users', userAuth.uid)

  //Reads the document referred to by this DocumentReference
  // userSnapshot = data of user
  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()){
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        photoURL,
        ...additionalInformation,
      })
    } catch(err) {
      console.log('error creating the user', err.message)
    }
  }

  return userSnapshot
}


export const createAuthUserWithEmailAndPassword = async(email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}


export const signInAuthUserWithEmailAndPassword = async(email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
}


export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => 
  onAuthStateChanged(auth, callback)

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth)
      },
      reject
    )
  })
}