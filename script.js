// var database = [{
//     username: "joshboy",
//     password: "mysecre"
// }];
// var newsFeed = [{
//     username: "Bobby",
//     timeline: "I enjoy Javascript tutorials everyday"
// }, {
//     username: "Cherish",
//     timeline: "i Love the chocolate",
// }];
// var userNamePrompt = prompt("Please enter your username");
// var password = prompt("Please enter your password");

//function signIn(user, pass) {
//  if (user === database[0].username && pass === database[0].password) {
//    console.log(newsFeed);
//} else {
//    alert("Wrong Username and Password");
//}
//}
// var subjects = [
//     "Mathematics",
//     "English",
//     "Commerce",
//     "Chemistry",
//     "Physics",
//     "Biology"
// ];
// var students = [
//     "Kemi",
//     "Patson",
//     "Caleb",
//     "Lucy",
//     "Matthew",
//     "Jason"
// ];
// for (var i = 0; i < subjects.length; i++) {
//     subjects.pop();
// }
// var myNumber = 10;
// while (myNumber > 0) {
//     console.log(myNumber);
//     myNumber--
// }
// function myLog(list, i) {
//     console.log(list, i);
// };
// subjects.forEach(myLog);
// students.forEach(myLog);
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

// function createListElement() {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
// }

// function addListAfterClick() {
//     if (inputLength() > 0);
//     createListElement();
// }

// function addListAfterKeypress(event) {
//     if (inputLength() > 0 && event.keycode === 13)
//         createListElement();
// }
// button.addEventListener("click", addListAfterClick);
// input.addEventListener("keypress", addListAfterKeypress);
// function userValid(boo) {
//     return boo;
// }
// var answer = userValid(true) ? alert("You are ready") : alert("You are not ready");

// function myCredit(hux) {
//     return hux;
// }
// let bank = myCredit(true) ? alert("You can enter") : alert("You cannot enter");
// function students(grades) {
//     let score;
//     switch (grades) {
//         case "Mathematics":
//             score: alert("You got an A");
//             break;
//         case "English":
//             score: alert("You got a B");
//             break;
//         case "Chemistry":
//             score: alert("You got a C");
//             break;
//         default:
//             score: alert("Invalid Score");
//     }
//     return score;
// }
// const obj = {
//     player: "Ozil",
//     experience: 100,
//     wizardLevel:false
// }
// const{player, experience} = obj;
// const name = 'Peter';
// const age = 35;
// let pet = "Cat";

// const greetingBest = `Hello ${name} you seem to be ${age} and you ${pet} is very friendly. Please try to make sure you do not sell your ${pet}`
//default argument
function Mybest(name = '', age = 30, pet = 'cat') {
    return `Hello ${name} you seem to be ${age} and you need a ${pet}`
}