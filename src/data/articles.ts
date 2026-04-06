export interface Article {
  id: string
  title: string
  excerpt: string
  category: 'bug-bounty' | 'security' | 'tools' | 'writeups'
  date: string
  readTime: string
  tags: string[]
  image?: string
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'XSS in Major Platform: From Reflected to Stored',
    excerpt: 'A deep dive into discovering and exploiting a stored XSS vulnerability that led to account takeover on a major platform.',
    category: 'bug-bounty',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['XSS', 'Bug Bounty', 'Web Security'],
  },
  {
    id: '2',
    title: 'Understanding OAuth Misconfigurations',
    excerpt: 'Learn how OAuth implementations can be misconfigured and how attackers exploit these misconfigurations.',
    category: 'security',
    date: '2024-01-10',
    readTime: '12 min read',
    tags: ['OAuth', 'Authentication', 'Security'],
  },
  {
    id: '3',
    title: 'My Favorite Recon Tools for Bug Hunting',
    excerpt: 'A comprehensive guide to the tools I use daily for reconnaissance in bug bounty hunting.',
    category: 'tools',
    date: '2024-01-05',
    readTime: '6 min read',
    tags: ['Recon', 'Tools', 'Bug Bounty'],
  },
  {
    id: '4',
    title: 'IDOR Vulnerability in Banking App',
    excerpt: 'How I discovered an Insecure Direct Object Reference that exposed sensitive user financial data.',
    category: 'writeups',
    date: '2024-01-01',
    readTime: '10 min read',
    tags: ['IDOR', 'Banking', 'Bug Bounty'],
  },
  {
    id: '5',
    title: 'CSRF Token Bypass Techniques',
    excerpt: 'Exploring various techniques to bypass CSRF protections and how to mitigate them.',
    category: 'security',
    date: '2023-12-28',
    readTime: '7 min read',
    tags: ['CSRF', 'Web Security', 'Bypass'],
  },
  {
    id: '6',
    title: 'Building Your First Hacking Lab',
    excerpt: 'Step-by-step guide to setting up your own ethical hacking lab for practicing cybersecurity skills safely.',
    category: 'tools',
    date: '2023-12-20',
    readTime: '15 min read',
    tags: ['Lab', 'Setup', 'Beginner'],
  },
]