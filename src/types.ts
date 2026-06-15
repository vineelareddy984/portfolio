export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'AI & ML' | 'Web Dev' | 'E-commerce' | 'All';
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
  features?: string[];
  buttonText?: string;
  isLive?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string; // Lucide icon name
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer?: string;
  type: 'certification' | 'workshop' | 'hackathon';
}

export interface Achievement {
  id: string;
  count: number;
  label: string;
  suffix?: string;
}

export interface ActivityItem {
  id: string;
  role: string;
  company: string;
  details: string;
}
