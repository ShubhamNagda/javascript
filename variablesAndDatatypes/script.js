let Name = "Shubham Nagda";
let age = 19;
let income = null;
let net_worth = undefined;
let canVote = true;
console.log("Welcome ", Name, age, income, net_worth, canVote);


// Create an object -------------------------------------------------->

const student = {
    //key : value
    Name: "Shubham",
    Age: 19,
    isPass: true
}

console.log(student);

// print any one key in js ----------------->
console.log(student["Name"]);
//or
console.log(student.Name);

// update value in objects------------------>

student.Age = student.Age + 1;
console.log(student.Age);
//or
student["Age"] = 16;
console.log(student.Age);
