// Toggle the side menu
function toggleMenu() {
    const menu = document.getElementById("side-menu");
    const backdrop = document.querySelector(".backdrop");
    menu.classList.toggle("open");
    backdrop.classList.toggle("active");
}
// Function to display the selected certificate
function displayCertificate() {
    // Get the selected option's value from the dropdown
    var certDropdown = document.getElementById('certDropdown');
    var selectedCert = certDropdown.value;
    
    // Get the iframe element
    var iframe = document.querySelector('.pdf-viewer iframe');
    
    // If a certificate is selected, update the iframe source, otherwise do nothing
    if (selectedCert) {
        iframe.src = selectedCert;
    }
}
// Load welcome content on page load
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

// Display content based on category
function showContent(category) {
    const content = document.getElementById("main-content");
    const contentMap = {
        about: "about.html",
        experience: "experience.html",
        education: "education.html",
        certifications: "certifications.html",
        gallery: "gallery.html",
        skills: "skills.html",
        contact: "contact.html",
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
            if (category === 'gallery') {
                initializeGallery(); // Initialize gallery functionality
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            content.innerHTML = "<h1>Error</h1><p>Could not load content.</p>";
        });

    // Close the menu
    toggleMenu();
}

// Function to initialize the gallery and lightbox functionality
function initializeGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    // Add click event listeners to each gallery item
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index; // Set the current index to the clicked image
            openLightbox(); // Open the lightbox
        });
    });

    // Function to open the lightbox
    function openLightbox() {
        lightbox.style.display = 'flex'; // Show the lightbox
        updateLightboxContent(); // Update the content of the lightbox
    }

    // Function to update the lightbox content
    function updateLightboxContent() {
        lightboxImg.src = galleryItems[currentIndex].src; // Set the image source
    }

    // Close the lightbox when the close button is clicked
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none'; // Hide the lightbox
    });

    // Navigate to the previous image
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryItems.length - 1; // Loop back to the last image if at the first
        updateLightboxContent(); // Update the lightbox content
    });

    // Navigate to the next image
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < galleryItems.length - 1) ? currentIndex + 1 : 0; // Loop back to the first image if at the last
        updateLightboxContent(); // Update the lightbox content
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none'; // Hide the lightbox
        }
    });
}
// Call loadWelcomeContent when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () =>{
    loadWelcomeContent(); // Load the welcome content
});
function sortDropdown(dropdownId) {
        const select = document.getElementById(dropdownId);
        const options = Array.from(select.options);

        // Sort options alphabetically
        options.sort((a, b) => a.text.localeCompare(b.text));

        // Clear existing options
        select.innerHTML = '';

        // Append sorted options
        options.forEach(option => select.add(option));
    }

    // Call the function to sort the dropdown
    sortDropdown('certDropdown');
