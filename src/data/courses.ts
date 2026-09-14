export const courses = [
  {
    id: "01",
    slug: "full-stack-web-architect",
    title: "Full-Stack Web Architect",
    category: "Development",
    difficulty: "Advanced",
    duration: "12 Weeks",
    lessons: 48,
    description: "Master modern web architecture, scalable backends, and responsive frontend systems.",
    longDescription: "This comprehensive course takes you from a frontend developer to a fully capable software architect. You'll learn how to design databases, build scalable APIs, deploy microservices, and orchestrate complex frontend applications using React and Next.js.",
    skills: ["React", "Node.js", "System Design", "Cloud Deployment"],
    learningOutcomes: [
      "Architect highly scalable backend systems",
      "Deploy applications to AWS and Vercel",
      "Implement robust authentication and authorization",
      "Build complex relational database schemas"
    ],
    curriculum: [
      { module: "01", title: "Frontend Architecture Patterns", lessons: 8 },
      { module: "02", title: "Backend Systems & APIs", lessons: 12 },
      { module: "03", title: "Database Design & Optimization", lessons: 10 },
      { module: "04", title: "DevOps & Cloud Deployment", lessons: 18 }
    ],
    requirements: ["Solid understanding of JavaScript", "Experience with React", "Basic knowledge of backend concepts"],
    audience: ["Frontend Developers", "Junior Full-Stack Developers"],
    price: "$499",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "02",
    slug: "creative-coding-webgl",
    title: "Creative Coding & WebGL",
    category: "Design Engineering",
    difficulty: "Intermediate",
    duration: "8 Weeks",
    lessons: 32,
    description: "Learn how to build immersive 3D experiences and complex animations in the browser.",
    longDescription: "Bridge the gap between design and engineering. This course dives deep into WebGL, Three.js, and custom GLSL shaders to help you build award-winning, interactive digital experiences that stand out.",
    skills: ["Three.js", "GLSL Shaders", "GSAP", "React Three Fiber"],
    learningOutcomes: [
      "Master Three.js and 3D scene setup",
      "Write custom fragment and vertex shaders",
      "Optimize complex animations for performance",
      "Integrate WebGL with React applications"
    ],
    curriculum: [
      { module: "01", title: "Introduction to 3D Space", lessons: 5 },
      { module: "02", title: "Mastering Three.js", lessons: 10 },
      { module: "03", title: "The Magic of Shaders (GLSL)", lessons: 10 },
      { module: "04", title: "Advanced Animation with GSAP", lessons: 7 }
    ],
    requirements: ["Strong JavaScript skills", "Basic understanding of trigonometry", "Experience with React"],
    audience: ["Frontend Developers", "Interactive Designers", "Creative Coders"],
    price: "$349",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "03",
    slug: "ecommerce-mastery",
    title: "eCommerce Mastery",
    category: "Development",
    difficulty: "Beginner - Intermediate",
    duration: "6 Weeks",
    lessons: 24,
    description: "Build high-converting digital storefronts from scratch.",
    longDescription: "Learn to build professional, high-performance eCommerce platforms using headless architecture. You will integrate Shopify, manage state efficiently, and implement secure payment gateways.",
    skills: ["Shopify", "Headless Commerce", "Next.js", "Payment APIs"],
    learningOutcomes: [
      "Set up headless Shopify backends",
      "Build fast Next.js storefronts",
      "Implement complex cart state management",
      "Integrate Stripe and other payment providers"
    ],
    curriculum: [
      { module: "01", title: "eCommerce Fundamentals", lessons: 4 },
      { module: "02", title: "Headless Shopify Integration", lessons: 8 },
      { module: "03", title: "Building the Storefront", lessons: 8 },
      { module: "04", title: "Checkout & Payments", lessons: 4 }
    ],
    requirements: ["Basic React knowledge", "Understanding of REST APIs"],
    audience: ["Web Developers", "Freelancers", "Entrepreneurs"],
    price: "$299",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "04",
    slug: "ui-ux-design-systems",
    title: "UI/UX Design Systems",
    category: "Design",
    difficulty: "Intermediate",
    duration: "10 Weeks",
    lessons: 40,
    description: "Create scalable, accessible, and beautiful design systems in Figma and React.",
    longDescription: "Stop designing pages and start designing systems. This course teaches you how to build robust component libraries, define design tokens, and translate them perfectly into React code.",
    skills: ["Figma", "Design Tokens", "Tailwind CSS", "Storybook"],
    learningOutcomes: [
      "Design comprehensive token systems",
      "Build accessible React components",
      "Document systems with Storybook",
      "Automate design-to-code pipelines"
    ],
    curriculum: [
      { module: "01", title: "Design System Foundations", lessons: 8 },
      { module: "02", title: "Advanced Figma Techniques", lessons: 10 },
      { module: "03", title: "Building React Components", lessons: 12 },
      { module: "04", title: "Documentation & Handoff", lessons: 10 }
    ],
    requirements: ["Experience with Figma", "Basic HTML/CSS/React"],
    audience: ["UI/UX Designers", "Frontend Developers"],
    price: "$399",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "05",
    slug: "modern-react-animations",
    title: "Modern React Animations",
    category: "Frontend",
    difficulty: "Beginner",
    duration: "4 Weeks",
    lessons: 16,
    description: "Bring your React applications to life with Framer Motion and modern CSS.",
    longDescription: "Learn the art of motion on the web. This concise course covers micro-interactions, page transitions, and complex choreographies using Framer Motion to elevate your UI.",
    skills: ["Framer Motion", "CSS Animations", "Micro-interactions"],
    learningOutcomes: [
      "Master Framer Motion fundamentals",
      "Build fluid page transitions",
      "Create physics-based animations",
      "Optimize animation performance"
    ],
    curriculum: [
      { module: "01", title: "Animation Principles", lessons: 4 },
      { module: "02", title: "Framer Motion Basics", lessons: 6 },
      { module: "03", title: "Advanced Choreography", lessons: 6 }
    ],
    requirements: ["Basic React knowledge"],
    audience: ["Frontend Developers", "UI Designers"],
    price: "$199",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "06",
    slug: "freelance-agency-blueprint",
    title: "Freelance Agency Blueprint",
    category: "Business",
    difficulty: "All Levels",
    duration: "8 Weeks",
    lessons: 28,
    description: "Scale your solo freelance business into a highly profitable digital agency.",
    longDescription: "Learn the exact systems, pricing models, and client acquisition strategies needed to build a premium digital agency that commands high-ticket projects.",
    skills: ["Client Acquisition", "Pricing Strategy", "Project Management"],
    learningOutcomes: [
      "Transition from hourly to value-based pricing",
      "Build automated client onboarding systems",
      "Hire and manage remote contractors",
      "Position yourself as a premium agency"
    ],
    curriculum: [
      { module: "01", title: "Positioning & Pricing", lessons: 6 },
      { module: "02", title: "Client Acquisition Systems", lessons: 8 },
      { module: "03", title: "Operations & Delivery", lessons: 8 },
      { module: "04", title: "Scaling the Team", lessons: 6 }
    ],
    requirements: ["Existing freelance experience"],
    audience: ["Freelancers", "Agency Owners"],
    price: "$599",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
  }
];
