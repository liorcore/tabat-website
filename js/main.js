// טאבט - מסעות קסומים - JavaScript Functions
// Author: AI Assistant
// Description: Advanced animations and interactions for Tabet website

document.addEventListener('DOMContentLoaded', function() {
    console.log('🌸 טאבט - מסעות קסומים נטען...');
    
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);
    
    // Global variables
    let isLoaded = false;
    
    // Wait a bit for DOM to be fully ready
    setTimeout(() => {
        console.log('Initializing all functions...');
        
        // Initialize all functions
        initializeAnimations();
        initializeScrollEffects();
        initializeDarkMode();
        initializeFormHandling();
        initializeNavigation();
        initializeMobileMenu();
        initializeWhatsAppFloat();
        initializeAboutCarousel();
        
        // Mark as loaded
        isLoaded = true;
        document.body.classList.add('loaded');
        console.log('All functions initialized successfully!');
    }, 100);
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
    
    console.log('Dark mode toggle element:', darkModeToggle);
    
    if (darkModeToggle) {        
        // Remove any existing listeners first
        darkModeToggle.onclick = null;
        
        // Add fresh listener with inline function
        darkModeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Dark mode toggle clicked!'); // Debug log
            
            const isDark = document.documentElement.classList.contains('dark');
            console.log('Current dark mode state:', isDark);
            
            if (isDark) {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        });
        
        console.log('Dark mode toggle listener added successfully!');
    } else {
        console.error('Dark mode toggle button not found! Make sure the element with ID "darkModeToggle" exists.');
    }
    
    function enableDarkMode() {
        console.log('Enabling dark mode...');
        
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
        
        console.log('Dark mode enabled');
    }
    
    function disableDarkMode() {
        console.log('Disabling dark mode...');
        
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
        
        console.log('Dark mode disabled');
    }
    
    function updateIcons(isDark) {
        const moonIcon = document.getElementById('moonIcon');
        const sunIcon = document.getElementById('sunIcon');
        
        console.log('Updating icons:', { 
            isDark, 
            moonIcon: moonIcon, 
            sunIcon: sunIcon,
            moonFound: !!moonIcon,
            sunFound: !!sunIcon
        });
        
        if (moonIcon && sunIcon) {
            if (isDark) {
                moonIcon.style.display = 'none';
                sunIcon.style.display = 'inline-block';
                console.log('Dark mode: showing sun icon, hiding moon icon');
            } else {
                moonIcon.style.display = 'inline-block';
                sunIcon.style.display = 'none';
                console.log('Light mode: showing moon icon, hiding sun icon');
            }
        } else {
            console.error('Dark mode icons not found!', {
                moonIconElement: moonIcon,
                sunIconElement: sunIcon
            });
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
    console.log('🍔 Initializing mobile menu...');
    
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    
    console.log('Mobile menu elements found:', { 
        button: !!mobileMenuButton, 
        menu: !!mobileMenu, 
        links: mobileMenuLinks.length
    });
    
    if (!mobileMenuButton) {
        console.error('❌ Mobile menu button not found!');
        return;
    }
    
    if (!mobileMenu) {
        console.error('❌ Mobile menu not found!');
        return;
    }
    
    // Initialize menu state - start hidden
    mobileMenu.classList.add('mobile-menu-hidden');
    mobileMenu.classList.remove('mobile-menu-visible');
    
    console.log('✅ Mobile menu initialized as hidden');
    
    // Variable to track menu state
    let isMenuOpen = false;
    
    // Simple toggle function
    function toggleMobileMenu(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        console.log('🔄 Toggling mobile menu...', 'Current state:', isMenuOpen);
        
        if (isMenuOpen) {
            // Hide menu
            mobileMenu.classList.remove('mobile-menu-visible');
            mobileMenu.classList.add('mobile-menu-hidden');
            isMenuOpen = false;
            console.log('✅ Mobile menu closed');
        } else {
            // Show menu
            mobileMenu.classList.remove('mobile-menu-hidden');
            mobileMenu.classList.add('mobile-menu-visible');
            isMenuOpen = true;
            console.log('✅ Mobile menu opened');
        }
    }
    
    // Hide menu function
    function hideMobileMenu() {
        if (isMenuOpen) {
            mobileMenu.classList.remove('mobile-menu-visible');
            mobileMenu.classList.add('mobile-menu-hidden');
            isMenuOpen = false;
            console.log('🔒 Mobile menu hidden');
        }
    }
    
    // Clear any existing event listeners
    mobileMenuButton.replaceWith(mobileMenuButton.cloneNode(true));
    const newButton = document.getElementById('mobileMenuButton');
    
    // Add click event to button (multiple ways for compatibility)
    newButton.addEventListener('click', toggleMobileMenu);
    newButton.addEventListener('touchend', toggleMobileMenu);
    
    // Force click handler as backup
    newButton.onclick = toggleMobileMenu;
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (isMenuOpen && !mobileMenu.contains(e.target) && !newButton.contains(e.target)) {
            hideMobileMenu();
        }
    });
    
    // Close menu when clicking on links
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            hideMobileMenu();
        });
    });
    
    // Add visual feedback
    newButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    newButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Test function for debugging
    window.testMobileMenu = function() {
        console.log('🧪 Testing mobile menu...');
        console.log('Button exists:', !!newButton);
        console.log('Menu exists:', !!mobileMenu);
        console.log('Menu is open:', isMenuOpen);
        toggleMobileMenu();
    };
    
    console.log('✅ Mobile menu initialization complete!');
    console.log('💡 Test with: testMobileMenu() in console');
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
        initializeAboutCarousel();
        
        // Fix mobile menu after all initialization
        setTimeout(fixMobileMenuIfNeeded, 500);
    }, 100);
});

// Auto-fix mobile menu function
function fixMobileMenuIfNeeded() {
    console.log('🔧 Checking mobile menu...');
    
    const button = document.getElementById('mobileMenuButton');
    const menu = document.getElementById('mobileMenu');
    
    if (!button || !menu) {
        console.warn('⚠️ Mobile menu elements not found!');
        return;
    }
    
    // Make sure the menu starts hidden and positioned correctly
    menu.classList.add('mobile-menu-hidden');
    menu.classList.remove('mobile-menu-visible');
    menu.style.display = 'none';
    
    // Force correct positioning
    menu.style.position = 'fixed';
    menu.style.top = '5rem';
    menu.style.right = '1rem';
    menu.style.left = 'auto';
    menu.style.width = '14rem';
    menu.style.maxWidth = 'calc(100vw - 2rem)';
    menu.style.zIndex = '99999';
    menu.style.margin = '0';
    menu.style.transform = 'translateX(0) translateY(0)';
    menu.style.boxSizing = 'border-box';
    
    // Force click handlers
    button.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('🎯 Direct click handler triggered!');
        toggleMobileMenuManual();
    };
    
    // Test the toggle function
    if (typeof window.toggleMobileMenuManual === 'function') {
        console.log('✅ Mobile menu toggle function available');
    } else {
        console.error('❌ Mobile menu toggle function missing!');
    }
    
    console.log('✅ Mobile menu fix completed');
}

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

// About Background Carousel
function initializeAboutCarousel() {
    const slides = document.querySelectorAll('.bg-slide');
    let currentSlide = 0;
    
    if (slides.length === 0) return;
    
    function showNextSlide() {
        // Hide current slide
        slides[currentSlide].classList.remove('active');
        
        // Move to next slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Show next slide
        slides[currentSlide].classList.add('active');
    }
    
    // Change slide every 4 seconds
    setInterval(showNextSlide, 4000);
    
    console.log('🖼️ About background carousel initialized');
}

// Global Mobile Menu Toggle Function - SIMPLE & RELIABLE
window.toggleMobileMenuManual = function() {
    console.log('🚀 Manual mobile menu toggle called!');
    
    const mobileMenu = document.getElementById('mobileMenu');
    if (!mobileMenu) {
        console.error('Mobile menu not found!');
        return;
    }
    
    const isHidden = mobileMenu.classList.contains('mobile-menu-hidden') || 
                    mobileMenu.style.display === 'none' || 
                    !mobileMenu.classList.contains('mobile-menu-visible');
    
    console.log('Menu is hidden:', isHidden);
    
    if (isHidden) {
        // Show menu and ensure proper positioning
        mobileMenu.style.display = 'block';
        mobileMenu.classList.remove('mobile-menu-hidden');
        mobileMenu.classList.add('mobile-menu-visible');
        
        // Ensure proper fixed positioning
        setTimeout(() => {
            mobileMenu.style.position = 'fixed';
            mobileMenu.style.top = '5rem';
            mobileMenu.style.right = '1rem';
            mobileMenu.style.left = 'auto';
            mobileMenu.style.width = '14rem';
            mobileMenu.style.maxWidth = 'calc(100vw - 2rem)';
            mobileMenu.style.zIndex = '99999';
            mobileMenu.style.margin = '0';
            mobileMenu.style.transform = 'translateX(0) translateY(0)';
        }, 10);
        
        console.log('✅ Menu opened');
    } else {
        // Hide menu
        mobileMenu.classList.remove('mobile-menu-visible');
        mobileMenu.classList.add('mobile-menu-hidden');
        setTimeout(() => {
            if (mobileMenu.classList.contains('mobile-menu-hidden')) {
                mobileMenu.style.display = 'none';
            }
        }, 300);
        console.log('✅ Menu closed');
    }
};

// Function to adjust menu position if it goes off-screen
function adjustMenuPosition(menu) {
    const rect = menu.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    console.log('Menu position check:', {
        right: rect.right,
        screenWidth: screenWidth,
        isOffScreen: rect.right > screenWidth
    });
    
    // If menu goes off the right edge
    if (rect.right > screenWidth - 10) {
        const adjustment = rect.right - screenWidth + 20;
        menu.style.right = adjustment + 'px';
        console.log('✅ Adjusted menu position:', adjustment + 'px from right');
    }
    
    // If menu goes off the bottom edge
    if (rect.bottom > screenHeight - 10) {
        menu.style.top = 'auto';
        menu.style.bottom = '100%';
        menu.style.marginBottom = '0.5rem';
        menu.style.marginTop = '0';
        console.log('✅ Moved menu above button');
    }
};

// Alternative simple toggle
window.simpleMobileToggle = function() {
    const menu = document.getElementById('mobileMenu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        menu.style.opacity = '1';
        menu.style.visibility = 'visible';
    } else {
        menu.style.display = 'none';
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
    }
};

// Force mobile menu position on window resize
window.addEventListener('resize', function() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.style.position = 'fixed';
        menu.style.top = '5rem';
        menu.style.right = '1rem';
        menu.style.left = 'auto';
        menu.style.width = '14rem';
        menu.style.maxWidth = 'calc(100vw - 2rem)';
        menu.style.zIndex = '99999';
        menu.style.margin = '0';
        menu.style.transform = 'translateX(0) translateY(0)';
        menu.style.boxSizing = 'border-box';
    }
});

// Console message
console.log(`
🌸 טאבט - מסעות קסומים
✨ האתר נטען בהצלחה!
💫 מוכנות למסע?
🍔 Mobile menu functions available:
   - toggleMobileMenuManual()
   - simpleMobileToggle()
🔧 Fixed positioning: right: 1rem, top: 5rem
`);

// Export functions for global access if needed
window.TabetWebsite = {
    showNotification,
    optimizePerformance,
    toggleMobileMenuManual,
    simpleMobileToggle
}; 