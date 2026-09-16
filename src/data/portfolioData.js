// ============================================================
// PORTFOLIO DATA — Joe Godwin
// Update this file to change portfolio content
// ============================================================

export const personal = {
  name: "Joe Godwin",
  firstName: "Joe",
  lastName: "Godwin",
  title: "Full-Stack Developer",
  subtitle: "Information Technology Student · Software Developer",
  tagline: "AI / Software Engineering Enthusiast",
  positioning: "Full-Stack Development × AI × Software Engineering",
  location: "Mumbai, India",
  status: "B.E. Information Technology Student — 3rd Year",
  availability: "Available for Software Development Opportunities",
  bio: "I build practical software systems, AI-powered applications, and real-world technical projects.",

  // Social & Contact — REPLACE PLACEHOLDERS WITH ACTUAL LINKS
  email: "godwinjoe87@gmail.com", // REPLACE: your actual email
  github: "https://github.com/joegodwin04", // REPLACE: your GitHub URL
  linkedin: "https://www.linkedin.com/in/joe-godwin-869858275/", // REPLACE: your LinkedIn URL

  resume: "/resume.pdf", // Replace public/resume.pdf with your actual PDF
};

export const projects = [
  {
    id: "project-manager",
    index: "01",
    label: "FEATURED PROJECT",
    name: "Project Manager",
    category: "Full-Stack Web Application",
    tagline: "A full-stack project management platform for managing projects, tasks, users and workflows.",
    description:
      "A full-stack project management platform built as a software engineering project. Designed to handle the complete lifecycle of project and task management — from user authentication through to protected API endpoints, task assignment and real-time workflow updates.",
    problem:
      "Teams working on software projects often lack a structured, centralised tool for managing tasks, tracking project status and coordinating between contributors. Most solutions are either too complex or too simple for practical team use.",
    solution:
      "A purpose-built platform implementing full-stack architecture with secure authentication, role-based access, and a responsive interface that allows users to create, assign and track projects and tasks in one place.",
    architecture:
      "React frontend communicating with a Node.js/Express REST API backend. JWT authentication secures all endpoints. PostgreSQL handles relational data storage for users, projects and tasks. Deployed on cloud infrastructure.",
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "JWT", "Tailwind CSS", "REST API", "Vercel", "Render"],
    features: [
      "Full-stack architecture with React frontend and Node.js backend",
      "JWT-based authentication and protected API routes",
      "Project and task management with status tracking",
      "User management and role-based access",
      "Responsive interface across all devices",
      "RESTful API design",
      "Persistent PostgreSQL database",
    ],
    challenges: [
      "Designing a secure authentication flow with JWT refresh tokens",
      "Structuring relational database schema for flexible project-task relationships",
      "Building protected API middleware that scales cleanly",
    ],
    outcome:
      "Delivered a working full-stack project management platform that demonstrates end-to-end software engineering — from database design through to a deployed, user-facing application.",
    github: "https://github.com/joegodwin04/CodeAlpha_ProjectManager", // REPLACE with actual repo URL
    live: null, // REPLACE with deployed URL when available
    featured: true,
    color: "#00ff9f",
  },
  {
    id: "taskflow",
    index: "02",
    label: "PROJECT",
    name: "TaskFlow",
    category: "Productivity Platform",
    tagline: "A productivity platform combining task management, habits, goals, Pomodoro sessions and analytics.",
    description:
      "TaskFlow is a full-featured productivity platform built to help individuals manage their day-to-day work through integrated task management, habit tracking, goal setting and Pomodoro-based focus sessions — all backed by actionable analytics.",
    problem:
      "Productivity tools are often isolated: one app for tasks, another for habits, another for focus timers. Switching context between tools breaks flow and makes it hard to see the whole picture.",
    solution:
      "A unified platform that brings tasks, habits, goals, and focus sessions under one roof, with an analytics dashboard that surfaces patterns and progress over time.",
    architecture:
      "React + Vite frontend with a Node.js/Express backend. PostgreSQL handles structured data for users, tasks, habits and sessions. Authentication is JWT-based. Deployed on Vercel and Render.",
    technologies: ["React", "Vite", "Node.js", "Express.js", "PostgreSQL", "JWT", "Tailwind CSS", "REST API", "Vercel", "Render"],
    features: [
      "Integrated task management system",
      "Habit tracking with streak management",
      "Goal setting and progress tracking",
      "Pomodoro session timer with session history",
      "Analytics dashboard with productivity insights",
      "Secure authentication and user management",
      "Responsive and mobile-friendly interface",
    ],
    challenges: [
      "Designing a data model that unifies tasks, habits and sessions without redundancy",
      "Building meaningful analytics from time-series session and task data",
      "Keeping the UI clean and focused despite the breadth of features",
    ],
    outcome:
      "A cohesive productivity tool that demonstrates complex relational data design, analytics implementation and full-stack feature development.",
    github: "https://github.com/joegodwin04/taskflow-productivity", // REPLACE with actual repo URL
    live: "https://taskflow-productivity-one.vercel.app/", // REPLACE with deployed URL when available
    featured: false,
    color: "#3b82f6",
  },
  {
    id: "civicsense-ai",
    index: "03",
    label: "PROJECT",
    name: "CivicSense AI",
    category: "AI-Powered Civic Platform",
    tagline: "An AI-powered platform that helps citizens submit development priorities for structured analysis.",
    description:
      "CivicSense AI is a civic development platform that allows citizens to submit local development priorities and concerns. The platform uses AI to categorise, analyse and surface structured insights from those submissions, enabling data-driven civic planning.",
    problem:
      "Civic feedback is often scattered across multiple channels — surveys, emails, social media — making it difficult to identify patterns, prioritise needs, and make data-driven decisions at scale.",
    solution:
      "A structured submission platform backed by AI categorisation and analysis. Citizens submit priorities through a guided interface; the system categorises submissions, surfaces trends and presents a structured dashboard for analysis.",
    architecture:
      "React frontend with a Node.js/Express backend. AI API integration (Gemini API) for intelligent categorisation. Database layer handles submission storage and analytics. Dashboard built on aggregated submission data.",
    technologies: ["React", "Node.js", "Express.js", "Gemini API", "AI Integration", "PostgreSQL", "REST API", "Data Visualization"],
    features: [
      "Citizen submission interface for development priorities",
      "AI-powered categorisation and analysis of submissions",
      "Multilingual input support",
      "Analytics dashboard with submission trends",
      "Data visualisation for civic insights",
      "Structured categorisation system",
    ],
    challenges: [
      "Designing AI prompts that reliably categorise diverse citizen input",
      "Building a dashboard that presents aggregated data meaningfully",
      "Handling multilingual input cleanly in the submission pipeline",
    ],
    outcome:
      "A working civic intelligence platform demonstrating practical AI integration — taking unstructured citizen input and turning it into organised, actionable insights.",
    github: "https://github.com/joegodwin04/CivicSense-AI", // REPLACE with actual repo URL
    live: "https://civic-sense-ai-roan.vercel.app/", // REPLACE with deployed URL when available
    featured: false,
    color: "#f59e0b",
  },
  {
    id: "speak-guru",
    index: "04",
    label: "PROJECT",
    name: "Speak Guru",
    category: "Real-Time Voice AI Assistant",
    tagline: "A real-time, voice-first AI assistant built on LiveKit, powered by Groq.",
    description:
      "SpeakGuru is a real-time conversational voice AI assistant. It listens, understands, thinks, and speaks back with low latency, exploring natural turn-taking and conversational streaming from raw speech to intelligent response and back to speech.",
    problem:
      "Typing is not always the most natural way to interact with an assistant. Voice interfaces remove friction, but building a natural experience requires solving tough real-time challenges: low latency, natural turn-taking, and knowing when a user has actually finished speaking without awkward interruptions.",
    solution:
      "An end-to-end voice pipeline connecting user speech over LiveKit to Deepgram for low-latency streaming speech-to-text, Groq (Llama 3.3 70B) for fast reasoning, and Murf AI for conversational text-to-speech, coordinated with Silero VAD and turn-detection.",
    architecture:
      "Real-time voice streaming over LiveKit transport to a Python backend. Silero VAD and MultilingualModel handle voice activity and turn-detection. Deepgram Nova-3 handles STT, Groq Llama 3.3 70B handles LLM inference, and Murf AI (en-IN-samar) synthesizes conversational speech, rendered in a Next.js/React web frontend.",
    technologies: ["Python", "LiveKit", "Groq", "Deepgram", "Murf AI", "Next.js", "React", "Silero VAD", "WebRTC"],
    features: [
      "Real-time voice conversation over LiveKit",
      "Speech-to-text via Deepgram (nova-3)",
      "Low-latency LLM reasoning via Groq (llama-3.3-70b-versatile)",
      "Natural-sounding text-to-speech via Murf AI (en-IN-samar)",
      "Voice Activity Detection powered by Silero VAD",
      "Multilingual turn-detection model for natural turn and interruption handling",
      "Next.js web frontend for live voice sessions",
    ],
    challenges: [
      "Minimising end-to-end latency across speech recognition, LLM inference, and voice synthesis",
      "Tuning turn-detection accuracy and managing interruption edge cases without cutting users off",
      "Ensuring session initialization reliability and audio streaming stability over WebRTC",
    ],
    outcome:
      "A working real-time voice pipeline demonstrating low-latency bidirectional conversation with automated turn detection and natural voice synthesis.",
    github: "https://github.com/joegodwin04/speakguru-ai",
    live: null, // REPLACE with deployed URL when available (currently in active local development)
    featured: false,
    color: "#8b5cf6",
  },
];

export const skills = {
  languages: {
    label: "Languages",
    items: ["Java", "JavaScript", "HTML", "CSS"],
  },
  frontend: {
    label: "Frontend",
    items: ["React", "Vite", "Tailwind CSS"],
  },
  backend: {
    label: "Backend",
    items: ["Node.js", "Express.js"],
  },
  databases: {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "SQLite"],
  },
  tools: {
    label: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Vercel", "Render"],
  },
  engineering: {
    label: "Software Engineering",
    items: ["REST APIs", "JWT Authentication", "Database Design", "API Integration", "Deployment"],
  },
  ai: {
    label: "AI",
    items: ["AI API Integration", "Gemini API", "AI-Powered Application Development"],
  },
  electronics: {
    label: "Electronics & Hardware",
    items: [
      "Basic Circuit Understanding",
      "Electronic Components",
      "Sensors",
      "Prototyping",
      "Hardware Troubleshooting",
      "Technical Drawing",
      "PC Hardware",
      "Laptop Hardware",
    ],
  },
};

export const education = [
  {
    id: "be-it",
    degree: "B.E. Information Technology",
    institution: "Don Bosco Institute of Technology, Mumbai",
    location: "Mumbai, India",
    period: "2025 – Present",
    status: "Currently Pursuing · 3rd Year",
    logo: "/images/dbit_logo.jpg",
    logoAlt: "Don Bosco Institute of Technology Logo",
    description:
      "Pursuing a Bachelor of Engineering in Information Technology with focus on software development, databases, web technologies and software engineering principles.",
    highlights: [
      "Full-stack web development",
      "Database systems and design",
      "Software engineering principles",
      "Operating systems and networking",
    ],
  },
  {
    id: "diploma-et",
    degree: "Diploma in Electronics & Telecommunications",
    institution: "St. Xavier's Technical Institute, Mahim",
    location: "Mumbai, India",
    period: "2022 – 2025",
    status: "Completed · 2025",
    percentage: "76% · Distinction",
    logo: "/images/xtech_logo.jpg",
    logoAlt: "St. Xavier's Technical Institute Logo",
    description:
      "Three-year diploma providing hands-on exposure to electronics fundamentals, circuit theory, telecommunications, sensors, prototyping and technical drawing. Completed final-year project: Solar Grass Cutter.",
    highlights: [
      "Electronics fundamentals and circuit theory",
      "Sensors and measurement systems",
      "Hardware prototyping",
      "Technical drawing and documentation",
      "Final-year project: Solar Grass Cutter",
    ],
  },
  {
    id: "ssc",
    degree: "SSC",
    institution: "St. Joseph's High School, Wadala",
    location: "Mumbai, India",
    period: "Completed 2022",
    status: "Completed · 2022",
    percentage: "61%",
    logo: "/images/stjoseph_logo.jpg",
    logoAlt: "St. Joseph's High School Logo",
    description: "Completed secondary education with a focus on foundational academics.",
    highlights: [],
  },
];

export const journey = [
  {
    id: "diploma",
    year: "2022",
    phase: "ELECTRONICS",
    title: "Diploma in Electronics & Telecommunications",
    description: "Began with a strong foundation in electronics — circuits, components, sensors and physical systems.",
    type: "hardware",
  },
  {
    id: "hardware",
    year: "2024",
    phase: "HARDWARE",
    title: "Hands-On Hardware Experience",
    description: "Practical exposure to electronic components, prototyping, hardware troubleshooting and technical systems.",
    type: "hardware",
  },
  {
    id: "solar",
    year: "2022 – 2023",
    phase: "ENGINEERING",
    title: "Solar Grass Cutter — Diploma Final Project",
    description:
      "Built a solar-powered grass-cutting prototype combining solar energy, electrical components, motors and a mechanical cutting system.",
    type: "hardware",
  },
  {
    id: "transition",
    year: "2024 - 2025",
    phase: "TRANSITION",
    title: "From Hardware to Software",
    description:
      "Moved into Information Technology. The systems thinking from electronics gave me a natural foundation for understanding software architecture.",
    type: "transition",
  },
  {
    id: "programming",
    year: "2025",
    phase: "PROGRAMMING",
    title: "Learning to Program",
    description: "Learned Java and JavaScript. Built first web projects. Understood the logic of code from a systems perspective.",
    type: "software",
  },
  {
    id: "fullstack",
    year: "2026",
    phase: "FULL-STACK",
    title: "Full-Stack Development",
    description:
      "Built full-stack applications with React, Node.js, Express and PostgreSQL. Learned authentication, REST APIs and database design.",
    type: "software",
  },
  {
    id: "ai",
    year: "2026 – 2027",
    phase: "AI",
    title: "AI-Powered Projects",
    description:
      "Integrated AI APIs into real applications. Built CivicSense AI using the Gemini API for intelligent civic data analysis.",
    type: "software",
  },
  {
    id: "be",
    year: "2026 – Present",
    phase: "B.E. IT",
    title: "B.E. Information Technology",
    description: "Currently in 3rd year. Building production-grade projects and preparing for software development opportunities.",
    type: "software",
  },
];

export const electronicsProject = {
  name: "Solar Grass Cutter Machine",
  year: "2024",
  category: "Diploma Final-Year Project",
  domain: "Electronics · Hardware · Engineering",
  tagline: "A solar-powered grass-cutting prototype developed as an academic engineering project.",
  description:
    "A solar-powered grass-cutting prototype developed as my Diploma final-year project. The system combines solar power harvesting, electrical components, a motor-driven cutting mechanism and a mechanical frame — exploring the integration of renewable energy with practical automation.",
  images: [
    "/images/solar-grass-cutter-front-clean.jpg",
    "/images/solar-grass-cutter-hardware-clean.jpg"
  ],
  sections: [
    {
      id: "concept",
      index: "01",
      title: "CONCEPT",
      content:
        "The project addresses the problem of manual grass cutting — a labour-intensive, time-consuming task. The concept explores automating this using solar energy as the power source, making the system self-sufficient and environmentally considerate.",
    },
    {
      id: "system",
      index: "02",
      title: "SYSTEM",
      content:
        "The major subsystems work together as a pipeline: solar panel → charge controller → battery → motor controller → cutting motor + drive motor. The mechanical frame houses all components and the cutting blade assembly.",
    },
    {
      id: "hardware",
      index: "03",
      title: "HARDWARE",
      content:
        "Core components include a solar panel for energy harvesting, a rechargeable battery for storage, a charge controller for safe charging, DC motors for cutting and movement, a motor driver circuit, and a mechanical chassis with a blade assembly.",
    },
    {
      id: "implementation",
      index: "04",
      title: "IMPLEMENTATION",
      content:
        "The prototype was assembled through staged construction — first building and testing the power circuit, then integrating motors, then assembling the mechanical frame and combining all subsystems. Testing was performed at each stage before full integration.",
    },
    {
      id: "engineering",
      index: "05",
      title: "ENGINEERING CHALLENGES",
      content:
        "Key challenges included ensuring reliable solar charging under variable light conditions, managing motor load without overloading the power supply, and making the mechanical cutting assembly sturdy enough for prototype testing.",
    },
    {
      id: "outcome",
      index: "06",
      title: "OUTCOME",
      content:
        "Successfully delivered a working prototype demonstrating solar-powered grass cutting. The project deepened my understanding of power electronics, motor control, system integration and the practical challenges of hardware engineering.",
    },
  ],
};

export const academicElectronicsProject = {
  id: "voltage-detector",
  name: "Non-Contact Voltage Detector",
  year: "2023",
  category: "Academic Electronics Project",
  domain: "Circuit Design · Prototyping · Electrical Safety",
  tagline: "Developed a non-contact voltage detection device aimed at improving safety in electrical environments.",
  images: [
    "/images/non-contact-voltage-detector.jpg"
  ],
  description:
    "Developed a non-contact voltage detection device aimed at improving safety in electrical environments as part of Diploma academic coursework.",
  overview:
    "A prototype designed to detect the presence of electrical voltage without requiring direct physical contact, with an emphasis on electrical safety.",
  skills: [
    "Circuit Design",
    "Soldering",
    "Prototyping",
    "Testing",
    "Electrical Safety",
  ],
  outcome:
    "Successfully developed and tested a prototype as part of my Diploma academic work.",
};

export const electronicsExperience = [
  {
    title: "Solar Grass Cutter Machine",
    type: "Final-Year Project · 2024",
    description: "Diploma final-year engineering prototype combining solar energy harvesting, motor drive systems and mechanical design.",
  },
  {
    title: "Non-Contact Voltage Detector",
    type: "Academic Project · 2023",
    description: "Diploma academic prototype for contactless voltage detection with an emphasis on electrical safety and circuit testing.",
  },
  {
    title: "Hands-On Prototyping & Soldering",
    type: "Lab Practical",
    description: "Hands-on circuit design, breadboarding, component soldering and diagnostic testing during diploma engineering studies.",
  },
  {
    title: "Hardware Troubleshooting",
    type: "Practical Experience",
    description: "Practical experience diagnosing and resolving hardware faults, component testing, and desktop/laptop maintenance.",
  },
];
