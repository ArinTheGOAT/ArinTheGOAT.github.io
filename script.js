// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Quantum State Visualizer
class QuantumStateVisualizer {
    constructor() {
        this.thetaSlider = document.getElementById('theta');
        this.phiSlider = document.getElementById('phi');
        this.thetaValue = document.getElementById('thetaValue');
        this.phiValue = document.getElementById('phiValue');
        this.stateDisplay = document.getElementById('stateDisplay');
        this.qubitVector = document.getElementById('qubitVector');
        
        this.init();
    }

    init() {
        this.updateVisualization();
        
        this.thetaSlider.addEventListener('input', () => {
            this.updateVisualization();
        });
        
        this.phiSlider.addEventListener('input', () => {
            this.updateVisualization();
        });
    }

    updateVisualization() {
        const theta = parseFloat(this.thetaSlider.value) * Math.PI / 180;
        const phi = parseFloat(this.phiSlider.value) * Math.PI / 180;
        
        // Update display values
        this.thetaValue.textContent = this.thetaSlider.value + '°';
        this.phiValue.textContent = this.phiSlider.value + '°';
        
        // Calculate qubit state
        const alpha = Math.cos(theta / 2);
        const beta = Math.sin(theta / 2) * Math.exp(1 * phi);
        
        // Update state display
        const alphaReal = alpha.toFixed(3);
        const betaReal = (Math.sin(theta / 2) * Math.cos(phi)).toFixed(3);
        const betaImag = (Math.sin(theta / 2) * Math.sin(phi)).toFixed(3);
        
        let stateText = `${alphaReal}|0⟩`;
        if (Math.abs(betaReal) > 0.001 || Math.abs(betaImag) > 0.001) {
            const betaText = betaImag >= 0 ? 
                `+ (${betaReal} + ${betaImag}i)|1⟩` : 
                `+ (${betaReal} - ${Math.abs(betaImag)}i)|1⟩`;
            stateText += betaText;
        }
        
        this.stateDisplay.textContent = stateText;
        
        // Update vector position on Bloch sphere
        this.updateVectorPosition(theta, phi);
    }

    updateVectorPosition(theta, phi) {
        // Convert spherical coordinates to Cartesian
        const x = Math.sin(theta) * Math.cos(phi);
        const y = Math.sin(theta) * Math.sin(phi);
        const z = Math.cos(theta);
        
        // Convert to sphere coordinates (sphere is 300px diameter)
        const sphereRadius = 150;
        const centerX = 50; // 50% of parent
        const centerY = 50; // 50% of parent
        
        // Project 3D coordinates to 2D (simple orthographic projection)
        const screenX = centerX + (x * sphereRadius * 0.7);
        const screenY = centerY - (z * sphereRadius * 0.7);
        
        // Update vector position
        this.qubitVector.style.left = screenX + '%';
        this.qubitVector.style.top = screenY + '%';
        
        // Add glow effect based on state
        const intensity = Math.abs(Math.sin(theta / 2));
        this.qubitVector.style.boxShadow = `0 0 ${20 + intensity * 30}px #ff00ff`;
    }
}

// Initialize quantum visualizer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuantumStateVisualizer();
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.concept-card, .feature-card, .application-item, .resource-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Particle Animation Enhancement
class ParticleSystem {
    constructor() {
        this.particles = document.querySelectorAll('.particle');
        this.init();
    }

    init() {
        this.particles.forEach((particle, index) => {
            // Add random movement
            setInterval(() => {
                const randomX = (Math.random() - 0.5) * 20;
                const randomY = (Math.random() - 0.5) * 20;
                particle.style.transform = `translate(${randomX}px, ${randomY}px)`;
            }, 2000 + index * 500);
        });
    }
}

// Initialize particle system
document.addEventListener('DOMContentLoaded', () => {
    new ParticleSystem();
});

// Form handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! We\'ll get back to you soon.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
});

// Typing animation for hero title
class TypingAnimation {
    constructor(element, text, speed = 100) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.index = 0;
    }

    start() {
        this.element.textContent = '';
        this.type();
    }

    type() {
        if (this.index < this.text.length) {
            this.element.textContent += this.text.charAt(this.index);
            this.index++;
            setTimeout(() => this.type(), this.speed);
        }
    }
}

// Initialize typing animation
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        const typingAnimation = new TypingAnimation(heroTitle, originalText, 50);
        
        // Start typing animation after a short delay
        setTimeout(() => {
            typingAnimation.start();
        }, 1000);
    }
});

// Quantum circuit simulator (basic)
class QuantumCircuitSimulator {
    constructor() {
        this.gates = [];
        this.qubits = 2;
        this.init();
    }

    init() {
        this.createCircuitInterface();
    }

    createCircuitInterface() {
        // This would create an interactive quantum circuit builder
        // For now, we'll add a simple demonstration
        console.log('Quantum Circuit Simulator initialized');
    }

    addGate(gateType, qubitIndex) {
        this.gates.push({ type: gateType, qubit: qubitIndex });
        this.updateCircuit();
    }

    updateCircuit() {
        // Update the visual representation of the circuit
        console.log('Circuit updated:', this.gates);
    }
}

// Initialize quantum circuit simulator
document.addEventListener('DOMContentLoaded', () => {
    new QuantumCircuitSimulator();
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Any scroll-based animations or effects can go here
}, 16)); // ~60fps

// Add loading animation
window.addEventListener('load', () => {
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
        background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    body:not(.loaded)::after {
        content: 'Loading Quantum Experience...';
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #00d4ff;
        font-size: 1.5rem;
        font-weight: 600;
        z-index: 10000;
        animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }
`;

// Inject loading styles
const styleSheet = document.createElement('style');
styleSheet.textContent = loadingStyles;
document.head.appendChild(styleSheet);
