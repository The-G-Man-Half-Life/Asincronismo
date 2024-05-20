import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

const url = "http://localhost:3000/categories"
const tbody = document.querySelector('tbody')
const form = document.querySelector("form")
const name = document.querySelector("#name")
const image = document.querySelector("#url-image")
let idCache = undefined


index()

form.addEventListener('submit', async (event) => {
    //ACA DEBEMOS LLAMAR A LA FUNCION QUE SE ENCARGA DE GUARDAR
    if(idCache === undefined) {
        for(let i = 0; i <10; i++){
            create(name,image)
        }
    }
    else if (idCache !== undefined) {
        update(name,image,idCache)
    }
event.preventDefault()
form.reset()
index()
})


tbody.addEventListener('click', async function (event) {
    // ACA DEBEMOS LOCALIZAR A LOS ESCUCHADORES DE EVENTOS
    if (event.target.classList.contains("btn-danger")) {
        let id = event.target.getAttribute(`data-id`)
        await deleteItem(id)
        await index()
    }
    else if (event.target.classList.contains("btn-warning")) {
        idCache = event.target.getAttribute(`data-id`)
        let categoryFound = await find(idCache)
        name.value = categoryFound.name
        image.value = categoryFound.image
    }
})


async function index() {
    const response = await fetch(url)
    const data = await response.json()

    tbody.innerHTML = ""
    data.forEach(element => {
        tbody.innerHTML += `
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>
                <img width="100px" src=${element.image} alt=${element.name}>
            </td>
            <td>${new Date().getFullYear()}/ ${new Date().getMonth()}/ ${new Date().getDate()}</td>
            <td>${new Date().getFullYear()}/ ${new Date().getMonth()}/ ${new Date().getDate()}</td>
            <td>
                <button type="button" data-id=${element.id} class="btn btn-warning">Edit</button>
                <button type="button" data-id=${element.id} class="btn btn-danger">Delete</button>
            </td>
        `
    })
}


async function create(name, image) {
    //ACA DEBEMOS PROGRAMAR LA PETICION PARA CREAR UNA CATEGORIA
    const newCategory = {
        name: name.value,
        image: image.value
    }

    await fetch(url, {
        method: `POST`,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCategory)
    })
}

async function deleteItem(id) {
    //ACA DEBEMOS PROGRAMAR LA PETICION PARA ELIMINAR UNA CATEGORIA
    await fetch(`${url}/${id}`, {
        method: `DELETE`,
        headers: {
            "Content-Type": "application/json"
        }
    })
}

async function update(name, image, id) {
    let updatedCategory = {
        name: name.value,
        image: image.value
    }

    await fetch(`${url}/${id}`, {
        method: `PUT`,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedCategory)
    })
    idCache = undefined
    index()
}

async function find(id) {
    const response = await fetch(`${url}/${id}`)
    const data = await response.json()
    return data
}
