import firebase from 'firebase';

const firebaseConfig = {
apiKey: "AIzaSyA6CnVckhwojUs3s_tVRXbVcFsyz_Y67qM",
  authDomain: "chat-da-manu.firebaseapp.com",
  databaseURL: "https://chat-da-manu-default-rtdb.firebaseio.com",
  projectId: "chat-da-manu",
  storageBucket: "chat-da-manu.appspot.com",
  messagingSenderId: "934351589",
  appId: "1:934351589:web:29ab14ba9f6c37d26fba0c"
};

firebase.initializeApp(firebaseConfig)
export default firebase.database()