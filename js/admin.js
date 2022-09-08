function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "12345") {

        alert("You have successfully logged in.");
        window.location('indexad.html')

    }
    else {
        alert("Login failed, Try again!")
        window.open('admin.html')
        
        return false;

    }
}