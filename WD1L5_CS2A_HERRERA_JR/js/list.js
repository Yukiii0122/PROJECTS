//Add Item
function addItem (){

    let item = document.getElementById("item_name").value;
    let qty = document.getElementById("item_qty").value;

    //what if blank yung field, error handler
    if (item === "" || qty === ""){
        alert("Please enter both Item Details!");
        return;
    }

    //set as variable the <p> of the grocery list
    let groceryList = document.getElementById("groceryList");


    //create a new list via DOM
    let newItem = document.createElement("li");
    newItem.innerHTML = item + "- Qty: " + qty;

    groceryList.appendChild(newItem);
    //can use of ARRAY, OBJECTS as alternatives

    //Clear Field
    document.getElementById("Item_name").value = "";
    document.getElementById("Item_qty").value = "";
}    

//clear list
function clearList() {
    document.getElementById("groceryList").innerHTML = "";
}


//logout function
function logout(){
    localStorage.removeItem("userRecord")  //Delete content Local Storage
    alert (localStorage.getItem("userRecord"))
    window.location.href = "register.html";

}