"use strict";

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const _firebaseConfig = {
apiKey: "AIzaSyAeJRRsnbD9MxTN5ENFDa4ULP1cDOVSEho",
authDomain: "foodhelper-1b254.firebaseapp.com",
databaseURL: "https://foodhelper-1b254.firebaseio.com",
projectId: "foodhelper-1b254",
storageBucket: "",
messagingSenderId: "19921560329",
appId: "1:19921560329:web:d0882d74479ec8914029d8"
};

class DB {
  constructor() {
    firebase.initializeApp(_firebaseConfig);
    this._resultObject = [];
  }

  getAllReceipes()
  {
    let someObject = [];
    let db = firebase.firestore();
    return db.collection("receipes").get();
  }
}

export default DB;
