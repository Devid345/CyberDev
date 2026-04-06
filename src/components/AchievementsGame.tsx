'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { achievements, rarityColors, type Achievement } from '@/data/achievements'

function AchievementCard({ achievement, index }: { achievement: Achievement; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const colors = rarityColors[achievement.rarity]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative group cursor-pointer ${achievement.unlocked ? '' : 'opacity-60'}`}
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.05 : 1,
          rotateY: isHovered ? 5 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300 }}
        className={`relative overflow-hidden rounded-xl border-2 ${colors.border} ${achievement.unlocked ? 'bg-gradient-to-br' : 'bg-gray-800/50'} from-opacity-60 to-opacity-80 p-4 backdrop-blur-sm`}
      >
        {achievement.unlocked && (
          <motion.div
            animate={{
              opacity: isHovered ? 0.3 : 0,
            }}
            className={`absolute inset-0 bg-gradient-to-r ${colors.bg} blur-xl`}
          />
        )}
        
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg}`} style={{ opacity: 0.1 }} />

        <div className="relative">
          <motion.div
            animate={{
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
            }}
            transition={{ duration: 0.5 }}
            className="text-5xl mb-3 text-center"
          >
            {achievement.unlocked ? achievement.icon : '🔒'}
          </motion.div>

          <motion.h3
            animate={{ color: isHovered && achievement.unlocked ? '#00ffff' : '#ffffff' }}
            className="text-lg font-bold text-center mb-2"
          >
            {achievement.title}
          </motion.h3>

          <p className="text-sm text-muted-foreground text-center mb-3">
            {achievement.description}
          </p>

          {achievement.progress !== undefined && achievement.maxProgress && (
            <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(achievement.progress! / achievement.maxProgress!) * 100}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className={`h-full bg-gradient-to-r ${colors.bg}`}
              />
            </div>
          )}

          <div className="flex justify-center mt-3">
            <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${colors.bg} text-white`}>
              {achievement.rarity.toUpperCase()}
            </span>
          </div>
        </div>

        {achievement.unlocked && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

function StatsPanel() {
  const stats = [
    { label: 'Total Achievements', value: achievements.filter(a => a.unlocked).length, total: achievements.length },
    { label: 'Legendary', value: achievements.filter(a => a.unlocked && a.rarity === 'legendary').length, icon: '⚡' },
    { label: 'Epic', value: achievements.filter(a => a.unlocked && a.rarity === 'epic').length, icon: '💎' },
    { label: 'Rare', value: achievements.filter(a => a.unlocked && a.rarity === 'rare').length, icon: '🎯' },
    { label: 'Common', value: achievements.filter(a => a.unlocked && a.rarity === 'common').length, icon: '✨' },
  ]

      const progressTotal = stats[0].total ?? 1
      const progressWidth = (stats[0].value / progressTotal) * 100

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-6 mb-8"
        >
          <h3 className="text-xl font-bold mb-4 text-center">Achievement Progress</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {stat.value}{stat.total && `/${stat.total}`}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.icon && <span className="mr-1">{stat.icon}</span>}
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 relative h-4 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressWidth}%` }}
              transition={{ duration: 1.5 }}
              className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white"
            >
              {Math.round(progressWidth)}% Complete
            </motion.div>
          </div>
        </motion.div>
      )
}

export function AchievementsGame() {
  const [filter, setFilter] = useState<'all' | 'unlocked' | 'locked'>('all')

  const filteredAchievements = achievements.filter(a => {
    if (filter === 'unlocked') return a.unlocked
    if (filter === 'locked') return !a.unlocked
    return true
  })

  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Achievement Unlocked
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track your cybersecurity journey achievements and unlock new badges
          </p>
        </motion.div>

        <StatsPanel />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-8"
        >
          {['all', 'unlocked', 'locked'].map((f) => (
            <motion.button
              key={f}
              onClick={() => setFilter(f as typeof filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === f
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                  : 'bg-card/50 border border-border hover:border-cyan-500/50'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredAchievements.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}