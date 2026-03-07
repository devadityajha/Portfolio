// src/data/freelanceProjects.js
const freelanceProjects = [
  {
    id: 1,
    title: "Landing Page",
    description:
      "Worked with real clients to build a 3D-reactive, animated landing page, Used modern libraries like react-three-fiber, Tailwind, and Framer Motion. Delivered optimized, animated, responsive design to boost their brand presence",
    client: "Pritech Solution",
    year: "2025",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "pritech.jpg",
    live: "https://pritech-solution.vercel.app/",
    features: [
      "Responsive design",
      "Appointment scheduling",
      "Any Time Contact",
      "Preview Projects",
    ],
  },
  {
    id: 2,
    title: "SPWF Foundation",
    description:
      "Developed a premium, high-fidelity digital platform for a non-profit organization, moving away from traditional NGO layouts to a modern, user-centric interface. The platform integrates a unique Student-Made Product Marketplace, allowing students to showcase their craftsmanship while utilizing a seamless WhatsApp-integrated lead generation system for acquisitions.",
    year: "2026",
    client: "NGO",
    tech: ["Next.Js", "Node.js", "MongoDB", "Framer Motion"],
    image: "ngo.jpeg",
    live: "https://spwf-ngo.vercel.app/",
    features: [
      "Premium UI & Market Architecture: Engineered a modern, high-fidelity interface with a dynamic Student Marketplace for skill monetization.",
      "Built a robust backend allowing administrators to manage product catalogs and track student contributions in real-time.",
      "Integrated Razorpay for secure payments and a WhatsApp-bridge for seamless product inquiry redirection.",
    ],
  },
  {
    id: 3,
    title: "Foto G",
    description:
      "Architected a professional agency portfolio website using WordPress, focusing on modern UI/UX design and clean visual aesthetics. The platform features a dynamic project gallery and conversion-optimized contact sections to streamline client inquiries and drive business growth. By implementing custom CSS and performance tuning, the site achieves sub-second loading speeds and high search engine visibility, serving as an effective lead generation engine for agency operations.",
    year: "2025",
    client: "FotoG",
    tech: ["Wordpress", "Elementor Pro,", "Custom CSS", "SEO Optimization"],
    image: "fotog.jpeg",
    live: "https://fotog.in/",
    features: [
      "Engineered a premium, high-fidelity agency website using WordPress, focusing on modern design aesthetics and seamless navigation.",
      "Implemented a sophisticated portfolio management system to showcase diverse agency projects with high-impact visual storytelling.",
      "Integrated advanced contact modules and conversion-optimized call-to-actions (CTAs) to streamline client inquiries and business growth.",
    ],
  },
];

export default freelanceProjects;
