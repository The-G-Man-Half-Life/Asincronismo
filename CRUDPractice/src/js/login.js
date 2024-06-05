import '../styles/styles.scss'
import * as bootstrap from 'bootstrap'

let email = document.getElementById("input-email")
let password = document.getElementById("input-password")
let form = document.getElementById("register-form")

let url = "http://localhost:3000/users"

guardian()
form.addEventListener("submit",async(event)=>{
    event.preventDefault()
    await verification()
})

async function verification(){
    let response = await fetch(`${url}?email=${email.value}`)
    let data = await response.json()
    if((data.length===1) && (password.value!= data[0].password )){
        console.log(data.length)
        console.log(data[0].password)
        alert("La contraseña esta errada intentelo nuevamente")
    }
    else if ((data.length===1) && (password.value == data[0].password )){
        alert("Bienvenido")
        localStorage.setItem("access",true)
        window.location.href="./"
    }
    else{
        alert("Verifique usuario y contraseña")
    }
}

function guardian(){
    let verification= localStorage.getItem("access")
    if(verification=="true"){
        window.location.href="./"
    }
}