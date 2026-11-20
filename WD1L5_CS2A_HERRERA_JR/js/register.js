//1. Get user details, concatenate, save to localStorage
function saveUserDetails() {
    let first_name = document.getElementById("fname").value;
    let last_name = document.getElementById("lname").value;
    let address = document.getElementById("address").value;
    let username = document.getElementById("uname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pword").value;

    //make sure that all blanks are filled
    //HTML Tag input "required" OR make our own Remarks

    if (first_name === "" || last_name === "" || address === ""
        || username === "" || email === "" || password === ""
    ) {
        document.getElementById("regMessage").innerHTML
            = "<h1 style='color:red'>Please Complete Details</h1>"
            return;
    }


    //String Concatenate all details
    let userDetails = first_name + " | " + last_name + " | " + 
    address + " | " + username + " | " + email + " | " + password;


    //save to local storage (to store setItem/ to retreive getItem)
    localStorage.setItem("userRecord", userDetails);

    document.getElementById("regMessage").innerHTML = 
        "<h3 style='color:green'></h3>";

    alert(localStorage.getItem("userRecord"));


    //Move to next Page
    window.location.href = "login.html";
}

