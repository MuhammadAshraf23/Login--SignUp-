function signUp() {
    let userName = document.getElementById("username").value
    let userEmail = document.getElementById("useremail").value
    let userPass1 = document.getElementById("password").value
    let userPass2 = document.getElementById("password2").value
    localStorage.setItem('userName', userName)
    localStorage.setItem('userEmail', userEmail)
    localStorage.setItem('userPass1', userPass1)
    if (userPass1 == userPass2) {
        // alert('Data inserted Successfully')
        location.href = './index.html'
    }
    else {
        alert("please enter correct password")
    }

}
function signIn() {
    let userEmail = document.getElementById("useremail").value
    let userPass1 = document.getElementById("password").value
    let getEmail = localStorage.getItem('userEmail', userEmail)
    let getPass = localStorage.getItem('userPass1', userPass1)
    if (userEmail == getEmail && userPass1 == getPass) {
        location.href = './welcome.html'
        //alert("OHHHHHHHHH")
    }
    else {
        alert("Enter Correct user or password")
    }

}