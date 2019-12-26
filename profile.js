function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

  firebase.auth().onAuthStateChanged(function(user) {

  if(user==null){
  window.location.href="login.html";
  return;
  }
  var Mail= user.email;
  document.getElementById("mail").innerHTML = Mail;
  var userMail= user.email.split('@')[0];
  var users= user.email.replace(".","");
  document.getElementById("name").innerHTML = userMail;
  var dName = getCookie("device");
  console.log("device from cookie",dName);

  if (dName=="") {
    console.log("no device");
    return;
  }
  var database = firebase.database();
 var ref = database.ref('users/'+users);

  ref.on("value", gotData1, errData);



   


  function gotData1(data) {
  
  var fruits = data.val();
  // Grab the keys to iterate over the object
  var keys = Object.keys(fruits);

 console.log(keys);
    var phone = fruits.number;
    var add = fruits.Address;
    
     document.getElementById("phone").innerHTML = phone;
     document.getElementById("add").innerHTML = add;
     console.log('test1');
     //Photo of the user
      var imga = 'user/img/'+userMail+'.jpg';
      console.log(imga);
      document.querySelector('img').src = imga;
    

  }

  function errData(data) {
  
  console.log(err);
  console.log('err');

  
  }
});
