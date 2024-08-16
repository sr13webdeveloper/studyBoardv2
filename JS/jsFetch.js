function logBaseURL() {
    const baseURL = window.location.origin + window.location.pathname;
}

logBaseURL();

function getFetchURL(filename) {
    temp = filename.replace(/^\.\//, '');
    const basePath = window.location.pathname.split('/').slice(0, -1).join('/');
    return `${window.location.origin}${basePath}/${temp}`;
}

function openLink(evt, cityName) {
    // Check if the clicked button is outside the accordion
    if (!evt.currentTarget.closest('.accordion')) {
        collapseAccordion();
    }

    var i, tablinks;
    tablinks = document.getElementsByClassName("navbarLinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
    const fetchURL = getFetchURL(cityName);
    console.log('Fetch URL:', fetchURL);
    
    fetch(fetchURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            const tabcontent = document.getElementById('tabcontent');
            tabcontent.innerHTML = data;

            if (cityName.includes('C101.html')) {
                CharacterCounter();
            }
            if (cityName.includes('C102.html')) {
                CharacterCounter();
            }
        })
        .catch(error => {
            console.error('Error fetching page:', error);
        });

    // Check if the screen is mobile
    if (window.innerWidth <= 600) {
        // Collapse the aside only if a submenu button is clicked (not a main menu button)
        if (!evt.currentTarget.classList.contains('accordion-button')) {
            document.querySelector('aside').classList.remove('open');
        }
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("navDefaultOpen").click();
});
