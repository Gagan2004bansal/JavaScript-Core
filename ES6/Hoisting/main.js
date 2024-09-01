// Call Stack and Hoisting

// Hoisting : It is a type of process in which the variable declaration and 
//            function declaration shift to the top of their scope.



// Function Hoisting 

// how this function work ?
// According to us their is error as we call function 
// first before intialzing the function declaration 
// as javascript executes line by line. 
// But their is something called Hoisting that shift 
// all function declaration to the top of their scope

sayMyName("Gagan");

function sayMyName(finalName){
    console.log(finalName);
}


// Varaible Hoisting 

// In this case also acc to us their is an error
// as we didnot define or declare variable before using  
// but we declare after using.
// So Hoisting shift the variable declartion only to the
// top of their scope 

console.log(age);

var age = 25;



// Here it show error as Hositing work only for (var keyword)

// console.log(age1);
let age1 = 25;

// console.log(age2);
const age2 = 25;


// Here also we get reference error 
// sayHello();
let sayHello = function(){
    console.log("Hello, I am Function Expression")
}

// if we change let to const or var then also we get reference error


// Class Hoisting 

// Here we get referene error 
const person1 = new Human();
class Human{

}

// which means class hoisting is not possible




// --------------------- Reference ------------------------

// read : https://www.w3schools.com/js/js_hoisting.asp
// video : https://youtu.be/eK4gqHb7P7w?si=0rGzY7ULEjk-rhza