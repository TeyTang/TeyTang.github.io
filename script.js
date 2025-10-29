const menuToggle = document.getElementById("menuToggle");

const sideMenu = document.getElementById("sideMenu");

const mainContent = document.getElementById("mainContent");

const linkedinURL ="https://www.linkedin.com/in/tey-tang-120a26176";

function showWelcome() {
  mainContent.innerHTML = `
    <div class="welcome">
      <img src="images/TeyTang.png" alt="My Avatar" class="avatar">
      <h2>Hello, I'm Tey Tang!</h2>
      <p>Welcome to my interactive resume. Use the menu to explore my skills, experience, and more.</p>
      <div class="social-links">
        <a href=${linkedinURL} target="_blank" title="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  `;
}

function showAboutMe() {
  mainContent.innerHTML = `
    <div class="welcome">
      <img src="images/TeyTang.png" alt="My Avatar" class="avatar">
      
      <div class="social-links">
        <a href=${linkedinURL} target="_blank" title="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </div>

    <div class="about-section">
      <h2>About Me</h2>
      <p>
        Detail-oriented and technically skilled Computer Science graduate with a focus on web, software, and app development.
        Experienced in mobile app development using Flutter and native languages like Swift. Passionate about learning new
        technologies, including microcontrollers and game development. Proven ability to work collaboratively in teams and adapt
        to changing environments.
      </p>
    </div>
  `;
}


 
let certs = [];

// Toggle side menu
menuToggle.addEventListener("click", () => {
  sideMenu.classList.toggle("hidden");

}); 

// Generic Section Display
function showSection(section) {
  sideMenu.classList.add("hidden");

  if (section === "about") {
    showAboutMe();
  } else if (section === "skills") {
    mainContent.innerHTML = "<h2>Skills</h2><ul><li>Programming Languages: Swift, Dart,Python, Java, C, C++, Python, MATLAB, Assembly</li><li>Web Development: HTML, CSS, PHP, MySQL, JavaScript</li><li>Mobile Development: Flutter, Xcode, Android Studio, Visual studio</li><li>Game Development: 2D & 3D game development, animations, sound effects</li><li>Microcontrollers: Arduino, basic robotics</li><li>Tools & Technologies: GitHub, XAMPP, Visual Basic, CNC programming</li><li>Other Skills: Computer repairs, networking basics, data structures, LaTeX</li></ul>";
  } else if (section === "experience") {
    const experiences = [
      {
        title: "Machine Operator – TBMNC",
        duration: "September 2023 - Present",
        responsibilities: [
          "Train team members on machine and processes.",
          "Ownership maintenance leader; work with maintenance to help troubleshoot machine problems on the line.",
          "Inspect, charge, and test batteries for electric vehicles.",
          "Use PLaPLaGo to update cells status and check status of each cell.",
          "Lead training sessions and public speaking engagements."
        ]
      },
      {
        title: "Technician Contractor – ATM Works",
        duration: "December 2022 - March 2023",
        responsibilities: [
          "Installed and programmed Genmega and Hyosung ATM machines.",
          "Conducted diagnostics and serviced machines on-site across multiple states."
        ]
      },
      {
        title: "App Developer – Axny Group",
        duration: "September 2021 - September 2022",
        responsibilities: [
          "Developed and maintained mobile applications using Flutter.",
          "Collaborated with backend teams to resolve technical issues and improve app performance.",
          "Implemented new app state management patterns and integrated APIs."
        ]
      },
      {
        title: "Technician – Standard Tools and Equipment Co",
        duration: "February 2020 - September 2021",
        responsibilities: [
          "Wired and assembled air make-up units for paint booths.",
          "Developed software for CNC machines to enhance production efficiency."
        ]
      },
    ];

    let html = `<h2>Experience</h2>`;
    experiences.forEach(exp => {
      html += `
        <div class="card">
          <h3>${exp.title}</h3>
          <p class="duration">${exp.duration}</p>
          <ul>
            ${exp.responsibilities.map(r => `<li>${r}</li>`).join("")}
          </ul>
        </div>
      `;
    });

    mainContent.innerHTML = html;

  } else if (section === "education") {
    const education = [
      {
        school: "University of North Carolina at Greensboro",
        degree: "Bachelor in Computer Science",
        duration: "2015 – 2019"
      },
      {
        school: "Guilford College",
        degree: "Computer Science",
        duration: "2013 – 2015"
      },
      {
        school: "Walter Hines Page High School",
        degree: "High School Diploma",
        duration: "2009 – 2013"
      }
    ];

    let html = `<h2>Education</h2>`;
    education.forEach(edu => {
      html += `
        <div class="card">
          <h3>${edu.school}</h3>
          <p class="degree">${edu.degree}</p>
          <p class="duration">${edu.duration}</p>
        </div>
      `;
    });

    mainContent.innerHTML = html;
  }
}


function showCertSection() {
  sideMenu.classList.add("hidden");

  mainContent.innerHTML = `
  <div class="welcome">
      <img src="images/TeyTang.png" alt="My Avatar" class="avatar">
      <h2>These are all of the certifications and diplomas I collected over the years.</h2>
      <p>Please select an item from the drop-down menu to see for yourself.</p>
    </div>
    <h2>Certifications</h2>
    <label for="certSelect">Select a certification/diploma:</label>
    <select id="certSelect" onchange="loadCert(this.value)">  
      <option value="">--Choose a certification/diploma--</option>
    </select>
    <div id="certViewer" style="margin-top:1rem;"></div>
  `;

  // Animate drop-down
  const select = document.getElementById("certSelect");

  select.classList.add("fade-in");

  // Fill select with certifications
  loadCertList(select);
}
const galleryImages = [
  "gallery/image1.jpeg",
  "gallery/image2.jpeg",
  "gallery/image3.jpeg",
  "gallery/image4.jpeg",
  "gallery/image5.jpeg",
  "gallery/image6.jpeg",
  "gallery/image7.jpeg",
  "gallery/image8.jpeg",
  "gallery/image9.jpeg",
  "gallery/image10.jpeg",
  "gallery/image11.jpeg",
  "gallery/image12.jpeg",
  "gallery/image13.jpeg",
  "gallery/image14.jpeg",
  "gallery/image15.jpeg",
];

let currentIndex = 0;

function showGallery() {
  sideMenu.classList.add("hidden");
  currentIndex = 0;

  mainContent.innerHTML = `
    <h2>Gallery</h2>
    <div class="gallery">
      <button onclick="prevImage()">←</button>
      <img id="galleryImage" src="${galleryImages[currentIndex]}" alt="Gallery Image">
      <button onclick="nextImage()">→</button>
    </div>
  `;

  addSwipeListeners();
}
function addSwipeListeners() {
  const img = document.getElementById("galleryImage");
  let startX = 0;

  img.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  img.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;

    if (Math.abs(diff) > 50) { // minimum swipe distance
      if (diff > 0) {
        prevImage();
      } else {
        nextImage();
      }
    }
  });
}


function nextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  document.getElementById("galleryImage").src = galleryImages[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  document.getElementById("galleryImage").src = galleryImages[currentIndex];
}

function loadCertList(select) {
  fetch("certs.json")
    .then((res) => res.json())
    .then((data) => {
      certs = data;

      // Sort alphabetically (case-insensitive)
      certs.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

      // Define the default certification ID
      const defaultCertId = "tcfafdc"; // The complete Flutter And Firebase Developer course

      // Clear dropdown first
      select.innerHTML = "";

      // Add placeholder (always first)
      const placeholder = document.createElement("option");
      placeholder.value = "";
      placeholder.text = "--Choose a certification/diploma--";
      select.appendChild(placeholder);

      // Populate dropdown with sorted certifications
      certs.forEach(cert => {
        const option = document.createElement("option");
        option.value = cert.id;
        option.text = cert.name;
        select.appendChild(option);
      });

      // Try to set and load the default certificate
      const defaultCert = certs.find(cert => cert.id === defaultCertId);
      if (defaultCert) {
        select.value = defaultCert.id;
        loadCert(defaultCert.id);
      }
    })
    .catch(error => console.error("Error loading certifications:", error));
}


function loadCert(id) {
  const cert = certs.find((item) => item.id === id);
  const certViewer = document.getElementById("certViewer");

  if (cert) {
    certViewer.innerHTML = `
      <h3>${cert.name}</h3>
      <iframe src="${cert.file}" title="${cert.name}" onerror='this.outerHTML = "<p>Unable to load PDF. <a href=\\\"${cert.file}\\\" target=\\\"_blank\\\">Click here to view directly</a>.</p>"'></iframe>
    `;
  } else {
    certViewer.innerHTML = "<p>Please select a certificate.</p>";
  }
}

showWelcome();
