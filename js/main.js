// טאבט - מסעות קסומים - JavaScript Functions
// Author: AI Assistant
// Description: Advanced animations and interactions for Tabet website

document.addEventListener('DOMContentLoaded', function() {
    console.log('🌸 טאבט - מסעות קסומים נטען...');
    
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);
    
    // Global variables
    let isLoaded = false;
    
    // Initialize all functions
    initializeAnimations();
    initializeScrollEffects();
    initializeDarkMode();
    initializeFormHandling();
    initializeNavigation();
    initializeWhatsAppFloat();
    
    // Mark as loaded
    setTimeout(() => {
        isLoaded = true;
        document.body.classList.add('loaded');
    }, 500);
});

/**
 * Initialize Hero and Basic Animations
 */
function initializeAnimations() {
    // DISABLED ANIMATIONS FOR BETTER VISIBILITY
    // Simple hover effects only
}

/**
 * Initialize Scroll-triggered Animations
 */
function initializeScrollEffects() {
    // DISABLED SCROLL ANIMATIONS FOR BETTER VISIBILITY
    // Keep header visible at all times
    const header = document.querySelector('#header');
    if (header) {
        header.style.transform = 'translateY(0)';
        header.style.position = 'fixed';
        header.style.top = '0';
    }
}

/**
 * Enhanced Dark Mode with smooth transitions
 */
function initializeDarkMode() {
    // Check for saved dark mode preference
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedMode === 'true' || (!savedMode && prefersDark)) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
    
    // Dark mode toggle functionality - using ID selector
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    if (darkModeToggle) {
        // Remove any existing listeners
        darkModeToggle.removeEventListener('click', toggleDarkMode);
        
        // Add fresh listener
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    
    // Simple toggle function
    function toggleDarkMode(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const isDark = document.documentElement.classList.contains('dark');
        
        if (isDark) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    }
    
    function enableDarkMode() {
        // Add dark class to html and body
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
        
        // Also force inline styles as backup
        document.body.style.backgroundColor = '#1f2937';
        document.body.style.color = '#f9fafb';
        
        localStorage.setItem('darkMode', 'true');
        updateIcons(true);
        
        // Force immediate visual feedback
        const allSections = document.querySelectorAll('section');
        allSections.forEach(section => {
            section.classList.add('dark');
        });
    }
    
    function disableDarkMode() {
        // Remove dark class
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark');
        
        // Reset inline styles
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
        
        localStorage.setItem('darkMode', 'false');
        updateIcons(false);
        
        // Remove dark class from sections
        const allSections = document.querySelectorAll('section');
        allSections.forEach(section => {
            section.classList.remove('dark');
        });
    }
    
    function updateIcons(isDark) {
        const moonIcon = document.getElementById('moonIcon');
        const sunIcon = document.getElementById('sunIcon');
        
        if (moonIcon && sunIcon) {
            if (isDark) {
                moonIcon.style.display = 'none';
                sunIcon.style.display = 'inline-block';
            } else {
                moonIcon.style.display = 'inline-block';
                sunIcon.style.display = 'none';
            }
        }
    }
}

/**
 * Form Handling with Validation
 */
function initializeFormHandling() {
    const contactForm = document.querySelector('#contact form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!validateForm(data)) {
            showNotification('אנא מלאי את כל השדות הנדרשים', 'error');
            return;
        }
        
        // Animate submit button
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>שולח...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            showNotification('ההודעה נשלחה בהצלחה! נחזור אליך בהקדם', 'success');
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
    
    function validateForm(data) {
        const requiredFields = ['name', 'phone'];
        return requiredFields.every(field => data[field] && data[field].trim() !== '');
    }
}

/**
 * Simple Navigation (using CSS scroll-behavior: smooth)
 */
function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    
    if (mobileMenuButton && mobileMenu) {
        // Toggle mobile menu
        mobileMenuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
        
        // Close mobile menu when clicking on links
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

function initializeNavigation() {
    // Simple click handling for anchor links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            // Let CSS scroll-behavior handle the scrolling
            if (targetElement) {
                // Small offset for fixed header
                const headerHeight = 80;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                e.preventDefault();
            }
        });
    });
    
    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('nav a[href^="#"]');
    
    function updateActiveNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('text-sage', 'dark:text-dustyRose');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('text-sage', 'dark:text-dustyRose');
            }
        });
    }
    
    // Throttled scroll listener
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(updateActiveNav, 50);
    });
}

/**
 * Enhanced WhatsApp Float Button
 */
function initializeWhatsAppFloat() {
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (!whatsappBtn) return;
    
    // Enhanced animation
    gsap.set(whatsappBtn, { scale: 0 });
    
    // Show with bounce after page load
    gsap.to(whatsappBtn, {
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        delay: 2
    });
    
    // Pulse animation on scroll
    ScrollTrigger.create({
        trigger: '#contact',
        start: 'top bottom',
        end: 'bottom top',
        onEnter: () => {
            gsap.to(whatsappBtn, {
                scale: 1.2,
                duration: 0.3,
                yoyo: true,
                repeat: 3,
                ease: 'power2.inOut'
            });
        }
    });
    
    // Click analytics (if needed)
    whatsappBtn.addEventListener('click', function() {
        // Add analytics tracking here
    });
}

/**
 * Notification System
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-6 z-50 p-4 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' :
        type === 'error' ? 'bg-red-500 text-white' :
        'bg-blue-500 text-white'
    }`;
    
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'exclamation' : 'info'} mr-3"></i>
            <span>${message}</span>
            <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

/**
 * Performance Optimizations
 */
function optimizePerformance() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
            // Scroll handling code here
        }, 10);
    });
}

/**
 * Error Handling
 */
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    // Could send to analytics or error reporting service
});

// Initialize performance optimizations
optimizePerformance();




// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Force all content to be visible immediately
    forceVisibility();
    
    // Add simple delay to ensure DOM is fully ready
    setTimeout(() => {
        // Initialize modules in order
        initializeAnimations();
        initializeScrollEffects();
        initializeDarkMode();
        initializeMobileMenu();
        initializeFormHandling();
        initializeNavigation();
        initializeWhatsAppFloat();
    }, 100);
});

// Also try immediate initialization for dark mode
window.addEventListener('load', function() {
    // Force dark mode check again
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    if (darkModeToggle && !darkModeToggle.hasAttribute('data-initialized')) {
        initializeDarkMode();
        darkModeToggle.setAttribute('data-initialized', 'true');
    }
});

// Force all content to be visible without breaking dark mode
function forceVisibility() {
    console.log('🚨 Force visibility activated');
    
    // Remove any opacity: 0 from all elements (but don't touch colors)
    const allElements = document.querySelectorAll('*');
    allElements.forEach(el => {
        if (el.style.opacity === '0') {
            el.style.opacity = '1';
        }
        if (el.style.visibility === 'hidden') {
            el.style.visibility = 'visible';
        }
        // Don't force display changes as they might break layouts
    });
    
    // Specifically target content sections
    const contentSections = ['#hero', '#about', '#journey', '#treatments', '#contact'];
    contentSections.forEach(selector => {
        const section = document.querySelector(selector);
        if (section) {
            section.style.opacity = '1';
            section.style.visibility = 'visible';
        }
    });
    
    console.log('✅ Force visibility completed (dark mode friendly)');
}

// Console message
console.log(`
🌸 טאבט - מסעות קסומים
✨ האתר נטען בהצלחה!
💫 מוכנות למסע?
`);

// Export functions for global access if needed
window.TabetWebsite = {
    showNotification,
    optimizePerformance
}; 