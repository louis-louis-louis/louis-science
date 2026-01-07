// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('.content-section');
    
    // Function to show a specific section
    function showSection(targetId) {
        // Remove active class from all sections and nav links
        sections.forEach(section => section.classList.remove('active'));
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Add active class to target section and corresponding nav link
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
            
            // Find and activate the corresponding nav link
            const activeLink = document.querySelector(`.nav-menu a[href="#${targetId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
            
            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    
    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
            
            // Update URL without page reload
            history.pushState(null, '', `#${targetId}`);
        });
    });
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', function() {
        const hash = window.location.hash.substring(1) || 'home';
        showSection(hash);
    });
    
    // Handle direct URL access with hash
    const initialHash = window.location.hash.substring(1);
    if (initialHash) {
        showSection(initialHash);
    }
    
    // Handle card button clicks
    const cardButtons = document.querySelectorAll('.card .btn:not(.btn-disabled)');
    cardButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
            
            // Update URL without page reload
            history.pushState(null, '', `#${targetId}`);
        });
    });
});

// Add smooth scroll behavior for better UX
document.documentElement.style.scrollBehavior = 'smooth';

// Console message
console.log('Louis Science - 理科の解説サイト');
console.log('Website loaded successfully!');
