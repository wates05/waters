var database = firebase.database();
 var ref = database.ref('web');
 console.log(ref);

  ref.on("value", gotData1, errData);



   


  function gotData1(data) {
  
  var fruits = data.val();
  // Grab the keys to iterate over the object
  var keys = Object.keys(fruits);
//Customers
 var cus = fruits.cus;
    console.log(cus);
      
   document.getElementById("cus").innerHTML = cus;
    // Branches
    var bra = fruits.Bra;
    console.log(bra);
      
   document.getElementById("bra").innerHTML = bra;

    // Team
    var pt = fruits.pt;
    console.log(pt);
      
   document.getElementById("pt").innerHTML = pt;

    // Experince
    var yoe = fruits.yoe;
    console.log(yoe);
      
   document.getElementById("yoe").innerHTML = yoe;
   

  }

  function errData(data) {
  
  console.log(err);
  console.log('err');

  
  };
