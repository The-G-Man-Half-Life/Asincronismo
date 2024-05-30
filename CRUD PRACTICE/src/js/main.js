import '../styles/styles.scss'
import * as bootstrap from 'bootstrap'

let nameDevice = document.getElementById("name-device")
let processorName = document.getElementById("processor-name")
let processorSize = document.getElementById("processor-size")
let processorCPU = document.getElementById("cpu-processor")
let processorGPU = document.getElementById("gpu-processor")
let storage = document.getElementById("storage")
let ram = document.getElementById("ram")
let ufs = document.getElementById("ufs")
let height = document.getElementById("height")
let width = document.getElementById("width")
let thickness = document.getElementById("thickness")
let weight = document.getElementById("weight")
let displayKind = document.getElementById("display-kind")
let pixelDensity = document.getElementById("pixel-density")
let brightness = document.getElementById("brightness")
let refreshRate = document.getElementById("refresh-rate")
let glassKind = document.getElementById("glass-kind")
let firstRearCamera = document.getElementById("first-rear-camera")
let secondRearCamera = document.getElementById("second-rear-camera")
let thirdRearCamera = document.getElementById("third-rear-camera")
let frontCamera = document.getElementById("front-camera")
let batteryAmount = document.getElementById("battery-amount")
let chargerPower = document.getElementById("charger-power")

let tbody = document.getElementById("tbody")

let url = "http://localhost:3000/phones"

async function ShowCellphone(url,tbody) {
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    data.forEach(phone =>{
        tbody.innerHTML +=
        `
        <tr>
        <td>${phone.nameDevice}</td>
        <td>${phone.processorName}</td>
        <td>${phone.processorSize}</td>
        <td>${phone.processorCPU}</td>
        <td>${phone.processorGPU}</td>
        <td>${phone.storage}</td>
        <td>${phone.ram}</td>
        <td>${phone.ufs}</td>
        <td>${phone.height}</td>
        <td>${phone.width}</td>
        <td>${phone.thickness}</td>
        <td>${phone.weight}</td>
        <td>${phone.displayKind}</td>
        <td>${phone.pixelDensity}</td>
        <td>${phone.brightness}</td>
        <td>${phone.refreshRate}</td>
        <td>${phone.glassKind}</td>
        <td>${phone.firstRearCamera}</td>
        <td>${phone.secondRearCamera}</td>
        <td>${phone.thirdRearCamera}</td>
        <td>${phone.frontCamera}</td>
        <td>${phone.batteryAmount}</td>
        <td>${phone.chargerPower}</td>
    </tr>
        `
    } )

}
ShowCellphone(url,tbody)