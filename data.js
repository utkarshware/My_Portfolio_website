// data.js
// Put your content and links here. Edit this file to change the site copy.

window.PORTFOLIO_DATA = {
  meta: {
    title: "Utkarsh Singh — Robotics Engineer",
    description:
      "Robotics and automation engineer delivering intelligent manipulators, embedded control, and ML-enabled interfaces for practical deployment.",
    resumeHref:
      "https://drive.google.com/file/d/1uWpbTTRiyPo5-sRiASr5FOCMEeTYKE5Y/view?usp=drive_link",
  },

  hero: {
    badge: "Robotics & Intelligent Automation",
    headline:
      "Engineering responsive robots and intelligent systems that perform reliably in the real world.",
    lead: "I design and deploy robotics solutions that stitch together mechanical assemblies, embedded firmware, and machine intelligence for industrial and human-centred environments.",
    stats: [
      { label: "Experience", value: "3+ years building robotics prototypes" },
      {
        label: "Focus",
        value: "Manipulators · Embedded Control · Edge ML",
      },
      {
        label: "Currently",
        value: "Robotics & Automation, Symbiosis International University",
      },
    ],
    mission: [
      {
        label: "Mission",
        value: "Build field-ready robots that teams trust on day one.",
      },
      {
        label: "Operating Mode",
        value: "Rapid prototyping with closed-loop user feedback.",
      },
      {
        label: "Differentiator",
        value: "Full-stack ownership from CAD to calibrated deployment.",
      },
    ],
  },

  expertise: [
    {
      title: "Robotic Systems Engineering",
      summary:
        "Designing manipulators, mobile platforms, and supporting architectures that withstand production constraints.",
      focus: [
        "Mechanism design, kinematics, and CAD to bench-tested hardware",
        "PID and model-based control tuned for repeatable motion",
        "Sensor fusion and calibration for perception-driven tasks",
      ],
    },
    {
      title: "Embedded Intelligence",
      summary:
        "Bringing intelligence to the edge with firmware, real-time processing, and on-device ML pipelines.",
      focus: [
        "C/C++ firmware across Arduino, STM32, and Raspberry Pi",
        "Low-latency communications, telemetry, and safety interlocks",
        "TensorFlow Lite, optimisation, and inference profiling",
      ],
    },
    {
      title: "Human-Centred Platforms",
      summary:
        "Combining robotics capability with considered product experiences for operators and stakeholders.",
      focus: [
        "React, Flask, and REST interfaces that expose control surfaces",
        "Data visualisation for diagnostics and operations",
        "Cross-functional leadership, workshops, and enablement",
      ],
    },
  ],

  projects: [
    {
      category: "AR Emergency Response",
      period: "2025",
      title: "MediCare — On-Device Triage Assistant",
      summary:
        "Built a mobile AR assistant that recognises medical supplies offline and guides first responders through critical procedures.",
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
        "Created an ML-backed planning cockpit that forecasts commodity prices to assist smallholder farmers in scheduling harvest cycles.",
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
        "Delivered a laboratory-scale manipulator with closed-loop joint control and a browser-based command deck.",
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
      "Robotics and automation engineer turning hypotheses into fieldable systems through an end-to-end build mindset. I balance mechanism design, embedded optimisation, and human-centred delivery to create robotics that teams can trust.",
    highlights: [
      "Vice President — Robotics Process Automation Society, advancing campus-wide automation programs",
      "AI/Data Science Co-Lead — SIT ACM Chapter, curating learning labs and project sprints",
      "Core contributor to CodeX Programming Community, TEDxMUN organising team, and V@rsity finance operations",
    ],
    education: {
      title: "Education",
      description: "B.Tech, Robotics & Automation",
      items: [
        "Symbiosis International University",
        "Leadership: Student Council President, MUN President",
        "Operations & Communications Lead — INFIDIT",
      ],
    },
    focus: {
      title: "Current Focus",
      description:
        "Strengthening collaborative robotics and intelligent automation pipelines.",
      items: [
        "Autonomous calibration and health monitoring",
        "Human-robot interaction for safety-critical workflows",
        "Deployable edge ML for industrial environments",
      ],
    },
  },

  process: [
    {
      step: "01",
      title: "Discover",
      summary:
        "Frame opportunities with operators, constraints, and desired success signals.",
      details: [
        "Immersion interviews and shadowing",
        "Field requirement capture",
        "Safety and compliance scope",
      ],
    },
    {
      step: "02",
      title: "Prototype",
      summary:
        "Move fast from concepts to benchtop rigs with instrumented feedback loops.",
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
        "Fuse mechanics, electronics, and software into robust subsystems ready for pilots.",
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
        "Launch, monitor, and iterate with real-world telemetry and stakeholder workshops.",
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
        value: "Robotics, embedded control, intelligent automation initiatives",
      },
      { label: "Response", value: "Replies within one business day (IST)" },
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
