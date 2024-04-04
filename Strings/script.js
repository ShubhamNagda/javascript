let Name = "Shubham"; // Create String

let l = Name.length;   // string length
console.log(l);

let c = Name[0];     // String Indices
console.log(c);


//----------------------------------------------------------------
//Template Literals OR String Interpolation
let TL = `Hey, I am Shubham Nagda`; // we can use variables in tamplate literals
console.log(TL);

obj ={
    Name: "Unknown",
    age: 35
}

let gender = "male";
let output = `Name of Person is ${obj.Name} and age of person is ${obj.age} and gender of person is ${gender}`;
console.log(output);

//---------------------------------------------------------------------------------
// String Methods

let str = "aBc DeF"; // Strings are immutable

let upper = str.toUpperCase();
console.log(upper);

let lower = str.toLowerCase();
console.log(lower);


let str2 ="   Ghi Jkl   "
let t = str2.trim(); // Remove white spaces
console.log(t);

let s = str.slice(2,6);  // Return part of string
console.log(s);

let J = str.concat(str2);  // concatinate two strings
console.log(J);

let R = str.replace("aB","zY"); // replace charectors 
console.log(R);

let I = str.charAt(2); // Search char at index 
console.log(I);




