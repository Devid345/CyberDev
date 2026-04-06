export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  image?: string
  content: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    role: 'CTO',
    company: 'SecureTech Inc',
    content: 'One of the most skilled security researchers I\'ve worked with. Their bug reports are detailed, professional, and always include actionable remediation steps.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Bug Bounty Program Manager',
    company: 'HackerOne',
    content: 'An exceptional hunter with a keen eye for logic vulnerabilities. Always professional and quick to respond. A true asset to any security team.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Michael Brown',
    role: 'Lead Developer',
    company: 'TechStartup',
    content: 'Their security audit helped us identify critical vulnerabilities before launch. The detailed report saved us from potential breaches.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Emily Davis',
    role: 'Security Lead',
    company: 'FinanceApp',
    content: 'Professional, thorough, and incredibly knowledgeable. Their penetration testing skills are top-notch.',
    rating: 5,
  },
]