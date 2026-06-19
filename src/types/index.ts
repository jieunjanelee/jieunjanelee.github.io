export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repoHref?: string;
  featured?: boolean;
}

export interface WorkExperience {
  company: string;
  role: string;
  start: string;
  end: string | "Present";
  description: string;
  tags?: string[];
}
