let header = document.querySelector("header")
let footer = document.querySelector("footer")

header.innerHTML = `
<section class="d-flex justify-content-between align-items-center p-2">
<article>
    <h1>This is a CRUD</h1>
</article>
<article class="d-flex gap-4">
    <article class="d-flex gap-4 fw-bold">
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
    </article>
    <article >
        <button id="button-1">
            <span>Log In</span>
        </button>
        <button id="button-2">
            <span>Sign Up</span>
        </button>
    </article>
</article>
</section>
`