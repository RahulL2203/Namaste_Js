// a(); Uncomm ent top see hoisting difference
// b();

//Function Statement  //Function Declaration   both are same
function a(){
 console.log("a called");
}
a();
//Function Expression
var b = function (){
    console.log("b called");
   } 
b();
//Differencre between Function statement and Function expression is Hoisting

//Anonymous Function - Function without a nam

function()  {
 console.log("this is throw syntax error , anonymous functions are used when functions are used as values , Like use it to assign some variable")
}

//Named Function Expression
var b = function ABC(){
    console.log(ABC);
    
   } 
b();
ABC();//This throws an error 

//Difference between Parameters and arguments
var b = function (param1, param2){
    console.log("b called");
   } 
b(1,2);//Arguments 
//First Class Functuions || First Class Citizens - The ability to use Functions as values, can be passed as Arguments to another functions and can be returned from  the functions  is known as First Class Functions
var b = function (param1){
    return function xyz(){

    }
   } 
console.log(b())
//Arrow Functions