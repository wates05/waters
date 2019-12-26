firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      }



   console.log(user.email);
   var userMail= user.email.replace(".","");

   const dbRefobject = firebase.database().ref("users/"+userMail);
  //synic
   dbRefobject.once('value').then(function(snapshot){
   
    var ss=snapshot.val();

    var usertype=ss.type;
    var device=ss.device;


var i;


  for(var key in device){
      i=i+1;
     }

    // var device=ss.device;

    //   console.log(usertype);

    //   for(var key in device){
    //     console.log(device[key]);
    //   }
      
    // var value = snapshot.val();
    // console.log(userMail);
    // var childData = childSnapshot.val();
    // var id=childData.type;
    // console.log(childData);
  if (usertype =="admin") {

    window.location.href="admin.html";
  }
  else if (usertype =="user") {
    
    window.location.href="index1.html";
    
  }
  else{
     window.location.href="jo.html";
  }
});



  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}
