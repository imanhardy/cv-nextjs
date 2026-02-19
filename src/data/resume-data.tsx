import { validateResumeData } from "@/lib/schemas";
import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = validateResumeData({
  name: "Sulaiman Bin Suradi",
  initials: "SBS",
  location: "Singapore, GMT +8",
  locationLink: "https://www.google.com/maps/place/Singapore",
  about: "Tech-Enabled Marketing Professional bridging Policy & Digital Solutions.",
  summary: `Versatile professional with over 11 years of experience bridging public sector operations, stakeholder management, and digital solutions. Successfully transitioned from a strong background in Marketing & Communications to technical operations following rigorous upskilling in Infocomm Technology.

          Currently leveraging this unique hybrid skillset at MUIS to drive process improvements, system integrations, and data-backed decision-making. Proven ability to translate complex technical requirements for business stakeholders.`,
  avatarUrl: "https://file.go.gov.sg/sulaiman-bin-suradi.jpg",
  personalWebsiteUrl: "https://sulaiman.blog",
  contact: {
    email: "sulaimanbins@gmail.com",
    tel: "+6594566162",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sulaimanbs/",
        icon: "linkedin",
      },
      {
        name: "GitHub",
        url: "https://github.com/imanhardy",
        icon: "github",
      },
    ],
  },
  education: [
    {
      school: "RMIT University",
      degree: "Bachelor of Communication (Professional Communication)",
      start: "2015",
      end: "2016",
    },
    {
      school: "Temasek Polytechnic",
      degree: "Diploma in Infocomm & Digital Media (ICT Systems, Services & Support)",
      start: "2020",
      end: "2021",
    },
    {
      school: "Ngee Ann Polytechnic",
      degree: "Diploma in Mass Communication",
      start: "2008",
      end: "2011",
    },
    {
      school: "Ngee Ann Polytechnic",
      degree: "Diploma Plus Certificate in Business",
      start: "2009",
      end: "2011",
    },
  ],
  work: [
    {
      company: "Majlis Ugama Islam Singapura (MUIS)",
      link: "https://www.muis.gov.sg/",
      badges: ["Public Sector", "Product Management", "CRM"],
      title: "Senior Executive, Community Funds (Zakat & Outreach)",
      start: "2023",
      end: "Present",
      description: `Lead the end-to-end product lifecycle for the Zakat and Wakaf CRM ecosystem and digital platforms.

• Product & Project Management: Oversee technical integrations for omnichannel payment systems (Online, Counter, Kiosks) and manage vendor relationships.
• Digital Transformation: Spearhead AI initiatives and implemented e-learning SaaS platforms (Articulate 360) to modernise operations and Zakat officers training.
• Business Intelligence: Drive data analytics strategy using Power BI/Excel to forecast fund collections and support policy formulation (Nisab/Fitrah rates).`,
    },
    {
      company: "OneSecure Asia",
      link: "https://www.onesecureasia.com/", 
      badges: ["Cybersecurity", "Marketing", "Web Design"],
      title: "Marketing Manager",
      start: "2022",
      end: "2022",
      description: `Managed go-to-market strategies for cybersecurity solutions.

• Translated technical product features into clear value propositions for business clients.
• Executed B2B marketing initiatives to drive lead generation.`,
    },
    {
      company: "Footballco",
      link: "https://www.footballco.com/",
      badges: ["Media", "Advertising", "Account Management", "Analytics", "Customer Success"],
      title: "Account Executive",
      start: "2021",
      end: "2022",
      description: `Managed post-sales marketing execution and analysis for regional accounts.

• Client Operations: Managed deliverables to meet strict timelines and quality standards.
• Performance Analysis: Utilised analytics tools to track campaign metrics and generated data-driven reports for stakeholders.`,
    },
    {
      company: "Temasek Polytechnic",
      link: "https://www.tp.edu.sg/",
      badges: ["Upskilling", "IT", "Sabbatical"],
      title: "Full-time Student / Career Sabbatical",
      start: "2020",
      end: "2021",
      description: `Undertook a planned one-year sabbatical to acquire technical competencies in Computer & Information Sciences.

• Completed Diploma in Infocomm & Digital Media to pivot career trajectory towards IT.
• Focus areas: Cloud Management, Server Admin`,
    },
    {
      company: "Ascenda",
      link: "https://www.ascendaloyalty.com/",
      badges: ["FinTech", "Customer Success", "Partnerships", "Ops", "Tech", "Loyalty"],
      title: "Senior Marketing & Partnerships Executive",
      start: "2018",
      end: "2020",
      description: `Managed strategic B2B partnerships and marketing for loyalty programs.

• Stakeholder Management: Managed partnerships with major financial institutions and loyalty programs.
• Operational Workflows: Oversaw end-to-end rewards redemption user journeys and troubleshooting.`,
    },
    {
      company: "Furama Hotels International",
      link: "https://www.furama.com/",
      badges: ["Hospitality", "Marketing", "Digital Marketing"],
      title: "Marketing Executive",
      start: "2017",
      end: "2018",
      description: "Executed regional integrated marketing campaigns and aligned strategies with revenue goals.",
    },
    {
      company: "BBC Global News",
      link: "https://www.bbc.com/",
      badges: ["Advertising", "Media", "Data", "Sales"],
      title: "Pricing & Inventory Assistant",
      start: "2016",
      end: "2017",
      description:
        "Managed commercial ad inventory data and pricing structures, ensuring accuracy in booking systems and conducting regular audits for revenue optimisation.",
    },
  ],
  skills: [
    "Product Management",
    "CRM Ecosystems",
    "Partnerships",
    "Business Intelligence",
    "Power BI",
    "Advanced Excel",
    "Stakeholder Management",
    "Digital Transformation",
    "Policy Formulation",
    "Generative AI Tools",
    "Agile/Scrum Principles",
    "Vendor Management",
  ],
  projects: [
    {
      title: "Zakat & Wakaf CRM Ecosystem",
      techStack: ["CRM", "Payment Gateways", "Vendor Mgmt", "Omnichannel"],
      description:
        "Leading the end-to-end lifecycle of the Zakat and Wakaf management system, integrating online, counter, and kiosk payment channels for seamless donor experience.",
      link: {
        label: "MUIS Zakat",
        href: "https://pay.zakat.sg/",
      },
    },
    {
      title: "Islamic Legacy Planning",
      techStack: ["CMS", "Content Development", "Legacy Planning", "Public Outreach"],
      description:
        "Created content on legacy planning for public outreach efforts including writing content for MUIS website",
      link: {
        label: "MUIS Islamic Legacy Planning",
        href: "https://www.muis.gov.sg/get-help/islamic-legacy-planning/",
      },
    },
    {
      title: "Personal Project: Zakat Calculator",
      techStack: ["Programming", "AI", "Vibe Code", "App"],
      description:
        "Developed an AI-assisted web app for Muslims use including a feature-packed Zakat Calculator contextualised for Singapore",
      link: {
        label: "MuslimSG",
        href: "https://www.muslimsg.com",
      },
    },
  ],
});
