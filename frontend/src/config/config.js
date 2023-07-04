// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBXGDcpneM6VgnIT9VfsES4TrgU7u62qjg',
  authDomain: 'quizzy-391409.firebaseapp.com',
  projectId: 'quizzy-391409',
  storageBucket: 'quizzy-391409.appspot.com',
  messagingSenderId: '754721185476',
  appId: '1:754721185476:web:eceab3ee3a39d796603391',
  measurementId: 'G-N3J2Y9GJZZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
