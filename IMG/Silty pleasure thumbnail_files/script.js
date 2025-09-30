// Navigation scroll effect
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

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
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Form submission
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.name || !data.email || !data.eventDate) {
                showNotification('Vul alle verplichte velden in.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showNotification('Voer een geldig e-mailadres in.', 'error');
                return;
            }

            // Show loading message
            showNotification('Offerte aanvraag wordt verzonden...', 'info');
            
            // Create email content
            const emailSubject = 'Offerte Aanvraag - Silty Pleasure';
            const emailBody = `
Offerte Aanvraag Details:

Naam: ${data.name}
E-mail: ${data.email}
Telefoon: ${data.phone || 'Niet opgegeven'}
Evenement Datum: ${data.eventDate}
Aantal Gasten: ${data.guests || 'Niet opgegeven'}

Extra Informatie:
${data.message || 'Geen extra informatie'}

---
Deze aanvraag is verzonden via de Silty Pleasure website.
            `.trim();

            // Try EmailJS first (if properly configured)
            if (typeof emailjs !== 'undefined' && emailjs.init) {
                try {
                    // Initialize EmailJS with actual public key
                    emailjs.init('reZBR0piRPs4j69JW');
                    
                    emailjs.send('service_kmf0n1l', 'template_5nmg79e', {
                        from_name: data.name,
                        from_email: data.email,
                        phone: data.phone || 'Niet opgegeven',
                        event_date: data.eventDate,
                        guests: data.guests || 'Niet opgegeven',
                        message: data.message || 'Geen extra informatie',
                        to_email: 'silty.pleasure@gmail.com'
                    })
                    .then(function(response) {
                        showNotification('Offerte aanvraag succesvol verzonden! We nemen binnen 24 uur contact met u op.', 'success');
                        quoteForm.reset();
                    }, function(error) {
                        // Fallback to mailto if EmailJS fails
                        sendViaMailto(emailSubject, emailBody);
                    });
                } catch (error) {
                    // Fallback to mailto if EmailJS is not configured
                    sendViaMailto(emailSubject, emailBody);
                }
            } else {
                // Fallback to mailto if EmailJS is not available
                sendViaMailto(emailSubject, emailBody);
            }
        });
    }

    // Fallback function to send email via mailto
    function sendViaMailto(subject, body) {
        const mailtoLink = `mailto:silty.pleasure@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
        
        showNotification('Uw e-mailclient wordt geopend. Stuur de e-mail om uw aanvraag te voltooien.', 'info');
        
        // Reset form after a short delay
        setTimeout(() => {
            const quoteForm = document.getElementById('quoteForm');
            if (quoteForm) {
                quoteForm.reset();
            }
        }, 2000);
    }

    // Gallery hover effects
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Remove intersection observer animations that hide content initially

    // Remove parallax effect that could cause positioning issues
});

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Close button functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

// Form input focus effects
document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
});

// Remove reveal animations that hide content initially

// Preloader (optional)
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Add CSS for additional animations
const additionalStyles = `
    .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .reveal.active {
        opacity: 1;
        transform: translateY(0);
    }
    
    .form-group.focused label {
        color: #F59E0B;
    }
    
    .preloader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #1E3A8A;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    }
    
    .preloader::after {
        content: '';
        width: 50px;
        height: 50px;
        border: 3px solid #F59E0B;
        border-top: 3px solid transparent;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
