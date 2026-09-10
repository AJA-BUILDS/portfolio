// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollAnimations();
    initSkillBars();
    initContactForm();
    initFloatingElements();
    initSmoothScrolling();
    initProfileImageUpload();
    initEnhancedHomeAnimations();
    initHighlightSections();
    
    // Initialize contact info button
    const contactBtn = document.getElementById('contactInfoBtn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showContactInfo();
        });
    }
    
    // Remove entrance animation for profile image container on page load
    // const imageContainer = document.querySelector('.image-container');
    // if (imageContainer) {
    //     imageContainer.classList.add('image-loaded');
    //     setTimeout(() => imageContainer.classList.remove('image-loaded'), 1000);
    // }

    initStarfield();
});

// Navigation functionality
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(13, 13, 13, 0.98)';
        } else {
            navbar.style.background = 'rgba(13, 13, 13, 0.95)';
        }
        
        // Update active navigation based on scroll position
        updateActiveNavigation();
    });
    
    // Set initial active state
    updateActiveNavigation();
}

// Update active navigation based on scroll position
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    // Observe all elements with data-aos attribute
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(el => observer.observe(el));
}

// Skill bars animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target;
                const percentage = progress.getAttribute('data-progress');
                progress.style.width = percentage + '%';
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => skillObserver.observe(bar));
}

// Contact form handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                contactForm.classList.add('error-shake');
                setTimeout(() => contactForm.classList.remove('error-shake'), 600);
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                const emailInput = contactForm.querySelector('#email');
                emailInput.classList.add('error-shake');
                setTimeout(() => emailInput.classList.remove('error-shake'), 600);
                return;
            }
            
            // Get button elements
            const submitBtn = contactForm.querySelector('.btn-submit');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnIcon = submitBtn.querySelector('.btn-icon');
            const btnGlow = submitBtn.querySelector('.btn-glow');
            
            // Save original content
            const originalText = btnText.textContent;
            const originalIcon = btnIcon.className;
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.classList.add('loading');
            btnText.textContent = 'Sending...';
            btnIcon.className = 'fas fa-spinner fa-spin btn-icon';
            
            // Simulate API call
            setTimeout(() => {
                // Show success state
                submitBtn.classList.remove('loading');
                submitBtn.classList.add('success');
                btnText.textContent = 'Message Sent!';
                btnIcon.className = 'fas fa-check btn-icon';
                btnGlow.style.background = 'linear-gradient(135deg, #10B981, #059669)';
                
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                contactForm.reset();
                
                // Reset button after delay
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('success');
                    btnText.textContent = originalText;
                    btnIcon.className = originalIcon;
                    btnGlow.style.background = '';
                }, 2000);
            }, 2000);
        });
    }
}

// Floating elements animation
function initFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        floatingElements.forEach(element => {
            const speed = element.getAttribute('data-speed');
            const yPos = -(scrolled * speed / 10);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 70; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Add to page
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

// Parallax effect for hero section
function initParallax() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Typing effect for hero title
function initTypingEffect() {
    const titleName = document.querySelector('.title-name');
    if (titleName) {
        const text = titleName.textContent;
        titleName.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                titleName.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect when hero section is visible
        const heroObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(typeWriter, 500);
                    heroObserver.unobserve(entry.target);
                }
            });
        });
        
        heroObserver.observe(document.querySelector('.hero'));
    }
}

// Project card hover effects
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Social media link effects
function initSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize additional effects
document.addEventListener('DOMContentLoaded', function() {
    initParallax();
    initTypingEffect();
    initProjectCards();
    initSocialLinks();
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add CSS for loading state
const loadingStyles = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded)::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--bg-primary);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    body:not(.loaded)::after {
        content: '';
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50px;
        height: 50px;
        border: 3px solid var(--border-color);
        border-top: 3px solid var(--accent-primary);
        border-radius: 50%;
        animation: spin 1s linear infinite;
        z-index: 10000;
    }
    
    @keyframes spin {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
    }
`;

// Inject loading styles
const styleSheet = document.createElement('style');
styleSheet.textContent = loadingStyles;
document.head.appendChild(styleSheet);

// Add notification styles
const notificationStyles = `
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .notification-content i {
        font-size: 1.2rem;
    }
`;

const notificationStyleSheet = document.createElement('style');
notificationStyleSheet.textContent = notificationStyles;
document.head.appendChild(notificationStyleSheet);

// Profile image upload functionality with enhanced animations
function initProfileImageUpload() {
    const imageUpload = document.getElementById('imageUpload');
    const profileImage = document.getElementById('profileImage');
    const placeholderAvatar = document.getElementById('placeholderAvatar');
    const profileImageWrapper = document.querySelector('.profile-image-wrapper');
    const uploadLabel = document.querySelector('.upload-label span');
    const uploadIcon = document.querySelector('.upload-label i');
    const imageContainer = document.querySelector('.image-container');

    if (imageUpload) {
        imageUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            
            if (file) {
                // Validate file type
                if (!file.type.startsWith('image/')) {
                    showNotification('Please select a valid image file', 'error');
                    imageContainer.classList.add('error-shake');
                    setTimeout(() => imageContainer.classList.remove('error-shake'), 600);
                    return;
                }

                // Validate file size (max 5MB)
                if (file.size > 5 * 1024 * 1024) {
                    showNotification('Image size should be less than 5MB', 'error');
                    imageContainer.classList.add('error-shake');
                    setTimeout(() => imageContainer.classList.remove('error-shake'), 600);
                    return;
                }

                // Show loading state
                uploadIcon.className = 'fas fa-spinner upload-loading';
                uploadLabel.textContent = 'Uploading...';
                imageContainer.classList.add('uploading');

                const reader = new FileReader();
                
                reader.onload = function(e) {
                    // Add success bounce animation
                    imageContainer.classList.add('upload-success');
                    
                    // Update image with animation
                    setTimeout(() => {
                        profileImage.src = e.target.result;
                        profileImage.style.display = 'block';
                        placeholderAvatar.style.display = 'none';
                        profileImageWrapper.classList.add('has-image');
                        
                        // Reset upload label
                        uploadIcon.className = 'fas fa-camera';
                        uploadLabel.textContent = 'Change Photo';
                        
                        // Remove loading state
                        imageContainer.classList.remove('uploading');
                        
                        // Save to localStorage for persistence
                        localStorage.setItem('profileImage', e.target.result);
                        
                        showNotification('Profile image uploaded successfully! ✨', 'success');
                        
                        // Remove success animation after completion
                        setTimeout(() => {
                            imageContainer.classList.remove('upload-success');
                        }, 800);
                    }, 300);
                };
                
                reader.onerror = function() {
                    uploadIcon.className = 'fas fa-camera';
                    uploadLabel.textContent = 'Add Photo';
                    imageContainer.classList.remove('uploading');
                    showNotification('Failed to upload image. Please try again.', 'error');
                    imageContainer.classList.add('error-shake');
                    setTimeout(() => imageContainer.classList.remove('error-shake'), 600);
                };
                
                reader.readAsDataURL(file);
            }
        });
    }

    // Add click animation
    if (imageContainer) {
        imageContainer.addEventListener('click', function() {
            this.classList.add('photo-bounce');
            setTimeout(() => this.classList.remove('photo-bounce'), 500);
        });
    }

    // Add drag and drop functionality
    if (imageContainer) {
        imageContainer.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.classList.add('drag-over');
        });

        imageContainer.addEventListener('dragleave', function(e) {
            e.preventDefault();
            this.classList.remove('drag-over');
        });

        imageContainer.addEventListener('drop', function(e) {
            e.preventDefault();
            this.classList.remove('drag-over');
            
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                imageUpload.files = files;
                imageUpload.dispatchEvent(new Event('change'));
            }
        });
    }

    // Load saved image on page load with animation
    // Only use localStorage image if the file doesn't load (after checking file exists)
    const savedImage = localStorage.getItem('profileImage');
    
    // Check if the image file loads successfully
    if (profileImage) {
        profileImage.onerror = function() {
            // If file fails to load, try localStorage image
            if (savedImage) {
                this.src = savedImage;
                this.style.display = 'block';
                if (placeholderAvatar) placeholderAvatar.style.display = 'none';
                if (profileImageWrapper) profileImageWrapper.classList.add('has-image');
                if (uploadLabel) uploadLabel.textContent = 'Change Photo';
            }
        };
        
        profileImage.onload = function() {
            // File loaded successfully, clear localStorage to use file
            if (savedImage && this.src.includes('assets/img')) {
                // Only clear if we're using the file, not if user uploaded via interface
                // localStorage.removeItem('profileImage');
            }
            this.style.display = 'block';
            if (placeholderAvatar) placeholderAvatar.style.display = 'none';
            if (profileImageWrapper) profileImageWrapper.classList.add('has-image');
        };
    }

    // Add hover sound effect simulation (visual feedback)
    if (imageContainer) {
        imageContainer.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.08) rotate(2deg)';
        });

        imageContainer.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }
}

// Enhanced Home Animations
function initEnhancedHomeAnimations() {
    initMatrixRain();
    initInteractiveParticles();
    initButtonInteractions();
    initTypingAnimations();
    initGlitchEffect();
    initParallaxEffects();
}

// Matrix Rain Effect
function initMatrixRain() {
    const matrixRain = document.querySelector('.matrix-rain');
    if (!matrixRain) return;

    // Create additional matrix columns dynamically
    for (let i = 0; i < 10; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = Math.random() * 100 + '%';
        column.style.animationDelay = Math.random() * 3 + 's';
        column.style.animationDuration = (2 + Math.random() * 2) + 's';
        matrixRain.appendChild(column);
    }
}

// Interactive Particle System
function initInteractiveParticles() {
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach(particle => {
        particle.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(2)';
            this.style.boxShadow = '0 0 20px rgba(99, 102, 241, 1)';
        });
        
        particle.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 0 10px rgba(99, 102, 241, 0.8)';
        });
    });
}

// Enhanced Button Interactions
function initButtonInteractions() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        // Add ripple effect
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
        
        // Add hover sound effect (visual feedback)
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Typing Animations
function initTypingAnimations() {
    const typingTexts = document.querySelectorAll('.typing-text, .typing-subtitle');
    
    typingTexts.forEach(text => {
        const originalText = text.textContent;
        text.textContent = '';
        text.style.borderRight = '3px solid var(--accent-primary)';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                text.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                text.style.borderRight = 'none';
            }
        };
        
        // Start typing after a delay
        setTimeout(typeWriter, 500);
    });
}

// Glitch Effect
function initGlitchEffect() {
    const glitchText = document.querySelector('.glitch-text');
    if (!glitchText) return;
    
    // Random glitch effect
    setInterval(() => {
        if (Math.random() > 0.95) {
            glitchText.style.animation = 'glitch 0.2s';
            setTimeout(() => {
                glitchText.style.animation = 'glitch 2s infinite';
            }, 200);
        }
    }, 1000);
}

// Parallax Effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.floating-code, .glowing-orb, .bubble');
    
    window.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        parallaxElements.forEach((element, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            
            element.style.transform += ` translate(${x}px, ${y}px)`;
        });
    });
}

// Highlight Sections Functionality
function initHighlightSections() {
    const highlightSections = document.querySelectorAll('.highlight-section.pressable-card');
    
    highlightSections.forEach(section => {
        section.addEventListener('click', function() {
            const sectionId = this.id;
            handleHighlightClick(sectionId, this);
        });
    });
}

// Handle highlight section clicks
function handleHighlightClick(sectionId, element) {
    // Add click animation
    element.classList.add('clicked');
    setTimeout(() => element.classList.remove('clicked'), 300);
    
    // Handle different sections
    switch(sectionId) {
        case 'highlight-cs':
            showCSDetails();
            break;
        case 'highlight-fullstack':
            showFullStackDetails();
            break;
        case 'highlight-uiux':
            showUIUXDetails();
            break;
        case 'highlight-problem':
            showProblemSolverDetails();
            break;
    }
}

// Show Computer Science Graduate details
function showCSDetails() {
    const modal = createModal({
        title: 'Computer Science Graduate',
        icon: 'fas fa-graduation-cap',
        content: `
            <div class="cs-details">
                <h4>Academic Background</h4>
                <ul>
                    <li><strong>Degree:</strong> Bachelor of Computer Science</li>
                    <li><strong>Focus Areas:</strong> Software Engineering, Algorithms, Data Structures</li>
                    <li><strong>Key Courses:</strong> Object-Oriented Programming, Database Systems, Web Development</li>
                    <li><strong>Projects:</strong> Academic projects in software development and system design</li>
                </ul>
                
                <h4>Technical Foundation</h4>
                <ul>
                    <li>Strong understanding of computer science fundamentals</li>
                    <li>Experience with multiple programming paradigms</li>
                    <li>Knowledge of software development lifecycle</li>
                    <li>Problem-solving and analytical thinking skills</li>
                </ul>
                
                <h4>Academic Achievements</h4>
                <ul>
                    <li>Completed coursework in modern software development practices</li>
                    <li>Participated in coding competitions and hackathons</li>
                    <li>Maintained strong academic performance</li>
                </ul>
            </div>
        `,
        buttons: [
            { text: 'View Resume', action: () => downloadResume() },
            { text: 'Close', action: 'close' }
        ]
    });
    
    document.body.appendChild(modal);
}

// Show Full Stack Development details
function showFullStackDetails() {
    const modal = createModal({
        title: 'Full-Stack Development',
        icon: 'fas fa-code',
        content: `
            <div class="fullstack-details">
                <h4>Frontend Technologies</h4>
                <ul>
                    <li>React.js, Vue.js, Angular</li>
                    <li>HTML5, CSS3, JavaScript (ES6+)</li>
                    <li>Responsive design and mobile-first approach</li>
                    <li>Modern CSS frameworks and preprocessors</li>
                </ul>
                
                <h4>Backend Technologies</h4>
                <ul>
                    <li>Node.js, Express.js</li>
                    <li>Python, Django, Flask</li>
                    <li>RESTful APIs and GraphQL</li>
                    <li>Database design and management</li>
                </ul>
                
                <h4>Development Tools</h4>
                <ul>
                    <li>Git version control</li>
                    <li>Docker containerization</li>
                    <li>CI/CD pipelines</li>
                    <li>Cloud platforms (AWS, Azure, Heroku)</li>
                </ul>
            </div>
        `,
        buttons: [
            { text: 'View Projects', action: () => scrollToSection('projects') },
            { text: 'Close', action: 'close' }
        ]
    });
    
    document.body.appendChild(modal);
}

// Show UI/UX details
function showUIUXDetails() {
    const modal = createModal({
        title: 'UI/UX Enthusiast',
        icon: 'fas fa-palette',
        content: `
            <div class="uiux-details">
                <h4>Design Principles</h4>
                <ul>
                    <li>User-centered design approach</li>
                    <li>Accessibility and inclusive design</li>
                    <li>Visual hierarchy and typography</li>
                    <li>Color theory and brand consistency</li>
                </ul>
                
                <h4>Tools & Technologies</h4>
                <ul>
                    <li>Figma, Adobe XD, Sketch</li>
                    <li>Prototyping and wireframing</li>
                    <li>User research and testing</li>
                    <li>Design systems and component libraries</li>
                </ul>
                
                <h4>Experience</h4>
                <ul>
                    <li>Creating intuitive user interfaces</li>
                    <li>Optimizing user flows and interactions</li>
                    <li>Mobile-first responsive design</li>
                    <li>Performance optimization</li>
                </ul>
            </div>
        `,
        buttons: [
            { text: 'View Skills', action: () => scrollToSection('skills') },
            { text: 'Close', action: 'close' }
        ]
    });
    
    document.body.appendChild(modal);
}

// Show Problem Solver details
function showProblemSolverDetails() {
    const modal = createModal({
        title: 'Problem Solver',
        icon: 'fas fa-rocket',
        content: `
            <div class="problem-solver-details">
                <h4>Problem-Solving Approach</h4>
                <ul>
                    <li>Analytical thinking and logical reasoning</li>
                    <li>Breaking down complex problems into manageable parts</li>
                    <li>Research and learning new technologies quickly</li>
                    <li>Creative solutions and innovative approaches</li>
                </ul>
                
                <h4>Technical Problem Solving</h4>
                <ul>
                    <li>Debugging and troubleshooting</li>
                    <li>Performance optimization</li>
                    <li>Security best practices</li>
                    <li>Scalable architecture design</li>
                </ul>
                
                <h4>Soft Skills</h4>
                <ul>
                    <li>Effective communication and collaboration</li>
                    <li>Time management and project planning</li>
                    <li>Adaptability to changing requirements</li>
                    <li>Continuous learning and improvement</li>
                </ul>
            </div>
        `,
        buttons: [
            { text: 'Contact Me', action: () => scrollToSection('contact') },
            { text: 'Close', action: 'close' }
        ]
    });
    
    document.body.appendChild(modal);
}

// Create a modal with customizable content and buttons
function createModal({ title, icon, content, buttons }) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                ${icon ? `<i class="${icon}"></i>` : ''}
                <h3>${title}</h3>
                <button class="modal-close" onclick="this.closest('.modal').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                ${content}
            </div>
            ${buttons ? `
                <div class="modal-footer">
                    ${buttons.map(btn => `
                        <button class="btn ${btn.text === 'Close' ? 'btn-secondary' : 'btn-primary'}" 
                                onclick="${btn.action === 'close' ? 
                                    'this.closest(\'.modal\').remove()' : 
                                    `(${btn.action.toString()})(); this.closest('.modal').remove()`}">
                            ${btn.text}
                        </button>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `;

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.body.contains(modal)) {
            modal.remove();
        }
    });

    return modal;
}

// Image Upload & Preview Functionality
(function() {
    const uploadArea = document.getElementById('imageUploadArea');
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
    const prompt = document.getElementById('imageUploadPrompt');
    if (!uploadArea || !imageInput || !imagePreview) return;

    // Load saved image from localStorage
    const savedImage = localStorage.getItem('uploadedProfileImage');
    if (savedImage) {
        imagePreview.src = savedImage;
        imagePreview.style.display = 'block';
        prompt.textContent = 'Image preview:';
        prompt.style.color = '#8B5CF6';
    }

    // Click to open file dialog
    uploadArea.addEventListener('click', () => imageInput.click());

    // Handle file input change
    imageInput.addEventListener('change', handleFiles);

    // Drag & drop support
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#8B5CF6';
        uploadArea.style.background = 'rgba(99,102,241,0.08)';
    });
    uploadArea.addEventListener('dragleave', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#6366F1';
        uploadArea.style.background = 'rgba(30,32,48,0.7)';
    });
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#6366F1';
        uploadArea.style.background = 'rgba(30,32,48,0.7)';
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            imageInput.files = e.dataTransfer.files;
            handleFiles();
        }
    });

    function handleFiles() {
        const file = imageInput.files[0];
        if (!file) return;
        if (!file.type.startsWith('image/')) {
            prompt.textContent = 'Please select a valid image file (JPG, PNG, GIF, WebP).';
            prompt.style.color = '#EC4899';
            imagePreview.style.display = 'none';
            return;
        }
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
            prompt.textContent = 'Image preview:';
            prompt.style.color = '#8B5CF6';
            // Save to localStorage
            localStorage.setItem('uploadedProfileImage', e.target.result);
        };
        reader.readAsDataURL(file);
    }
})();

// Show contact information in a modal
function showContactInfo() {
    const modal = createModal({
        title: 'Get In Touch',
        icon: 'fas fa-envelope',
        content: `
            <div class="contact-info-modal">
                <div class="contact-item-modal">
                    <i class="fas fa-envelope"></i>
                    <div class="contact-detail">
                        <strong>Email</strong>
                        <a href="mailto:amjadcs2805@gmail.com" class="contact-link">amjadcs2805@gmail.com</a>
                    </div>
                </div>
                <div class="contact-item-modal">
                    <i class="fas fa-phone"></i>
                    <div class="contact-detail">
                        <strong>Phone</strong>
                        <a href="tel:+923127951486" class="contact-link">+92 312 7951486</a>
                    </div>
                </div>
                <div class="contact-item-modal">
                    <i class="fas fa-map-marker-alt"></i>
                    <div class="contact-detail">
                        <strong>Location</strong>
                        <span>Islamabad, Pakistan</span>
                    </div>
                </div>
                <div class="social-links-modal">
                    <a href="https://www.linkedin.com/in/amjad-ali-2118a2272" target="_blank" rel="noopener noreferrer" class="social-link-modal">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="#" class="social-link-modal">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="#" class="social-link-modal">
                        <i class="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        `,
        buttons: [
            { text: 'Send Email', action: () => window.location.href = 'mailto:amjadcs2805@gmail.com' },
            { text: 'Close', action: 'close' }
        ]
    });
    
    document.body.appendChild(modal);
}

// Starfield animation for hero background
function initStarfield() {
    const canvas = document.getElementById('starfield');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = 0, height = 0, stars = [], starCount = 120;

    function resize() {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
    }

    function createStars() {
        stars = [];
        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                z: Math.random() * width,
                o: 0.7 + Math.random() * 0.3,
                r: 0.6 + Math.random() * 1.2,
                tw: Math.random() * Math.PI * 2,
                speed: 0.1 + Math.random() * 0.2
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < stars.length; i++) {
            let s = stars[i];
            // Twinkle
            let twinkle = 0.5 + 0.5 * Math.sin(Date.now() * 0.002 + s.tw);
            ctx.globalAlpha = s.o * twinkle;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r * twinkle, 0, 2 * Math.PI);
            ctx.fillStyle = '#e0e7ef';
            ctx.shadowColor = '#93c5fd';
            ctx.shadowBlur = 8 * twinkle;
            ctx.fill();
            ctx.shadowBlur = 0;
        }
        ctx.globalAlpha = 1;
    }

    function update() {
        for (let i = 0; i < stars.length; i++) {
            let s = stars[i];
            s.y += s.speed;
            if (s.y > height + 2) {
                s.x = Math.random() * width;
                s.y = -2;
                s.r = 0.6 + Math.random() * 1.2;
                s.o = 0.7 + Math.random() * 0.3;
                s.tw = Math.random() * Math.PI * 2;
                s.speed = 0.1 + Math.random() * 0.2;
            }
        }
    }

    function animate() {
        update();
        draw();
        requestAnimationFrame(animate);
    }

    function onResize() {
        resize();
        createStars();
    }

    window.addEventListener('resize', onResize);
    resize();
    createStars();
    animate();
} 