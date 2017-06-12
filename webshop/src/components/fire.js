import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA9MPqB2yn2TZWAprYguFmg9gLCUiog31s",
  authDomain: "sortingshop.firebaseapp.com",
  databaseURL: "https://sortingshop.firebaseio.com",
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;


// in component: import database from './database';
/*database.ref('/').once('value', snap => {
  const invite = snap.val();
});*/
