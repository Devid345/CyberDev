export interface Experience {
  id: string
  title: string
  company: string
  location: string
  period: string
  description: string
  achievements: string[]
  type: 'work' | 'education' | 'certification'
  icon: string
}

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Security Researcher',
    company: 'CyberSecurity Corp',
    location: 'Remote',
    period: '2023 - Present',
    description: 'Leading security research initiatives and bug bounty hunting programs.',
    achievements: [
      'Discovered 50+ critical vulnerabilities in major platforms',
      'Achieved top 100 ranking on HackerOne',
      'Maintained $100K+ in bug bounties annually',
    ],
    type: 'work',
    icon: '💼',
  },
  {
    id: '2',
    title: 'Bug Bounty Hunter',
    company: 'Freelance',
    location: 'Worldwide',
    period: '2021 - Present',
    description: 'Independent security researcher hunting bugs on major platforms.',
    achievements: [
      'Hall of Fame entries in 15+ companies',
      'Specialized in XSS, IDOR, and Logic bugs',
      'Published 30+ vulnerability writeups',
    ],
    type: 'work',
    icon: '🎯',
  },
  {
    id: '3',
    title: 'Full Stack Developer',
    company: 'Tech Startup Inc',
    location: 'San Francisco, CA',
    period: '2020 - 2023',
    description: 'Built scalable web applications with focus on security best practices.',
    achievements: [
      'Led development of secure authentication system',
      'Implemented CI/CD pipeline with security scanning',
      'Reduced security vulnerabilities by 80%',
    ],
    type: 'work',
    icon: '💻',
  },
  {
    id: '4',
    title: 'OSCP Certification',
    company: 'Offensive Security',
    location: 'Online',
    period: '2022',
    description: 'Offensive Security Certified Professional certification.',
    achievements: [
      'Passed with distinction',
      'Mastered penetration testing techniques',
      'Gained advanced exploitation skills',
    ],
    type: 'certification',
    icon: '🏆',
  },
  {
    id: '5',
    title: 'B.S. Computer Science',
    company: 'University of Technology',
    location: 'California, USA',
    period: '2016 - 2020',
    description: 'Bachelor of Science in Computer Science with focus on cybersecurity.',
    achievements: [
      'GPA: 3.8/4.0',
      'Cybersecurity club president',
      'Published research on web security',
    ],
    type: 'education',
    icon: '🎓',
  },
  {
    id: '6',
    title: 'CEH Certification',
    company: 'EC-Council',
    location: 'Online',
    period: '2021',
    description: 'Certified Ethical Hacker certification.',
    achievements: [
      'Comprehensive ethical hacking knowledge',
      'Network security expertise',
      'Advanced threat analysis skills',
    ],
    type: 'certification',
    icon: '📜',
  },
]