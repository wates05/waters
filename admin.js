  firebase.auth().onAuthStateChanged(function(user) {

  if(user==null){
  window.location.href="login.html";
  return;
  }
});