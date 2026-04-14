const fruits = ["Mango", "Apple", "Banana"];

console.log(fruits);


console.log(fruits[1]);

fruits[2] = "strawberry";

console.log(fruits);

console.log(fruits.length);

// const color = new Array("red","yellow","Blue");

// console.log(color);

// console.log(color[1]);


fruits.push("shavez");
console.log(fruits);



// let i = 1;
//  i = ++i;

//  console.log(i);


for(let i =2; i<5; ++i){
    console.log(i);
}


let item = ["red","green","yellow","orange"];

for (y=0; y<item.length; y++){
    console.log(item[y]);
}


let item1 = [1,2,3,4];

item1.forEach((item1)=>{
    console.log(item1);
})