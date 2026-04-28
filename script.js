const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
const mainContent = document.getElementById("mainContent");
const siteTitle = document.getElementById("siteTitle");
const pageDescription = document.getElementById("pageDescription");

const portfolioData = window.PORTFOLIO_DATA;

if (!portfolioData) {
  throw new Error("portfolio-data.js did not load correctly.");
}

const socialLinks = [
  { key: "linkedin", icon: "fab fa-linkedin", label: "LinkedIn" },
  { key: "github", icon: "fab fa-github", label: "GitHub" }
];

const galleryImages = portfolioData.galleryImages || [];

let certs = [];
let currentIndex = 0;

applySiteMetadata();

menuToggle.addEventListener("click", () => {
  sideMenu.classList.toggle("hidden");
});

function applySiteMetadata() {
  if (siteTitle) {
    siteTitle.textContent = portfolioData.site.name;
  }

  if (pageDescription) {
    pageDescription.content = portfolioData.site.pageDescription;
  }

  document.title = portfolioData.site.pageTitle;
}

function hideMenu() {
  sideMenu.classList.add("hidden");
}

function formatUrlForDisplay(url) {
  try {
    const parsed = new URL(url);
    return `${parsed.hostname.replace(/^www\./, "")}${parsed.pathname}`.replace(/\/$/, "");
  } catch (error) {
    return url;
  }
}

function getResumeContactItems() {
  const items = [];
  const { email, phone, location, portfolio, github, linkedin } = portfolioData.contact;

  if (email) {
    items.push(email);
  }

  if (phone) {
    items.push(phone);
  }

  if (location) {
    items.push(location);
  }

  if (portfolio) {
    items.push(`Portfolio: ${formatUrlForDisplay(portfolio)}`);
  }

  if (github) {
    items.push(`GitHub: ${formatUrlForDisplay(github)}`);
  }

  if (linkedin) {
    items.push(`LinkedIn: ${formatUrlForDisplay(linkedin)}`);
  }

  return items;
}

function getResumeProjects() {
  const selectedTitles = portfolioData.resume.projectTitles || [];

  if (!selectedTitles.length) {
    return portfolioData.projects;
  }

  return portfolioData.projects.filter((project) => selectedTitles.includes(project.title));
}

function renderSocialLinks() {
  const links = socialLinks
    .map((item) => {
      const url = portfolioData.contact[item.key];
      if (!url) {
        return "";
      }

      return `
        <a href="${url}" target="_blank" rel="noopener noreferrer" title="${item.label}">
          <i class="${item.icon}"></i>
        </a>
      `;
    })
    .join("");

  return `<div class="social-links">${links}</div>`;
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
        <img src="images/TeyTang.png" alt="Portrait of ${portfolioData.site.name}" class="avatar">
        <p class="eyebrow">${portfolioData.site.heroEyebrow}</p>
        <h2>${portfolioData.site.roleStatement}</h2>
        <p class="hero-copy">${portfolioData.site.heroIntro}</p>
        <div class="hero-actions">
          <button type="button" class="action-button" onclick="showSection('projects')">View Projects</button>
          <button type="button" class="action-button secondary" onclick="showSection('experience')">View Experience</button>
          <button type="button" class="action-button secondary" onclick="downloadResumePDF()">Download Resume PDF</button>
        </div>
        <div class="hero-downloads">
          <button type="button" class="text-download" onclick="downloadResumeText()">Download Resume TXT</button>
        </div>
        ${renderSocialLinks()}
      </div>
      <div class="hero-highlights">
        ${portfolioData.heroHighlights
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
      <img src="images/TeyTang.png" alt="Portrait of ${portfolioData.site.name}" class="avatar">
      <p class="eyebrow">${portfolioData.site.aboutEyebrow}</p>
      <h2>${portfolioData.site.aboutHeading}</h2>
      <p class="hero-copy">${portfolioData.site.aboutIntro}</p>
      ${renderSocialLinks()}
    </div>
    <section class="about-section card">
      ${portfolioData.about.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </section>
  `;
}

function renderSkills() {
  mainContent.innerHTML = `
    ${renderSectionHeader("Skills", portfolioData.sectionCopy.skillsIntro)}
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
    ${renderSectionHeader("Projects", portfolioData.sectionCopy.projectsIntro)}
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
    ${renderSectionHeader("Experience", portfolioData.sectionCopy.experienceIntro)}
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
    ${renderSectionHeader("Education", portfolioData.sectionCopy.educationIntro)}
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
      <img src="images/TeyTang.png" alt="Portrait of ${portfolioData.site.name}" class="avatar">
      <p class="eyebrow">${portfolioData.sectionCopy.certificationsEyebrow}</p>
      <h2>${portfolioData.sectionCopy.certificationsHeading}</h2>
      <p class="hero-copy">${portfolioData.sectionCopy.certificationsIntro}</p>
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

  if (!galleryImages.length) {
    mainContent.innerHTML = `
      ${renderSectionHeader("Gallery", portfolioData.sectionCopy.galleryIntro)}
      <section class="card">
        <p>No gallery images are listed in portfolio-data.js yet.</p>
      </section>
    `;
    return;
  }

  mainContent.innerHTML = `
    ${renderSectionHeader("Gallery", portfolioData.sectionCopy.galleryIntro)}
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

  if (!img) {
    return;
  }

  let startX = 0;

  img.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
  });

  img.addEventListener("touchend", (event) => {
    const endX = event.changedTouches[0].clientX;
    const difference = endX - startX;

    if (Math.abs(difference) > 50) {
      if (difference > 0) {
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
    .then((response) => response.json())
    .then((data) => {
      certs = data;
      certs.sort((first, second) => first.name.toLowerCase().localeCompare(second.name.toLowerCase()));

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

      const defaultCertId = portfolioData.certifications.defaultId || "";
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

  if (!certViewer) {
    return;
  }

  if (cert) {
    certViewer.innerHTML = `
      <h3>${cert.name}</h3>
      <iframe src="${cert.file}" title="${cert.name}" onerror='this.outerHTML = "<p>Unable to load PDF. <a href=\\"${cert.file}\\" target=\\"_blank\\">Click here to view directly</a>.</p>"'></iframe>
    `;
  } else {
    certViewer.innerHTML = "<p>Please select a certificate.</p>";
  }
}

function buildResumeText() {
  const lines = [];
  const resumeProjects = getResumeProjects();
  const projectFeatureLimit = portfolioData.resume.projectFeatureLimit || 2;

  lines.push(portfolioData.resume.title || portfolioData.site.name);
  lines.push(portfolioData.resume.role || portfolioData.site.roleStatement);

  const contactItems = getResumeContactItems();
  if (contactItems.length) {
    lines.push(contactItems.join(" | "));
  }

  lines.push("");
  lines.push("SUMMARY");
  lines.push(portfolioData.resume.summary);
  lines.push("");
  lines.push("SKILLS");

  portfolioData.skills.forEach((category) => {
    lines.push(`${category.title}: ${category.items.join(", ")}`);
  });

  lines.push("");
  lines.push("EXPERIENCE");

  portfolioData.experience.forEach((experience) => {
    lines.push(`${experience.title} | ${experience.duration}`);
    experience.responsibilities.forEach((item) => {
      lines.push(`- ${item}`);
    });
    lines.push("");
  });

  lines.push("PROJECTS");

  resumeProjects.forEach((project) => {
    lines.push(`${project.title}`);
    lines.push(project.description);
    lines.push(`Tech Stack: ${project.stack.join(", ")}`);
    project.features.slice(0, projectFeatureLimit).forEach((feature) => {
      lines.push(`- ${feature}`);
    });
    const liveLink = project.links.find((link) => link.label.toLowerCase().includes("live") && link.url);
    const repoLink = project.links.find((link) => link.label.toLowerCase().includes("github") && link.url);
    if (repoLink) {
      lines.push(`Repo: ${repoLink.url}`);
    }
    if (liveLink) {
      lines.push(`Live: ${liveLink.url}`);
    }
    lines.push("");
  });

  lines.push("EDUCATION");

  portfolioData.education.forEach((education) => {
    lines.push(`${education.school} | ${education.duration}`);
    lines.push(`${education.degree}`);
    lines.push("");
  });

  return lines.join("\n").trim();
}

function downloadBlob(content, fileName, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function downloadResumeText() {
  hideMenu();
  const fileName = portfolioData.contact.resumeTextFileName || "resume.txt";
  downloadBlob(buildResumeText(), fileName, "text/plain;charset=utf-8");
}

function downloadResumePDF() {
  hideMenu();

  const { jsPDF } = window.jspdf || {};
  if (!jsPDF) {
    console.warn("jsPDF did not load. Falling back to the text resume download.");
    downloadResumeText();
    return;
  }

  const doc = new jsPDF({ unit: "pt", format: "letter" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 48;
  const maxWidth = pageWidth - (margin * 2);
  const textColor = [23, 50, 48];
  const accentColor = [32, 151, 131];
  const mutedColor = [91, 112, 107];
  const resumeProjects = getResumeProjects();
  const projectFeatureLimit = portfolioData.resume.projectFeatureLimit || 2;
  let y = margin;

  function ensureSpace(heightNeeded) {
    if (y + heightNeeded > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
  }

  function addWrappedText(text, options = {}) {
    const fontSize = options.fontSize || 11;
    const fontStyle = options.fontStyle || "normal";
    const color = options.color || textColor;
    const lineHeight = options.lineHeight || (fontSize * 1.35);
    const after = options.after || 8;
    const indent = options.indent || 0;
    const lines = doc.splitTextToSize(text, maxWidth - indent);

    ensureSpace((lines.length * lineHeight) + after);
    doc.setFont("helvetica", fontStyle);
    doc.setFontSize(fontSize);
    doc.setTextColor(...color);
    doc.text(lines, margin + indent, y);
    y += (lines.length * lineHeight) + after;
  }

  function addSectionHeading(title) {
    ensureSpace(36);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(...textColor);
    doc.text(title.toUpperCase(), margin, y);
    y += 10;
    doc.setDrawColor(...accentColor);
    doc.setLineWidth(1);
    doc.line(margin, y, pageWidth - margin, y);
    y += 16;
  }

  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.setTextColor(...textColor);
  doc.text(portfolioData.resume.title || portfolioData.site.name, margin, y);
  y += 26;

  addWrappedText(portfolioData.resume.role || portfolioData.site.roleStatement, {
    fontSize: 13,
    fontStyle: "bold",
    color: accentColor,
    after: 10
  });

  const contactItems = getResumeContactItems();
  if (contactItems.length) {
    addWrappedText(contactItems.join(" | "), {
      fontSize: 10,
      color: mutedColor,
      after: 16
    });
  }

  addSectionHeading("Summary");
  addWrappedText(portfolioData.resume.summary, { after: 14 });

  addSectionHeading("Skills");
  portfolioData.skills.forEach((category) => {
    addWrappedText(`${category.title}: ${category.items.join(", ")}`, {
      fontSize: 10.5,
      after: 6
    });
  });

  y += 6;
  addSectionHeading("Experience");
  portfolioData.experience.forEach((experience) => {
    addWrappedText(experience.title, {
      fontSize: 12,
      fontStyle: "bold",
      after: 2
    });
    addWrappedText(experience.duration, {
      fontSize: 10,
      color: mutedColor,
      after: 6
    });
    experience.responsibilities.forEach((item) => {
      addWrappedText(`- ${item}`, {
        indent: 10,
        after: 4
      });
    });
    y += 6;
  });

  addSectionHeading("Projects");
  resumeProjects.forEach((project) => {
    addWrappedText(project.title, {
      fontSize: 12,
      fontStyle: "bold",
      after: 3
    });
    addWrappedText(project.description, { after: 4 });
    addWrappedText(`Tech Stack: ${project.stack.join(", ")}`, {
      fontSize: 10,
      color: mutedColor,
      after: 5
    });
    project.features.slice(0, projectFeatureLimit).forEach((feature) => {
      addWrappedText(`- ${feature}`, {
        indent: 10,
        after: 4
      });
    });
    const repoLink = project.links.find((link) => link.label.toLowerCase().includes("github") && link.url);
    const liveLink = project.links.find((link) => link.label.toLowerCase().includes("live") && link.url);

    if (repoLink) {
      addWrappedText(`Repo: ${repoLink.url}`, {
        fontSize: 10,
        color: mutedColor,
        after: 4
      });
    }

    if (liveLink) {
      addWrappedText(`Live: ${liveLink.url}`, {
        fontSize: 10,
        color: mutedColor,
        after: 4
      });
    }

    y += 6;
  });

  addSectionHeading("Education");
  portfolioData.education.forEach((education) => {
    addWrappedText(education.school, {
      fontSize: 12,
      fontStyle: "bold",
      after: 2
    });
    addWrappedText(`${education.degree} | ${education.duration}`, {
      fontSize: 10.5,
      color: mutedColor,
      after: 8
    });
  });

  doc.save(portfolioData.contact.resumeFileName || "resume.pdf");
}

showWelcome();
