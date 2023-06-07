let name = {
    firstName:"Rahul",
    lastName:"Lakkavarapu",
}

let printName = function(hometown, state, country){
    console.log(this.firstName + " " + this.lastName + " " + hometown + ", " + state +" " + country);
}

let printMyname = printName.bind(name, "Dehradun" , "INDIA");
printMyname("UK");

Function.prototype.mybind = function(...args){
    let obj = this,
    params = args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params,...args2])
    }

}


let printMyname2 = printName.mybind(name , "dehradun", "INDIA");
printMyname2("UK");