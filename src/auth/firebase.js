import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  onSnapshot,
  deleteDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";

//* Your web app's Firebase configuration
// TODO: Replace the following with your app's Firebase project configuration
//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate, displayName) => {
  //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    //? kullanıcı profilini güncellemek için kullanılan firebase metodu
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    navigate("/");

    // console.log(userCredential);
  } catch (error) {
    // alert(error.message);
  }
};

//* https://console.firebase.google.com/
//* => Authentication => sign-in-method => enable Email/password
//! Email/password ile girişi enable yap
export const signIn = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate(-1);
  } catch (error) {
    // alert(error.message);
  }
};

export const userObserver = (setCurrentUser) => {
  //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, displayName, photoURL, uid } = user;
      setCurrentUser({ email, displayName, photoURL, uid });
      console.log(user.uid);
    } else {
      setCurrentUser(false);
      console.log("user signed out");
    }
  });
};

export const logOut = () => {
  signOut(auth);
};

//* https://console.firebase.google.com/
//* => Authentication => sign-in-method => enable Google
//! Google ile girişi enable yap
//* => Authentication => settings => Authorized domains => add domain
//! Projeyi deploy ettikten sonra google sign-in çalışması için domain listesine deploy linkini ekle
export const signUpWithGoogle = (navigate) => {
  const provider = new GoogleAuthProvider();
  //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
  signInWithPopup(auth, provider)
    .then((result) => {
      // console.log(result);
      navigate("/");
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
};

export const forgotPassword = (email) => {
  //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // alert("Please check your mail box!");
    })
    .catch((err) => {
      // alert(err.message);
      // ..
    });
};

export const db = getFirestore(app);
const productsRef = collection(db, "products");
const docRef = doc(db, "/products/teg2yKiQdIOPy79cEEdf");
export const useProductsListener = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    return onSnapshot(productsRef, (snapshot) => {
      const docs = snapshot.docs?.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...data };
      });
      console.log(docs);
      setProducts(docs);
    });
  }, []);
  return products;
};

export const deleteProduct = (id) => {
  deleteDoc(doc(db, "products", id));
};

export const addBlog = (veri) => {
  const uid = auth.currentUser?.uid;
  const displayName = auth.currentUser?.displayName;
  const createdAt =
    new Date().getFullYear() +
    "-" +
    (new Date().getMonth() + 1) +
    "-" +
    new Date().getDate();
  if (!uid) return;
  addDoc(productsRef, {
    title: veri.title,
    paragraph: veri.paragraph,
    uid: uid,
    displayName: displayName,
    createdAt: createdAt,
    cevap: veri.cevap,
  });
};

export const updateBlog = (veri) => {
  const docRef = doc(db, "products", veri.id);

  updateDoc(docRef, veri);
  console.log("veri", veri);
};
