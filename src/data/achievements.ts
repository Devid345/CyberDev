export interface Achievement {
  id: string
  icon: string
  title: string
  description: string
  unlocked: boolean
  progress?: number
  maxProgress?: number
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
}

export const achievements: Achievement[] = [
  {
    id: 'first-blood',
    icon: '🩸',
    title: 'First Blood',
    description: 'Report your first valid security vulnerability',
    unlocked: true,
    rarity: 'common',
  },
  {
    id: 'bounty-hunter',
    icon: '💰',
    title: 'Bounty Hunter',
    description: 'Earn your first bug bounty reward',
    unlocked: true,
    rarity: 'common',
  },
  {
    id: 'xss-master',
    icon: '🎯',
    title: 'XSS Master',
    description: 'Discover 10 XSS vulnerabilities',
    unlocked: true,
    progress: 10,
    maxProgress: 10,
    rarity: 'rare',
  },
  {
    id: 'sql-hunter',
    icon: '🗄️',
    title: 'SQL Hunter',
    description: 'Find 5 SQL injection vulnerabilities',
    unlocked: false,
    progress: 3,
    maxProgress: 5,
    rarity: 'rare',
  },
  {
    id: 'recon-artist',
    icon: '🔍',
    title: 'Recon Artist',
    description: 'Map 100 subdomains in a single target',
    unlocked: true,
    rarity: 'common',
  },
  {
    id: 'hall-of-fame',
    icon: '🏆',
    title: 'Hall of Famer',
    description: 'Get listed in a company\'s Hall of Fame',
    unlocked: true,
    rarity: 'epic',
  },
  {
    id: 'critical-finder',
    icon: '💀',
    title: 'Critical Finder',
    description: 'Discover a critical severity vulnerability',
    unlocked: false,
    progress: 0,
    maxProgress: 1,
    rarity: 'legendary',
  },
  {
    id: 'automation-expert',
    icon: '🤖',
    title: 'Automation Expert',
    description: 'Create 5 custom security tools',
    unlocked: true,
    rarity: 'rare',
  },
  {
    id: 'consistency-king',
    icon: '👑',
    title: 'Consistency King',
    description: 'Submit valid reports for 30 consecutive days',
    unlocked: false,
    progress: 22,
    maxProgress: 30,
    rarity: 'legendary',
  },
  {
    id: 'collaborator',
    icon: '🤝',
    title: 'Collaborator',
    description: 'Help 10 other hunters with their bugs',
    unlocked: false,
    progress: 7,
    maxProgress: 10,
    rarity: 'epic',
  },
  {
    id: 'zero-day',
    icon: '⚡',
    title: 'Zero-Day Hunter',
    description: 'Discover a previously unknown vulnerability',
    unlocked: false,
    progress: 0,
    maxProgress: 1,
    rarity: 'legendary',
  },
  {
    id: 'bug-bounty-elite',
    icon: '🌟',
    title: 'Bug Bounty Elite',
    description: 'Reach top 100 on any bug bounty platform',
    unlocked: false,
    progress: 156,
    maxProgress: 100,
    rarity: 'legendary',
  },
]

export const rarityColors: Record<string, { bg: string; border: string; glow: string }> = {
  common: { bg: 'from-gray-600 to-gray-700', border: 'border-gray-500', glow: 'shadow-gray-500/50' },
  rare: { bg: 'from-blue-600 to-cyan-600', border: 'border-blue-400', glow: 'shadow-blue-500/50' },
  epic: { bg: 'from-purple-600 to-pink-600', border: 'border-purple-400', glow: 'shadow-purple-500/50' },
  legendary: { bg: 'from-yellow-500 to-orange-500', border: 'border-yellow-400', glow: 'shadow-yellow-500/50' },
}