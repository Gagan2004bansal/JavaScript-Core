// Loops in JavaScript

// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true


// For Loop 

var numArray = [4, 2, 6, 9, 7];
for(let i = 0; i<numArray.length; i++){
    console.log("value : ", numArray[i]);
}

// For Loop with Break
for(let i = 0; i<numArray.length; i++){
    if(9 == numArray[i]){
        break;
    }
    console.log("value : ", numArray[i]);
}

// For Loop with continue
for(let i = 0; i<numArray.length; i++){
    if(numArray[i] == 6){
        continue;
    }
    console.log("value : ", numArray[i]);
}

// For in loop with Arrays
for(let i in numArray){
    console.log("value : ", numArray[i]);
}


var StudentData = {
    name: "Gagan Bansal",
    stream: "B.Tech CS",
    year: "3rd Year"
};

// For in Loop with Objects

for(let i in StudentData){
    console.log(StudentData[i]);
}

// For of Loop with Array

for(let value of numArray){
    console.log(value);
}



// Callback Function 
// numArray1.forEach(callbackFunction(value));
numArray.forEach(function(value, index, numArray){
    if(value =='6'){
        return;
    }
    console.log(`The value is: ${value}`);
    console.log(`The value is: ${index}`);
    console.log(`The value is: ${numArray}`);
})


var actualFunction = function (value) {
    console.log(`The Value is : ${value}`);
}

numArray.forEach(actualFunction);

// calback anonymous function
numArray.forEach((value) => {
    console.log(`The value is: ${value}`);
});