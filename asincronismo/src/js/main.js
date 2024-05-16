import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

let zonaPrueba = document.getElementById('zona-prueba')
let btnNew = document.querySelector('#nueva-categoria')

async function consultarDatosDeAPI() {
    let respuesta = await fetch("https://api.escuelajs.co/api/v1/categories")
    let datos = await respuesta.json()
    console.log(datos)
    datos.forEach((dato, index) => {
        zonaPrueba.innerHTML +=
            `<tr class = "text-center">
        <th scope="row">${index + 1}</th>
        <td>${new Date(dato.creationAt).getDate()}/${new Date(dato.creationAt).getMonth() + 1}/${new Date(dato.creationAt).getFullYear()}</td>
        <td>${dato.id}</td>
        <td><image width= 100px src= "${dato.image}"></td>
        <td>${dato.name}</td>
        <td>${new Date(dato.updatedAt).getDate()}/${new Date(dato.updatedAt).getMonth() + 1}/${new Date(dato.updatedAt).getFullYear()}</td>
      </tr>`
    });
}

btnNew.addEventListener('click', create)
function create() {
    const newCategory = {
        name:"gaming",
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FLambVRlpO34%2Fmaxresdefault.jpg%3Fsqp%3D-oaymwEoCIAKENAF8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYZSBXKEswDw%3D%3D%26rs%3DAOn4CLCMzbN3KNi30HXWe_VRHgbTdCxbqw&f=1&nofb=1&ipt=d6e3cd015b2e76652fb12912a9a225c96abf065e0ca550f831040fcffb78258f&ipo=images"
    }


    fetch("https://api.escuelajs.co/api/v1/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCategory)
    })
}

consultarDatosDeAPI()
