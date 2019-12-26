   function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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
  console.log('no use..');
  return;
}

 console.log(user.email);
 var userMail= user.email.replace(".","");
  

 const dbRefobject = firebase.database().ref("users/"+userMail);
//synic
 dbRefobject.once('value').then(function(snapshot){
 
  var ss=snapshot.val();
  console.log(ss);
  var usertype=ss.type;
  var device=ss.device;

    console.log(device);

    var j =ss.length;
    console.log('device',j);
    var i=0;


    for(var key in device){
      i=i+1;
    var tes ="Device"+i;
    console.log(tes);
    var d = device[key];

    d = d.replace('"','');
    d = d.replace('"','');

      console.log("device",d,device[key]);

    document.getElementById("pageSubmenu3").innerHTML += "<li><a onclick='go(\""+d+"\");'>"+tes+"</a></li>";
      // console.log("device",i,device[key]);
    }
    var users= user.email.split('@')[0];
    var imga = 'user/img/'+users+'.jpg';
      console.log(imga);
      document.querySelector('img').src = imga;

    console.log(i);


  });
});


 function go(device){
  console.log(device);
  setCookie("device",device,1);
  console.log(getCookie("device"));
  window.location.reload();
 }