var nools = require("nools");

var flow = nools.compile(__dirname + "/validator.nools"),
    Product = flow.getDefined("product");

var session = flow.getSession();

session.assert(new Product(5,50,50));
session.assert(new Product(5,5,5));
session.assert(new Product(70,80,75));
session.assert(new Product(60,15,55));

console.log(session.getFacts());

session.match().then(
function(){
    console.log("Done.");
},
function(err){
    //uh oh an error occurred
    console.log(err.stack);
});