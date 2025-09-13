<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quantum Computing Hub</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <i class="fas fa-atom"></i>
                <span>Quantum Hub</span>
            </div>
            <ul class="nav-menu">
                <li><a href="#home" class="nav-link">Home</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#concepts" class="nav-link">Concepts</a></li>
                <li><a href="#applications" class="nav-link">Applications</a></li>
                <li><a href="#resources" class="nav-link">Resources</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-container">
            <div class="hero-content">
                <h1 class="hero-title">
                    Welcome to the <span class="gradient-text">Quantum Revolution</span>
                </h1>
                <p class="hero-description">
                    Explore the fascinating world of quantum computing, where classical physics meets quantum mechanics 
                    to unlock unprecedented computational power and solve problems that were once impossible.
                </p>
                <div class="hero-buttons">
                    <a href="#concepts" class="btn btn-primary">Start Learning</a>
                    <a href="#applications" class="btn btn-secondary">See Applications</a>
                </div>
            </div>
            <div class="hero-visual">
                <div class="quantum-animation">
                    <div class="quantum-circle circle-1"></div>
                    <div class="quantum-circle circle-2"></div>
                    <div class="quantum-circle circle-3"></div>
                    <div class="quantum-particles">
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">What is Quantum Computing?</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>
                        Quantum computing is a revolutionary approach to computation that leverages the principles 
                        of quantum mechanics to process information in ways that classical computers cannot. Unlike 
                        classical bits that exist in definite states (0 or 1), quantum bits (qubits) can exist in 
                        superposition, allowing for exponentially more computational possibilities.
                    </p>
                    <div class="features-grid">
                        <div class="feature-card">
                            <i class="fas fa-cube"></i>
                            <h3>Superposition</h3>
                            <p>Qubits can exist in multiple states simultaneously</p>
                        </div>
                        <div class="feature-card">
                            <i class="fas fa-link"></i>
                            <h3>Entanglement</h3>
                            <p>Qubits can be correlated in ways that classical bits cannot</p>
                        </div>
                        <div class="feature-card">
                            <i class="fas fa-wave-square"></i>
                            <h3>Interference</h3>
                            <p>Quantum states can interfere constructively or destructively</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Concepts Section -->
    <section id="concepts" class="concepts">
        <div class="container">
            <h2 class="section-title">Core Quantum Concepts</h2>
            <div class="concepts-grid">
                <div class="concept-card">
                    <div class="concept-icon">
                        <i class="fas fa-atom"></i>
                    </div>
                    <h3>Qubits</h3>
                    <p>
                        The fundamental unit of quantum information. Unlike classical bits, qubits can be in a 
                        superposition of states, represented as α|0⟩ + β|1⟩ where |α|² + |β|² = 1.
                    </p>
                </div>
                <div class="concept-card">
                    <div class="concept-icon">
                        <i class="fas fa-project-diagram"></i>
                    </div>
                    <h3>Quantum Gates</h3>
                    <p>
                        Operations that manipulate qubits. Common gates include Pauli-X, Pauli-Y, Pauli-Z, 
                        Hadamard, and CNOT gates, each performing specific quantum transformations.
                    </p>
                </div>
                <div class="concept-card">
                    <div class="concept-icon">
                        <i class="fas fa-sync-alt"></i>
                    </div>
                    <h3>Quantum Circuits</h3>
                    <p>
                        Sequences of quantum gates applied to qubits to perform computations. 
                        The order and type of gates determine the quantum algorithm's behavior.
                    </p>
                </div>
                <div class="concept-card">
                    <div class="concept-icon">
                        <i class="fas fa-eye-slash"></i>
                    </div>
                    <h3>Measurement</h3>
                    <p>
                        The process of observing a quantum state, which collapses the superposition 
                        to a definite classical state (0 or 1) with probabilities determined by the amplitudes.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Applications Section -->
    <section id="applications" class="applications">
        <div class="container">
            <h2 class="section-title">Quantum Applications</h2>
            <div class="applications-content">
                <div class="application-item">
                    <div class="app-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div class="app-content">
                        <h3>Cryptography & Security</h3>
                        <p>
                            Quantum computers threaten current encryption methods but also enable 
                            quantum cryptography solutions like quantum key distribution (QKD).
                        </p>
                    </div>
                </div>
                <div class="application-item">
                    <div class="app-icon">
                        <i class="fas fa-pills"></i>
                    </div>
                    <div class="app-content">
                        <h3>Drug Discovery</h3>
                        <p>
                            Simulating molecular interactions at the quantum level to accelerate 
                            the discovery of new drugs and materials.
                        </p>
                    </div>
                </div>
                <div class="application-item">
                    <div class="app-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div class="app-content">
                        <h3>Financial Modeling</h3>
                        <p>
                            Portfolio optimization, risk analysis, and Monte Carlo simulations 
                            with exponential speedup over classical methods.
                        </p>
                    </div>
                </div>
                <div class="application-item">
                    <div class="app-icon">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="app-content">
                        <h3>Machine Learning</h3>
                        <p>
                            Quantum machine learning algorithms that can process and analyze 
                            data in ways impossible for classical computers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Interactive Demo Section -->
    <section class="demo">
        <div class="container">
            <h2 class="section-title">Interactive Quantum Simulator</h2>
            <div class="demo-container">
                <div class="qubit-visualizer">
                    <div class="bloch-sphere" id="blochSphere">
                        <div class="sphere">
                            <div class="qubit-vector" id="qubitVector"></div>
                        </div>
                    </div>
                    <div class="controls">
                        <h3>Qubit State Controls</h3>
                        <div class="control-group">
                            <label for="theta">θ (Theta): <span id="thetaValue">0°</span></label>
                            <input type="range" id="theta" min="0" max="180" value="0">
                        </div>
                        <div class="control-group">
                            <label for="phi">φ (Phi): <span id="phiValue">0°</span></label>
                            <input type="range" id="phi" min="0" max="360" value="0">
                        </div>
                        <div class="state-display">
                            <p>Quantum State: |ψ⟩ = <span id="stateDisplay">|0⟩</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Resources Section -->
    <section id="resources" class="resources">
        <div class="container">
            <h2 class="section-title">Learning Resources</h2>
            <div class="resources-grid">
                <div class="resource-card">
                    <i class="fas fa-book"></i>
                    <h3>Textbooks</h3>
                    <ul>
                        <li>Quantum Computation and Quantum Information by Nielsen & Chuang</li>
                        <li>Quantum Computing: An Applied Approach by Hidary</li>
                        <li>Programming Quantum Computers by Johnston, Harrigan, and Gimeno-Segovia</li>
                    </ul>
                </div>
                <div class="resource-card">
                    <i class="fas fa-play-circle"></i>
                    <h3>Online Courses</h3>
                    <ul>
                        <li>IBM Quantum Experience</li>
                        <li>Qiskit Textbook</li>
                        <li>Microsoft Quantum Development Kit</li>
                        <li>Google Quantum AI</li>
                    </ul>
                </div>
                <div class="resource-card">
                    <i class="fas fa-code"></i>
                    <h3>Frameworks</h3>
                    <ul>
                        <li>Qiskit (IBM)</li>
                        <li>Cirq (Google)</li>
                        <li>Q# (Microsoft)</li>
                        <li>PennyLane (Xanadu)</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Get in Touch</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <h3>Connect with the Quantum Community</h3>
                    <p>
                        Join our community of quantum enthusiasts, researchers, and developers. 
                        Share your projects, ask questions, and stay updated with the latest 
                        developments in quantum computing.
                    </p>
                    <div class="social-links">
                        <a href="#" class="social-link"><i class="fab fa-github"></i> GitHub</a>
                        <a href="#" class="social-link"><i class="fab fa-twitter"></i> Twitter</a>
                        <a href="#" class="social-link"><i class="fab fa-linkedin"></i> LinkedIn</a>
                        <a href="#" class="social-link"><i class="fab fa-discord"></i> Discord</a>
                    </div>
                </div>
                <div class="contact-form">
                    <form>
                        <div class="form-group">
                            <input type="text" placeholder="Your Name" required>
                        </div>
                        <div class="form-group">
                            <input type="email" placeholder="Your Email" required>
                        </div>
                        <div class="form-group">
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Quantum Hub</h3>
                    <p>Exploring the quantum frontier, one qubit at a time.</p>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#concepts">Concepts</a></li>
                        <li><a href="#applications">Applications</a></li>
                        <li><a href="#resources">Resources</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Community</h4>
                    <ul>
                        <li><a href="#">GitHub</a></li>
                        <li><a href="#">Discord</a></li>
                        <li><a href="#">Newsletter</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Quantum Computing Hub. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
