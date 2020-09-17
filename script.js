'use strict'
const app = {
    navHome: document.getElementById('home-btn'),
    navAbout: document.getElementById('about-btn'),
    navContact: document.getElementById('contact-btn'),
    mainContainer: document.getElementById('main-container')
}
function renderAboutVeiw() {
    app.mainContainer.innerHTML = `
    <img src="./img/Mahanandan Tyagi orginal.jpg" class="rounded-circle" alt="Nandan's profile picture" title="Nandan Tyagi" width="10%" />
                <p class="lead p-1">Hi! I am Nandan,</p>
                <p class="text-center lead">I love programming and web development. I love learning new things and creating value for people around me. I am always ready to offer a helping hand if anyone needs it.</p>
                <p class="">In the past I have been a semiprofessional tennis player. I was ranked 6th in India and I beat the 3rd ranked player in Sweden, as a junior. I am also a tennis coach. For the past decade i have been working as a manager in the retail bussiness. Now I am changing my career to software development as I am studying Webdevelopment.NET. My goal is to work in the webdevelopmnet industry by 2022.</p>
    `;
    app.navContact.classList.remove('nav-tabs');
    app.navHome.classList.remove('nav-tabs');
    app.navAbout.classList.add('nav-tabs');
}
function renderHomeVeiw() {
    app.mainContainer.innerHTML = '';
    app.mainContainer.innerHTML = `
    <h2><em>Need a great coworker...?</em></h2>
    <p><i><em>In real life</em>, especially at work, you need special kind of people arround you, so that you have the optimum oppotunity to flourish and grow to your greatest potential.</i></p> <p><i>These are the main character featurs I admire and strive after: </i></p> 
    <ul>
        <li>Benevoulent</li>
        <li>Aspiring</li>
        <li>Humble</li>
        <li>Curious</li>
        <li>Motivated</li>
        <li>Responsible</li>
        <li>Collaborative</li>
        <li>Reliable</li>
    </ul>
    <p>In the software industry, in my opinion, these are the basic soft skills that are extremly valuable.</p>
    `;
    app.navContact.classList.remove('nav-tabs');
    app.navAbout.classList.remove('nav-tabs');
    app.navHome.classList.add('nav-tabs');
}
function renderContactVeiw() {
    app.mainContainer.innerHTML = "";
    app.mainContainer.innerHTML = `
                <h2 class="pb-3 "><em>Get in touch!</em></h2>
                <p><i><em>I would love to gett in together and plan a future venture. </em></i></p> <p><i>Why wait? Hit me up right now, we can discuss it over a coffee or two :P </i></p> 
                <ul>
                    <li class="contact d-flex justify-content-center align-items-center pb-2"><i class="far fa-envelope mr-4"></i><a href="mailto:me@nandantyagi.com" class="text-white"> me@nandantyagi.com</a></li>
                    <li class="contact"><i class="fas fa-phone-alt mr-4"></i><a href="tel:+46707801266" class="text-white">Call me</a></li>
                    <li class="contact"><i class="fas fa-map-marker-alt mr-4 mt-3 mb-3"></i><a href="https://www.google.com/maps/place/Stockholm/@59.3258428,17.7025607,10z/data=!3m1!4b1!4m5!3m4!1s0x465f763119640bcb:0xa80d27d3679d7766!8m2!3d59.3293235!4d18.0685808" target="_blank" rel="noopener noreferrer" class="text-white">I am here!</a></li>
                </ul>
                <h5><em>Always ready!</em></h5>
    `;
    app.navAbout.classList.remove('nav-tabs');
    app.navHome.classList.remove('nav-tabs');
    app.navContact.classList.add('nav-tabs');
}
app.navHome.addEventListener('click', renderHomeVeiw);
app.navAbout.addEventListener('click', renderAboutVeiw);
app.navContact.addEventListener('click', renderContactVeiw);