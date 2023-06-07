function a(){
    var b=10;
    c();
    console.log(b);

    function c(){
        //console.log(b);
    }
}
a();
console.log(b);