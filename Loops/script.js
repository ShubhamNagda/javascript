// for loop
for (let i = 1; i <= 100; i++) {
    console.log("Hello world");
}

let i = 1;
while (i <= 10) {
    console.log("While loop");
    i++;
}

let j = 1;
do {
    console.log("do while");
    j++;
} while (j < 1);

// For of loop        for Strings and arrays
let Name = "Shubham Nagda";
for (let i of Name) {
    // iterator -> charector
    console.log("i =", i);
}


let size = 0;
for (let i of Name) {
    // iterator -> charector
    size++;
}
console.log("size of string =", size);

//---------------------------------------------------------
//for in loop

student ={
    Name: "Umesh",
    isPass: true,
    roll: 2
}

for(let i in student){
    console.log("key =", i,", value = ",student[i]);
}