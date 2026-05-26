import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export const skills = [
  {
    category: "Frontend",

    items: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Redux", icon: SiRedux },
    ],
  },

  {
    category: "Backend",

    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST API", icon: FaDatabase },
    ],
  },

  {
    category: "Database",

    items: [
      { name: "MongoDB Atlas", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },

  {
    category: "Tools",

    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: VscCode },
      { name: "Postman", icon: SiPostman },
    ],
  },
];

export const projects = [
  {
    title: "ERP Frontend Dashboard",

    category: "Frontend",

    // image name changed
    image: "/erp-frontend-dashboard.jpg",

    description:
      "A professional ERP frontend dashboard with employee management, attendance, payroll UI, task management, and role-based layouts.",

    tech: ["React.js", "Tailwind CSS", "JavaScript"],

    live: "#",

    github: "#",
  },

  {
    title: "SPA Wellness Website",

    category: "Frontend",

    // image name changed
    image: "/spa-wellness-website.jpg",

    description:
      "A luxury SPA and wellness website with modern UI, services pages, smooth responsive layout, and premium design.",

    tech: ["Next.js", "Tailwind CSS", "JavaScript"],

    live: "#",

    github: "#",
  },

  {
    title: "Real Estate Website",

    category: "Frontend",

    // image name changed
    image: "/real-estate-website.jpg",

    description:
      "A modern real estate frontend website for property listing, buying, renting, filters, and attractive client-focused pages.",

    tech: ["Next.js", "Tailwind CSS", "JavaScript"],

    live: "#",

    github: "#",
  },

  {
    title: "E-Commerce Website",

    category: "MERN",

    // image name changed
    image: "/ecommerce-website.jpg",

    description:
      "A full-stack e-commerce application with product pages, cart UI, admin dashboard, backend APIs, MongoDB Atlas database, and responsive design.",

    tech: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB Atlas",
    ],

    live: "#",

    github: "#",
  },

  {
    title: "Employee Management System",

    category: "MERN",

    // image name changed
    image: "/ems.jpg",

    description:
      "A complete Employee Management System with employee dashboard, attendance management, payroll system, task management, leave tracking, and admin panel features.",

    tech: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB Atlas",
    ],

    live: "#",

    github: "#",
  },
];

export const experiences = [
  {
    year: "2024 - Present",

    title: "React.js Developer",

    company: "Your Company Name",

    description:
      "1 year of experience as a React.js Developer, working on ERP frontend modules, reusable components, responsive UI screens, dashboard layouts, and modern web application interfaces.",
  },

  {
    year: "Professional Project",

    title: "ERP Frontend Development",

    company: "Company Project",

    description:
      "Developed ERP frontend features including employee management UI, attendance screens, payroll pages, task management layouts, and role-based dashboard interfaces using React.js.",
  },

  {
    year: "Projects",

    title: "Frontend & MERN Projects",

    company: "Personal Portfolio Projects",

    description:
      "Built multiple projects including SPA website, real estate website, and e-commerce application using Next.js, Tailwind CSS, Node.js, and MongoDB Atlas.",
  },
];

export const services = [
  {
    title: "Web Development",

    description:
      "Modern, responsive, and high-performance websites using React.js, Next.js, and Tailwind CSS.",
  },

  {
    title: "REST API Development",

    description:
      "Clean and scalable backend APIs using Node.js, Express.js, MongoDB Atlas, and secure API practices.",
  },

  {
    title: "Responsive UI Design",

    description:
      "Mobile-first interfaces with clean layouts, smooth animations, and premium user experience.",
  },

  {
    title: "MERN Stack Applications",

    description:
      "Complete MERN applications with frontend, backend, database integration, authentication, and dashboard systems.",
  },
];

export const testimonials = [
  {
    name: "Rahul Sharma",

    role: "Project Client",

    feedback:
      "The project quality was professional, responsive, and visually impressive. Great frontend development skills and clean UI design.",
  },

  {
    name: "Sneha Reddy",

    role: "Frontend Developer",

    feedback:
      "Very strong understanding of React.js, Next.js, Tailwind CSS, and reusable component-based architecture.",
  },

  {
    name: "Arjun Mehta",

    role: "Team Member",

    feedback:
      "Reliable developer with excellent focus on responsive layouts, frontend performance, and modern UI experiences.",
  },
];