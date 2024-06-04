import '../styles/styles.scss'
import * as bootstrap from 'bootstrap'

let form = document.getElementById("register-form")
let email = document.getElementById("input-email")
let password = document.getElementById("input-password")
let buttons = document.getElementById("buttons")


let url = "http://localhost:3000/users"

form.addEventListener("submit", async(event)=>{
    event.preventDefault()
    await verifyUserExistence(email,password)
})


function IDRandomGeneration() {
    let randomNumber = Math.random().toString(36).substr(2, 9)
    console.log(randomNumber)
    return randomNumber
    
}

async function verifyUserExistence(email,password) {
    let response = await fetch(`${url}?email=${email.value}`)
    let data = await response.json()


    if(data.length===1){
        alert("Esta cuenta ya existe por favor use el log in")
    }
    else{
        let passwordInterior = password.value
        if((passwordInterior.length<10) && (passwordInterior.includes("1"))){
            let newUser = {
                "id": IDRandomGeneration(),
                "email": email.value,
                "password": password.value
            }
            await fetch(url,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(newUser)
            })
            localStorage.setItem("access",true)
            window.location.href = "./"
        }
        else{
            alert("La contraseña debe contener menos de 10 letras y un 1")
        }
    }
}

