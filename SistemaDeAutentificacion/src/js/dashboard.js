(function () {
    let userOnline = localStorage.getItem("userOnline")

    if (userOnline == null) {
        window.location.href = "/"
    }
})()

let btnLogout = document.getElementById("btn-logout")

btnLogout.addEventListener("click", () => {
    localStorage.removeItem("userOnline")
    window.location.href = "/"
})