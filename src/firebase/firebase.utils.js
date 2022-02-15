import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import config from "./firebase.config";

const firebase = initializeApp(config);

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
      console.log(error);
    });
};

export const signOutFromGoogle = () => signOut(auth);

export default firebase;
