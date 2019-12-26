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
  document.getElementById("name").innerHTML = userMail;
  var dName = getCookie("device");
  console.log("device from cookie",dName);

  if (dName=="") {
    console.log("no device");
    return;
  }
  var database = firebase.database();
 var ref = database.ref('device/'+dName+'/ereport');

  ref.on("value", gotData1, errData);



   


  function gotData1(data) {
  
  var fruits = data.val();
  // Grab the keys to iterate over the object
  var keys = Object.keys(fruits);


    // td get value
    var ur = fruits.url;
    //water level get value
      console.log(ur);
      var iframe = document.getElementById('frame2');
        iframe.src =  ur;
        iframe.width="1080px";
        iframe.height="500px";
    // document.getElementById("frame2").src = ur;
    

  }

  function errData(data) {
  
  console.log(err);
  console.log('err');

  
  }
});
