// Toggle the side menu
function toggleMenu() {
    const menu = document.getElementById("side-menu");
    const backdrop = document.querySelector(".backdrop");
    menu.classList.toggle("open");
    backdrop.classList.toggle("active");
}

// Display content based on category
function showContent(category) {
    const content = document.getElementById("main-content");
    const contentMap = {
        about: "about.html",
        experience: "experience.html",
        education: "education.html",
        certifications: "certifications.html",
        skills: "skills.html",
        contact: "contact.html"
    };
    const filePath = contentMap[category] || "welcome.html"; // Default to a welcome file if category not found

    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            content.innerHTML = data; // Update main content with fetched HTML
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            content.innerHTML = "<h1>Error</h1><p>Could not load content.</p>";
        });

    // Close the menu
    toggleMenu();
}


function loadWelcomeContent() {
    const content = document.getElementById("main-content");
    fetch("welcome.html")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            content.innerHTML = data; // Update main content with fetched HTML
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            content.innerHTML = "<h1>Error</h1><p>Could not load content.</p>";
        });
}

// Add touch gestures using Hammer.js
document.addEventListener("DOMContentLoaded", () => {
    loadWelcomeContent();
    const menu = document.getElementById("side-menu");
    const backdrop = document.querySelector(".backdrop");
    const hammerBody = new Hammer(document.body);

    // Swipe right to open menu
    hammerBody.on("swiperight", () => {
        if (!menu.classList.contains("open")) {
            menu.classList.add("open");
            backdrop.classList.add("active");
        }
    });

    // Swipe left to close menu
    hammerBody.on("swipeleft", () => {
        if (menu.classList.contains("open")) {
            menu.classList.remove("open");
            backdrop.classList.remove("active");
        }
    });
});

function displayCertificate() {
    const dropdown = document.getElementById('certDropdown');
    const pdfViewer = document.getElementById('pdfViewer');
    const selectedValue = dropdown.value;

    if (selectedValue) {
        pdfViewer.src = selectedValue; // Set the source of the iframe to the selected PDF
        pdfViewer.style.display = 'block'; // Show the iframe
    } else {
        pdfViewer.src = ''; // Clear the iframe source
        pdfViewer.style.display = 'none'; // Hide the iframe
    }
}
