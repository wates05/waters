  
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
  window.location.href="index.html";
  return;
  }
  var Mail= user.email;
  document.getElementById("mail").innerHTML = Mail;
  var userMail= user.email.split('@')[0];
  document.getElementById("name").innerHTML = userMail;
  console.log(userMail);
  var dName = getCookie("device");
  console.log("device from cookie",dName);

  if (dName=="") {
  console.log("no device");
  return;
}
  var database = firebase.database();
  var ref = database.ref('device/'+dName+'/up');
  ref.on("value", gotData, errData);

  
 

  function gotData(data) {
 
  var fruits = data.val();
  // Grab the keys to iterate over the object
  var keys = Object.keys(fruits);

  var j=keys.length;
  var k=j-1;

  
    
    var key = keys[k];
    // td get value
    var tdsl = fruits[key].tds;
    //water level get value
   
    var watl = fruits[key].wat;
    var wat2= watl + 'litre';
    var tds2=tdsl +' mg/litre';

     if(tdsl>=500)
    {
      var st= 'Not to Drink';
    }
    else if(tdsl>400 && tdsl<500)
    {
      var st = 'Bad';
    }
     else if(tdsl>300 && tdsl<401)
    {
      var st = 'Moderate';
    }
     else if(tdsl>200 && tdsl<301)
    {
      var st = 'Good';
    }
    else
    {
      var st = 'Excelent';
    }
   
    




    document.getElementById("wale").innerHTML = wat2;
    document.getElementById("tdse").innerHTML = tds2;
    document.getElementById("sta").innerHTML = st;

   console.log("test");
  }

  function errData(data) {
  
  console.log(err);
  console.log('err');

  
  }
  });