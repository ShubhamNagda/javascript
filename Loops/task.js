for(let i = 0; i <=100; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

// Task2 
let Num = 3;
let value = prompt("Enter The Number: ");

while(value != Num){
    value = prompt("Wrong Enter Again");
}

console.log("congratulations.");