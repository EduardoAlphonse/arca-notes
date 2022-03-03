import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDKlURMl6kI-boG3OOfY0etSsj26IJBev4',
  authDomain: 'arca-notes.firebaseapp.com',
  databaseURL: 'https://arca-notes-default-rtdb.firebaseio.com',
  projectId: 'arca-notes',
  storageBucket: 'arca-notes.appspot.com',
  messagingSenderId: '85921792785',
  appId: '1:85921792785:web:92e2f404792143525f42b0',
};

export const app = initializeApp(firebaseConfig);
