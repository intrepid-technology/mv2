import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDGty6PKaQo_J4JT22y3eaxPCpzCJzFxqE",
  authDomain: "intrepid-market-2021.firebaseapp.com",
  projectId: "intrepid-market-2021",
  storageBucket: "intrepid-market-2021.appspot.com",
  messagingSenderId: "433679898470",
  appId: "1:433679898470:web:ce51f54b7c5ed7c9a35aa7",
  measurementId: "G-L9ZR546JG5",
};

export const firebaseApp = initializeApp(firebaseConfig);
