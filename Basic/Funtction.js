

function showMessage() {
    console.log("shavez Idrisi");
}

showMessage();

function showMessage() {
    let aa = "i am javaSrpt";
    console.log(aa);
}

showMessage();


// console.log(a);

// Global/outer Variable

let userName = "john";

function myName() {
    let v = "my full name is " + userName;

    console.log(v);
}

myName();


function newMessage(name, age) {
    console.log("my name is " + name + " and age is " + age);
}

newMessage("shavez", 26);


function sum(a, b) {
    return a + b;
}

let g = sum(5, 6);

console.log(g);

function checkAge(age) {

    if (age >= 18) {
        return console.log(true);
    }
    else {
        return console.log("do u have permission from your parents");
    }

}

let age = prompt("how old are you?", 18);

checkAge(age);



let getUserrole = function (name, role) {

    switch (role) {
        case "admin":
            console.log(`${name} with full access`);
            break;

        case "student":
            console.log(`${name} with limited access`);
            break;

        case "guest":
            console.log(`${name} can only read`);
            break;

        default:
            console.log("can only visit");
            break;

    }

}

console.log(getUserrole("shavez","student"));