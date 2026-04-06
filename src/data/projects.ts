export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  live?: string
  featured: boolean
  category: 'security' | 'web' | 'tools' | 'ai'
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'VulnScanner Pro',
    description: 'Automated vulnerability scanner for web applications. Detects XSS, SQLi, CSRF, and more with AI-powered analysis.',
    image: '/projects/scanner.png',
    tags: ['Python', 'Machine Learning', 'Security', 'Automation'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    category: 'security',
  },
  {
    id: '2',
    title: 'SecureChat',
    description: 'End-to-end encrypted messaging application with zero-knowledge architecture and self-destructing messages.',
    image: '/projects/securechat.png',
    tags: ['React', 'Node.js', 'Encryption', 'WebRTC'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    category: 'web',
  },
  {
    id: '3',
    title: 'BugBounty Dashboard',
    description: 'Real-time dashboard for tracking bug bounty programs, submissions, and earnings across multiple platforms.',
    image: '/projects/dashboard.png',
    tags: ['Next.js', 'TypeScript', 'Charts', 'API'],
    github: 'https://github.com',
    featured: true,
    category: 'tools',
  },
  {
    id: '4',
    title: 'AI Code Auditor',
    description: 'Machine learning model that analyzes source code for security vulnerabilities and suggests fixes.',
    image: '/projects/auditor.png',
    tags: ['Python', 'TensorFlow', 'Security', 'AI'],
    github: 'https://github.com',
    featured: true,
    category: 'ai',
  },
  {
    id: '5',
    title: 'ReconBot',
    description: 'Automated reconnaissance bot that maps attack surface and identifies potential entry points.',
    image: '/projects/reconbot.png',
    tags: ['Go', 'Security', 'Recon', 'Automation'],
    github: 'https://github.com',
    featured: false,
    category: 'tools',
  },
  {
    id: '6',
    title: 'CryptoPortfolio',
    description: 'Portfolio tracker for cryptocurrency investments with DeFi integration and price alerts.',
    image: '/projects/crypto.png',
    tags: ['React', 'Web3', 'DeFi', 'Charts'],
    live: 'https://example.com',
    featured: false,
    category: 'web',
  },
]