// for(var i=1; i<101; i++) {
//     if(i % 15 == 0) {
//         console.log("FizzBuzz");
//     } else if(i % 5 == 0) {
//         console.log("Buzz");
//     } else if(i % 3 == 0) {
//         console.log("Fizz");
//     } else {
//         console.log(i);
//     }
// }
for (var i=1 ; i<= 100 ; i++) {
    if (i % 3 == 0) {
        console.log("fizz")
    }
    if (i % 5 == 0) {
        console.log("buzz");
    }
    if  (i % 3 === 0 && i % 5 === 0){
       console.log("fizzbuzz") ;
    }
    else  {
        console.log(i)

    }

}


