(function () {
    const userOnline = localStorage.getItem("userOnline")
    if(userOnline != null){
        window.location.href = "./src/pages/dashboard.html"
    }

})


// llamar al form
let form = document.querySelector("form")

//llamar a los inputs
let email = document.getElementById("email")
let password = document.getElementById("password")

form.addEventListener("submit",async (event)=>{
    event.preventDefault()
    let checkedEmail = await verifyEmail(email)

    if(checkedEmail == false){
        alert("El usuario no esta registrado")
    }
    else{
        if(checkedEmail.password === password.value){
            alert("Bienvenido")
            localStorage.setItem("userOnline", JSON.stringify(checkedEmail))
            window.location.href = "./src/pages/dashboard.html"
        }
        else{
            alert("Contraseña incorrecta")
        }
    }
})

async function verifyEmail(email){
    let response = await fetch(`http://localhost:3000/users?email=${email.value}`)
    let data = await response.json()
    console.log(data)

    if(data.length == 1){
        return data[0]
    }
    else{
        return false
    }
}