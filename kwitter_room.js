var firebaseConfig = {
      apiKey: "AIzaSyBE0GsROZ8rDuL2EK3WnPGOKhSsXoT3NYY",
      authDomain: "kwitter-f2c48.firebaseapp.com",
      databaseURL: "https://kwitter-f2c48-default-rtdb.firebaseio.com",
      projectId: "kwitter-f2c48",
      storageBucket: "kwitter-f2c48.appspot.com",
      messagingSenderId: "465733403617",
      appId: "1:465733403617:web:8247d8c0019bd4e860c8a0",
      measurementId: "G-RDRGPFNP3R"
    };
    
    // Initialize Firebase
firbase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !"; 

fu

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
