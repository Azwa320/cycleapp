import firebase from 'firebase'
require("@firebase/firestore")


 //Add configuration here
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyCk82PaPBuhXatQzuCrqoAapxJS76AKdX4",
  authDomain: "cycleapp-87ec1.firebaseapp.com",
  projectId: "cycleapp-87ec1",
  storageBucket: "cycleapp-87ec1.appspot.com",
  messagingSenderId: "975378241109",
  appId: "1:975378241109:web:84ab76c7a50158b9fd66dc"

  
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

