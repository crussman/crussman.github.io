// src/main.js

const languageSwitcher = document.getElementById('language-switcher');
const contentContainer = document.getElementById('content');

let currentLanguage = 'en';

languageSwitcher.addEventListener('change', (event) => {
    currentLanguage = event.target.value;
    loadContent();
});

function loadContent() {
    fetch(`./${currentLanguage}.json`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('home-title').innerText = data.home.title;
            document.getElementById('home-description').innerText = data.home.description;
            document.getElementById('services-title').innerText = data.services.title;
            document.getElementById('about-title').innerText = data.about.title;
            document.getElementById('about-description').innerText = data.about.description;
            document.getElementById('contact-title').innerText = data.contact.title;
            document.getElementById('contact-description').innerText = data.contact.description;
        })
        .catch(error => console.error('Error loading content:', error));
}

// Initial load
loadContent();