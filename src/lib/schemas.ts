import { z } from "zod";
import type { IconType } from "./types";

// Icon type schema - matches IconType from types.ts
export const IconTypeSchema = z.enum(["github", "linkedin", "x", "globe", "mail", "phone"]) as z.ZodType<IconType>;

// Social media link schema
export const SocialSchema = z.object({
  name: z.string(),
  url: z.string().url(),
  icon: IconTypeSchema,
});

// Contact information schema
export const ContactSchema = z.object({
  email: z.string().email(),
  tel: z.string(),
  social: z.array(SocialSchema),
});

// Education item schema
export const EducationSchema = z.object({
  school: z.string(),
  degree: z.string(),
  start: z.string(),
  end: z.string(),
});

// Work experience item schema
export const WorkSchema = z.object({
  company: z.string(),
  link: z.string().url(),
  badges: z.array(z.string()),
  title: z.string(),
  start: z.string(),
  end: z.string().nullable(),
  description: z.string(), // Changed from React.ReactNode to string
});

// Project link schema
export const ProjectLinkSchema = z.object({
  label: z.string(),
  href: z.string().url(),
}).optional();

// Project item schema
export const ProjectSchema = z.object({
  title: z.string(),
  techStack: z.array(z.string()),
  description: z.string(),
  link: ProjectLinkSchema,
});

// Main resume data schema
export const ResumeDataSchema = z.object({
  name: z.string(),
  initials: z.string(),
  location: z.string(),
  locationLink: z.string().url(),
  about: z.string(),
  summary: z.string(), // Changed from React.ReactNode to string
  avatarUrl: z.string().url(),
  personalWebsiteUrl: z.string().url(),
  contact: ContactSchema,
  education: z.array(EducationSchema),
  work: z.array(WorkSchema),
  skills: z.array(z.string()),
  projects: z.array(ProjectSchema),
});

// Type inference from schema
export type ResumeData = z.infer<typeof ResumeDataSchema>;
export type Social = z.infer<typeof SocialSchema>;
export type Contact = z.infer<typeof ContactSchema>;
export type Education = z.infer<typeof EducationSchema>;
export type Work = z.infer<typeof WorkSchema>;
export type Project = z.infer<typeof ProjectSchema>;
// Note: IconType is imported from types.ts

// Validation function
export function validateResumeData(data: unknown): ResumeData {
  return ResumeDataSchema.parse(data);
}

// Safe validation (returns result instead of throwing)
export function safeValidateResumeData(data: unknown) {
  return ResumeDataSchema.safeParse(data);
}
