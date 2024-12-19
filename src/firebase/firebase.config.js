// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCaHhxqNdmJQKlXWw5i7iVeVIrpfqRxW7Q',
  authDomain: 'movie-portal-3bd0f.firebaseapp.com',
  projectId: 'movie-portal-3bd0f',
  storageBucket: 'movie-portal-3bd0f.firebasestorage.app',
  messagingSenderId: '1031788707707',
  appId: '1:1031788707707:web:23e8f551c0e31f0c0947de',
  measurementId: 'G-EB087JH37H',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
