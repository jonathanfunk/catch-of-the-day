import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAI3w6mpi0GhAnZQMbCm2t8x44_B9lKCLk",
  authDomain: "catch-of-the-day-jonatha-943e7.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-jonatha-943e7.firebaseio.com",
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };
export default base;