import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyASL7eir0GVu6TLWjrcfsLS023mTGJc2SE",
  authDomain: "theacademic-writing.firebaseapp.com",
  databaseURL: "https://theacademic-writing.firebaseio.com",
  projectId: "theacademic-writing",
  storageBucket: "theacademic-writing.appspot.com",
  messagingSenderId: "386934141623",
  appId: "1:386934141623:web:af9a6d3b9e9f2a142ed332",
  measurementId: "G-7HZB4XLXBL"
};
firebase.initializeApp(config);
firebase.analytics();

export default firebase;