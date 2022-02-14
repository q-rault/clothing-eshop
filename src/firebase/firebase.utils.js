import { initializeApp } from "firebase/app";
// import { getFireStore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const config = {
  apiKey: "AIzaSyBqBQGo7Di0tvk9IONqJmb0g569j3K5gWE",
  authDomain: "clothing-eshop-42b87.firebaseapp.com",
  projectId: "clothing-eshop-42b87",
  storageBucket: "clothing-eshop-42b87.appspot.com",
  messagingSenderId: "179282632962",
  appId: "1:179282632962:web:59b1b29aa5d670703c621b",
  measurementId: "G-445GM38ZJV",
};

const firebase = initializeApp(config);

// export const db = getFireStore(firebase);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  provider.setCustomParameters({ prompt: "select_account" });

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //   const credential = GoogleAuthProvider.credentialFromResult(result);
      //   const token = credential.accessToken;
      //   // The signed-in user info.
      //   const user = result.user;
      //   // ...
    })
    .catch((error) => {
      //   // Handle Errors here.
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   // The email of the user's account used.
      //   const email = error.email;
      //   // The AuthCredential type that was used.
      //   const credential = GoogleAuthProvider.credentialFromError(error);
      //   // ...
    });
};

// export const auth = firebase.auth();
// export const firestore = firebase.auth.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
