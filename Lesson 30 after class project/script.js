function ValidateForm(){
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["id1"].value;
    if (x == "" || y == ""){
        alert("Please fill in these fields");
        return false;
    }
    else{
        alert("Sucessfully logged in");
    }
}