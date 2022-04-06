
const userName = prompt("Name");
const userSurname = prompt("Surname");
const userFavouriteColor = prompt("Favourite Color");
const yearNumber = 21;
const password = userName + userSurname + userFavouriteColor + yearNumber; 
document.getElementById("password").innerHTML = password;