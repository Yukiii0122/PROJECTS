//step 1: Conditional Statement => Loob ng Function
//get value saved in our Local Storage
function loginUser(){
let old_user = localStorage.getItem("userRecord");

if (old_user === null) { //check if there are existing record
    document.getElementById("loginMessage").innerHTML =
    "<h2>No User Record Found, Kindly Register First!";
    return;
}

//split values of the localstorage
let userData = old_user.split(" | "); //This is an array

//retreive username and password at the location of the array
let old_name = userData [0];
let old_uname = userData [3];
let old_pword = userData [5];

//Retrieve user input via the login form
let loginuname = document.getElementById("login_uname").value;
let loginpword = document.getElementById("login_pword").value;

//Conditional Statement - checking old vs login data
if (loginuname === old_uname && loginpword === old_pword) {
    document.getElementById("loginMessage").innerHTML =
    "Welcome" + old_name + "! You may now add an item.";

    //Move to next Page
    window.location.href = "list.html";


} else {
    document.getElementById("loginMessage").innerHTML =
    "Invalid User Credentials!";
}
}