import Firebase from 'firebase';

// init Firebase
const config = {
  apiKey: 'AIzaSyCIiCO898vH6LxeQ7_VeEUWtHj10btKU9g',
  authDomain: 'rotfuks-43de4.firebaseapp.com',
  databaseURL: 'https://rotfuks-43de4.firebaseio.com',
  projectId: 'rotfuks-43de4',
  storageBucket: 'rotfuks-43de4.appspot.com',
  messagingSenderId: '589376614778',
};
const firebase = Firebase.initializeApp(config);
export default firebase;
