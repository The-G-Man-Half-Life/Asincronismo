import '../styles/styles.scss'
import * as bootstrap from 'bootstrap'

let nameDeviceF = document.getElementById("name-device")
let processorNameF = document.getElementById("processor-name")
let processorSizeF = document.getElementById("processor-size")
let processorCPUF = document.getElementById("cpu-processor")
let processorGPUF = document.getElementById("gpu-processor")
let storageF = document.getElementById("storage")
let ramF = document.getElementById("ram")
let ufsF = document.getElementById("ufs")
let heightF = document.getElementById("height")
let widthF = document.getElementById("width")
let thicknessF = document.getElementById("thickness")
let weightF = document.getElementById("weight")
let displayKindF = document.getElementById("display-kind")
let pixelDensityF = document.getElementById("pixel-density")
let brightnessF = document.getElementById("brightness")
let refreshRateF = document.getElementById("refresh-rate")
let glassKindF = document.getElementById("glass-kind")
let firstRearCameraF = document.getElementById("first-rear-camera")
let secondRearCameraF = document.getElementById("second-rear-camera")
let thirdRearCameraF = document.getElementById("third-rear-camera")
let frontCameraF = document.getElementById("front-camera")
let batteryAmountF = document.getElementById("battery-amount")
let chargerPowerF = document.getElementById("charger-power")
let form = document.getElementById("form")
let tbody = document.getElementById("tbody")
let table = document.getElementById("table")
let flag = true 

let url = "http://localhost:3000/phones"

let formFinding = document.getElementById("form-finding")
let namePhone = document.getElementsByClassName("name-to-find")

let idExterno 

showCellphone(url, tbody)
form.addEventListener("submit", async (event) => {
    if (flag === true) {
        event.preventDefault()
        await create(nameDeviceF, processorNameF, processorSizeF, processorCPUF, processorGPUF, storageF, ramF, ufsF, heightF, widthF, thicknessF, weightF, displayKindF, pixelDensityF, brightnessF, refreshRateF, glassKindF, firstRearCameraF, secondRearCameraF, thirdRearCameraF, frontCameraF, batteryAmountF, chargerPowerF)
        await showCellphone(url, tbody)
        form.reset()
        console.log("ocurrio el evento crear")
    }
    else {
        event.preventDefault()

        await update(idExterno,nameDeviceF.value ,processorNameF.value ,processorSizeF.value ,processorCPUF.value ,processorGPUF.value ,storageF.value ,ramF.value ,ufsF.value ,heightF.value ,widthF.value ,thicknessF.value ,weightF.value ,displayKindF.value ,pixelDensityF.value ,brightnessF.value ,refreshRateF.value ,glassKindF.value ,firstRearCameraF.value ,secondRearCameraF.value ,thirdRearCameraF.value ,frontCameraF.value ,batteryAmountF.value ,chargerPowerF.value)
        form.reset()
        await showCellphone(url,tbody)
        flag = true
        console.log("ocurrio el evento actualizar")
    }

})

table.addEventListener("click", async (event) => {
    let id = event.target.getAttribute("data-id")
    let classes = event.target.classList
    let classes1 = Array.from(classes)

    idExterno = id

    if (classes1.includes("btn-danger")) {
        await deleteF(id)
        await showCellphone(url, tbody)
        console.log("hola")
    }
    else {
        await setInfo(id, nameDeviceF, processorNameF, processorSizeF, processorCPUF, processorGPUF, storageF, ramF, ufsF, heightF, widthF, thicknessF, weightF, displayKindF, pixelDensityF, brightnessF, refreshRateF, glassKindF, firstRearCameraF, secondRearCameraF, thirdRearCameraF, frontCameraF, batteryAmountF, chargerPowerF)
        flag = false
        console.log("la informacion ha sido puesta")
    }
    event.preventDefault()
})


function ID() {
    let randomNumber = Math.random().toString(36).substr(2, 9)
    return randomNumber
}

async function create(nameDeviceF, processorNameF, processorSizeF, processorCPUF, processorGPUF, storageF, ramF, ufsF, heightF, widthF, thicknessF, weightF, displayKindF, pixelDensityF, brightnessF, refreshRateF, glassKindF, firstRearCameraF, secondRearCameraF, thirdRearCameraF, frontCameraF, batteryAmountF, chargerPowerF) {
    let deviceData = {
        "id": ID(),
        "nameDevice": nameDeviceF.value,
        "processorName": processorNameF.value,
        "processorSize": processorSizeF.value,
        "processorCPU": processorCPUF.value,
        "processorGPU": processorGPUF.value,
        "storage": storageF.value,
        "ram": ramF.value,
        "ufs": ufsF.value,
        "height": heightF.value,
        "width": widthF.value,
        "thickness": thicknessF.value,
        "weight": weightF.value,
        "displayKind": displayKindF.value,
        "pixelDensity": pixelDensityF.value,
        "brightness": brightnessF.value,
        "refreshRate": refreshRateF.value,
        "glassKind": glassKindF.value,
        "firstRearCamera": firstRearCameraF.value,
        "secondRearCamera": secondRearCameraF.value,
        "thirdRearCamera": thirdRearCameraF.value,
        "frontCamera": frontCameraF.value,
        "batteryAmount": batteryAmountF.value,
        "chargerPower": chargerPowerF.value
    }


    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(deviceData)
    })
}

async function showCellphone(url, tbody) {
    let response = await fetch(url)
    let data = await response.json()
    tbody.innerHTML = ""
    data.forEach(phone => {
        tbody.innerHTML +=
            `
        <tr>
        <td >${phone.nameDevice}</td>
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
        <td><button type="button" class = "btn btn-primary" data-id="${phone.id}">Update</td>
        <td><button type="button" class = "btn btn-danger" data-id="${phone.id}">Eliminate</td>
    </tr>
        `
    })

}

async function deleteF(id) {
    await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

async function setInfo(id, nameDeviceF, processorNameF, processorSizeF, processorCPUF, processorGPUF, storageF, ramF, ufsF, heightF, widthF, thicknessF, weightF, displayKindF, pixelDensityF, brightnessF, refreshRateF, glassKindF, firstRearCameraF, secondRearCameraF, thirdRearCameraF, frontCameraF, batteryAmountF, chargerPowerF) {
    let response = await fetch(`${url}?id=${id}`)
    let phoneData = await response.json()
    form.reset()
    nameDeviceF.value = phoneData[0].nameDevice
    processorNameF.value = phoneData[0].processorName
    processorSizeF.value = phoneData[0].processorSize
    processorCPUF.value = phoneData[0].processorCPU
    processorGPUF.value = phoneData[0].processorGPU
    storageF.value = phoneData[0].storage
    ramF.value = phoneData[0].ram
    ufsF.value = phoneData[0].ufs
    heightF.value = phoneData[0].height
    widthF.value = phoneData[0].width
    thicknessF.value = phoneData[0].thickness
    weightF.value = phoneData[0].weight
    displayKindF.value = phoneData[0].displayKind
    pixelDensityF.value = phoneData[0].pixelDensity
    brightnessF.value = phoneData[0].brightness
    refreshRateF.value = phoneData[0].refreshRate
    glassKindF.value = phoneData[0].glassKind
    firstRearCameraF.value = phoneData[0].firstRearCamera
    secondRearCameraF.value = phoneData[0].secondRearCamera
    thirdRearCameraF.value = phoneData[0].thirdRearCamera
    frontCameraF.value = phoneData[0].frontCamera
    batteryAmountF.value = phoneData[0].batteryAmount
    chargerPowerF.value = phoneData[0].chargerPower

}

async function update(id, nameDeviceF, processorNameF, processorSizeF, processorCPUF, processorGPUF, storageF, ramF, ufsF, heightF, widthF, thicknessF, weightF, displayKindF, pixelDensityF, brightnessF, refreshRateF, glassKindF, firstRearCameraF, secondRearCameraF, thirdRearCameraF, frontCameraF, batteryAmountF, chargerPowerF){
    let newInfo = {
    "id":id,
    "nameDevice":nameDeviceF,
    "processorName":processorNameF,
    "processorSize":processorSizeF,
    "processorCPU":processorCPUF,
    "processorGPU":processorGPUF,
    "storage":storageF,
    "ram":ramF,
    "ufs":ufsF,
    "height":heightF,
    "width":widthF,
    "thickness":thicknessF,
    "weight":weightF,
    "displayKind":displayKindF,
    "pixelDensity":pixelDensityF,
    "brightness":brightnessF,
    "refreshRate":refreshRateF,
    "glassKind":glassKindF,
    "firstRearCamera":firstRearCameraF,
    "secondRearCamera":secondRearCameraF,
    "thirdRearCamera":thirdRearCameraF,
    "frontCamera":frontCameraF,
    "batteryAmount":batteryAmountF,
    "chargerPower":chargerPowerF,
    }
    await fetch(`${url}/${id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(newInfo)
    })
}