
// const details = "Javascript strings are primitive and immutable: All string methods produces a new string without altering the original string.";
// let details1 = " add details1 with previous";
// let addString = details.concat(details1);
 
// let uppercase = details.toUpperCase();
// const lowercase = details.toLowerCase();



// let stringLength = details.length;

// let checkIndex = details.slice(0, 100);

// document.getElementById('lengthset').innerText =  'String Length is: ' + stringLength;
// document.getElementById('add-details').innerText = details ;


// Array method

let fruits = [ "Banana", "Orange", "Apple", "Mango" , "Pine-apple" ];

document.getElementById('arr1').innerText = 'Fruits:  ' + fruits;


 
fruits.push("Strawbery");

document.getElementById('arr2').innerText = 'After push a fruit:  ' + fruits ;

// fruits.push("Straw");
// fruits.push("Str");
// fruits.pop();
// fruits.pop();
// fruits.pop();
// fruits.shift();

fruits.unshift("Lichi");
document.getElementById('arr3').innerText = 'After unshift a fruit:   ' + fruits ;

fruits.sort();
document.getElementById('arr4').innerText = 'After Sort an array:   ' + fruits ;

fruits.reverse();
document.getElementById('arr5').innerText = 'After Reverse an array:   ' + fruits ;



// fruits.unshift("Li");
// console.log(fruits.length);
// console.log(fruits);



// problem  solve

let number = [10,20,30,40,50,60];
let maxValue = Math.max(...number);

document.getElementById('max-min').innerText = 'My array '+ number;
document.getElementById('max-value').innerText = 'Maximum value is ' +  maxValue;
let minimumValue = Math.min(...number);
document.getElementById('min-value').innerText = 'Minimum value is ' +  minimumValue;
// var a = 2.97;
// var result = Math.floor(a);
// document.write(result);


let numbers = [10,20,30,40,50,60];

console.log(typeof(numbers));


// for (let i=0; i<number; i++){
//     code
// }


for (let singlenumber of numbers){
    document.write(singlenumber + '</br>');
}