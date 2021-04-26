
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBVmV4XbMdGKO_1eUKwESumRl3v0CR-MY8",
  authDomain: "e-comm-7927b.firebaseapp.com",
  projectId: "e-comm-7927b",
  storageBucket: "e-comm-7927b.appspot.com",
  messagingSenderId: "673907649976",
  appId: "1:673907649976:web:cbffc589786f862dcab34d",
  measurementId: "G-RMFWXFJ8E6"
};


  var fireDb= firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();

  