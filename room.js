
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyATSbFd8OYKTeFvu0OhDeV7ltBvqYR_mWI",
    authDomain: "kwitter-1d390.firebaseapp.com",
    databaseURL: "https://kwitter-1d390-default-rtdb.firebaseio.com",
    projectId: "kwitter-1d390",
    storageBucket: "kwitter-1d390.appspot.com",
    messagingSenderId: "25852645132",
    appId: "1:25852645132:web:c5015930e211cfd295c329"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
 
 
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "page.html";
}

function getData() {  
  firebase.database().ref("/").on('value', function(snapshot) {
     document.getElementById("output").innerHTML = ""; 
     snapshot.forEach(function(childSnapshot) { 
       childKey  = childSnapshot.key;
       Room_names = childKey;
       
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}





getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
