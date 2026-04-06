'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { articles, type Article } from '@/data/articles'

const categories = [
  { key: 'all', label: 'All' },
  { key: 'bug-bounty', label: 'Bug Bounty' },
  { key: 'security', label: 'Security' },
  { key: 'tools', label: 'Tools' },
  { key: 'writeups', label: 'Writeups' },
]

const categoryColors: Record<string, string> = {
  'bug-bounty': 'from-red-500 to-orange-500',
  'security': 'from-cyan-500 to-blue-500',
  'tools': 'from-green-500 to-emerald-500',
  'writeups': 'from-purple-500 to-pink-500',
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-cyan-500/50 transition-all duration-300"
    >
      <div className={`h-2 bg-gradient-to-r ${categoryColors[article.category]}`} />
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColors[article.category]} bg-clip-text text-white`}>
            {article.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </span>
          <span>•</span>
          <span>{article.date}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
          {article.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {article.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{article.readTime}</span>
          <motion.button
            whileHover={{ x: 5 }}
            className="text-cyan-400 text-sm font-medium flex items-center gap-1"
          >
            Read More
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.article>
  )
}

export function ArticlesSection() {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const filteredArticles = activeCategory === 'all'
    ? articles
    : articles.filter((a) => a.category === activeCategory)

  return (
    <section id="articles" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Cybersecurity Articles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bug bounty findings, security research, and tools from my journey in cybersecurity
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                  : 'bg-card/50 text-foreground/70 hover:text-foreground border border-border'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}