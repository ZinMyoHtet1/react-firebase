import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import * as FireStore from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDxLJknnbgYPHdSeMhRv7mCxJ3xsUi2s1c",
  authDomain: "react-firebase-f7628.firebaseapp.com",
  projectId: "react-firebase-f7628",
  storageBucket: "react-firebase-f7628.appspot.com",
  messagingSenderId: "73421951358",
  appId: "1:73421951358:web:ccc7a2dae541cb6524632f",
  measurementId: "G-25K791LFCJ",
};

const app = initializeApp(firebaseConfig);
const db = FireStore.getFirestore(app);
const itemCollections = FireStore.collection(db, "items");

export async function getItemList() {
  try {
    const itemList = await FireStore.getDocs(itemCollections)
      .then((itemSnap) => {
        console.log("itemSnap", itemSnap);
        return itemSnap.docs.map((doc) => doc.data());
      })
      .catch((err) => {
        throw err;
      });
    return itemList;
  } catch (error) {
    console.log("error", error);
  }
}

export async function uploadItem() {
  //   await updateDoc({ name: "pencil", price: 5, stock: 7 })
  //     .then((res) => console.log("res", res))
  //     .catch((err) => console.log("err", err));
  //   console.log(FireStore);
  //   const doc = await FireStore.addDoc(itemCollections, {
  //     name: "ruler",
  //     price: 8,
  //     stock: 7,
  //   });
  //   console.log(doc);
}

export default db;
