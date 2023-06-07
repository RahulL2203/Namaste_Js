//Using Bind

let multiply = function (x,y){
    console.log(x*y);
}


let multiplyByTwo = multiply.bind(this,2);//2 is fixed for x , if 2  and 5 passed here only , then 5 in line 8 is ignored
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this,3);
multiplyByThree(5);

//Using Closures

let multiplyy = function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByTwoo= multiplyy(2);
multiplyByTwoo(7);
let multiplyByThreee= multiplyy(3);
multiplyByThreee(7);

