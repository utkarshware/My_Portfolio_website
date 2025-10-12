// data.js
// Put your content and links here. Edit this file to change the site copy.

window.PORTFOLIO_DATA = {
  meta: {
    title: "Utkarsh Singh — Robotics & Automation Student",
    description:
      "Robotics and automation student exploring manipulators, embedded control, and edge AI through labs, hackathons, and campus clubs.",
    resumeHref:
      "https://drive.google.com/file/d/1uWpbTTRiyPo5-sRiASr5FOCMEeTYKE5Y/view?usp=drive_link",
  },

  hero: {
    badge: "Robotics & Intelligent Automation",
    headline:
      "Robotics student experimenting with manipulators, control, and edge AI.",
    lead: "I love turning classroom concepts into working demos—mixing CAD, firmware, and quick ML models to see robots move.",
    stats: [
      { label: "Experience", value: "Dozens of course & club prototypes" },
      {
        label: "Focus",
        value: "Manipulators · Embedded Control · Edge ML",
      },
      {
        label: "Currently",
        value: "B.Tech Robotics & Automation — Symbiosis International",
      },
    ],
    mission: [
      {
        label: "Goal",
        value: "Build robots that classmates and mentors can rely on.",
      },
      {
        label: "Approach",
        value: "Prototype fast, test often, share learnings.",
      },
      {
        label: "Edge",
        value: "Comfortable jumping between CAD, code, and debugging.",
      },
    ],
  },

  expertise: [
    {
      title: "Robotic Systems",
      summary:
        "Hands-on work with manipulators, small mobile bases, and supporting rigs.",
      focus: [
        "CAD + kinematics for course labs and club prototypes",
        "PID tuning and motion planning on low-cost hardware",
        "Sensor calibration for vision and distance sensing",
      ],
    },
    {
      title: "Embedded Intelligence",
      summary:
        "Firmware and microcontroller projects that push sensing and control to the edge.",
      focus: [
        "C/C++ on Arduino, STM32, and Raspberry Pi",
        "Serial comms, telemetry logging, and watchdogs",
        "TensorFlow Lite experiments for vision and classification",
      ],
    },
    {
      title: "Human-Centred Platforms",
      summary:
        "Interfaces and data views that help teams understand what the robot is doing.",
      focus: [
        "React + Flask dashboards for lab demonstrations",
        "Real-time visuals for telemetry and diagnostics",
        "Facilitating teammate workshops and study groups",
      ],
    },
  ],

  projects: [
    {
      category: "AR Emergency Response",
      period: "2025",
      title: "MediCare — On-Device Triage Assistant",
      summary:
        "Built a mobile AR helper that spots medical supplies offline and guides first responders through simple workflows.",
      outcomes: [
        "Designed Unity AR workflows with TensorFlow Lite classifiers running fully on-device",
        "Implemented low-light tolerant image pipelines and audited inference accuracy with clinical advisors",
        "Delivered a resilient UI for low-connectivity field conditions",
      ],
      tags: ["Unity AR", "TensorFlow Lite", "Android", "Edge ML"],
      visual: [
        "AR triage overlays",
        "Edge inference dashboards",
        "Offline workflows",
      ],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/utkarshware/Medi_Care",
        },
      ],
    },
    {
      category: "Agritech Intelligence",
      period: "2025",
      title: "Agri-Dost — Crop Planning Insights",
      summary:
        "Created a data tool that forecasts crop prices so smallholder farmers can plan harvest cycles with confidence.",
      outcomes: [
        "Prototyped a forecasting stack blending scikit-learn models with explainable metrics",
        "Authored a React interface tuned for low bandwidth and bilingual content",
        "Ran field interviews to close the loop between predictions and operator actions",
      ],
      tags: ["React", "Flask", "Forecasting", "Product Research"],
      visual: [
        "Price trend horizons",
        "Farmer advisory cockpit",
        "Explainability layers",
      ],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/utkarshware/Agri_Dost",
        },
      ],
    },
    {
      category: "Manipulator R&D",
      period: "2025",
      title: "Mini Robotic Arm — 4-DOF Workcell",
      summary:
        "Delivered a lab-scale manipulator with closed-loop joint control and a browser-based command deck for demos.",
      outcomes: [
        "Modelled the arm in Fusion 360 with torque and reach optimisation",
        "Implemented inverse kinematics and PID tuning on Arduino for smooth joint trajectories",
        "Integrated telemetry streaming to a web UI for pick-and-place scripting",
      ],
      tags: ["Arduino", "Fusion 360", "PID Control", "Web UI"],
      visual: ["Fusion 360 joints", "Servo telemetry", "Browser command deck"],
      links: [],
    },
  ],

  about: {
    summary:
      "Robotics & automation undergraduate who enjoys balancing hardware builds with code, community leadership, and storytelling.",
    highlights: [
      "Vice President — Robotics Process Automation Society, leading student automation drives",
      "AI/Data Science Co-Lead — SIT ACM Chapter, hosting labs and sprint challenges",
      "Core member of CodeX programming club, TEDx organising team, and V@rsity finance ops",
    ],
    education: {
      title: "Education",
      description: "B.Tech, Robotics & Automation",
      items: [
        "Symbiosis International University",
        "Leadership roles: Student Council & MUN",
        "Operations & Communications Lead — INFIDIT",
      ],
    },
    focus: {
      title: "Current Focus",
      description:
        "Deepening robotics fundamentals while sharing knowledge across campus.",
      items: [
        "Autonomous calibration and health monitoring",
        "Human-robot interaction for safer workflows",
        "Deployable edge ML on student budgets",
      ],
    },
  },

  process: [
    {
      step: "01",
      title: "Discover",
      summary:
        "Frame the challenge with teammates, mentors, and available resources.",
      details: [
        "Immersion interviews and shadowing",
        "Field requirement capture",
        "Safety and compliance scope",
      ],
    },
    {
      step: "02",
      title: "Prototype",
      summary: "Quickly prototype with CAD, breadboards, and simple scripts.",
      details: [
        "CAD + kinematics simulations",
        "Embed firmware with logging",
        "Quick perception stack bring-up",
      ],
    },
    {
      step: "03",
      title: "Integrate",
      summary:
        "Integrate hardware, firmware, and interfaces so everything talks.",
      details: [
        "Closed-loop testing harnesses",
        "Edge ML optimisation",
        "Operator interface sprints",
      ],
    },
    {
      step: "04",
      title: "Deploy",
      summary:
        "Demo, collect feedback, and iterate with fresh tasks or metrics.",
      details: [
        "Pilot rollout playbooks",
        "Telemetry dashboards",
        "Feedback-informed roadmap",
      ],
    },
  ],

  contact: {
    email: "utkarshsingh2104@outlook.com",
    emailLabel: "Email Utkarsh",
    linkedin: "https://www.linkedin.com/in/utkarshware/",
    details: [
      { label: "Location", value: "Pune, Maharashtra, India" },
      {
        label: "Collaborations",
        value: "Internships, research labs, technical clubs",
      },
      { label: "Response", value: "Replies within one day (IST)" },
    ],
    socials: [
      {
        name: "GitHub",
        label: "GitHub",
        url: "https://github.com/utkarshware",
      },
      {
        name: "LinkedIn",
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/utkarshware/",
      },
      { name: "Twitter", label: "Twitter", url: "https://x.com/Utkarzxhh" },
    ],
  },

  schema: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Utkarsh Singh",
    url: "https://utkarshsingh.dev",
    sameAs: [
      "https://github.com/utkarshware",
      "https://www.linkedin.com/in/utkarshware/",
      "https://x.com/Utkarzxhh",
    ],
    jobTitle: "Robotics & Automation Engineer",
    worksFor: {
      "@type": "CollegeOrUniversity",
      name: "Symbiosis International University",
    },
  },
};
