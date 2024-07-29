const firebaseConfig = {
  apiKey: "AIzaSyCqut5_0pETuOQYha92sWXXJcRuxvtGMHo",
  authDomain: "collage-project-bbce2.firebaseapp.com",
  databaseURL: "https://collage-project-bbce2-default-rtdb.firebaseio.com",
  projectId: "collage-project-bbce2",
  storageBucket: "collage-project-bbce2.appspot.com",
  messagingSenderId: "538221538455",
  appId: "1:538221538455:web:d39c09e9c6138d7e56cdd2",
  measurementId: "G-WRPW1526SK"
};
// initialize firebase 

firebase.initializeApp(firebaseConfig);
// reference
const  appionDrom = firebaseConfig.database().ref('Appoinment');

document.getElementById('Appionment').addEventListener('submit',summitAppionment);

function summitAppionment(e){
e.preventDefault();

var name = getElementVal('appoinName');
var email = getElementVal('appionEmail');
var date = getElementVal('appionDate');
var time = getElementVal('appioTime');
console.log(name, email,date,time);

}
const getElementVal = (id)=>{
    return document.getElementById(id).value;
};

