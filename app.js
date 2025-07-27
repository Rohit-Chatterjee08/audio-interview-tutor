// Ultimate Interview Guide - Audio Interactive Learning Application (Fixed)
class AudioInterviewGuide {
    constructor() {
        // Interview guide data from the provided JSON
        this.guideData = {
            "guide_title": "The Ultimate Interview Guide for Rohit Chatterjee",
            "subtitle": "300+ Q&As on AI Automation & Backend Engineering",
            "sections": [
                {
                    "id": 1,
                    "title": "Career Summary & Experience Highlights",
                    "subsections": [
                        "Positioning Your Experience",
                        "Quantifying Your Achievements", 
                        "Industry Knowledge & Context"
                    ],
                    "key_points": [
                        "4+ years specializing in AI automation and backend engineering",
                        "Experience with major hospitality brands like ITC Hotels and Taj Hotels",
                        "Progressive career growth from Technical Service Desk Executive to Assistant Manager",
                        "Led AWS EC2 server configurations and developed Generative AI workflows",
                        "Achieved 99%+ SLA compliance through AI-driven solutions"
                    ]
                },
                {
                    "id": 2,
                    "title": "AI & Machine Learning",
                    "subsections": [
                        "Generative AI Fundamentals",
                        "Prompt Engineering", 
                        "Large Language Models (LLMs)",
                        "ML Workflow Design"
                    ],
                    "key_points": [
                        "Developed AI-Driven Root Cause Analysis Engine",
                        "Reduced diagnostic time from 2.5 hours to under 15 minutes",
                        "Implemented retrieval-augmented generation (RAG) approaches",
                        "Created specialized prompt templates for different system components",
                        "Achieved 92% diagnostic accuracy with engineered prompts"
                    ]
                },
                {
                    "id": 3,
                    "title": "Cloud & DevOps",
                    "subsections": [
                        "AWS EC2",
                        "Docker",
                        "CI/CD",
                        "Kubernetes Concepts"
                    ],
                    "key_points": [
                        "AWS EC2 server configurations for hospitality systems",
                        "Docker-based deployments with health checks",
                        "Reduced deployment errors by 87%", 
                        "Automated patch deployment processes",
                        "Decreased average deployment time from 45 minutes to under 8 minutes"
                    ]
                },
                {
                    "id": 4,
                    "title": "Backend Development", 
                    "subsections": [
                        "Spring Boot",
                        "REST APIs", 
                        "Oracle FIAS"
                    ],
                    "key_points": [
                        "Built REST API integrations for hotel management systems",
                        "Improved service response by 30% through API optimization",
                        "Developed unified guest profile services",
                        "Created standardized API integration layers",
                        "Implemented event-driven integration architectures"
                    ]
                },
                {
                    "id": 5,
                    "title": "Automation Platforms",
                    "subsections": [
                        "N8N",
                        "Make (Integromat)",
                        "Zapier", 
                        "Integrately",
                        "Shell/Bash Scripting"
                    ],
                    "key_points": [
                        "Used N8N as orchestration platform for complex workflows",
                        "Automated CRM and POS support processes",
                        "Created reusable automation templates",
                        "Implemented multi-step processes with error handling",
                        "Reduced manual workflow time by over 40%"
                    ]
                },
                {
                    "id": 6,
                    "title": "Databases",
                    "subsections": [
                        "MySQL",
                        "MariaDB", 
                        "Query Optimization",
                        "Backup & Restore"
                    ],
                    "key_points": [
                        "Optimized database queries for hotel management systems",
                        "Implemented efficient data consolidation processes",
                        "Managed backup and restore procedures for critical systems",
                        "Reduced data processing time through optimization",
                        "Handled massive log data from multiple hotel properties"
                    ]
                },
                {
                    "id": 7,
                    "title": "API Tools & Integration",
                    "subsections": [
                        "Swagger",
                        "Postman",
                        "JSON/XML API Integrations"
                    ],
                    "key_points": [
                        "Created API documentation using Swagger",
                        "Extensive API testing with Postman",
                        "Developed JSON/XML integration patterns",
                        "Built standardized API endpoints for system integration",
                        "Implemented robust error handling for API calls"
                    ]
                },
                {
                    "id": 8,
                    "title": "Monitoring & Observability", 
                    "subsections": [
                        "Site24x7",
                        "Nagios",
                        "JIRA",
                        "Real-time Log Analysis"
                    ],
                    "key_points": [
                        "Implemented comprehensive monitoring systems",
                        "Real-time log analysis for proactive issue detection",
                        "JIRA integration for incident tracking",
                        "Created monitoring dashboards for hotel operations",
                        "Automated alert systems for critical issues"
                    ]
                },
                {
                    "id": 9,
                    "title": "Web Technologies",
                    "subsections": [
                        "HTML/CSS",
                        "JavaScript",
                        "PHP",
                        "i18n Keys"
                    ],
                    "key_points": [
                        "Frontend development for hotel management interfaces",
                        "JavaScript automation for client-side processes",
                        "PHP backend development for web applications", 
                        "Internationalization support for multi-language systems",
                        "Responsive design for various devices"
                    ]
                },
                {
                    "id": 10,
                    "title": "Security & Infrastructure",
                    "subsections": [
                        "SSL Certificate Management", 
                        "Apache, Tomcat, Nginx"
                    ],
                    "key_points": [
                        "SSL certificate management for secure connections",
                        "Apache, Tomcat, and Nginx server configuration",
                        "Security best practices implementation",
                        "Infrastructure optimization for hotel systems",
                        "Secure data handling and privacy protection"
                    ]
                },
                {
                    "id": 11,
                    "title": "Data Visualization & Reporting",
                    "subsections": [
                        "Power BI",
                        "Matplotlib",
                        "Seaborn"
                    ],
                    "key_points": [
                        "Power BI dashboards for business intelligence",
                        "Python visualization libraries for data analysis",
                        "Custom reporting solutions for hotel management",
                        "Data-driven insights for operational improvements",
                        "Interactive dashboards for stakeholders"
                    ]
                },
                {
                    "id": 12,
                    "title": "Key Projects Deep Dive",
                    "subsections": [
                        "AI-Driven RCA Engine",
                        "Hotel Automation Suite", 
                        "Smart Debugging Toolkit",
                        "SLA Alert System"
                    ],
                    "key_points": [
                        "AI-Driven RCA Engine: Reduced diagnostic time by 82%",
                        "Hotel Automation Suite: Automated 78% of guest requests",
                        "Smart Debugging Toolkit: Enabled non-technical staff troubleshooting",
                        "SLA Alert System: Achieved 99%+ compliance rates",
                        "All projects delivered measurable business impact"
                    ]
                },
                {
                    "id": 13,
                    "title": "Different Interview Rounds Preparation",
                    "subsections": [
                        "Technical Round Strategies",
                        "Managerial Round Preparation",
                        "CXO/CEO Round Approach", 
                        "Remote Interview Tips"
                    ],
                    "key_points": [
                        "Technical rounds: Focus on problem-solving approaches",
                        "Managerial rounds: Emphasize leadership and team impact",
                        "Executive rounds: Highlight business value and strategic thinking",
                        "Remote interviews: Ensure technical setup and engagement",
                        "Preparation strategies for different interview formats"
                    ]
                },
                {
                    "id": 14,
                    "title": "Behavioral Questions & Situational Examples",
                    "subsections": [
                        "STAR Method Examples",
                        "Conflict Resolution",
                        "Leadership Scenarios",
                        "Problem-Solving Stories"
                    ],
                    "key_points": [
                        "Use STAR method for structured responses",
                        "Prepare specific examples from MSR IT Solution experience",
                        "Focus on measurable outcomes and business impact",
                        "Include examples of cross-team collaboration",
                        "Demonstrate continuous learning and adaptation"
                    ]
                },
                {
                    "id": 15,
                    "title": "Salary Negotiation & Career Advancement",
                    "subsections": [
                        "Market Research",
                        "Value Proposition", 
                        "Negotiation Strategies",
                        "Career Planning"
                    ],
                    "key_points": [
                        "Research market rates for AI automation roles",
                        "Quantify achievements with specific metrics",
                        "Prepare multiple negotiation scenarios",
                        "Focus on total compensation package",
                        "Plan long-term career progression in AI/automation"
                    ]
                }
            ]
        };

        // Audio state management
        this.currentSectionIndex = 0;
        this.isPlaying = false;
        this.isPaused = false;
        this.speechSynthesis = window.speechSynthesis;
        this.currentUtterance = null;
        this.availableVoices = [];
        this.selectedVoice = null;
        this.playbackSpeed = 1;
        this.readingMode = 'continuous';
        
        // Progress tracking
        this.completedSections = new Set();
        this.bookmarkedSections = new Set();
        this.startTime = Date.now();
        this.studyTimeSpent = 0;
        
        // Reading state
        this.currentSentences = [];
        this.currentSentenceIndex = 0;
        this.isReadingContent = false;
        
        // Load saved data from localStorage
        this.loadUserProgress();
        
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupApplication());
        } else {
            this.setupApplication();
        }
    }

    setupApplication() {
        this.checkAudioSupport();
        this.setupEventListeners();
        this.loadVoices();
        this.renderSectionsList();
        this.displayCurrentSection();
        this.updateProgress();
        
        // Load voices when they become available
        if (this.speechSynthesis.onvoiceschanged !== undefined) {
            this.speechSynthesis.onvoiceschanged = () => this.loadVoices();
        }
    }

    checkAudioSupport() {
        const supportIndicator = document.getElementById('tts-support');
        if (!supportIndicator) return;
        
        const statusIcon = supportIndicator.querySelector('.status-icon');
        const statusText = supportIndicator.querySelector('.status-text');
        
        if ('speechSynthesis' in window) {
            if (statusIcon) statusIcon.textContent = '✅';
            if (statusText) statusText.textContent = 'Text-to-Speech supported';
            supportIndicator.classList.add('supported');
        } else {
            if (statusIcon) statusIcon.textContent = '❌';
            if (statusText) statusText.textContent = 'Text-to-Speech not supported in this browser';
            supportIndicator.classList.add('not-supported');
        }
    }

    loadVoices() {
        this.availableVoices = this.speechSynthesis.getVoices();
        const voiceSelect = document.getElementById('voice-select');
        
        if (voiceSelect && this.availableVoices.length > 0) {
            voiceSelect.innerHTML = '<option value="">Default</option>';
            
            this.availableVoices.forEach((voice, index) => {
                const option = document.createElement('option');
                option.value = index;
                option.textContent = `${voice.name} (${voice.lang})`;
                if (voice.default) {
                    option.selected = true;
                    this.selectedVoice = voice;
                }
                voiceSelect.appendChild(option);
            });
            
            // Update voice control status
            voiceSelect.classList.remove('voice-loading');
        }
    }

    setupEventListeners() {
        // Welcome screen - Fixed event binding
        const startBtn = document.getElementById('start-tutorial');
        if (startBtn) {
            // Remove any existing listeners and add new one
            const newStartBtn = startBtn.cloneNode(true);
            startBtn.parentNode.replaceChild(newStartBtn, startBtn);
            
            newStartBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Start button clicked'); // Debug log
                this.startLearning();
            });
            
            // Add keyboard support
            newStartBtn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.startLearning();
                }
            });
        }

        // Audio controls
        this.setupAudioControls();
        
        // Navigation controls
        this.setupNavigationControls();
        
        // Settings controls
        this.setupSettingsControls();
        
        // Search functionality - Fixed
        this.setupSearchFunctionality();
        
        // Completion screen
        this.setupCompletionControls();
        
        // Keyboard shortcuts
        this.setupKeyboardShortcuts();
        
        // Study time tracking
        this.setupTimeTracking();
    }

    setupAudioControls() {
        const playPauseBtn = document.getElementById('audio-play-pause');
        if (playPauseBtn) {
            playPauseBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.togglePlayPause();
            });
        }

        const stopBtn = document.getElementById('audio-stop');
        if (stopBtn) {
            stopBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.stopReading();
            });
        }

        const prevBtn = document.getElementById('audio-prev');
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.previousSection();
            });
        }

        const nextBtn = document.getElementById('audio-next');
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.nextSection();
            });
        }
    }

    setupNavigationControls() {
        const prevSectionBtn = document.getElementById('prev-section');
        if (prevSectionBtn) {
            prevSectionBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.previousSection();
            });
        }

        const nextSectionBtn = document.getElementById('next-section');
        if (nextSectionBtn) {
            nextSectionBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.nextSection();
            });
        }

        const bookmarkBtn = document.getElementById('bookmark-btn');
        if (bookmarkBtn) {
            bookmarkBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleBookmark();
            });
        }
    }

    setupSettingsControls() {
        const speedSelect = document.getElementById('audio-speed');
        if (speedSelect) {
            speedSelect.addEventListener('change', (e) => {
                this.playbackSpeed = parseFloat(e.target.value);
                this.updateAudioSettings();
            });
        }

        const voiceSelect = document.getElementById('voice-select');
        if (voiceSelect) {
            voiceSelect.addEventListener('change', (e) => {
                const voiceIndex = parseInt(e.target.value);
                this.selectedVoice = isNaN(voiceIndex) ? null : this.availableVoices[voiceIndex];
                this.updateAudioSettings();
            });
        }

        const readingModeSelect = document.getElementById('reading-mode');
        if (readingModeSelect) {
            readingModeSelect.addEventListener('change', (e) => {
                this.readingMode = e.target.value;
            });
        }
    }

    setupSearchFunctionality() {
        const searchInput = document.getElementById('section-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchSections(e.target.value);
            });
            
            // Clear search on escape
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    e.target.value = '';
                    this.searchSections('');
                }
            });
        }
    }

    setupCompletionControls() {
        const restartBtn = document.getElementById('restart-tutorial');
        if (restartBtn) {
            restartBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.restartLearning();
            });
        }

        const reviewBookmarksBtn = document.getElementById('review-bookmarks');
        if (reviewBookmarksBtn) {
            reviewBookmarksBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.reviewBookmarks();
            });
        }
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (document.getElementById('tutorial-interface').classList.contains('hidden')) {
                return;
            }

            switch (e.key) {
                case ' ':
                    e.preventDefault();
                    this.togglePlayPause();
                    break;
                case 'ArrowLeft':
                    if (e.ctrlKey) {
                        e.preventDefault();
                        this.previousSection();
                    }
                    break;
                case 'ArrowRight':
                    if (e.ctrlKey) {
                        e.preventDefault();
                        this.nextSection();
                    }
                    break;
                case 'Escape':
                    this.stopReading();
                    break;
            }
        });
    }

    setupTimeTracking() {
        setInterval(() => {
            if (!document.getElementById('tutorial-interface').classList.contains('hidden')) {
                this.studyTimeSpent += 1;
                this.updateProgress();
                this.saveUserProgress();
            }
        }, 60000); // Update every minute
    }

    startLearning() {
        console.log('Starting learning...'); // Debug log
        
        const welcomeScreen = document.getElementById('welcome-screen');
        const tutorialInterface = document.getElementById('tutorial-interface');
        
        if (welcomeScreen && tutorialInterface) {
            console.log('Switching screens...'); // Debug log
            welcomeScreen.classList.add('hidden');
            tutorialInterface.classList.remove('hidden');
            
            // Force reflow
            tutorialInterface.offsetHeight;
            
            this.displayCurrentSection();
            this.updateProgress();
            this.announceToScreenReader('Interview guide loaded. Use spacebar to start reading.');
        } else {
            console.error('Could not find required elements'); // Debug log
        }
    }

    renderSectionsList() {
        const sectionsList = document.getElementById('sections-list');
        if (!sectionsList) return;
        
        sectionsList.innerHTML = '';

        this.guideData.sections.forEach((section, index) => {
            const sectionItem = document.createElement('div');
            sectionItem.className = 'section-item';
            sectionItem.setAttribute('data-section-index', index);
            
            if (this.completedSections.has(index)) {
                sectionItem.classList.add('completed');
            }
            if (this.bookmarkedSections.has(index)) {
                sectionItem.classList.add('bookmarked');
            }
            if (index === this.currentSectionIndex) {
                sectionItem.classList.add('active');
            }
            
            sectionItem.innerHTML = `
                <div class="section-title">${section.title}</div>
                <div class="section-subsections">${section.subsections.join(' • ')}</div>
            `;

            sectionItem.addEventListener('click', (e) => {
                e.preventDefault(); 
                this.jumpToSection(index);
            });
            
            sectionsList.appendChild(sectionItem);
        });
    }

    displayCurrentSection() {
        const currentSection = this.guideData.sections[this.currentSectionIndex];
        if (!currentSection) return;
        
        console.log('Displaying section:', currentSection.title); // Debug log
        
        // Update section title and metadata
        const sectionTitle = document.getElementById('section-title');
        const sectionNumber = document.querySelector('.section-number');
        
        if (sectionTitle) {
            sectionTitle.textContent = currentSection.title;
        }
        
        if (sectionNumber) {
            sectionNumber.textContent = `Section ${this.currentSectionIndex + 1} of ${this.guideData.sections.length}`;
        }

        // Update content - Fixed content generation
        const contentText = document.getElementById('content-text');
        if (contentText) {
            const content = this.generateSectionContent(currentSection);
            contentText.innerHTML = content;
            this.prepareSentencesForReading(contentText);
        }

        // Update subsections
        const subsectionsContainer = document.getElementById('subsections');
        if (subsectionsContainer && currentSection.subsections.length > 0) {
            subsectionsContainer.innerHTML = `
                <h4>Subsections Covered:</h4>
                <ul>
                    ${currentSection.subsections.map(sub => `<li>${sub}</li>`).join('')}
                </ul>
            `;
        }

        // Update key points
        const keyPointsContainer = document.getElementById('key-points');
        if (keyPointsContainer && currentSection.key_points.length > 0) {
            keyPointsContainer.innerHTML = `
                <h4>Key Points to Remember:</h4>
                <ul>
                    ${currentSection.key_points.map(point => `<li>${point}</li>`).join('')}
                </ul>
            `;
        }

        // Update navigation buttons
        this.updateNavigationButtons();
        
        // Update sidebar
        this.renderSectionsList();
        
        // Update bookmark button
        this.updateBookmarkButton();
        
        // Reset reading progress
        this.resetReadingProgress();
        
        // Update current section in header
        const currentSectionEl = document.getElementById('current-section');
        if (currentSectionEl) {
            currentSectionEl.textContent = `Section ${this.currentSectionIndex + 1}`;
        }
    }

    generateSectionContent(section) {
        // Generate comprehensive content based on section
        const detailedContent = {
            1: "Your career summary is the foundation of your interview success. With 4+ years of specialized experience in AI automation and backend engineering, you've built an impressive track record supporting major hospitality brands like ITC Hotels and Taj Hotels. Your journey from Technical Service Desk Executive to Assistant Manager demonstrates clear career progression and increasing responsibilities. Focus on quantifying your achievements - like the 99%+ SLA compliance you achieved through AI-driven solutions and your leadership in AWS EC2 server configurations.",
            
            2: "AI and Machine Learning expertise sets you apart in today's market. Your work on the AI-Driven Root Cause Analysis Engine is particularly compelling - reducing diagnostic time from 2.5 hours to under 15 minutes represents an 82% improvement that directly impacts business operations. Your experience with retrieval-augmented generation (RAG) approaches and prompt engineering, achieving 92% diagnostic accuracy, demonstrates both technical depth and practical application of cutting-edge AI technologies.",
            
            3: "Cloud and DevOps capabilities are essential for modern backend engineering roles. Your AWS EC2 server configuration experience, combined with Docker-based deployments, showcases infrastructure expertise. The 87% reduction in deployment errors and decreasing deployment time from 45 minutes to under 8 minutes demonstrates your ability to optimize operational processes and deliver measurable improvements to development workflows.",
            
            4: "Backend development forms the core of your technical expertise. Your Spring Boot proficiency, combined with REST API development that improved service response times by 30%, shows both framework knowledge and performance optimization skills. Your work with Oracle FIAS integration and event-driven architectures demonstrates enterprise-level experience with complex systems integration.",
            
            5: "Automation platforms expertise highlights your efficiency and process improvement mindset. Your use of N8N as an orchestration platform for complex workflows, along with experience in Make, Zapier, and Integrately, shows versatility in automation tools. The 40%+ reduction in manual workflow time you achieved directly translates to cost savings and operational efficiency.",
            
            6: "Database management skills are crucial for backend engineering roles. Your MySQL and MariaDB expertise, combined with query optimization capabilities, demonstrates both practical database administration and performance tuning skills. Your experience handling massive log data from multiple hotel properties shows scalability considerations and real-world database challenges.",
            
            7: "API tools and integration expertise shows your full-stack development capabilities. Your Swagger documentation experience ensures proper API design and communication with frontend teams. Extensive Postman testing experience demonstrates quality assurance mindset, while your JSON/XML integration patterns show versatility in data formats and system interconnectivity.",
            
            8: "Monitoring and observability skills demonstrate your commitment to system reliability and proactive issue resolution. Your implementation of Site24x7 and Nagios monitoring systems, combined with real-time log analysis capabilities, shows understanding of operational excellence. JIRA integration for incident tracking demonstrates workflow optimization and collaborative problem-solving approaches.",
            
            9: "Web technologies knowledge complements your backend expertise with frontend understanding. Your HTML/CSS, JavaScript, and PHP experience enables full-stack development capabilities. Internationalization support experience shows consideration for global applications, while responsive design skills demonstrate modern web development practices and user experience awareness.",
            
            10: "Security and infrastructure expertise is essential for senior engineering roles. Your SSL certificate management experience ensures secure communications, while Apache, Tomcat, and Nginx configuration skills demonstrate web server administration capabilities. Security best practices implementation shows understanding of data protection and system hardening requirements.",
            
            11: "Data visualization and reporting capabilities demonstrate your ability to translate technical work into business value. Power BI dashboard creation shows business intelligence skills, while Python visualization libraries (Matplotlib, Seaborn) demonstrate data analysis capabilities. Custom reporting solutions for hotel management show domain expertise and stakeholder communication skills.",
            
            12: "Your key projects showcase real-world impact and measurable business results. The AI-Driven RCA Engine with 82% diagnostic time reduction, Hotel Automation Suite with 78% guest request automation, Smart Debugging Toolkit enabling non-technical staff troubleshooting, and SLA Alert System achieving 99%+ compliance rates all demonstrate significant business impact and technical innovation.",
            
            13: "Different interview rounds require tailored preparation strategies. Technical rounds focus on system design, coding challenges, and architecture discussions. Managerial rounds emphasize leadership experience, team coordination, and project management. Executive rounds require business impact focus, ROI presentation, and strategic thinking. Remote interviews need special attention to technical setup and engagement strategies.",
            
            14: "Behavioral questions assess your soft skills and cultural fit. The STAR method (Situation, Task, Action, Result) provides a structured approach to answering behavioral questions. Prepare specific examples from your MSR IT Solution experience that demonstrate conflict resolution, leadership scenarios, problem-solving abilities, and continuous learning mindset.",
            
            15: "Salary negotiation and career advancement require strategic preparation. Research market rates for AI automation roles, prepare your value proposition based on quantifiable achievements, and consider total compensation packages including benefits, equity, and growth opportunities. Long-term career planning in AI/automation ensures continued professional development and market relevance."
        };

        return `<p>${detailedContent[section.id] || 'This section covers important concepts for your interview preparation.'}</p>`;
    }

    prepareSentencesForReading(container) {
        const text = container.textContent;
        this.currentSentences = text.match(/[^\.!?]+[\.!?]+/g) || [text];
        this.currentSentenceIndex = 0;
        
        // Update sentence count display
        const totalSentencesSpan = document.getElementById('total-sentences');
        if (totalSentencesSpan) {
            totalSentencesSpan.textContent = this.currentSentences.length;
        }
    }

    togglePlayPause() {
        if (this.isPlaying) {
            this.pauseReading();
        } else {
            this.startReading();
        }
    }

    startReading() {
        if (!('speechSynthesis' in window)) {
            this.announceToScreenReader('Text-to-speech is not supported in this browser.');
            return;
        }

        this.isPlaying = true;
        this.isPaused = false;
        
        // Update UI
        this.updatePlayPauseButton();
        this.updateAudioStatus('Reading...');
        this.showSpeakingIndicator();
        
        if (this.currentUtterance && this.speechSynthesis.paused) {
            // Resume if paused
            this.speechSynthesis.resume();
        } else {
            // Start new reading
            this.readCurrentSection();
        }
    }

    pauseReading() {
        this.isPlaying = false;
        this.isPaused = true;
        
        if (this.speechSynthesis.speaking) {
            this.speechSynthesis.pause();
        }
        
        this.updatePlayPauseButton();
        this.updateAudioStatus('Paused');
        this.hideSpeakingIndicator();
    }

    stopReading() {
        this.isPlaying = false;
        this.isPaused = false;
        this.speechSynthesis.cancel();
        this.currentUtterance = null;
        this.currentSentenceIndex = 0;
        
        this.updatePlayPauseButton();
        this.updateAudioStatus('Ready');
        this.hideSpeakingIndicator();
        this.resetReadingProgress();
        this.clearSentenceHighlight();
    }

    readCurrentSection() {
        const currentSection = this.guideData.sections[this.currentSectionIndex];
        const contentToRead = this.buildReadingContent(currentSection);
        
        this.currentUtterance = new SpeechSynthesisUtterance(contentToRead);
        this.currentUtterance.rate = this.playbackSpeed;
        
        if (this.selectedVoice) {
            this.currentUtterance.voice = this.selectedVoice;
        }
        
        // Set up event listeners
        this.currentUtterance.onstart = () => {
            this.updateCurrentReading(currentSection.title);
            this.updateAudioStatus('Reading...');
        };
        
        this.currentUtterance.onend = () => {
            this.onSectionReadingComplete();
        };
        
        this.currentUtterance.onerror = (event) => {
            console.error('Speech synthesis error:', event);
            this.stopReading();
            this.updateAudioStatus('Error occurred');
        };
        
        // Track reading progress with boundary events if available
        if (this.currentUtterance.onboundary) {
            this.currentUtterance.onboundary = (event) => {
                this.updateReadingProgressBoundary(event);
            };
        }
        
        this.speechSynthesis.speak(this.currentUtterance);
    }

    buildReadingContent(section) {
        let content = `Section ${section.id}: ${section.title}. `;
        
        // Add section introduction
        content += this.generateSectionContent(section).replace(/<[^>]*>/g, '') + ' ';
        
        // Add subsections
        if (section.subsections.length > 0) {
            content += 'This section covers the following subsections: ';
            content += section.subsections.join(', ') + '. ';
        }
        
        // Add key points
        if (section.key_points.length > 0) {
            content += 'Key points to remember: ';
            section.key_points.forEach((point, index) => {
                content += `Point ${index + 1}: ${point}. `;
            });
        }
        
        return content;
    }

    onSectionReadingComplete() {
        // Mark section as completed
        this.completedSections.add(this.currentSectionIndex);
        
        // Update UI
        this.renderSectionsList();
        this.updateProgress();
        this.updateAudioStatus('Section complete');
        
        if (this.readingMode === 'continuous' && this.currentSectionIndex < this.guideData.sections.length - 1) {
            // Auto-advance to next section
            setTimeout(() => {
                this.nextSection();
                if (this.isPlaying) {
                    this.startReading();
                }
            }, 2000);
        } else if (this.currentSectionIndex >= this.guideData.sections.length - 1) {
            // Completed all sections
            this.completeLearning();
        } else {
            this.stopReading();
        }
    }

    updateReadingProgressBoundary(event) {
        // Calculate progress based on character position
        const progress = (event.charIndex / event.target.text.length) * 100;
        this.updateReadingProgressBar(progress);
        
        // Update sentence indicator
        const sentenceIndex = Math.floor((event.charIndex / event.target.text.length) * this.currentSentences.length);
        this.highlightCurrentSentence(sentenceIndex);
    }

    updateReadingProgressBar(percentage) {
        const progressFill = document.getElementById('reading-progress-fill');
        if (progressFill) {
            progressFill.style.width = `${Math.min(percentage, 100)}%`;
        }
    }

    highlightCurrentSentence(sentenceIndex) {
        if (sentenceIndex !== this.currentSentenceIndex && sentenceIndex < this.currentSentences.length) {
            this.currentSentenceIndex = sentenceIndex;
            
            const currentSentenceSpan = document.getElementById('current-sentence');
            if (currentSentenceSpan) {
                currentSentenceSpan.textContent = `Sentence ${Math.max(sentenceIndex + 1, 1)}`;
            }
        }
    }

    clearSentenceHighlight() {
        const highlightedElements = document.querySelectorAll('.speaking-sentence');
        highlightedElements.forEach(el => el.classList.remove('speaking-sentence'));
    }

    nextSection() {
        if (this.currentSectionIndex < this.guideData.sections.length - 1) {
            this.stopReading();
            this.currentSectionIndex++;
            this.displayCurrentSection();
            this.updateProgress();
            this.saveUserProgress();
        }
    }

    previousSection() {
        if (this.currentSectionIndex > 0) {
            this.stopReading();
            this.currentSectionIndex--;
            this.displayCurrentSection();
            this.updateProgress();
            this.saveUserProgress();
        }
    }

    jumpToSection(sectionIndex) {
        if (sectionIndex >= 0 && sectionIndex < this.guideData.sections.length) {
            this.stopReading();
            this.currentSectionIndex = sectionIndex;
            this.displayCurrentSection();
            this.updateProgress();
            this.saveUserProgress();
        }
    }

    toggleBookmark() {
        if (this.bookmarkedSections.has(this.currentSectionIndex)) {
            this.bookmarkedSections.delete(this.currentSectionIndex);
        } else {
            this.bookmarkedSections.add(this.currentSectionIndex);
        }
        
        this.updateBookmarkButton();
        this.renderSectionsList();
        this.saveUserProgress();
    }

    searchSections(query) {
        const sectionItems = document.querySelectorAll('.section-item');
        const searchTerm = query.toLowerCase().trim();
        
        sectionItems.forEach((item, index) => {
            const section = this.guideData.sections[index];
            if (!section) return;
            
            const searchText = `${section.title} ${section.subsections.join(' ')} ${section.key_points.join(' ')}`.toLowerCase();
            
            if (searchTerm === '' || searchText.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
        
        // Show feedback if no results
        const visibleItems = Array.from(sectionItems).filter(item => item.style.display !== 'none');
        if (visibleItems.length === 0 && searchTerm !== '') {
            console.log('No sections found for:', searchTerm);
        }
    }

    updatePlayPauseButton() {
        const playPauseBtn = document.getElementById('audio-play-pause');
        const btnIcon = playPauseBtn?.querySelector('.btn-icon');
        const btnText = playPauseBtn?.querySelector('.btn-text');
        
        if (this.isPlaying) {
            if (btnIcon) btnIcon.textContent = '⏸️';
            if (btnText) btnText.textContent = 'Pause';
            playPauseBtn?.classList.add('playing');
        } else {
            if (btnIcon) btnIcon.textContent = '▶️';
            if (btnText) btnText.textContent = 'Play';
            playPauseBtn?.classList.remove('playing');
        }
    }

    updateAudioStatus(status) {
        const audioStatus = document.getElementById('audio-status');
        if (audioStatus) {
            audioStatus.textContent = status;
        }
    }

    updateCurrentReading(text) {
        const currentReading = document.getElementById('current-reading');
        const readingText = currentReading?.querySelector('.reading-text');
        if (readingText) {
            readingText.textContent = `Reading: ${text}`;
        }
    }

    showSpeakingIndicator() {
        const indicator = document.getElementById('speaking-indicator');
        if (indicator) {
            indicator.classList.add('active');
        }
    }

    hideSpeakingIndicator() {
        const indicator = document.getElementById('speaking-indicator');
        if (indicator) {
            indicator.classList.remove('active');
        }
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-section');
        const nextBtn = document.getElementById('next-section');
        
        if (prevBtn) {
            prevBtn.disabled = this.currentSectionIndex === 0;
        }
        
        if (nextBtn) {
            if (this.currentSectionIndex === this.guideData.sections.length - 1) {
                nextBtn.textContent = 'Complete Learning →';
                nextBtn.onclick = (e) => {
                    e.preventDefault();
                    this.completeLearning();
                };
            } else {
                nextBtn.textContent = 'Next Section →';
                nextBtn.onclick = (e) => {
                    e.preventDefault();
                    this.nextSection();
                };
            }
        }
    }

    updateBookmarkButton() {
        const bookmarkBtn = document.getElementById('bookmark-btn');
        if (bookmarkBtn) {
            if (this.bookmarkedSections.has(this.currentSectionIndex)) {
                bookmarkBtn.classList.add('bookmarked');
                bookmarkBtn.title = 'Remove bookmark';
            } else {
                bookmarkBtn.classList.remove('bookmarked');
                bookmarkBtn.title = 'Bookmark this section';
            }
        }
    }

    updateProgress() {
        // Update completed sections count
        const completedCount = document.getElementById('completed-count');
        if (completedCount) {
            completedCount.textContent = this.completedSections.size;
        }
        
        // Update time spent
        const timeSpent = document.getElementById('time-spent');
        if (timeSpent) {
            timeSpent.textContent = `${Math.floor(this.studyTimeSpent / 60)} min`;
        }
        
        // Update progress text in header
        const progressText = document.getElementById('progress-text');
        if (progressText) {
            progressText.textContent = `${this.currentSectionIndex + 1} of ${this.guideData.sections.length} sections`;
        }
    }

    resetReadingProgress() {
        this.updateReadingProgressBar(0);
        this.currentSentenceIndex = 0;
        const currentSentenceSpan = document.getElementById('current-sentence');
        if (currentSentenceSpan) {
            currentSentenceSpan.textContent = 'Sentence 1';
        }
    }

    updateAudioSettings() {
        if (this.currentUtterance && this.speechSynthesis.speaking) {
            // Restart with new settings
            if (this.isPlaying) {
                this.stopReading();
                setTimeout(() => this.startReading(), 100);
            }
        }
    }

    completeLearning() {
        this.stopReading();
        
        const tutorialInterface = document.getElementById('tutorial-interface');
        const completionScreen = document.getElementById('completion-screen');
        
        if (tutorialInterface && completionScreen) {
            tutorialInterface.classList.add('hidden');
            completionScreen.classList.remove('hidden');
            
            // Update completion stats
            const finalTimeSpent = document.getElementById('final-time-spent');
            if (finalTimeSpent) {
                finalTimeSpent.textContent = Math.floor(this.studyTimeSpent / 60);
            }
            
            // Populate key takeaways
            this.populateKeyTakeaways();
        }
    }

    populateKeyTakeaways() {
        const takeawaysList = document.getElementById('takeaways-list');
        if (takeawaysList) {
            const takeaways = [
                "You have 4+ years of specialized experience in AI automation and backend engineering with measurable results",
                "Your AI-Driven RCA Engine reduced diagnostic time by 82% - a compelling technical achievement",
                "You've worked with major hospitality brands like ITC Hotels and Taj Hotels at enterprise scale",
                "Your automation work reduced manual workflow time by over 40%, demonstrating efficiency improvements",
                "You have full-stack capabilities from cloud infrastructure to AI implementation",
                "Your leadership progression from Technical Service Desk Executive to Assistant Manager shows career growth",
                "All your projects delivered quantifiable business impact with specific metrics for interview stories"
            ];
            
            takeawaysList.innerHTML = '';
            takeaways.forEach(takeaway => {
                const li = document.createElement('li');
                li.textContent = takeaway;
                takeawaysList.appendChild(li);
            });
        }
    }

    restartLearning() {
        this.stopReading();
        
        const completionScreen = document.getElementById('completion-screen');
        const welcomeScreen = document.getElementById('welcome-screen');
        
        if (completionScreen && welcomeScreen) {
            completionScreen.classList.add('hidden');
            welcomeScreen.classList.remove('hidden');
            
            // Reset state
            this.currentSectionIndex = 0;
            this.completedSections.clear();
            this.studyTimeSpent = 0;
            this.startTime = Date.now();
            
            this.saveUserProgress();
        }
    }

    reviewBookmarks() {
        const completionScreen = document.getElementById('completion-screen');
        const tutorialInterface = document.getElementById('tutorial-interface');
        
        if (completionScreen && tutorialInterface) {
            completionScreen.classList.add('hidden');
            tutorialInterface.classList.remove('hidden');
            
            // Show first bookmarked section or first section if no bookmarks
            if (this.bookmarkedSections.size > 0) {
                this.currentSectionIndex = Math.min(...this.bookmarkedSections);
            } else {
                this.currentSectionIndex = 0;
            }
            
            this.displayCurrentSection();
            this.updateProgress();
        }
    }

    saveUserProgress() {
        const progressData = {
            currentSectionIndex: this.currentSectionIndex,
            completedSections: Array.from(this.completedSections),
            bookmarkedSections: Array.from(this.bookmarkedSections),
            studyTimeSpent: this.studyTimeSpent,
            playbackSpeed: this.playbackSpeed,
            readingMode: this.readingMode,
            selectedVoiceIndex: this.selectedVoice ? this.availableVoices.indexOf(this.selectedVoice) : -1
        };
        
        try {
            localStorage.setItem('interviewGuideProgress', JSON.stringify(progressData));
        } catch (error) {
            console.warn('Could not save progress to localStorage:', error);
        }
    }

    loadUserProgress() {
        try {
            const savedData = localStorage.getItem('interviewGuideProgress');
            if (savedData) {
                const progressData = JSON.parse(savedData);
                
                this.currentSectionIndex = progressData.currentSectionIndex || 0;
                this.completedSections = new Set(progressData.completedSections || []);
                this.bookmarkedSections = new Set(progressData.bookmarkedSections || []);
                this.studyTimeSpent = progressData.studyTimeSpent || 0;
                this.playbackSpeed = progressData.playbackSpeed || 1;
                this.readingMode = progressData.readingMode || 'continuous';
                
                // Restore voice selection after voices are loaded
                if (progressData.selectedVoiceIndex >= 0) {
                    setTimeout(() => {
                        if (this.availableVoices[progressData.selectedVoiceIndex]) {
                            this.selectedVoice = this.availableVoices[progressData.selectedVoiceIndex];
                            const voiceSelect = document.getElementById('voice-select');
                            if (voiceSelect) {
                                voiceSelect.value = progressData.selectedVoiceIndex;
                            }
                        }
                    }, 1000);
                }
                
                // Restore settings
                setTimeout(() => {
                    const speedSelect = document.getElementById('audio-speed');
                    const modeSelect = document.getElementById('reading-mode');
                    
                    if (speedSelect) speedSelect.value = this.playbackSpeed;
                    if (modeSelect) modeSelect.value = this.readingMode;
                }, 100);
            }
        } catch (error) {
            console.warn('Could not load progress from localStorage:', error);
        }
    }

    announceToScreenReader(message) {
        const announcer = document.getElementById('audio-announcements');
        if (announcer) {
            announcer.textContent = message;
            // Clear after announcement
            setTimeout(() => {
                announcer.textContent = '';
            }, 1000);
        }
    }
}

// Initialize the application with better error handling
function initializeApp() {
    try {
        new AudioInterviewGuide();
    } catch (error) {
        console.error('Failed to initialize AudioInterviewGuide:', error);
    }
}

// Multiple initialization approaches for better compatibility
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// Fallback initialization
window.addEventListener('load', () => {
    if (!window.audioGuideInitialized) {
        window.audioGuideInitialized = true;
        initializeApp();
    }
});