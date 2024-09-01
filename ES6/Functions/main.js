// Functions in Javascript 

// Functions are a fundamental building block in JavaScript,
// allowing developers to encapsulate reusable code blocks,
// enhance code readability, and facilitate modular programming.


// That we are passing in function calling : Argument
// That we recieved from function calling : Parameter 

//  ---------- Simplest Function -------------

// Function Definition
function Hello(){ // 0 Parameter
    console.log("Hello, I am simplest Function")
}

// Function Call
Hello(); // 0 Argument function



// function printCount(){
//     for(let i = 1; i<=10; i++){
//         console.log(i);
//     }
// }
// printCount();


// Parameterized Function
function printNumber(n){ // 1 Parameter
    console.log("Printing Number : ", n);
}
printNumber(5); // 1 Argument 

// we can pass multiple argument


// ----------------- Return Function ------------------

function getSum(a, b){
    let sum = a + b;
    return sum;
}

console.log("Sum of 4 + 5 : ", getSum(4, 5));


// -------------- Function Expression ------------------

let getMultiplication = function(a, b){
    return a*b;
}
let res = getMultiplication(10, 20);
console.log(res);


// ------------------ Arrow Function -----------------

let getExp = (x, y) => {
    return x**y;
}
console.log(getExp(2, 5));


// -------------------- Reference -----------------------
// read : https://www.w3schools.com/js/js_functions.asp
// video : https://www.youtube.com/watch?v=nqC-UlGTssg&list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD&index=43