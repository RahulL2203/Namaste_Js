let name = {
    firstname : "Rahul",
    lastname: "Lakkavarapu",
    // printFullName: function (){
    //     console.log(this.firstname  + " " + this.lastname);
    // }
}
let printFullName =  function (hometown,state){
    console.log(this.firstname  + " " + this.lastname + hometown + ","+ state);
}

printFullName.call(name,"Bhimavaram" , "Andhra Pradesh" )

// name.printFullName();

let name2 ={
    firstname:"Mahendra Singh",
    lastname:"Dhoni",
}

//Function borrowing through Call

// name.printFullName.call(name2);

printFullName.call(name2, "Ranchi", "Jharkhand");
printFullName.apply(name2, ["Ranchi", "Jharkhand"]);

//Bind - gives a copy of function which csn be invoked later

let printMyname = printFullName.bind(name2, "Jaipur", "Rajasthan");
console.log(printMyname);

