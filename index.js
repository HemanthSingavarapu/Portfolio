// // Enhanced JavaScript with all animations and functionality

// // Loading Screen
// window.addEventListener('load', () => {
//     const loadingScreen = document.querySelector('.loading-screen');
//     setTimeout(() => {
//         loadingScreen.classList.add('loaded');
//         setTimeout(() => {
//             loadingScreen.style.display = 'none';
//         }, 500);
//     }, 2000);
// });

// // Mobile Navigation Toggle
// const navToggle = document.getElementById('nav-toggle');
// const navMenu = document.getElementById('nav-menu');

// if (navToggle && navMenu) {
//     navToggle.addEventListener('click', () => {
//         navMenu.classList.toggle('active');
//         navToggle.classList.toggle('active');
//     });
// }

// // Close mobile menu when clicking on a link
// document.querySelectorAll('.nav-link').forEach(link => {
//     link.addEventListener('click', () => {
//         if (navMenu && navToggle) {
//             navMenu.classList.remove('active');
//             navToggle.classList.remove('active');
//         }
//     });
// });

// // Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             target.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         }
//     });
// });

// // Navbar background on scroll
// window.addEventListener('scroll', () => {
//     const navbar = document.querySelector('.navbar');
//     const backToTop = document.querySelector('.back-to-top');
    
//     if (navbar) {
//         if (window.scrollY > 50) {
//             navbar.style.background = 'rgba(26, 26, 46, 0.98)';
//             navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
//         } else {
//             navbar.style.background = 'rgba(26, 26, 46, 0.95)';
//             navbar.style.boxShadow = 'none';
//         }
//     }
    
//     // Show back to top button
//     if (backToTop) {
//         if (window.scrollY > 500) {
//             backToTop.classList.add('visible');
//         } else {
//             backToTop.classList.remove('visible');
//         }
//     }
// });

// // Back to top functionality
// const backToTopBtn = document.querySelector('.back-to-top');
// if (backToTopBtn) {
//     backToTopBtn.addEventListener('click', () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     });
// }

// // Magnetic button effect
// document.querySelectorAll('.magnetic').forEach(button => {
//     button.addEventListener('mousemove', (e) => {
//         const rect = button.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
        
//         const centerX = rect.width / 2;
//         const centerY = rect.height / 2;
        
//         const deltaX = (x - centerX) / centerX * 10;
//         const deltaY = (y - centerY) / centerY * 10;
        
//         button.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
//     });
    
//     button.addEventListener('mouseleave', () => {
//         button.style.transform = 'translate(0, 0)';
//     });
// });

// // Skills tabs functionality
// const tabBtns = document.querySelectorAll('.tab-btn');
// const skillsGrids = document.querySelectorAll('.skills-grid');

// tabBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         const category = btn.getAttribute('data-category');
        
//         // Update active tab
//         tabBtns.forEach(b => b.classList.remove('active'));
//         btn.classList.add('active');
        
//         // Show corresponding skills grid
//         skillsGrids.forEach(grid => {
//             grid.classList.remove('active');
//             if (grid.id === `${category}-skills`) {
//                 grid.classList.add('active');
//             }
//         });
        
//         // Animate skill bars
//         setTimeout(animateSkillBars, 300);
//     });
// });

// // Enhanced Projects Filter Functionality
// const filterBtns = document.querySelectorAll('.filter-btn');
// const portfolioItems = document.querySelectorAll('.portfolio-item');

// function filterProjects(filter) {
//     portfolioItems.forEach(item => {
//         const category = item.getAttribute('data-category');
        
//         if (filter === 'all' || category === filter) {
//             item.classList.remove('hidden');
//             setTimeout(() => {
//                 item.style.display = 'block';
//             }, 50);
//         } else {
//             item.classList.add('hidden');
//             setTimeout(() => {
//                 item.style.display = 'none';
//             }, 300);
//         }
//     });
// }

// // Initialize filter functionality
// filterBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         const filter = btn.getAttribute('data-filter');
        
//         // Update active filter button
//         filterBtns.forEach(b => b.classList.remove('active'));
//         btn.classList.add('active');
        
//         // Filter portfolio items
//         filterProjects(filter);
//     });
// });

// // Animate skill level bars
// const levelBars = document.querySelectorAll('.level-bar');

// function animateSkillBars() {
//     levelBars.forEach(bar => {
//         if (isElementInViewport(bar)) {
//             const level = bar.getAttribute('data-level');
//             bar.style.width = level + '%';
//         }
//     });
// }

// // Animate stats counter
// const statNumbers = document.querySelectorAll('.stat-number');

// function animateStats() {
//     statNumbers.forEach(stat => {
//         if (isElementInViewport(stat) && stat.hasAttribute('data-count')) {
//             const target = parseInt(stat.getAttribute('data-count'));
//             const duration = 2000; // 2 seconds
//             const step = target / (duration / 16); // 60fps
//             let current = 0;
            
//             const timer = setInterval(() => {
//                 current += step;
//                 if (current >= target) {
//                     current = target;
//                     clearInterval(timer);
//                 }
//                 stat.textContent = Math.floor(current);
//             }, 16);
            
//             // Remove attribute to prevent re-animation
//             stat.removeAttribute('data-count');
//         }
//     });
// }

// // Timeline animation
// function animateTimeline() {
//     const timelineItems = document.querySelectorAll('.timeline-item');
    
//     timelineItems.forEach((item, index) => {
//         if (isElementInViewport(item)) {
//             setTimeout(() => {
//                 item.classList.add('visible');
//             }, index * 200);
//         }
//     });
// }

// // Check if element is in viewport
// function isElementInViewport(el) {
//     if (!el) return false;
    
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) * 1.1 &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// // Scroll animations for elements
// const fadeElements = document.querySelectorAll('.fade-in');

// function checkScroll() {
//     fadeElements.forEach(element => {
//         if (isElementInViewport(element)) {
//             element.classList.add('visible');
//         }
//     });
    
//     animateSkillBars();
//     animateStats();
//     animateTimeline();
// }

// // Chat animation in hero section
// function initChatAnimation() {
//     const typingMessage = document.querySelector('.typing');
//     const messages = [
//         "I can help you build an amazing app!",
//         "Let me create something special for you...",
//         "Your project will be ready soon!",
//         "Working on your requirements..."
//     ];
    
//     let messageIndex = 0;
    
//     function showNextMessage() {
//         if (typingMessage) {
//             typingMessage.classList.remove('typing');
            
//             setTimeout(() => {
//                 const messageContent = typingMessage.querySelector('.message-content');
//                 if (messageContent) {
//                     messageContent.innerHTML = messages[messageIndex];
                    
//                     setTimeout(() => {
//                         typingMessage.classList.add('typing');
//                         messageContent.innerHTML = `
//                             <div class="typing-indicator">
//                                 <span></span>
//                                 <span></span>
//                                 <span></span>
//                             </div>
//                         `;
//                     }, 3000);
                    
//                     messageIndex = (messageIndex + 1) % messages.length;
//                 }
//             }, 1000);
//         }
//     }
    
//     // Start the chat animation
//     setInterval(showNextMessage, 5000);
// }

// // Parallax effect for floating shapes
// window.addEventListener('scroll', () => {
//     const shapes = document.querySelectorAll('.shape');
//     const scrolled = window.pageYOffset;
    
//     shapes.forEach((shape, index) => {
//         const speed = 0.5 + (index * 0.1);
//         const yPos = -(scrolled * speed);
//         shape.style.transform = `translateY(${yPos}px)`;
//     });
// });

// // Hover lift effect
// document.querySelectorAll('.hover-lift').forEach(element => {
//     element.addEventListener('mouseenter', () => {
//         element.style.transform = 'translateY(-5px)';
//     });
    
//     element.addEventListener('mouseleave', () => {
//         element.style.transform = 'translateY(0)';
//     });
// });

// // Form submission with animation
// const contactForm = document.querySelector('.contact-form');
// if (contactForm) {
//     contactForm.addEventListener('submit', (e) => {
//         e.preventDefault();
        
//         const submitBtn = contactForm.querySelector('.btn-submit');
//         const originalText = submitBtn.querySelector('span').textContent;
        
//         // Show loading state
//         submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Sending...</span>';
//         submitBtn.disabled = true;
        
//         // Simulate form submission
//         setTimeout(() => {
//             // Show success state
//             submitBtn.innerHTML = '<i class="fas fa-check"></i><span>Message Sent!</span>';
//             submitBtn.style.background = '#4CAF50';
            
//             // Reset form
//             setTimeout(() => {
//                 contactForm.reset();
//                 submitBtn.innerHTML = `<span>${originalText}</span><i class="fas fa-paper-plane"></i>`;
//                 submitBtn.disabled = false;
//                 submitBtn.style.background = '';
//             }, 2000);
//         }, 2000);
//     });
// }

// // Initialize all animations
// function initAnimations() {
//     // Show all projects by default
//     filterProjects('all');
    
//     // Start chat animation
//     setTimeout(initChatAnimation, 2000);
    
//     // Add loading animation for images
//     const portfolioImages = document.querySelectorAll('.portfolio-image img');
//     portfolioImages.forEach(img => {
//         img.addEventListener('load', function() {
//             this.style.opacity = '1';
//         });
        
//         // Set initial opacity
//         img.style.opacity = '0';
//         img.style.transition = 'opacity 0.3s ease';
//     });
    
//     // Add intersection observer for better performance
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
                
//                 // Animate skill bars if in skills section
//                 if (entry.target.classList.contains('skills-section')) {
//                     animateSkillBars();
//                 }
                
//                 // Animate stats if in about section
//                 if (entry.target.classList.contains('about')) {
//                     animateStats();
//                 }
                
//                 // Animate timeline if in about section
//                 if (entry.target.classList.contains('centered-timeline')) {
//                     animateTimeline();
//                 }
//             }
//         });
//     }, { threshold: 0.1 });
    
//     // Observe all sections
//     document.querySelectorAll('section').forEach(section => {
//         observer.observe(section);
//     });
    
//     // Add initial styles for fade-in elements
//     fadeElements.forEach(element => {
//         element.classList.add('fade-in');
//     });
    
//     // Initialize timeline items animation
//     const timelineItems = document.querySelectorAll('.timeline-item');
//     timelineItems.forEach(item => {
//         item.classList.add('fade-in');
//     });
    
//     // Add character index for loading animation
//     document.querySelectorAll('.title-char').forEach((char, index) => {
//         char.style.setProperty('--char-index', index);
//     });
    
//     // Add code character index for loading animation
//     document.querySelectorAll('.code-char').forEach((char, index) => {
//         char.style.setProperty('--char-index', index);
//     });
// }

// // Initialize when DOM is loaded
// document.addEventListener('DOMContentLoaded', initAnimations);

// // Scroll event listener
// window.addEventListener('scroll', checkScroll);

// // Tooltip functionality
// document.querySelectorAll('[data-tooltip]').forEach(element => {
//     element.addEventListener('mouseenter', (e) => {
//         const tooltip = document.createElement('div');
//         tooltip.className = 'tooltip';
//         tooltip.textContent = element.getAttribute('data-tooltip');
//         document.body.appendChild(tooltip);
        
//         const rect = element.getBoundingClientRect();
//         tooltip.style.left = rect.left + (rect.width / 2) + 'px';
//         tooltip.style.top = rect.top - 40 + 'px';
//         tooltip.style.transform = 'translateX(-50%)';
//     });
    
//     element.addEventListener('mouseleave', () => {
//         const tooltip = document.querySelector('.tooltip');
//         if (tooltip) {
//             tooltip.remove();
//         }
//     });
// });

// // Add CSS for tooltips
// const tooltipStyle = document.createElement('style');
// tooltipStyle.textContent = `
//     .tooltip {
//         position: fixed;
//         background: rgba(0, 0, 0, 0.8);
//         color: white;
//         padding: 0.5rem 1rem;
//         border-radius: 5px;
//         font-size: 0.8rem;
//         white-space: nowrap;
//         z-index: 10000;
//         pointer-events: none;
//         animation: fadeIn 0.3s ease;
//     }
// `;
// document.head.appendChild(tooltipStyle);

// // Image lazy loading enhancement
// function initLazyLoading() {
//     const images = document.querySelectorAll('img');
    
//     const imageObserver = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const img = entry.target;
//                 img.src = img.src;
//                 imageObserver.unobserve(img);
//             }
//         });
//     });
    
//     images.forEach(img => imageObserver.observe(img));
// }

// // Initialize lazy loading
// document.addEventListener('DOMContentLoaded', initLazyLoading);

// // Add smooth scrolling to entire page
// document.documentElement.style.scrollBehavior = 'smooth';

// // Handle page refresh - scroll to top
// window.addEventListener('beforeunload', () => {
//     window.scrollTo(0, 0);
// });

// // Add keyboard navigation support
// document.addEventListener('keydown', (e) => {
//     // Escape key closes mobile menu
//     if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
//         navMenu.classList.remove('active');
//         if (navToggle) navToggle.classList.remove('active');
//     }
    
//     // Tab key navigation enhancement
//     if (e.key === 'Tab') {
//         document.documentElement.classList.add('keyboard-navigation');
//     }
// });

// // Remove keyboard navigation class on mouse interaction
// document.addEventListener('mousedown', () => {
//     document.documentElement.classList.remove('keyboard-navigation');
// });

// // Add CSS for keyboard navigation
// const keyboardNavStyle = document.createElement('style');
// keyboardNavStyle.textContent = `
//     .keyboard-navigation *:focus {
//         outline: 2px solid var(--primary) !important;
//         outline-offset: 2px !important;
//     }
// `;
// document.head.appendChild(keyboardNavStyle);

// // Performance optimization: Throttle scroll events
// let scrollTimeout;
// window.addEventListener('scroll', () => {
//     if (!scrollTimeout) {
//         scrollTimeout = setTimeout(() => {
//             checkScroll();
//             scrollTimeout = null;
//         }, 100);
//     }
// });

// // Handle resize events
// let resizeTimeout;
// window.addEventListener('resize', () => {
//     clearTimeout(resizeTimeout);
//     resizeTimeout = setTimeout(() => {
//         // Re-check animations on resize
//         checkScroll();
//     }, 250);
// });

// // Add page transition animations
// function addPageTransitions() {
//     const links = document.querySelectorAll('a[href]:not([href^="#"])');
    
//     links.forEach(link => {
//         link.addEventListener('click', (e) => {
//             if (link.href && !link.href.includes('javascript:')) {
//                 e.preventDefault();
//                 document.body.style.opacity = '0';
//                 document.body.style.transition = 'opacity 0.3s ease';
                
//                 setTimeout(() => {
//                     window.location.href = link.href;
//                 }, 300);
//             }
//         });
//     });
// }

// // Initialize page transitions for external links
// document.addEventListener('DOMContentLoaded', addPageTransitions);

// // Add error handling for images
// document.querySelectorAll('img').forEach(img => {
//     img.addEventListener('error', function() {
//         this.style.display = 'none';
//         console.warn('Image failed to load:', this.src);
//     });
// });

// // Add performance monitoring
// if ('performance' in window) {
//     window.addEventListener('load', () => {
//         setTimeout(() => {
//             const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
//             console.log(`Page loaded in ${loadTime}ms`);
//         }, 0);
//     });
// }

// // Service Worker registration for PWA (optional)
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/sw.js')
//             .then(registration => {
//                 console.log('SW registered: ', registration);
//             })
//             .catch(registrationError => {
//                 console.log('SW registration failed: ', registrationError);
//             });
//     });
// }

// // Add console greeting
// console.log(`
// 🌟 Welcome to Hemanth Kumar's Portfolio!
   
//    Built with passion for Machine Learning, Flutter & Web Development.
   
//    Feel free to explore the code and get inspired!
   
//    Contact: hemanthsingavarapu1428@gmail.com
// `);

// // Export functions for potential module use (if needed)
// if (typeof module !== 'undefined' && module.exports) {
//     module.exports = {
//         filterProjects,
//         animateSkillBars,
//         animateStats,
//         animateTimeline,
//         isElementInViewport,
//         checkScroll
//     };
// }

// Enhanced JavaScript with all animations and functionality

// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('loaded');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
});

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu && navToggle) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const backToTop = document.querySelector('.back-to-top');
    
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(26, 26, 46, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(26, 26, 46, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
    
    // Show back to top button
    if (backToTop) {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
});

// Back to top functionality
const backToTopBtn = document.querySelector('.back-to-top');
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Magnetic button effect
document.querySelectorAll('.magnetic').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const deltaX = (x - centerX) / centerX * 10;
        const deltaY = (y - centerY) / centerY * 10;
        
        button.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)';
    });
});

// Skills tabs functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const skillsGrids = document.querySelectorAll('.skills-grid');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');
        
        // Update active tab
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Show corresponding skills grid
        skillsGrids.forEach(grid => {
            grid.classList.remove('active');
            if (grid.id === `${category}-skills`) {
                grid.classList.add('active');
            }
        });
        
        // Animate skill bars
        setTimeout(animateSkillBars, 300);
    });
});

// Enhanced Projects Filter Functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

function filterProjects(filter) {
    portfolioItems.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
            item.classList.remove('hidden');
            setTimeout(() => {
                item.style.display = 'block';
            }, 50);
        } else {
            item.classList.add('hidden');
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// Initialize filter functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        
        // Update active filter button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter portfolio items
        filterProjects(filter);
    });
});

// Animate skill level bars
const levelBars = document.querySelectorAll('.level-bar');

function animateSkillBars() {
    levelBars.forEach(bar => {
        if (isElementInViewport(bar)) {
            const level = bar.getAttribute('data-level');
            bar.style.width = level + '%';
        }
    });
}

// Animate stats counter
const statNumbers = document.querySelectorAll('.stat-number');

function animateStats() {
    statNumbers.forEach(stat => {
        if (isElementInViewport(stat) && stat.hasAttribute('data-count')) {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 60fps
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current);
            }, 16);
            
            // Remove attribute to prevent re-animation
            stat.removeAttribute('data-count');
        }
    });
}

// Timeline animation
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        if (isElementInViewport(item)) {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 200);
        }
    });
}

// Check if element is in viewport
function isElementInViewport(el) {
    if (!el) return false;
    
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) * 1.1 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Scroll animations for elements
const fadeElements = document.querySelectorAll('.fade-in');

function checkScroll() {
    fadeElements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
    
    animateSkillBars();
    animateStats();
    animateTimeline();
}

// Chat animation in hero section
function initChatAnimation() {
    const typingMessage = document.querySelector('.typing');
    const messages = [
        "I can help you build an amazing app!",
        "Let me create something special for you...",
        "Your project will be ready soon!",
        "Working on your requirements..."
    ];
    
    let messageIndex = 0;
    
    function showNextMessage() {
        if (typingMessage) {
            typingMessage.classList.remove('typing');
            
            setTimeout(() => {
                const messageContent = typingMessage.querySelector('.message-content');
                if (messageContent) {
                    messageContent.innerHTML = messages[messageIndex];
                    
                    setTimeout(() => {
                        typingMessage.classList.add('typing');
                        messageContent.innerHTML = `
                            <div class="typing-indicator">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        `;
                    }, 3000);
                    
                    messageIndex = (messageIndex + 1) % messages.length;
                }
            }, 1000);
        }
    }
    
    // Start the chat animation
    setInterval(showNextMessage, 5000);
}

// Parallax effect for floating shapes
window.addEventListener('scroll', () => {
    const shapes = document.querySelectorAll('.shape');
    const scrolled = window.pageYOffset;
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        shape.style.transform = `translateY(${yPos}px)`;
    });
});

// Hover lift effect
document.querySelectorAll('.hover-lift').forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = 'translateY(-5px)';
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'translateY(0)';
    });
});

// EmailJS Integration
function initEmailJS() {
    // Initialize EmailJS with your Public Key
    emailjs.init("0TBzxx4E6ZhdR6fOd"); // Replace with your actual public key
    
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const formMessage = document.getElementById('form-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Validate form first
            if (!validateForm()) {
                return;
            }
            
            // Show loading state
            const originalText = submitBtn.querySelector('span').textContent;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Sending...</span>';
            submitBtn.disabled = true;
            
            // Hide any previous messages
            formMessage.style.display = 'none';
            
            try {
                // Send email using EmailJS
                const response = await emailjs.sendForm(
                    'service_n3yzzw8', // Replace with your EmailJS service ID
                    'template_uqwax5e', // Replace with your EmailJS template ID
                    contactForm
                );
                
                console.log('Email sent successfully:', response);
                
                // Show success message
                showFormMessage('🎉 Message sent successfully! I\'ll get back to you soon.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Reset button after delay
                setTimeout(() => {
                    submitBtn.innerHTML = `<span>${originalText}</span><i class="fas fa-paper-plane"></i>`;
                    submitBtn.disabled = false;
                }, 3000);
                
            } catch (error) {
                console.error('Email sending failed:', error);
                
                // Show error message
                showFormMessage('❌ Failed to send message. Please try again or email me directly at hemanthsingavarapu1428@gmail.com', 'error');
                
                // Reset button
                submitBtn.innerHTML = `<span>${originalText}</span><i class="fas fa-paper-plane"></i>`;
                submitBtn.disabled = false;
            }
        });
    }
    
    function showFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.style.display = 'block';
        formMessage.style.background = type === 'success' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)';
        formMessage.style.color = type === 'success' ? '#4CAF50' : '#F44336';
        formMessage.style.border = type === 'success' ? '1px solid #4CAF50' : '1px solid #F44336';
        formMessage.style.padding = '0.75rem 1rem';
        formMessage.style.borderRadius = '8px';
        formMessage.style.marginTop = '1rem';
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
    
    function validateForm() {
        const form = document.getElementById('contact-form');
        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                showFieldError(input, 'This field is required');
                isValid = false;
            } else {
                clearFieldError(input);
                
                // Email validation
                if (input.type === 'email' && input.value.trim()) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(input.value.trim())) {
                        showFieldError(input, 'Please enter a valid email address');
                        isValid = false;
                    }
                }
            }
        });
        
        return isValid;
    }
    
    function showFieldError(field, message) {
        field.classList.add('error');
        
        // Remove existing error message
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        
        // Add error message
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.style.color = '#F44336';
        errorElement.style.fontSize = '0.8rem';
        errorElement.style.marginTop = '0.5rem';
        errorElement.style.fontWeight = '500';
        
        field.parentNode.appendChild(errorElement);
    }
    
    function clearFieldError(field) {
        field.classList.remove('error');
        
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
    }
}

// Enhanced form validation
function initFormValidation() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    const inputs = contactForm.querySelectorAll('.form-input');
    
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
    
    function validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        
        clearFieldError(field);
        
        if (field.hasAttribute('required') && !value) {
            showFieldError(field, 'This field is required');
            return false;
        }
        
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(field, 'Please enter a valid email address');
                return false;
            }
        }
        
        return true;
    }
    
    function showFieldError(field, message) {
        field.classList.add('error');
        
        // Remove existing error message
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        
        // Add error message
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.style.color = '#F44336';
        errorElement.style.fontSize = '0.8rem';
        errorElement.style.marginTop = '0.5rem';
        errorElement.style.fontWeight = '500';
        
        field.parentNode.appendChild(errorElement);
    }
    
    function clearFieldError(e) {
        const field = e ? e.target : this;
        field.classList.remove('error');
        
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
    }
}

// Initialize all animations
function initAnimations() {
    // Show all projects by default
    filterProjects('all');
    
    // Start chat animation
    setTimeout(initChatAnimation, 2000);
    
    // Add loading animation for images
    const portfolioImages = document.querySelectorAll('.portfolio-image img');
    portfolioImages.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
    
    // Add intersection observer for better performance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate skill bars if in skills section
                if (entry.target.classList.contains('skills-section')) {
                    animateSkillBars();
                }
                
                // Animate stats if in about section
                if (entry.target.classList.contains('about')) {
                    animateStats();
                }
                
                // Animate timeline if in about section
                if (entry.target.classList.contains('centered-timeline')) {
                    animateTimeline();
                }
            }
        });
    }, { threshold: 0.1 });
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Add initial styles for fade-in elements
    fadeElements.forEach(element => {
        element.classList.add('fade-in');
    });
    
    // Initialize timeline items animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.classList.add('fade-in');
    });
    
    // Add character index for loading animation
    document.querySelectorAll('.title-char').forEach((char, index) => {
        char.style.setProperty('--char-index', index);
    });
    
    // Add code character index for loading animation
    document.querySelectorAll('.code-char').forEach((char, index) => {
        char.style.setProperty('--char-index', index);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    initEmailJS();
    initFormValidation();
});

// Scroll event listener
window.addEventListener('scroll', checkScroll);

// Tooltip functionality
document.querySelectorAll('[data-tooltip]').forEach(element => {
    element.addEventListener('mouseenter', (e) => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = element.getAttribute('data-tooltip');
        document.body.appendChild(tooltip);
        
        const rect = element.getBoundingClientRect();
        tooltip.style.left = rect.left + (rect.width / 2) + 'px';
        tooltip.style.top = rect.top - 40 + 'px';
        tooltip.style.transform = 'translateX(-50%)';
    });
    
    element.addEventListener('mouseleave', () => {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
});

// Add CSS for tooltips
const tooltipStyle = document.createElement('style');
tooltipStyle.textContent = `
    .tooltip {
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-size: 0.8rem;
        white-space: nowrap;
        z-index: 10000;
        pointer-events: none;
        animation: fadeIn 0.3s ease;
    }
    
    .form-input.error {
        border-color: #F44336 !important;
        background: rgba(244, 67, 54, 0.05) !important;
    }
    
    .form-input:focus.error {
        border-color: #F44336 !important;
        box-shadow: 0 0 0 2px rgba(244, 67, 54, 0.2) !important;
    }
    
    .field-error {
        color: #F44336;
        font-size: 0.8rem;
        margin-top: 0.5rem;
        display: block;
        font-weight: 500;
    }
`;
document.head.appendChild(tooltipStyle);

// Image lazy loading enhancement
function initLazyLoading() {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src;
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Add smooth scrolling to entire page
document.documentElement.style.scrollBehavior = 'smooth';

// Handle page refresh - scroll to top
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (navToggle) navToggle.classList.remove('active');
    }
    
    // Tab key navigation enhancement
    if (e.key === 'Tab') {
        document.documentElement.classList.add('keyboard-navigation');
    }
});

// Remove keyboard navigation class on mouse interaction
document.addEventListener('mousedown', () => {
    document.documentElement.classList.remove('keyboard-navigation');
});

// Add CSS for keyboard navigation
const keyboardNavStyle = document.createElement('style');
keyboardNavStyle.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid var(--primary) !important;
        outline-offset: 2px !important;
    }
`;
document.head.appendChild(keyboardNavStyle);

// Performance optimization: Throttle scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
            checkScroll();
            scrollTimeout = null;
        }, 100);
    }
});

// Handle resize events
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Re-check animations on resize
        checkScroll();
    }, 250);
});

// Add page transition animations
function addPageTransitions() {
    const links = document.querySelectorAll('a[href]:not([href^="#"])');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.href && !link.href.includes('javascript:')) {
                e.preventDefault();
                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.3s ease';
                
                setTimeout(() => {
                    window.location.href = link.href;
                }, 300);
            }
        });
    });
}

// Initialize page transitions for external links
document.addEventListener('DOMContentLoaded', addPageTransitions);

// Add error handling for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.display = 'none';
        console.warn('Image failed to load:', this.src);
    });
});

// Add performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`Page loaded in ${loadTime}ms`);
        }, 0);
    });
}

// Service Worker registration for PWA (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Add console greeting
console.log(`
🌟 Welcome to Hemanth Kumar's Portfolio!
   
   Built with passion for Machine Learning, Flutter & Web Development.
   
   Feel free to explore the code and get inspired!
   
   Contact: hemanthsingavarapu1428@gmail.com
`);

// Export functions for potential module use (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        filterProjects,
        animateSkillBars,
        animateStats,
        animateTimeline,
        isElementInViewport,
        checkScroll
    };
}