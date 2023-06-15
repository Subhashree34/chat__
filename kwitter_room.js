
var firebaseConfig = {
  apiKey: "AIzaSyBzMzGtoEj-wK44DKSWHOzrT-d3EtZrH1g",
  authDomain: "kwitter1-3d456.firebaseapp.com",
  databaseURL: "https://kwitter1-3d456-default-rtdb.firebaseio.com",
  projectId: "kwitter1-3d456",
  storageBucket: "kwitter1-3d456.appspot.com",
  messagingSenderId: "1002601267165",
  appId: "1:1002601267165:web:5945832e9030ed67ea4034"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room Name - " + Room_names);
  row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)'># "+ Room_names+ "</div><hr>";
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html"; 
}