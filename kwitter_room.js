var firebaseConfig = {
      apiKey: "AIzaSyBpirPt0hiEi7kzK1XZYsgHjBH_fW4WkwE",
      authDomain: "kwitter-81dda.firebaseapp.com",
      databaseURL: "https://kwitter-81dda-default-rtdb.firebaseio.com",
      projectId: "kwitter-81dda",
      storageBucket: "kwitter-81dda.appspot.com",
      messagingSenderId: "924350840645",
      appId: "1:924350840645:web:2c1010bd2b50807440c82c",
      measurementId: "G-E8WRFF4KGR"
    };

    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectionToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectionToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}