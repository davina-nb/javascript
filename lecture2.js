console.log("Harry") 

for(let i = 1; i<=5; i++){
    console.log("Harry");
}
let Name = "Harry Gryffindor"
console.log("before Replace" , Name);
console.log(Name.replace("Gryffindor", "Slytherin"));
console.log(Name.charAt)


let firstName = "Mina";
let lastName = "Smith"
console.log(firstName.length); 
console.log(firstName[0]);
console.log(`Hello, ${firstName}, ${lastName}`)
console.log(firstName.toUpperCase());
console.log(firstName.trim());
console.log(firstName.slice(0,5))
console.log(firstName.concat(lastName));
console.log(Name.replace("Gryffindor", "Slytherin"));

let house = ["Gryffindor", "Hufflepuff", "Slytherin", "Ravenclaw"];
console.log(house[0]);

let home = [10, 20, 40]; 
let home2 = [40, 50];
console.log(home.push(40)); 
home.pop();
console.log(home);
console.log(home.toString());
console.log(home.concat(home2));
home.shift(500);
console.log(home); 
console.log(home.slice(1,4));
console.log(home.splice(1,1,200))