    // Global variables
    let portfolioData = {};

    // Initialize the application
    document.addEventListener('DOMContentLoaded', function() {
        initializeLoader();
        initializeNavigation();
        loadPortfolioData();
        initializeAnimations();
        initializeContactForm();
        initializeScrollEffects();
        initializeParticles();
    });

    // Loader Management
    function initializeLoader() {
        window.addEventListener('load', function() {
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.classList.add('hidden');
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }, 1000);
        });
    }

    // Navigation Management
    function initializeNavigation() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Mobile menu toggle
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            
            // Animate hamburger bars
            const bars = hamburger.querySelectorAll('.bar');
            bars.forEach((bar, index) => {
                if (hamburger.classList.contains('active')) {
                    if (index === 0) bar.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                    if (index === 1) bar.style.opacity = '0';
                    if (index === 2) bar.style.transform = 'rotate(45deg) translate(-5px, -6px)';
                } else {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                }
            });
        });
        
        // Close mobile menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                
                const bars = hamburger.querySelectorAll('.bar');
                bars.forEach(bar => {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                });
            });
        });
        
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(15, 23, 42, 0.98)';
            } else {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            }
        });
        
        // Smooth scrolling for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Load Portfolio Data from JSON
    async function loadPortfolioData() {
        try {
            const response = await fetch('data.json');
            portfolioData = await response.json();
            
            populateContent();
        } catch (error) {
            console.error('Error loading portfolio data:', error);
            loadFallbackData();
        }
    }

    function loadFallbackData() {
        // Fallback data in case JSON loading fails
        portfolioData = {
            personal: {
                name: "Varun Jain",
                title: "Passionate Web Developer",
                description: "Dedicated to creating responsive and user-friendly web applications",
                about: "I am a passionate web developer with expertise in modern web technologies. I love creating beautiful, functional, and user-friendly applications that solve real-world problems. My goal is to write clean, efficient code and deliver exceptional user experiences.",
                email: "varun.jain@example.com",
                phone: "+91 12345 67890",
                location: "India"
            },
            stats: {
                experience: "2+",
                projects: "15+",
                technologies: "10+"
            },
            experience: [
                {
                    company: "MenuCards",
                    role: "Backend Developer",
                    type: "Internship",
                    duration: "2024",
                    description: "Developed robust backend systems and APIs using modern technologies. Worked on database design, server-side logic, and API integrations to support web applications.",
                    technologies: ["Nest.js", "PostgreSQL", "TypeScript"]
                    
                },
                {
                    company: "Nexon Logistics",
                    role: "Frontend Developer",
                    type: "Internship",
                    duration: "2024",
                    description: "Created responsive and interactive user interfaces for logistics management systems. Focused on user experience and real-time data visualization.",
                    technologies: ["HTML5", "CSS3", "JavaScript", "Firebase"]
                    
                },
                {
                    company: "SIES Graduate School of Technology",
                    role: "Web Developer",
                    type: "Technical Team Member",
                    duration: "2023 - Present",
                    description: "Lead developer for the college portal system serving thousands of students and faculty. Built comprehensive academic management platform using MERN stack.",
                    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
                    
                    link: "https://portal.siesgst.ac.in/"
                }
            ],
            skills: [
                { name: "HTML5", icon: "fab fa-html5", level: "Expert" },
                { name: "CSS3", icon: "fab fa-css3-alt", level: "Expert" },
                { name: "JavaScript", icon: "fab fa-js-square", level: "Advanced" },
                { name: "React", icon: "fab fa-react", level: "Advanced" },
                { name: "Node.js", icon: "fab fa-node-js", level: "Intermediate" },
                { name: "Git", icon: "fab fa-git-alt", level: "Advanced" }
            ],
            projects: [
                {
                    title: "E-Commerce Platform",
                    description: "A full-featured e-commerce platform with modern UI/UX, payment integration, and admin dashboard.",
                    tags: ["React", "Node.js", "MongoDB"],
                    github: "#",
                    live: "#"
                },
                {
                    title: "Task Management App",
                    description: "A collaborative task management application with real-time updates and team collaboration features.",
                    tags: ["Vue.js", "Express", "Socket.io"],
                    github: "#",
                    live: "#"
                },
                {
                    title: "Weather Dashboard",
                    description: "A responsive weather dashboard with location-based forecasts and interactive charts.",
                    tags: ["JavaScript", "API", "Chart.js"],
                    github: "#",
                    live: "#"
                }
            ],
            social: [
                { name: "GitHub", icon: "fab fa-github", url: "#" },
                { name: "LinkedIn", icon: "fab fa-linkedin", url: "#" },
                { name: "Twitter", icon: "fab fa-twitter", url: "#" },
                { name: "Instagram", icon: "fab fa-instagram", url: "#" }
            ]
        };
        
        populateContent();
    }

    // Populate content from JSON data
    function populateContent() {
        // Hero section
        document.getElementById('developer-name').textContent = portfolioData.personal.name;
        document.getElementById('hero-subtitle').textContent = portfolioData.personal.title;
        document.getElementById('hero-description').textContent = portfolioData.personal.description;
        
        // About section
        document.getElementById('about-description').innerHTML = `<p>${portfolioData.personal.about}</p>`;
        document.getElementById('experience-years').textContent = portfolioData.stats.experience;
        document.getElementById('projects-completed').textContent = portfolioData.stats.projects;
        document.getElementById('technologies-used').textContent = portfolioData.stats.technologies;
        
        // Experience section
        populateExperience();
        
        // Skills section
        populateSkills();
        
        // Projects section
        populateProjects();
        
        // Contact section
        populateContact();
        
        // Social links
        populateSocialLinks();
    }

    function populateExperience() {
        const experienceGrid = document.getElementById('experience-grid');
        experienceGrid.innerHTML = '';
        
        const experienceIcons = {
            'MenuCards': 'fas fa-utensils',
            'Nexon Logistics': 'fas fa-truck',
            'SIES Graduate School of Technology': 'fas fa-graduation-cap'
        };
        
        portfolioData.experience.forEach((exp, index) => {
            const experienceCard = document.createElement('div');
            experienceCard.className = 'experience-card';
            experienceCard.setAttribute('data-aos', 'fade-up');
            experienceCard.setAttribute('data-aos-delay', (index * 200).toString());
            
            const icon = experienceIcons[exp.company] || 'fas fa-briefcase';
            
            const technologiesHTML = exp.technologies.map(tech => 
                `<span class="experience-tech">${tech}</span>`
            ).join('');

            
            
            
            
            const linkHTML = exp.link ? 
                `<a href="${exp.link}" class="experience-link" target="_blank">
                    <i class="fas fa-external-link-alt"></i>
                    View Project
                </a>` : '';
            
            experienceCard.innerHTML = `
                <div class="experience-icon">
                    <i class="${icon}"></i>
                </div>
                <div class="experience-header">
                    <h3 class="experience-company">${exp.company}</h3>
                    <h4 class="experience-role">${exp.role}</h4>
                    <div class="experience-meta">
                        <span class="experience-type">${exp.type}</span>
                        <span class="experience-duration">${exp.duration}</span>
                    </div>
                </div>
                <p class="experience-description">${exp.description}</p>
                <div class="experience-tech-section">
                    <div class="experience-tech-title">Technologies Used</div>
                    <div class="experience-technologies">
                        ${technologiesHTML}
                    </div>
                </div>
                <div class="experience-achievements-section">
                    <div class="experience-achievements-title">Key Achievements</div>
                    
                </div>
                ${linkHTML}
            `;

            experienceGrid.appendChild(experienceCard);
        });
    }

    function populateSkills() {
        const skillsGrid = document.getElementById('skills-grid');
        skillsGrid.innerHTML = '';
        
        portfolioData.skills.forEach((skill, index) => {
            const skillElement = document.createElement('div');
            skillElement.className = 'skill-item';
            skillElement.setAttribute('data-aos', 'fade-up');
            skillElement.setAttribute('data-aos-delay', (index * 100).toString());
            
            skillElement.innerHTML = `
                <div class="skill-icon">
                    <i class="${skill.icon}"></i>
                </div>
                <h3 class="skill-name">${skill.name}</h3>
                <p class="skill-level">${skill.level}</p>
            `;
            
            skillsGrid.appendChild(skillElement);
        });
    }

    function populateProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        projectsGrid.innerHTML = '';
        
        portfolioData.projects.forEach((project, index) => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project-card';
            projectElement.setAttribute('data-aos', 'fade-up');
            projectElement.setAttribute('data-aos-delay', (index * 200).toString());
            
            const tagsHTML = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
            
            const imageHTML = project.image ? 
                `<img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy">` :
                `<div class="project-placeholder">
                    <i class="fas fa-laptop-code"></i>
                </div>`;
            
            projectElement.innerHTML = `
                <div class="project-image">
                    ${imageHTML}
                    <div class="project-overlay">
                        <div class="project-overlay-content">
                            <h3 class="project-overlay-title">${project.title}</h3>
                            <div class="project-overlay-links">
                                <a href="${project.github}" class="project-overlay-link" target="_blank">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="${project.live}" class="project-overlay-link" target="_blank">
                                    <i class="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${tagsHTML}
                    </div>
                    <div class="project-links">
                        <a href="${project.github}" class="project-link" target="_blank">
                            <i class="fab fa-github"></i>
                            Code
                        </a>
                        <a href="${project.live}" class="project-link" target="_blank">
                            <i class="fas fa-external-link-alt"></i>
                            Live Demo
                        </a>
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(projectElement);
        });
    }

    function populateContact() {
        const contactMethods = document.getElementById('contact-methods');
        contactMethods.innerHTML = '';
        
        const methods = [
            {
                icon: 'fas fa-envelope',
                title: 'Email',
                value: portfolioData.personal.email
            },
            {
                icon: 'fas fa-phone',
                title: 'Phone',
                value: portfolioData.personal.phone
            },
            {
                icon: 'fas fa-map-marker-alt',
                title: 'Location',
                value: portfolioData.personal.location
            }
        ];
        
        methods.forEach((method, index) => {
            const methodElement = document.createElement('div');
            methodElement.className = 'contact-method';
            methodElement.setAttribute('data-aos', 'fade-right');
            methodElement.setAttribute('data-aos-delay', (index * 100).toString());
            
            methodElement.innerHTML = `
                <div class="contact-icon">
                    <i class="${method.icon}"></i>
                </div>
                <div class="contact-details">
                    <h4>${method.title}</h4>
                    <p>${method.value}</p>
                </div>
            `;
            
            contactMethods.appendChild(methodElement);
        });
    }

    function populateSocialLinks() {
        const socialLinks = document.getElementById('social-links');
        socialLinks.innerHTML = '';
        
        portfolioData.social.forEach(social => {
            const socialElement = document.createElement('a');
            socialElement.href = social.url;
            socialElement.className = 'social-link';
            socialElement.target = '_blank';
            socialElement.rel = 'noopener noreferrer';
            socialElement.innerHTML = `<i class="${social.icon}"></i>`;
            
            socialLinks.appendChild(socialElement);
        });
    }

    // Initialize Animations
    function initializeAnimations() {
        // Initialize AOS
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
        
        // Add scroll animations for elements without AOS
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        // Observe elements for animations
        const animatedElements = document.querySelectorAll('.fade-in');
        animatedElements.forEach(el => observer.observe(el));
    }

    // Contact Form Management
    function initializeContactForm() {
        const contactForm = document.getElementById('contact-form');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                // Show success message
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Notification System
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#3b82f6'};
            color: white;
            padding: 1rem 2rem;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }

    // Particle Animation
    function initializeParticles() {
        const heroSection = document.getElementById('home');
        const particleContainer = document.createElement('div');
        particleContainer.className = 'particles-container';
        particleContainer.innerHTML = `
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
        `;
        heroSection.appendChild(particleContainer);
    }

    // Scroll Effects
    function initializeScrollEffects() {
        // Active navigation link highlighting
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', function() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
        
        // Scroll to top button
        const scrollTopBtn = document.createElement('button');
        scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollTopBtn.className = 'scroll-top-btn';
        scrollTopBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: var(--gradient-primary);
            border: none;
            border-radius: 50%;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            z-index: 1000;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px var(--shadow-medium);
        `;
        
        document.body.appendChild(scrollTopBtn);
        
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                scrollTopBtn.style.opacity = '1';
                scrollTopBtn.style.transform = 'translateY(0)';
            } else {
                scrollTopBtn.style.opacity = '0';
                scrollTopBtn.style.transform = 'translateY(20px)';
            }
        });
    }

    // Utility Functions
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Performance optimization
    window.addEventListener('resize', debounce(function() {
        // Refresh AOS on resize
        AOS.refresh();
    }, 250));

    // Preload critical resources
    function preloadResources() {
        const criticalResources = [
            'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
        ];
        
        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = resource;
            document.head.appendChild(link);
        });
    }

    // Initialize preloading
    preloadResources();

    // Add some interactive animations
    document.addEventListener('mousemove', function(e) {
        const cursor = document.querySelector('.cursor');
        if (!cursor) {
            const cursorEl = document.createElement('div');
            cursorEl.className = 'cursor';
            cursorEl.style.cssText = `
                position: fixed;
                width: 20px;
                height: 20px;
                background: var(--primary-color);
                border-radius: 50%;
                pointer-events: none;
                mix-blend-mode: difference;
                z-index: 9999;
                opacity: 0.5;
                transition: transform 0.1s ease;
            `;
            document.body.appendChild(cursorEl);
        }
        
        const cursorElement = document.querySelector('.cursor');
        cursorElement.style.left = e.clientX - 10 + 'px';
        cursorElement.style.top = e.clientY - 10 + 'px';
    });

    // Add hover effects for interactive elements
    document.addEventListener('DOMContentLoaded', function() {
        const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                const cursor = document.querySelector('.cursor');
                if (cursor) {
                    cursor.style.transform = 'scale(1.5)';
                }
            });
            
            element.addEventListener('mouseleave', function() {
                const cursor = document.querySelector('.cursor');
                if (cursor) {
                    cursor.style.transform = 'scale(1)';
                }
            });
        });
    });
