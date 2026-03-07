const projects = [
  {
    id: 1,
    title: "Secure Stream AI",
    description:
      "Architected and developed Secure Stream AI, a high-concurrency proctoring system built with the MERN stack, WebRTC, and Socket.io to automate exam integrity. The platform achieves sub-second latency for dual-stream monitoring, maintaining 99% connectivity across strict firewalls via custom STUN/TURN server configurations. Integrated MediaPipe AI to engineer a visibility tracker that flags violations at <75% face coverage, optimized to run at a consistent 10-12 FPS on low-end hardware. Beyond visual monitoring, the system logs critical breaches—including tab-switching, unauthorized screenshots, and audio spikes—while utilizing JWT for stateless authentication and managing a scalable Cloudinary pipeline for persistent session recordings.",
    github: "",
    live: "https://secure-stream-ai-detection.vercel.app",
    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Google Auth",
      "Web Socket",
      "Web Rtc",
      "Media Pipe AI",
    ],
    videoPreview: "https://your-video-url.com/preview1.mp4",
    impact:
      "Developed a lightweight AI engine that runs seamlessly on low-configuration devices, ensuring that students from resource-constrained backgrounds are not penalized by technical limitations.",
    image: "secureStreamAi.jpeg",
  },
  {
    id: 2,
    title: "Image Ocean",
    description:
      "Architected Ocean, a high-performance visual discovery engine inspired by Pinterest and Pexels, designed for seamless high-resolution image rendering and community-driven content curation. The platform utilizes a sophisticated Masonry grid layout and infinite scroll logic to deliver a fluid, low-latency browsing experience across all devices. By spearheading the integration of Cloudinary for asset optimization, I ensured that raw, high-quality images are delivered with minimal bandwidth consumption, maintaining a premium look without compromising on loading speeds.",
    github: "",
    live: "https://imageocean.vercel.app/",
    tech: ["React", "Cloudinary", "Tailwind CSS", "NodeJs", "Observer Api"],
    videoPreview: "https://your-video-url.com/preview3.mp4",
    impact:
      "Spearheaded a high-performance image delivery engine using Cloudinary, ensuring high-resolution rendering with minimal bandwidth consumption and sub-second loading times.",
    image: "imageOcean.jpeg",
  },
  {
    id: 3,
    title: "Zwiggy with Admin Panel",
    description:
      "Zwiggy is a modern food delivery platform where users can browse restaurants, explore menus, and order food online for home delivery. The platform supports multiple restaurants, real-time cart management, and secure checkout. Admins and restaurant owners can manage food items, prices, and orders.",
    github: "https://github.com/devadityajha/Zwiggy",
    live: "https://zwiggy-devadityajha.vercel.app/",
    tech: [
      "React",
      "Chart.js",
      "Firebase",
      "Tailwind",
      "Framer Motion",
      "Google Auth",
    ],
    videoPreview: "https://your-video-url.com/preview2.mp4",
    impact:
      "Designed to scale with AI-driven features like personalized recommendations and delivery predictions.",
    image: "zwiggy.jpg",
  },
];

export default projects;
