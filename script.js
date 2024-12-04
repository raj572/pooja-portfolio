// Theme Switcher
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

function toggleTheme() {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

// Check for saved theme preference
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.classList.add(`${savedTheme}-theme`);
    if (savedTheme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});

themeToggle.addEventListener('click', toggleTheme);

// Project data with SVG graphics
const projects = [
    {
        title: "E-commerce Dashboard",
        description: "Developed a comprehensive e-commerce dashboard with real-time sales analytics, inventory management, and responsive design for multiple device types.",
        graphic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>`,
        technologies: ["HTML", "CSS", "JavaScript", "Java", "Charts.js"],
        link: "#"
    },
    {
        title: "Portfolio Website Generator",
        description: "Created a dynamic portfolio generator that allows users to create professional portfolios by inputting their information through a user-friendly interface.",
        graphic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
        </svg>`,
        technologies: ["HTML", "CSS", "JavaScript", "Java"],
        link: "#"
    },
    {
        title: "Weather Application",
        description: "Built a weather application featuring real-time updates, 5-day forecasts, and location-based weather information with interactive maps.",
        graphic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
        </svg>`,
        technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
        link: "#"
    },
    {
        title: "Task Management System",
        description: "Developed a comprehensive task management system with drag-and-drop functionality, priority settings, and deadline tracking features.",
        graphic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>`,
        technologies: ["HTML", "CSS", "JavaScript", "Java", "Local Storage"],
        link: "#"
    },
    {
        title: "Recipe Finder Application",
        description: "Created a recipe finder app with filtering options, ingredient-based search, and detailed cooking instructions with responsive design.",
        graphic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 19h16M4 5h16M9 12h6"></path>
        </svg>`,
        technologies: ["HTML", "CSS", "JavaScript", "Recipe API"],
        link: "#"
    },
    {
        title: "Educational Platform",
        description: "Built an interactive educational platform featuring video lessons, quizzes, and progress tracking for students and teachers.",
        graphic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>`,
        technologies: ["HTML", "CSS", "JavaScript", "Java"],
        link: "#"
    },
    {
        title: "Fitness Tracker",
        description: "Developed a fitness tracking application with workout logging, progress charts, and personalized workout recommendations.",
        graphic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 20V10M12 20V4M6 20v-6"></path>
        </svg>`,
        technologies: ["HTML", "CSS", "JavaScript", "Charts.js"],
        link: "#"
    },
    {
        title: "Real Estate Listing",
        description: "Created a real estate platform with property listings, advanced search filters, and interactive map integration.",
        graphic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>`,
        technologies: ["HTML", "CSS", "JavaScript", "Maps API"],
        link: "#"
    },
    {
        title: "Budget Calculator",
        description: "Developed a budget management tool with expense tracking, savings goals, and visual representation of spending patterns.",
        graphic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>`,
        technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
        link: "#"
    },
    {
        title: "Social Media Dashboard",
        description: "Built a comprehensive social media dashboard for managing multiple platforms with analytics and scheduling features.",
        graphic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>`,
        technologies: ["HTML", "CSS", "JavaScript", "Social APIs"],
        link: "#"
    },
    {
        title: "Online Quiz Platform",
        description: "Created an interactive quiz platform with multiple question types, timer functionality, and instant result generation.",
        graphic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>`,
        technologies: ["HTML", "CSS", "JavaScript", "Java"],
        link: "#"
    },
    {
        title: "Music Player",
        description: "Developed a web-based music player with playlist management, audio visualization, and custom controls.",
        graphic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="5.5" cy="17.5" r="2.5"></circle>
            <circle cx="17.5" cy="15.5" r="2.5"></circle>
            <path d="M8 17V5l12-2v12"></path>
        </svg>`,
        technologies: ["HTML", "CSS", "JavaScript", "Web Audio API"],
        link: "#"
    },
    {
        title: "Job Board Portal",
        description: "Built a job listing platform with advanced search filters, application tracking, and resume upload functionality.",
        graphic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>`,
        technologies: ["HTML", "CSS", "JavaScript", "Java"],
        link: "#"
    },
    {
        title: "Restaurant Ordering System",
        description: "Created an online food ordering system with menu management, cart functionality, and order tracking features.",
        graphic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 9V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
            <circle cx="9" cy="13" r="1"></circle>
            <circle cx="15" cy="13" r="1"></circle>
            <path d="M19 15v-3a2 2 0 0 0-2-2H9"></path>
        </svg>`,
        technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
        link: "#"
    },
    {
        title: "Travel Blog Platform",
        description: "Developed a travel blog platform with image galleries, comment system, and social sharing capabilities.",
        graphic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
        </svg>`,
        technologies: ["HTML", "CSS", "JavaScript", "Java"],
        link: "#"
    }
];

// Updated populateProjects function
function populateProjects() {
    const projectGrid = document.querySelector('.project-grid');
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.2}s`;
        
        projectCard.innerHTML = `
            <div class="project-graphic">
                ${project.graphic}
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="technologies">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectGrid.appendChild(projectCard);
    });
}

// Add scroll reveal animation
function revealOnScroll() {
    const cards = document.querySelectorAll('.project-card');
    const windowHeight = window.innerHeight;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - 100) {
            card.classList.add('visible');
        }
    });
}

// Initialize
window.addEventListener('load', () => {
    populateProjects();
    revealOnScroll();
});

window.addEventListener('scroll', revealOnScroll);

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');

    // Animate Links
    navLinksItems.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Close menu when clicking a link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
}); 