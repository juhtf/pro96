
var firebaseConfig = {
      apiKey: "AIzaSyDF-OI3zNRHh8Uwz4vdBe4Xg-sT7IssNxc",
      authDomain: "kwitter-56538.firebaseapp.com",
      databaseURL: "https://kwitter-56538-default-rtdb.firebaseio.com",
      projectId: "kwitter-56538",
      storageBucket: "kwitter-56538.appspot.com",
      messagingSenderId: "216895115594",
      appId: "1:216895115594:web:b2fc0e6e974d97d614b1b3"
    };
    
    // Initialize Firebase
     firebase. initializeApp(firebaseConfig);

     user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room_name - " + Room_names);
row="<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML +=row;
      });});}
getData();

function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location="index.html";
}