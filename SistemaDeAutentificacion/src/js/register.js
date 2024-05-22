 // lllamar al formulario
let form = document.getElementById("register-form")


 // llamar a los campos del forulario

let username = document.getElementById("username")
let lastName = document.getElementById("last-name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let confirmPassword = document.getElementById("confirm-password")
let database = "http://localhost:3000/users"

form.addEventListener("submit",async (event) => {
    event.preventDefault()
    let revisionEmail = await checkEmail(email)
    let revisionpassword = checkPassword(password,confirmPassword)

    if(revisionEmail == true && revisionpassword == true){
        await registerUser(database,username,lastName,email,password)
        window.location.href = "/"
    }
    else{
        alert("no puedes usar el correo porque ya esta en uso")
    }
    
})

async function checkEmail(email){
    //traemos a todos los usuarios que tengan el email que se ingreso
    let response = await fetch(`http://localhost:3000/users?email=${email.value}`)
    let data = await response.json()

    if(data.length > 0){
        return false
    }
    else{
        return true
    }
}

function checkPassword(password,confirmPassword){
    if (password.value == confirmPassword.value){
        return true
    }
    else{
        return false
    }
}

async function registerUser(database,username,lastName,email,password){
    let newUser ={
        username: username.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value
    }

    await fetch(database, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
}

