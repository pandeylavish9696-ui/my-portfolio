// =====================================================================
//  portfolio.js — Your single source of truth for ALL personal data.
//  Edit this file to update every section of your portfolio website.
// =====================================================================

// ─── Personal Info ───────────────────────────────────────────────────
export const personalInfo = {
  firstName: "Lavish",
  lastName: "Pandey",
  tagline: "B.Tech Student | iOS Developer | Full Stack Developer",
  subtitle: "Building immersive digital experiences.",
  resumeLink: "file:///C:/Users/Lavish%20Pandey/Downloads/lavish%20(1).pdf", // Link to your resume (Google Drive, Dropbox, etc.)
};

// ─── Social Links ────────────────────────────────────────────────────
export const socialLinks = {
  github: "https://github.com/Lavishpandey63",
  linkedin: "https://www.linkedin.com/in/lavish-pandey-49a45b315",
  twitter: "https://twitter.com/lavishpandey",
  instagram: "https://instagram.com/pa__rii9696",
  email: "pandeylavish9696@gmail.com",
};

// ─── Navigation Links ────────────────────────────────────────────────
export const navLinks = ["About", "Skills", "Projects", "Experience", "Contact"];

// ─── About Section ───────────────────────────────────────────────────
export const aboutData = {
  bio: `I'm a driven B.Tech (Second Year) student at Lloyd Institute with a passion for software development, artificial intelligence, and interactive 3D web experiences. With skills in C++, Python, Java, React, and Three.js, I strive to build intuitive, scalable, and visually stunning applications that bridge the gap between design and robust engineering.`,
  cards: ["Passion for Coding", "Interactive Design", "Continuous Learner"],
};

// ─── Skills Section ──────────────────────────────────────────────────
export const skills = [
  { name: "C / C++", proficiency: "90%" },
  { name: "Python", proficiency: "95%" },
  { name: "Java", proficiency: "80%" },
  { name: "HTML / CSS", proficiency: "95%" },
  { name: "React.js", proficiency: "85%" },
  { name: "Three.js", proficiency: "70%" },
  { name: "Tailwind CSS", proficiency: "90%" },
];

// ─── Projects Section ────────────────────────────────────────────────
export const projects = [
  {
    name: "3D Portfolio",
    description:
      "A fully responsive, immersive 3D portfolio website with glassmorphism and Three.js integration to showcase skills and projects.",
    tags: [
      { name: "react", color: "text-blue-400" },
      { name: "threejs", color: "text-purple-400" },
      { name: "tailwind", color: "text-teal-400" },
    ],
    image: "/src/assets/portfolio3d.png",
    source_code_link: "https://github.com/Lavishpandey63",
    live_link: "#",
  },
  {
    name: "AI Image Generator",
    description:
      "Web application that allows users to generate stunning images using artificial intelligence and state-of-the-art machine learning models.",
    tags: [
      { name: "python", color: "text-green-400" },
      { name: "react", color: "text-blue-400" },
      { name: "api", color: "text-pink-400" },
    ],
    image: "/src/assets/aiimage.png",
    source_code_link: "https://github.com/lavishpandey",
    live_link: "#",
  },
  {
    name: "SentiSphere",
    description:
      "A mood tracking app that helps users log daily emotions, visualize mood patterns over time, and gain insights into their mental well-being with interactive charts and analytics.",
    tags: [
      { name: "react", color: "text-blue-400" },
      { name: "python", color: "text-green-400" },
      { name: "ai", color: "text-purple-400" },
    ],
    image: "/src/assets/sentisphere.png",
    source_code_link: "https://github.com/Lavishpandey63",
    live_link: "#",
  },
];

// ─── Experience / Education Section ──────────────────────────────────
export const experiences = [
  {
    title: "B.Tech Computer Science",
    company_name: "Lloyd Institute",
    date: "Present",
    points: [
      "Currently in my second year, focusing on core computer science concepts.",
      "Participating in hackathons and coding competitions.",
      "Building foundational knowledge in data structures and algorithms.",
    ],
  },
  {
    title: "Full Stack Development Learner",
    company_name: "Self-Taught",
    date: "2023 - Present",
    points: [
      "Mastering React.js and modern frontend workflows.",
      "Exploring 3D web development with Three.js and WebGL.",
      "Developing responsive, interactive, and user-friendly web applications.",
    ],
  },
];
