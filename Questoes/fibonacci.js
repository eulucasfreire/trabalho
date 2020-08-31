function fibonacci (x) {
    var a=0;
     var b=1;
     var c = b;
    for(var i = 1 ; i < x; i++){
        console.log(c+"<br>");
        c = a + b ;
        b = c;
    }

}