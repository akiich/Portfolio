document.addEventListener('DOMContentLoaded', () => {

    /* =======================================
       Preloader
       ======================================= */
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    }, 1500);

    /* =======================================
       Set Current Year
       ======================================= */
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    /* =======================================
       Custom Cursor Glow (Desktop only)
       ======================================= */
    const cursorGlow = document.querySelector('.cursor-glow');
    if (cursorGlow && window.innerWidth >= 1024) {
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });

        // Add subtle expand effect when hovering links or buttons
        const interactables = document.querySelectorAll('a, button, .cert-thumb, input, textarea');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorGlow.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorGlow.style.background = 'radial-gradient(circle at center, rgba(201, 168, 76, 0.15) 0%, transparent 70%)';
            });
            el.addEventListener('mouseleave', () => {
                cursorGlow.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorGlow.style.background = 'radial-gradient(circle at center, rgba(201, 168, 76, 0.08) 0%, transparent 70%)';
            });
        });
    }

    /* =======================================
       Navbar Scroll & Mobile Menu
       ======================================= */
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky Navbar shadow on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if(navLinksContainer.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    /* =======================================
       Scroll Spy logic
       ======================================= */
    const sections = document.querySelectorAll('.section');
    
    const scrollSpy = () => {
        let current = '';
        const scrollPosition = window.scrollY + 200; // offset

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('href').includes(current)) {
                li.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', scrollSpy);

    /* =======================================
       Intersection Observer for Animations
       ======================================= */
    const faders = document.querySelectorAll('.animate-on-scroll');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    /* =======================================
       Lightbox for Certificates
       ======================================= */
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightboxBtn = document.querySelector('.lightbox-close');
    const certImages = document.querySelectorAll('.cert-image-trigger');

    // Open lightbox
    certImages.forEach(img => {
        // Find the parent's overlay to also act as a trigger, or just bind to the container
        const container = img.closest('.cert-thumb');
        container.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImg.src = img.src;
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        });
    });

    // Close Lightbox function
    const closeLightbox = () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scroll
    };

    // Click 'x' to close
    closeLightboxBtn.addEventListener('click', closeLightbox);

    // Click outside to close
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            closeLightbox();
        }
    });

    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            closeLightbox();
        }
    });

    /* =======================================
       Contact Form Submission Toast
       ======================================= */
    const contactForm = document.getElementById('contactForm');
    const toast = document.getElementById('toast');

    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show toast
            toast.className = "toast show";
            
            // Clear form
            contactForm.reset();

            // Hide toast after 3 seconds
            setTimeout(() => {
                toast.className = toast.className.replace("show", "");
            }, 3000);
        });
    }

    /* =======================================
       Back to Top Button
       ======================================= */
    const bttBtn = document.getElementById('btt-btn');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            bttBtn.classList.add('show');
        } else {
            bttBtn.classList.remove('show');
        }
    });

    bttBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});
