const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
const mainContent = document.getElementById("mainContent");

const externalLinks = {
  linkedin: "https://www.linkedin.com/in/tey-tang-120a26176",
  githubProfile: "https://github.com/TeyTang",
  portfolioRepo: "https://github.com/TeyTang/TeyTang.github.io",
  portfolioLive: "https://teytang.github.io/"
};

const portfolioData = {
  hero: {
    title: "Software Developer focused on web apps, mobile apps, automation, and technical problem-solving.",
    intro:
      "Computer Science graduate with hands-on experience in Flutter app development, technical troubleshooting, and building practical solutions across software and hardware environments.",
    highlights: [
      {
        title: "Mobile App Development",
        detail: "Built Flutter applications, integrated APIs, and collaborated with backend teams on delivery and debugging."
      },
      {
        title: "Technical Systems",
        detail: "Background in Arduino, CNC programming, electrical troubleshooting, and real-world automation workflows."
      },
      {
        title: "Portfolio Focus",
        detail: "Combining software development with practical problem-solving across web, mobile, and technical production environments."
      }
    ]
  },
  about: [
    "I’m a first-generation Montagnard American with a lifelong curiosity about how systems work, from electronics and vehicles to computers and software.",
    "That curiosity led me to study Computer Science and build a career around learning quickly, solving technical problems, and turning ideas into working products.",
    "My experience spans Flutter mobile development, web technologies, backend API collaboration, CNC and automation work, and hands-on troubleshooting in production environments.",
    "I also created and shared game projects through Mobile Games by Tey. While some older releases are no longer live, game development, mobile apps, and technical experimentation remain a core part of how I learn and build."
  ],
  skills: [
    {
      title: "Languages",
      items: ["Swift", "Dart", "Python", "Java", "C", "C++", "MATLAB", "Assembly", "PHP", "JavaScript", "Visual Basic", "LaTeX"]
    },
    {
      title: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "Responsive web UI", "Single-page interface development"]
    },
    {
      title: "Mobile Development",
      items: ["Flutter", "Xcode", "Android Studio", "Mobile UI development", "2D & 3D game development", "Animations", "Sound effects"]
    },
    {
      title: "Backend / Databases",
      items: ["PHP", "MySQL", "SQL", "REST API integration", "State management", "Data structures"]
    },
    {
      title: "Tools",
      items: ["GitHub", "XAMPP", "Visual Studio", "CNC programming", "Computer repairs"]
    },
    {
      title: "Technical Systems",
      items: [
        "Arduino",
        "Basic robotics",
        "Electrical troubleshooting",
        "HVAC for residential and commercial systems",
        "Networking basics",
        "Mechanic work",
        "Classic car restoration"
      ]
    }
  ],
  projects: [
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive GitHub Pages portfolio designed to present software experience, certifications, technical background, and selected project work in a clear developer-focused format.",
      stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      links: [
        { label: "GitHub Repo", url: externalLinks.portfolioRepo, fallback: "Repository unavailable" },
        { label: "Live Demo", url: externalLinks.portfolioLive, fallback: "Demo unavailable" }
      ],
      features: [
        "Built as a lightweight static site with dynamic section rendering and no framework dependency.",
        "Preserved the certification viewer and swipe-enabled gallery while improving maintainability.",
        "Refactored portfolio content into clearer data objects so future updates are lower-risk."
      ]
    },
    {
      title: "Mobile Games by Tey",
      description:
        "Independent mobile game projects and prototypes focused on gameplay experimentation, creative iteration, and learning through hands-on release work.",
      stack: ["Mobile game prototyping", "Gameplay design", "Animation", "Sound integration", "App release workflows"],
      links: [
        { label: "GitHub Repo", url: "", fallback: "Repositories are not currently public" },
        { label: "Live Demo", url: "", fallback: "Legacy store releases are currently inactive" }
      ],
      features: [
        "Built and iterated on mobile game concepts with attention to player flow, polish, and presentation.",
        "Worked through the challenges of asset integration, animation, and sound in mobile experiences.",
        "Used independent project work to strengthen product thinking, iteration speed, and creative problem-solving."
      ]
    },
    {
      title: "Flutter Mobile App Work",
      description:
        "Professional mobile app development experience delivering Flutter features, API integrations, and production fixes in collaboration with backend teams.",
      stack: ["Flutter", "Dart", "REST APIs", "App state management", "Backend collaboration"],
      links: [
        { label: "GitHub Repo", url: "", fallback: "Client work is not publicly available" },
        { label: "Live Demo", url: "", fallback: "Production apps were maintained as private work" }
      ],
      features: [
        "Implemented app features and UI updates in Flutter across multiple screens and user flows.",
        "Integrated APIs, worked through technical issues with backend teams, and improved data handling reliability.",
        "Adjusted state management patterns and resolved bugs to support smoother app performance."
      ]
    },
    {
      title: "Arduino / CNC / Technical Automation Projects",
      description:
        "Hands-on technical projects spanning Arduino, CNC programming, industrial equipment support, and real-world troubleshooting where software and hardware meet.",
      stack: ["Arduino", "CNC programming", "Electrical systems", "Basic robotics", "Technical troubleshooting"],
      links: [
        { label: "GitHub Repo", url: "", fallback: "Code varies by build and is not packaged as a public repo" },
        { label: "Live Demo", url: "", fallback: "Projects are physical or on-site implementations" }
      ],
      features: [
        "Connected software logic and machine behavior in practical production and technical environments.",
        "Supported troubleshooting across electrical, mechanical, and process-related issues.",
        "Applied a builder mindset to automation work where reliability and hands-on debugging matter."
      ]
    }
  ],
  experience: [
    {
      title: "Machine Operator – TBMNC",
      duration: "September 2023 - Present",
      responsibilities: [
        "Train team members on machine workflows, process standards, and production routines.",
        "Partner with maintenance teams to troubleshoot line issues and support equipment uptime.",
        "Inspect, charge, and test electric-vehicle batteries while maintaining process accuracy.",
        "Track battery cell status in PLaPLaGo and communicate issues clearly across the line.",
        "Lead training sessions and technical communication in fast-paced manufacturing environments."
      ]
    },
    {
      title: "Technician Contractor – ATM Works",
      duration: "December 2022 - March 2023",
      responsibilities: [
        "Installed, configured, and programmed Genmega and Hyosung ATM machines at client sites.",
        "Diagnosed hardware, setup, and service issues in the field across multiple states."
      ]
    },
    {
      title: "App Developer – Axny Group",
      duration: "September 2021 - September 2022",
      responsibilities: [
        "Built and maintained Flutter mobile application features in a collaborative development environment.",
        "Integrated APIs and worked with backend teams to troubleshoot technical issues and improve reliability.",
        "Refined app state management patterns, resolved bugs, and supported overall app performance."
      ]
    },
    {
      title: "Technician – Standard Tools and Equipment Co",
      duration: "February 2020 - September 2021",
      responsibilities: [
        "Wired and assembled air make-up units for paint booth systems using technical specifications and diagrams.",
        "Developed CNC machine software and programming updates to improve production efficiency."
      ]
    }
  ],
  education: [
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
  ]
};

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

let certs = [];
let currentIndex = 0;

menuToggle.addEventListener("click", () => {
  sideMenu.classList.toggle("hidden");
});

function hideMenu() {
  sideMenu.classList.add("hidden");
}

function renderSocialLinks() {
  return `
    <div class="social-links">
      <a href="${externalLinks.linkedin}" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="${externalLinks.githubProfile}" target="_blank" rel="noopener noreferrer" title="GitHub">
        <i class="fab fa-github"></i>
      </a>
    </div>
  `;
}

function renderSectionHeader(title, intro) {
  return `
    <div class="section-heading">
      <h2>${title}</h2>
      ${intro ? `<p>${intro}</p>` : ""}
    </div>
  `;
}

function renderTagList(items) {
  return `
    <div class="tag-list">
      ${items.map((item) => `<span class="tag">${item}</span>`).join("")}
    </div>
  `;
}

function renderProjectLinks(links) {
  return `
    <div class="link-list">
      ${links
        .map((link) =>
          link.url
            ? `
              <a class="link-pill" href="${link.url}" target="_blank" rel="noopener noreferrer">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                <span>${link.label}</span>
              </a>
            `
            : `<span class="link-pill unavailable">${link.label}: ${link.fallback}</span>`
        )
        .join("")}
    </div>
  `;
}

function showWelcome() {
  mainContent.innerHTML = `
    <section class="hero-panel">
      <div class="welcome">
        <img src="images/TeyTang.png" alt="Portrait of Tey Tang" class="avatar">
        <p class="eyebrow">Software Developer Portfolio</p>
        <h2>${portfolioData.hero.title}</h2>
        <p class="hero-copy">${portfolioData.hero.intro}</p>
        <div class="hero-actions">
          <button type="button" class="action-button" onclick="showSection('projects')">View Projects</button>
          <button type="button" class="action-button secondary" onclick="showSection('experience')">View Experience</button>
        </div>
        ${renderSocialLinks()}
      </div>
      <div class="hero-highlights">
        ${portfolioData.hero.highlights
          .map(
            (highlight) => `
              <article class="highlight-card">
                <h3>${highlight.title}</h3>
                <p>${highlight.detail}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function showAboutMe() {
  mainContent.innerHTML = `
    <div class="welcome welcome-compact">
      <img src="images/TeyTang.png" alt="Portrait of Tey Tang" class="avatar">
      <p class="eyebrow">About Me</p>
      <h2>Developer with a builder mindset and a strong technical foundation.</h2>
      <p class="hero-copy">I enjoy working on software that solves practical problems, especially when it involves learning new systems and making complex things easier to use.</p>
      ${renderSocialLinks()}
    </div>
    <section class="about-section card">
      ${portfolioData.about.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </section>
  `;
}

function renderSkills() {
  mainContent.innerHTML = `
    ${renderSectionHeader(
      "Skills",
      "Current skills grouped into cleaner categories while keeping the original breadth across software, tools, and technical systems."
    )}
    <div class="skill-grid">
      ${portfolioData.skills
        .map(
          (category) => `
            <article class="card skill-card">
              <h3>${category.title}</h3>
              <ul class="skill-list">
                ${category.items.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderProjects() {
  mainContent.innerHTML = `
    ${renderSectionHeader(
      "Projects",
      "Selected work and representative project areas across web, mobile, and technical automation. Public links are included where they are available."
    )}
    <div class="project-grid">
      ${portfolioData.projects
        .map(
          (project) => `
            <article class="card project-card">
              <div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
              </div>
              <div class="project-block">
                <h4>Tech Stack</h4>
                ${renderTagList(project.stack)}
              </div>
              <div class="project-block">
                <h4>Links</h4>
                ${renderProjectLinks(project.links)}
              </div>
              <div class="project-block">
                <h4>Key Features / Challenges Solved</h4>
                <ul class="feature-list">
                  ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
                </ul>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderExperience() {
  mainContent.innerHTML = `
    ${renderSectionHeader(
      "Experience",
      "Software-related work is emphasized here without overstating scope, with stronger wording around Flutter development, API work, and technical collaboration."
    )}
    ${portfolioData.experience
      .map(
        (experience) => `
          <article class="card">
            <h3>${experience.title}</h3>
            <p class="duration">${experience.duration}</p>
            <ul>
              ${experience.responsibilities.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </article>
        `
      )
      .join("")}
  `;
}

function renderEducation() {
  mainContent.innerHTML = `
    ${renderSectionHeader("Education", "Academic background supporting software development and technical problem-solving.")}
    <div class="content-grid">
      ${portfolioData.education
        .map(
          (education) => `
            <article class="card">
              <h3>${education.school}</h3>
              <p class="degree">${education.degree}</p>
              <p class="duration">${education.duration}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

const sectionRenderers = {
  about: showAboutMe,
  skills: renderSkills,
  projects: renderProjects,
  experience: renderExperience,
  education: renderEducation
};

function showSection(section) {
  hideMenu();
  if (sectionRenderers[section]) {
    sectionRenderers[section]();
  }
}

function showCertSection() {
  hideMenu();

  mainContent.innerHTML = `
    <div class="welcome welcome-compact">
      <img src="images/TeyTang.png" alt="Portrait of Tey Tang" class="avatar">
      <p class="eyebrow">Certifications</p>
      <h2>Technical certifications, coursework, and trade training.</h2>
      <p class="hero-copy">Choose a certification or diploma from the list to review it directly on the site.</p>
    </div>
    <section class="card">
      <label for="certSelect">Select a certification/diploma:</label>
      <select id="certSelect" onchange="loadCert(this.value)">
        <option value="">--Choose a certification/diploma--</option>
      </select>
      <div id="certViewer"></div>
    </section>
  `;

  const select = document.getElementById("certSelect");
  select.classList.add("fade-in");
  loadCertList(select);
}

function showGallery() {
  hideMenu();
  currentIndex = 0;

  mainContent.innerHTML = `
    ${renderSectionHeader("Gallery", "A quick look at hands-on work, projects, and technical interests outside the written sections.")}
    <section class="gallery">
      <button type="button" onclick="prevImage()" aria-label="Previous gallery image">←</button>
      <img id="galleryImage" src="${galleryImages[currentIndex]}" alt="Gallery image 1">
      <button type="button" onclick="nextImage()" aria-label="Next gallery image">→</button>
    </section>
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

function updateGalleryImage() {
  const galleryImage = document.getElementById("galleryImage");
  if (galleryImage) {
    galleryImage.src = galleryImages[currentIndex];
    galleryImage.alt = `Gallery image ${currentIndex + 1}`;
  }
}

function nextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  updateGalleryImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  updateGalleryImage();
}

function loadCertList(select) {
  fetch("certs.json")
    .then((res) => res.json())
    .then((data) => {
      certs = data;

      // Sort alphabetically (case-insensitive)
      certs.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

      const defaultCertId = "sqlcert";

      select.innerHTML = "";

      const placeholder = document.createElement("option");
      placeholder.value = "";
      placeholder.text = "--Choose a certification/diploma--";
      select.appendChild(placeholder);

      certs.forEach((cert) => {
        const option = document.createElement("option");
        option.value = cert.id;
        option.text = cert.name;
        select.appendChild(option);
      });

      const defaultCert = certs.find((cert) => cert.id === defaultCertId);
      if (defaultCert) {
        select.value = defaultCert.id;
        loadCert(defaultCert.id);
      }
    })
    .catch((error) => console.error("Error loading certifications:", error));
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
