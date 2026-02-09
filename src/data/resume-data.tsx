import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Sulaiman Bin Suradi",
  initials: "SBS",
  location: "Singapore, GMT +8",
  locationLink: "https://www.google.com/maps/place/Singapore",
  about: "Tech-enabled, data-centred product manager/marketer.",
  summary: (
    <>
      Versatile professional with over 11 years of experience bridging public sector operations, stakeholder management, and digital solutions. 
      Successfully transitioned from a strong background in Marketing & Communications (RMIT) to technical operations following rigorous upskilling in Infocomm Technology (Temasek Polytechnic). 
      Currently leveraging this unique hybrid skillset at MUIS to drive process improvements, 
      system integrations, and data-backed decision-making. Proven ability to translate complex technical requirements for business stakeholders.
    </>
  ),
  avatarUrl: "https://discord.com/channels/696188649032646776/1134386366361391124/1470288336311685302",
  personalWebsiteUrl: "https://sulaiman.blog",
  contact: {
    email: "sulaimanbins@gmail.com",
    tel: "+65",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/imanhardy",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sulaimanbs/",
        icon: "linkedin",
      },
      {
        name: "X",
        url: "https://x.com/",
        icon: "x",
      },
    ],
  },
  education: [
    {
      school: "RMIT University",
      degree: "Bachelor of Communication",
      start: "2015",
      end: "2016",
    },
  ],
  work: [
    {
      company: "Majlis Ugama Islam Singapura (MUIS)",
      link: "https://www.muis.gov.sg/",
      badges: ["Remote", "AI", "React", "Next.js", "TypeScript", "AdonisJS"],
      title: "Senior Executive",
      start: "2023",
      end: null,
      description: (
        <>
          Lead the end-to-end product lifecycle for the Zakat and Wakaf CRM ecosystem. 
          Oversee technical integrations for omnichannel payment systems (Online, Counter, Self-Service Kiosks).
          Manage vendor relationships to ensure high system uptime and security
        </>
      ),
    },
    {
      company: "OneSecure Asia",
      link: "https://film.io",
      badges: ["Remote", "React", "Next.js", "TypeScript", "Node.js"],
      title: "Marketing Manager",
      start: "2024",
      end: "2025",
      description: (
        <>
          Leading technical architecture of a blockchain-based film funding
          platform.
          <ul className="list-inside list-disc">
            <li>
              Architecting migration from CRA to Next.js for improved
              performance, SEO, and DX
            </li>
            <li>
              Established release process enabling faster deployments and
              reliable rollbacks
            </li>
            <li>
              Implementing system-wide monitoring and security improvements
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Footballco",
      link: "https://parabol.co",
      badges: [
        "Remote",
        "React",
        "TypeScript",
        "Node.js",
        "GraphQL",
        "Tailwind CSS",
      ],
      title: "Senior Full Stack Developer",
      start: "2021",
      end: "2024",
      description: (
        <>
          Senior developer and squad leader for an enterprise agile meeting
          platform.
          <ul className="list-inside list-disc">
            <li>
              Built design system with Tailwind CSS, improving development speed
              and time to market
            </li>
            <li>
              Implemented engineering practices: PR automation, code review
              guidelines, and workflows
            </li>
            <li>
              Open source contributions to Relay DevTools and React i18n tooling
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Clevertech",
      link: "https://clevertech.biz",
      badges: ["Remote", "React", "TypeScript", "Node.js", "Android", "Kotlin"],
      title: "Lead Android Developer → Full Stack Developer",
      start: "2015",
      end: "2021",
      description: (
        <>
          Successfully transitioned from mobile to full-stack development while
          leading distributed teams.
          <ul className="list-inside list-disc">
            <li>
              Led frontend team at Evercast, building real-time platform
              supporting 30+ users per room with HD streaming and collaboration
              tools
            </li>
            <li>
              Developed offline-first Android app for DKMS, improving donor
              registration process
            </li>
            <li>
              Led development teams across multiple successful client projects
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Jojo Mobile",
      link: "https://bsgroup.eu/",
      badges: ["On Site", "Android", "Java", "Kotlin"],
      title: "Android Developer → Lead Android Developer",
      start: "2012",
      end: "2015",
      description: (
        <>
          First Android developer, grew and led a team of 15+ engineers while
          establishing engineering culture.
          <ul className="list-inside list-disc">
            <li>
              Developed apps for major Polish companies including LOT, Polskie
              Radio, and Agora
            </li>
            <li>Built and mentored high-performing mobile development team</li>
          </ul>
        </>
      ),
    },
    {
      company: "Nokia Siemens Networks",
      link: "https://www.nokia.com",
      badges: ["On Site", "C/C++", "LTE", "Agile"],
      title: "C/C++ Developer",
      start: "2010",
      end: "2012",
      description:
        "Developed software for LTE base stations at enterprise scale, gaining strong fundamentals in software architecture, testing practices, and cross-team collaboration.",
    },
  ],
  skills: [
    "Microsoft Power BI",
    "TypeScript",
    "Tailwind CSS",
    "Design Systems",
    "WebRTC",
    "WebSockets",
    "Node.js",
    "GraphQL",
    "Relay",
    "System Architecture",
    "Remote Team Leadership",
  ],
  projects: [
    {
      title: "Islamic Legacy Planning",
      techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
      description:
        "Browser extension for debugging web applications. Includes taking screenshots, screen recording, E2E tests generation and generating bug reports",
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Zakat.sg",
      techStack: [
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
        "Tailwind CSS",
        "PostgreSQL",
        "Redis",
      ],
      description:
        "Platform for online consultations with real-time video meetings and scheduling",
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Minimalist CV",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "An open source minimalist, print friendly CV template with a focus on readability and clean design. >9k stars on GitHub",
      link: {
        label: "Minimalist CV",
        href: "https://github.com/BartoszJarocki/cv",
      },
    },
  ],
} as const;
