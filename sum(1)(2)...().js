let sum = function (a){
    return function(b){
        if(b){
            return sum(a+b);
        }
        return a;
    }
}
 

console.log(sum(1)(2)(3)(4)(5)());

//Using Arrow functions and terinaty operator

let sum1 = a =>{
    return b => {
      return b ? sum(a+b): a ;
    }
}

console.log(sum1(1)(2)(3)(4)(5)());

//Little more simple code

let sum3 = a => b => b? sum3(a+b):a;

console.log(sum3(1)(2)(3)(4)(5)());
