// var email = prompt("Inserisci la tua email");
// var mails = ["mail1", "mail2", "mail3", "mail4"];
// var isInArray = mails.includes(email);
// if (isInArray == true) {
//   document.getElementById("lista").innerHTML = "Sei";
// } else {
//   document.getElementById("lista").innerHTML = "Non sei";
// }

var mails = ["mail1", "mail2", "mail3", "mail4"];
var email = prompt("Inserisci la tua email");
for (var i = 0; i < mails.length; i++) {
  if (mails[i] == email) {
    document.getElementById("lista").innerHTML = "Sei";
  }
}



var userNumber = Math.floor(Math.random() * 6 + 1);
var pcNumber = Math.floor(Math.random() * 6 + 1);
if (userNumber > pcNumber) {
  document.getElementById("dadi").innerHTML = "Hai vinto!";
} else if (userNumber < pcNumber) {
  document.getElementById("dadi").innerHTML = "Hai perso!";
} else if (userNumber == pcNumber) {
  document.getElementById("dadi").innerHTML = "Pareggio!";
}
