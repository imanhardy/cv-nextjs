import { validateResumeData } from "@/lib/schemas";
import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = validateResumeData({
  name: "Sulaiman Bin Suradi",
  initials: "SBS",
  location: "Singapore, GMT +8",
  locationLink: "https://www.google.com/maps/place/Singapore",
  about: "Tech-Enabled Operations Professional bridging Policy & Digital Solutions.",
  summary: `Versatile professional with over 11 years of experience bridging public sector operations, stakeholder management, and digital solutions. Successfully transitioned from a strong background in Marketing & Communications to technical operations following rigorous upskilling in Infocomm Technology.

          Currently leveraging this unique hybrid skillset at MUIS to drive process improvements, system integrations, and data-backed decision-making.

          Proven ability to translate complex technical requirements for business stakeholders.`,
  avatarUrl: "https://file.go.gov.sg/sulaiman-bin-suradi.jpg",
  personalWebsiteUrl: "https://sulaiman.blog",
  contact: {
    email: "sulaimanbins@gmail.com",
    tel: "+65",
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
      school: "Temasek Polytechnic",
      degree: "Specialist Diploma in Infocomm & Digital Media",
      start: "2020",
      end: "2021",
    },
    {
      school: "RMIT University",
      degree: "Bachelor of Communication (Professional Communication)",
      start: "2015",
      end: "2016",
    },
    {
      school: "Ngee Ann Polytechnic",
      degree: "Diploma in Mass Communication",
      start: "2008",
      end: "2011",
    },
  ],
  work: [
    {
      company: "Majlis Ugama Islam Singapura (MUIS)",
      link: "https://www.muis.gov.sg/",
      badges: ["Public Sector", "Product Mgmt", "CRM"],
      title: "Senior Executive, Zakat & Wakaf Strategic Unit",
      start: "2023",
      end: "Present",
      description: `Lead the end-to-end product lifecycle for the Zakat and Wakaf CRM ecosystem and digital platforms.

• Product & Project Management: Oversee technical integrations for omnichannel payment systems (Online, Counter, Kiosks) and manage vendor relationships for high uptime.
• Digital Transformation: Spearhead AI chatbot initiatives and implemented e-learning SaaS platforms (Articulate 360) to modernize staff training.
• Business Intelligence: Drive data analytics strategy using Power BI/Excel to forecast revenue and support policy formulation (Nisab/Fitrah rates).`,
    },
    {
      company: "OneSecure Asia",
      link: "https://www.onesecureasia.com/", 
      badges: ["Cybersecurity", "Web Design"],
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
      badges: ["Account Mgmt", "Analytics", "Global Media"],
      title: "Account Executive",
      start: "2021",
      end: "2022",
      description: `Managed post-sales execution and performance analysis for key accounts.

• Client Operations: Managed deliverables to meet strict timelines and quality standards.
• Performance Analysis: Utilised analytics tools to track campaign metrics and generated data-driven reports for stakeholders.`,
    },
    {
      company: "Temasek Polytechnic",
      link: "https://www.tp.edu.sg/",
      badges: ["Sabbatical", "Upskilling", "IT"],
      title: "Full-time Student / Career Sabbatical",
      start: "2020",
      end: "2021",
      description: `Undertook a planned one-year sabbatical to acquire technical competencies in Computer & Information Sciences.

• Completed Diploma in Infocomm & Digital Media to pivot career trajectory toward technical operations.
• Focus areas: Cloud Management, Server Admin, and Digital Media tech.`,
    },
    {
      company: "Ascenda",
      link: "https://www.ascendaloyalty.com/",
      badges: ["FinTech", "Partnerships", "Ops"],
      title: "Senior Marketing & Partnerships Executive",
      start: "2018",
      end: "2020",
      description: `Managed strategic B2B partnerships and operational workflows for loyalty programs.

• Stakeholder Management: Managed partnerships with major financial institutions.
• Operational Workflows: Oversaw end-to-end rewards redemption workflows and troubleshooting.`,
    },
    {
      company: "Furama Hotels International",
      link: "https://www.furama.com/",
      badges: ["Hospitality", "Marketing"],
      title: "Marketing Executive",
      start: "2017",
      end: "2018",
      description: "Executed integrated marketing campaigns and aligned strategies with revenue goals.",
    },
    {
      company: "BBC Global News",
      link: "https://www.bbc.com/",
      badges: ["Advertising", "Media", "Data"],
      title: "Pricing & Inventory Assistant",
      start: "2016",
      end: "2017",
      description:
        "Managed commercial ad inventory data and pricing structures, ensuring 100% accuracy in booking systems and conducting regular audits for revenue optimization.",
    },
  ],
  skills: [
    "Product Management",
    "CRM Ecosystems",
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
        href: "https://www.zakat.sg/",
      },
    },
    {
      title: "Digital Transformation & AI",
      techStack: ["AI Chatbots", "Articulate 360", "SaaS", "Automation"],
      description:
        "Spearheading the digitalisation of internal processes, including the deployment of AI chatbots for query handling and modern e-learning platforms for officer training.",
      link: {
        label: "MUIS",
        href: "https://www.muis.gov.sg/",
      },
    },
    {
      title: "Policy Data Strategy",
      techStack: ["Power BI", "Excel", "Data Analytics", "Policy Papers"],
      description:
        "Formulating critical policy papers (Nisab calculations, Fitrah rates) backed by rigorous data analysis and business intelligence reporting.",
      link: {
        label: "Fatwa",
        href: "https://www.muis.gov.sg/officeofthemufti",
      },
    },
  ],
});
