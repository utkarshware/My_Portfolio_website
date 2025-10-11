// data.js
// Put your content and links here. Edit this file to change the site copy.

window.PORTFOLIO_DATA = {
  meta: {
    title: "Utkarsh Singh — Robotics & Automation | Portfolio",
    description:
      "Portfolio of Utkarsh Singh — B.Tech (Robotics & Automation). I design and build robotics systems, embedded firmware and ML-enabled web & mobile prototypes. Open to internships, research collaborations and product roles.",
    resumeHref: "/assets/Utkarsh_Singh_Resume.pdf", // update to your hosted resume path or Google Drive link
  },

  profile: {
    name: "Utkarsh Singh",
    heroLead:
      "I’m a B.Tech student in Robotics & Automation. I bridge hardware and software to build reliable robotic systems, embedded firmware and ML-powered prototypes.",
    about:
      "I focus on practical robotics and automation: embedded systems (Arduino/STM32), inverse kinematics for manipulators, control systems, on-device ML and full-stack interfaces. I move quickly from prototype to demonstrable product while emphasising reliability and usability. Previously I led operations & communications at INFIDIT and served as Student Council & MUN President. Open to internships, research collaborations and product roles.",
  },

  contact: {
    email: "utkarshsingh2104@outlook.com",
    phone: "+91 90267 16158",
    location: "Pune, Maharashtra, India",
  },

  skills: [
    "Python · C · C++ · Embedded C",
    "TensorFlow Lite · scikit-learn · On-device ML",
    "Microcontrollers (Arduino, STM32) · Firmware development",
    "React · Flask · Tailwind · JavaScript/TypeScript",
    "Git · MATLAB · Fusion 360 · AutoCAD",
    "Systems: PID control · Inverse kinematics · Sensor integration",
  ],

  projects: [
    {
      title: "MediCare — Emergency AR Assistant",
      date: "Feb 2025",
      oneLine:
        "Android AR app that assists emergency responders by identifying medical components.",
      description:
        "Led the prototype for a mobile AR app that uses on-device image classification (TensorFlow Lite) to recognize medical supplies and overlay step-by-step guidance for first responders. Designed for offline use in low-connectivity environments.",
      tech: [
        "Android Studio",
        "Unity (AR Foundation)",
        "TensorFlow Lite",
        "Firebase",
      ],
      img: "/assets/images/medicare-hero.svg",
      alt: "MediCare AR interface on Android",
      live: "#",
      code: "#",
    },
    {
      title: "Agri-Dost — Farmer Planning & Price Forecasting",
      date: "Mar 2025",
      oneLine:
        "Web platform to help farmers plan crop cycles and forecast prices with ML-driven insights.",
      description:
        "Built the frontend and ML forecasting prototype that predicts short-term crop prices to help farmers decide sowing and selling windows. Created a simple dashboard suitable for small-holder farmers.",
      tech: ["React", "Flask", "scikit-learn", "Tailwind"],
      img: "/assets/images/agridost-dashboard.svg",
      alt: "Agri-Dost dashboard showing crop forecast",
      live: "#",
      code: "#",
    },
    {
      title: "Mini Robotic Arm — 4-DOF Manipulator",
      date: "Apr 2025",
      oneLine:
        "4-DOF desktop robotic arm with inverse-kinematics and PID joint control.",
      description:
        "Designed the mechanical assembly in Fusion 360, implemented inverse-kinematics and PID-based servo control on Arduino, and integrated a simple web UI for pick/place commands.",
      tech: [
        "Arduino (C++)",
        "Fusion 360",
        "Servos",
        "PID control",
        "JavaScript UI",
      ],
      img: "/assets/images/robotic-arm.svg",
      alt: "4-DOF mini robotic arm performing pick-and-place",
      live: "#",
      code: "#",
    },
  ],

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/utkarshware",
      aria: "GitHub — Utkarsh Singh",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/utkarshware/",
      aria: "LinkedIn — Utkarsh Singh",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/utkarshware",
      aria: "Twitter — Utkarsh Singh",
    },
  ],

  schema: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Utkarsh Singh",
    url: "https://utkarshsingh.dev",
    sameAs: [
      "https://github.com/utkarshware",
      "https://www.linkedin.com/in/utkarshware/",
    ],
    jobTitle: "B.Tech Student — Robotics & Automation",
    worksFor: {
      "@type": "CollegeOrUniversity",
      name: "Symbiosis International University",
    },
  },
};
