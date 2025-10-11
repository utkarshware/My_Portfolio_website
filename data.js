// data.js
// Put your content and links here. Edit this file to change the site copy.

window.PORTFOLIO_DATA = {
  meta: {
    title: "Utkarsh Singh — Robotics & Automation | Portfolio",

    description:
      "Portfolio of Utkarsh Singh — B.Tech (Robotics & Automation). I design and build robotics systems, embedded firmware and ML-enabled web & mobile prototypes. Open to internships, research collaborations and product roles.",
    resumeHref:
      "https://drive.google.com/file/d/1uWpbTTRiyPo5-sRiASr5FOCMEeTYKE5Y/view?usp=drive_link",
  },

  profile: {
    name: "Utkarsh Singh",
    heroLead:
      "I’m a B.Tech student in Robotics & Automation. I bridge hardware and software to build reliable robotic systems, embedded firmware and ML-powered prototypes.",
    about:
      "I focus on practical robotics and automation: embedded systems (Arduino/STM32), inverse kinematics for manipulators, control systems, on-device ML and full-stack interfaces. I move quickly from prototype to demonstrable product while emphasising reliability and usability. Previously I led operations & communications at INFIDIT and served as Student Council & MUN President. Open to internships, research collaborations and product roles.",
    photo: "assets/images/myimage.jpg",
    photoAlt: "Utkarsh Singh smiling in front of a robotics lab setup",
  },

  contact: {
    email: "utkarshsingh2104@outlook.com",
    emailLabel: "utkarshsingh2104",
    location: "Pune, Maharashtra, India",
    availability:
      "Currently partnering with teams building robotics, automation, and intelligent systems.",
    responseTime: "Responses within one business day (IST).",
    note: "Happy to discuss robotics systems, embedded firmware, or intelligent automation initiatives.",
  },

  skills: [
    "Python",
    "C",
    "C++",
    "Embedded C",
    "JavaScript",
    "TypeScript",
    "Linux",
    "Bash",
    "TensorFlow Lite",
    "scikit-learn",
    "Raspberry Pi",
    "Arduino",
    "React",
    "Flask",
    "Unity (AR)",
    "Fusion 360",
    "AutoCAD",
    "MATLAB",
    "Git",
    "PID Control",
    "Inverse Kinematics",
    "Sensor Integration",
    "Control Systems",
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
      code: "https://github.com/utkarshware/Medi_Care",
      codeLabel: "GitHub Repo",
    },
    {
      title: "Agri-Dost — Farmer Planning & Price Forecasting",
      date: "Mar 2025",
      oneLine:
        "Web platform to help farmers plan crop cycles and forecast prices with ML-driven insights.",
      description:
        "Built the frontend and ML forecasting prototype that predicts short-term crop prices to help farmers decide sowing and selling windows. Created a simple dashboard suitable for small-holder farmers.",
      tech: ["React", "Flask", "scikit-learn", "Tailwind"],
      code: "https://github.com/utkarshware/Agri_Dost",
      codeLabel: "GitHub Repo",
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
      note: "Hardware-focused build — repository available on request.",
    },
  ],

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/utkarshware",
      aria: "GitHub — Utkarsh Singh",
      icon: "assets/icons/github.png",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/utkarshware/",
      aria: "LinkedIn — Utkarsh Singh",
      icon: "assets/icons/linkedin.png",
    },
    {
      name: "Twitter",
      url: "https://x.com/Utkarzxhh",
      aria: "Twitter — @Utkarzxhh",
      icon: "assets/icons/twitter.png",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/utkcrashh/",
      aria: "Instagram — @utkcrashh",
      icon: "assets/icons/instagram.png",
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
