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

  user_name = localStorage.getItem("user_name")
  room_name = localStorage.getItem("room_name")

  function send(){
    msg = document.getElementById("msg").value
    firebase.database().ref(room_name).push({
        name: user_name, 
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = ""
  }

  function logOut(){

    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location = "index.html"
  }

  function back(){

    window.location = "Room_room.html"
  }

  function getData() {
       firebase.database().ref("/"+room_name).on('value', function(snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {
                 childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
                      firebase_message_id = childKey; message_data = childData; 
                    
                    } }); }); } getData();