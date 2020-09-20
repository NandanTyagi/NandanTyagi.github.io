'use strict'
// Variable object
const app = {
    navHome: document.getElementById('nav-home'),
    navAbout: document.getElementById('nav-about'),
    navContact: document.getElementById('nav-contact'),
    navCv: document.getElementById('nav-cv'),
    mainContainer: document.getElementById('article')
} 
// Show about view
function renderAboutVeiw() {
    app.mainContainer.innerHTML = '';
    app.mainContainer.innerHTML = `
                <a href="./img/Mahanandan_Tyagi_orginal.jpg" target="_blank" class="d-flex justify-content-center">
                    <img src="./img/Mahanandan_Tyagi.jpg" class="rounded-circle"  alt="Nandan's profile picture" title="Nandan Tyagi" />
                </a>
                <p class="lead p-1">I am Nandan,</p>
                <p class="text-center lead">
                    I love programming and web development. I love learning new things and creating value for people around me. I am always ready to offer a helping hand if anyone needs it.
                </p>
                <p class="text-center">
                    In the past I have been a semiprofessional tennis player. I was ranked 6th in India as a junior. I am also a tennis coach.<br />
                    For the past decade I have been working as a manager in the retail bussiness. Now I am changing my career to software development and I am studying Webdevelopment.NET. My goal is to work in the webdevelopment industry by 2022.
                </p>
    `;
    // Add/Remove nav tabs to show active page
    uiView('about');
}
// Show home view
function renderHomeVeiw() {
    app.mainContainer.innerHTML = '';
    app.mainContainer.innerHTML = `
                <h2 class="mb-4"><em>Need a great team member...?</em></h2>
                <p><i><em>In real life</em>, especially at work, you need special kind of people around you, so that you have the optimum oppotunity to flourish and grow to your greatest potential.</i></p> <p><i>These are the main characteristics I admire and strive after: </i></p> 
                <ul class="list-side">
                    <li>Benevoulent</li>
                    <li>Aspiring</li>
                    <li>Humble</li>
                    <li>Curious</li>
                    <li>Motivated</li>
                    <li>Responsible</li>
                    <li>Collaborative</li>
                    <li>Reliable</li>
                </ul>
                <p>
                    In the software industry, in my opinion, these are the basic soft skills that are extremly valuable.
                </p>
    `;
    // Add/Remove nav tabs to show active page 
    uiView('home');
}
// Show contact view
function renderContactVeiw() {
    app.mainContainer.innerHTML = "";
    app.mainContainer.innerHTML = `
                <h2 class="pb-3 "><em>Get in touch!</em></h2>
                <p><i><em>I would love to get together and plan a future venture. </em></i></p> <p class="text-center"><i>Why wait? Hit me up right now, we can discuss it. </i></p> 
                <ul class="list-side mt-2">
                    <li class="contact d-flex justify-content-center align-items-center pb-2 ">
                        <i class="far fa-envelope mr-4"></i>
                        <a href="mailto:me@nandantyagi.com" class="text-white"> me@nandantyagi.com</a>
                    </li>
                    <li class="contact">
                        <i class="fas fa-phone-alt mr-4"></i>
                        <a href="tel:+46707801266" class="text-white">Call me</a>
                    </li>
                    <li class="contact">
                        <i class="fas fa-map-marker-alt mr-4 mt-3 mb-3"></i>
                        <a href="https://www.google.com/maps/place/Stockholm/@59.3258428,17.7025607,10z/data=!3m1!4b1!4m5!3m4!1s0x465f763119640bcb:0xa80d27d3679d7766!8m2!3d59.3293235!4d18.0685808" target="_blank" rel="noopener noreferrer" class="text-white">I am here!</a>
                    </li>
                </ul>
    `;
    // Add/Remove nav tabs to show active page 
    uiView('contact');
}
// Show CV
function renderCvVeiw() {
    app.mainContainer.innerHTML = "";
    app.mainContainer.innerHTML = `
            <figure>
                <a href="./img/Nandan_Tyagi_CV.jpg" target="_blank" rel="noopener noreferrer">
                <img src="./img/Nandan_Tyagi_CV.jpg" alt="My CV" title="My CV" width="80%" class="cv">
                </a>
            </figure>
    `;
    // Add/Remove nav tabs to show active page 
    uiView('cv');
}
// Add/Remove nav tabs to show active page function 
function uiView(page) {
    if(page === 'home') {
        app.navContact.classList.remove('nav-tabs');
        app.navHome.classList.add('nav-tabs');
        app.navCv.classList.remove('nav-tabs');
        app.navAbout.classList.remove('nav-tabs');
    }else if(page === 'about') {
        app.navContact.classList.remove('nav-tabs');
        app.navHome.classList.remove('nav-tabs');
        app.navCv.classList.remove('nav-tabs');
        app.navAbout.classList.add('nav-tabs');
    }else if(page === 'contact') {
        app.navContact.classList.add('nav-tabs');
        app.navHome.classList.remove('nav-tabs');
        app.navCv.classList.remove('nav-tabs');
        app.navAbout.classList.remove('nav-tabs');
    }else if(page === 'cv') {
        app.navContact.classList.remove('nav-tabs');
        app.navHome.classList.remove('nav-tabs');
        app.navCv.classList.add('nav-tabs');
        app.navAbout.classList.remove('nav-tabs'); 
    }
}
// Eventlisteners
app.navHome.addEventListener('click', renderHomeVeiw);
app.navAbout.addEventListener('click', renderAboutVeiw);
app.navContact.addEventListener('click', renderContactVeiw);
app.navCv.addEventListener('click', renderCvVeiw);
