import { Project, SkillCategory, ExperienceItem, CertificationItem, Achievement, ActivityItem } from './types';

export const PERSONAL_INFO = {
  name: 'Nallamilli Vineela Reddy',
  tagline: 'Computer Science & Engineering Student',
  intro: 'B.Tech student passionate about software development, artificial intelligence, machine learning, and creating impactful technology solutions. Seeking opportunities to contribute to innovative projects while continuously learning and growing.',
  about: "I am currently pursuing B.Tech in Computer Science and Engineering at Vignan's Institute of Engineering for Women. I am passionate about AI, Machine Learning, Full Stack Development, and Software Engineering.",
  email: 'vineelareddy984@gmail.com',
  phone: '+91 8464991990',
  location: 'Andhra Pradesh, India',
  linkedin: 'https://www.linkedin.com/in/vineela-reddy-1270332b8',
  github: 'https://github.com/vineelareddy984',
};

export const ACADEMIC_HIGHLIGHTS = [
  { level: 'B.Tech in CSE', score: '8.78 CGPA', institute: "Vignan's Institute of Engineering for Women", period: '2023 - 2027' },
  { level: 'Intermediate', score: '89.40 %', institute: 'Board of Intermediate Education', period: '2021 - 2023' },
  { level: 'SSC (10th)', score: '96.50 %', institute: 'Secondary Board of Education', period: '2020' },
];

export const PROJECTS: Project[] = [
  {
    id: 'proj1',
    title: 'EduMitra – AI-Powered Peer Study Platform',
    description: 'EduMitra is an intelligent peer-learning platform designed to help students collaborate, learn, and grow together. The platform enables students to connect with peers, share knowledge, access academic resources, and receive AI-powered study assistance for a more engaging learning experience.',
    category: 'AI & ML',
    tags: ['AI', 'React', 'Web Development', 'Education Technology'],
    link: 'https://edumitra-regional-ai-buddy.lovable.app/',
    github: 'https://github.com/vineelareddy984',
    buttonText: 'Explore EduMitra',
    isLive: true,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
    features: [
      'AI-powered study assistance',
      'Peer-to-peer learning',
      'Resource sharing',
      'Collaborative learning environment',
      'Student networking',
      'Smart academic support'
    ]
  },
  {
    id: 'proj2',
    title: 'AI-Based Exam Paper Evaluator',
    description: 'A smart web application that helps teachers upload, evaluate, and manage student answer sheets efficiently. The system includes automated academic calculations and performance tracking features.',
    category: 'AI & ML',
    tags: ['AI', 'Web Development', 'Database Management'],
    link: 'https://academic-paper-evaluator.lovable.app/',
    github: 'https://github.com/vineelareddy984',
    buttonText: 'View Live Project',
    isLive: true,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'proj3',
    title: 'Health Insight Navigator',
    description: 'An intelligent health analysis platform that evaluates health parameters and provides insights into potential medical conditions, promoting early awareness and informed decision-making.',
    category: 'AI & ML',
    tags: ['AI', 'Data Analytics', 'Health Informatics'],
    link: 'https://health-insight-navigator-app.lovable.app/',
    github: 'https://github.com/vineelareddy984',
    buttonText: 'View Live Project',
    isLive: true,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'proj4',
    title: 'Boudoir – Designer Handbags & Cosmetics Brand',
    description: 'A luxury e-commerce platform specializing in premium designer handbags and cosmetics. The website provides an elegant shopping experience with modern product showcases and brand-focused design.',
    category: 'E-commerce',
    tags: ['React', 'Web Design', 'E-Commerce'],
    link: 'https://boudoir.vercel.app/',
    github: 'https://github.com/vineelareddy984',
    buttonText: 'Visit Boudoir',
    isLive: true,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
    features: [
      'Designer handbag collections',
      'Premium cosmetics catalog',
      'Responsive luxury UI',
      'Product showcase galleries',
      'Modern shopping experience'
    ]
  },
  {
    id: 'proj5',
    title: 'Vinshu – Clothing & Beauty Brand',
    description: 'A modern fashion and beauty brand platform showcasing clothing collections and beauty products through a clean and engaging user experience.',
    category: 'E-commerce',
    tags: ['React', 'UI/UX Design', 'E-Commerce'],
    link: 'https://vinshu-brand.vercel.app/',
    github: 'https://github.com/vineelareddy984',
    buttonText: 'Visit Vinshu',
    isLive: true,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
    features: [
      'Fashion collections',
      'Beauty product showcase',
      'Mobile-friendly design',
      'Elegant product displays',
      'Smooth user experience'
    ]
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'Python', 'C', 'SQL'],
    icon: 'Code2',
  },
  {
    title: 'Technologies',
    skills: ['AI & ML', 'Linux', 'Networking', 'Switching', 'Routing'],
    icon: 'Cpu',
  },
  {
    title: 'Tools & Ecosystems',
    skills: ['Power BI', 'Jupyter Notebook', 'MS Office'],
    icon: 'Wrench',
  },
  {
    title: 'Soft Skills',
    skills: ['Leadership', 'Communication', 'Adaptability', 'Problem Solving', 'Time Management'],
    icon: 'Users',
  },
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: 'exp1',
    role: 'Foundation of AI & ML',
    company: 'Data Valley',
    duration: 'May 2025 – July 2025',
    description: [
      'Learned AI and ML fundamentals, training models and using statistical algorithms.',
      'Worked with Java-based complex problem solving to optimize data processing pipelines.',
      'Developed strong algorithmic analytical and programming skills under industry standards.',
    ],
  },
  {
    id: 'exp2',
    role: 'AI Internship',
    company: 'Skill Vertex',
    duration: 'September 2024 – November 2024',
    description: [
      'Gained hands-on knowledge in AI implementation, deploying deep learning models.',
      'Exposed to real-world software project workflows, APIs and data integration cycles.',
      'Enhanced analytical thinking capabilities while applying techniques onto complex real datasets.',
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  { id: 'cert1', title: 'NPTEL DBMS Certification', issuer: 'NPTEL', type: 'certification' },
  { id: 'cert2', title: 'AI ASCEND Fundamentals of AI', issuer: 'AI ASCEND', type: 'certification' },
  { id: 'cert3', title: 'Cyber Security & Ethical Hacking Workshop', issuer: 'Tech Corp', type: 'workshop' },
  { id: 'cert4', title: 'Java Full Stack with ReactJS', issuer: 'EduTech Inc', type: 'certification' },
  { id: 'cert5', title: 'Infosys Springboard Full Stack Development', issuer: 'Infosys Springboard', type: 'certification' },
  { id: 'cert6', title: 'Business Intelligence with Power BI', issuer: 'Skill Academy', type: 'certification' },
  { id: 'cert7', title: 'WOW 24-Hour Hackathon Participant', issuer: 'WOW Org', type: 'hackathon' },
  { id: 'cert8', title: 'HackHers Hackathon Participant', issuer: 'Women In Tech', type: 'hackathon' },
  { id: 'cert9', title: 'AI Genesis Ideathon First runner', issuer: 'AI Genesis', type: 'hackathon' },
  { id: 'cert10', title: 'Struckd Game Development Workshop', issuer: 'Struckd Studio', type: 'workshop' },
];

export const LEADERSHIP_ACTIVITIES: ActivityItem[] = [
  {
    id: 'lead1',
    role: 'Event Planner',
    company: 'AlgoZenith',
    details: 'Selected among only 10 candidates. Successfully organized and managed multiple large-scale inter-college technical events, coding contests, and bootcamps.',
  },
  {
    id: 'lead2',
    role: 'Class Representative (CR)',
    company: "Vignan's CSE Dept",
    details: 'Acted as a crucial strategic liaison between the student body and university faculty; managed complex academic schedules, streamlined syllabus communications, and led peer study groups.',
  },
];

export const STATS: Achievement[] = [
  { id: 'stat1', count: 7, label: 'Projects Built', suffix: '+' },
  { id: 'stat2', count: 10, label: 'Professional Certifications', suffix: '+' },
  { id: 'stat3', count: 2, label: 'Industry Internships', suffix: '' },
  { id: 'stat4', count: 5, label: 'Technical Events Organized', suffix: '+' },
];
