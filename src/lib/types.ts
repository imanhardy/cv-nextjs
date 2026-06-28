import type { StaticImageData } from "next/image";
import type { ResumeData } from "./schemas";

export type ResumeIcon =
  | React.ComponentType<React.SVGProps<SVGSVGElement>>
  | StaticImageData;

export type IconType = "github" | "linkedin" | "x" | "globe" | "mail" | "phone";

// Re-export ResumeData from schemas (single source of truth via Zod)
export type { ResumeData };

// GraphQL compatible types (without React components)
export interface GraphQLSocial {
  name: string;
  url: string;
}

export interface GraphQLContact {
  email: string;
  tel: string;
  social: GraphQLSocial[];
}

export interface GraphQLEducation {
  school: string;
  degree: string;
  start: string;
  end: string;
}

export interface GraphQLWork {
  company: string;
  link: string;
  badges: string[];
  title: string;
  start: string;
  end: string;
  description: string;
}

export interface GraphQLLink {
  label: string;
  href: string;
}

export interface GraphQLProject {
  title: string;
  techStack: string[];
  description: string;
  link?: GraphQLLink;
}

export interface GraphQLMe {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: GraphQLContact;
  education: GraphQLEducation[];
  work: GraphQLWork[];
  skills: string[];
  projects: GraphQLProject[];
}

// Transform function to convert ResumeData to GraphQL compatible format
export function resumeDataToGraphQL(data: ResumeData): GraphQLMe {
  return {
    name: data.name,
    initials: data.initials,
    location: data.location,
    locationLink: data.locationLink,
    about: data.about,
    summary: data.summary,
    avatarUrl: data.avatarUrl,
    personalWebsiteUrl: data.personalWebsiteUrl,
    contact: {
      email: data.contact.email,
      tel: data.contact.tel,
      social: data.contact.social.map(({ name, url }) => ({ name, url })),
    },
    education: data.education,
    work: data.work.map((job) => ({
      company: job.company,
      link: job.link,
      badges: job.badges,
      title: job.title,
      start: job.start,
      end: job.end ?? "Present",
      description: job.description,
    })),
    skills: data.skills,
    projects: data.projects.map((project) => ({
      title: project.title,
      techStack: project.techStack,
      description: project.description,
      link: project.link,
    })),
  };
}
