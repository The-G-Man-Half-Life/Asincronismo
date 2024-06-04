
let header = document.querySelector("header")
let footer = document.querySelector("footer")

header.innerHTML = `
<section class="d-flex justify-content-between align-items-center p-2">
<article>

    <a href="../../index.html" class="text-white">
        <h1>This is a CRUD</h1>
    </a>

</article>
<article class="d-flex gap-4">
    <article class="d-flex gap-4 fw-bold">
        <p class = "m-0">Home</p>
        <p class = "m-0">About</p>
        <p class = "m-0">Services</p>
    </article>
    <article id= "buttons">
    
    <a href="../../../src/pages/login.html">        
    <button id="button-1">
            <span>Log In</span>
    </button>
    </a>

    <a href="../../../src/pages/register.html">
            <button id="button-2">
            <span>Sign Up</span>
        </button>
    </a>

    </article>
</article>
</section>
`

footer.innerHTML = `
<footer class="d-flex flex-column align-items-center gap-2">
<section class="d-flex justify-content-evenly align-items-start mb-5 link">
    <article class="footer-content">
        <h2 class="mb-4">This is my CRUD footer</h2>
        <p>Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Rem quam accusamus cumque neque, 
        error in odit corrupti debitis natus eligendi 
        officia adipisci quos, saepe fugiat asperiores unde, 
        assumenda a velit.</p>
    </article>
    <article>
        <h2>LINKS</h2>
        <p>Link 1</p>
        <p>Link 2</p>
        <p>Link 3</p>
        <p>Link 4</p>
    </article>
    <article>
        <h2>LINKS</h2>
        <p>Link 1</p>
        <p>Link 2</p>
        <p>Link 3</p>
        <p>Link 4</p>
    </article>
    <article>
        <h2>LINKS</h2>
        <p>Link 1</p>
        <p>Link 2</p>
        <p>Link 3</p>
        <p>Link 4</p>
    </article>
</section>
<section>
    <article class="d-flex align-items-center justify-content-center gap-4 register mb-5">
        <p class="m-0">Register for FREE</p>
        <button>SIGN UP!</button>
    </article>
</section>
<section>
    <article class="d-flex gap-2 social-media justify-content-center">
        <div class="facebook-div icon"><img class="facebook" width="30" height="30" src="../../public/images/facebook-icon.webp" alt="facebook" srcset=""></div>
        <div class="twitter icon"><i class="bi bi-twitter"></i></div>
        <div class="google-div icon"><img class="google" width="30" height="30"  src="../../public/images/google-plus.webp" alt="" srcset=""></div>
        <div class="linked-in-div icon"><img width="30" class="linked-in" height="30" src="../../public/images/linkedin.webp" alt="" srcset=""></div>
        <div class="instagram icon"><i class="bi bi-instagram"></i></div>
    </article>
</section>
<hr>
<section class="copyright">
    <article class="d-flex gap-2 justify-content-center">
        <i class="bi bi-c-circle"></i>
        <p>2020 Copyright: <span>MD Bootstrap</span></p>
    </article>
</section>
</footer>
`