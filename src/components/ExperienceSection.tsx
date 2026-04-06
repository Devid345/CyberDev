'use client'

import { motion } from 'framer-motion'
import { experiences, type Experience } from '@/data/experience'

const typeColors: Record<string, string> = {
  'work': 'from-cyan-500 to-blue-500',
  'education': 'from-purple-500 to-pink-500',
  'certification': 'from-green-500 to-emerald-500',
}

const typeBorderColors: Record<string, string> = {
  'work': 'border-cyan-500',
  'education': 'border-purple-500',
  'certification': 'border-green-500',
}

function TimelineCard({ experience, index }: { experience: Experience; index: number }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'} max-lg:flex-col max-lg:items-start`}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`w-full lg:w-1/2 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border ${typeBorderColors[experience.type]} border-2 hover:border-opacity-100 transition-all`}
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{experience.icon}</span>
          <div>
            <span className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${typeColors[experience.type]} text-white`}>
              {experience.type.toUpperCase()}
            </span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
        <p className="text-cyan-400 font-medium mb-1">{experience.company}</p>
        <p className="text-sm text-muted-foreground mb-2">{experience.location} • {experience.period}</p>
        <p className="text-sm text-muted-foreground mb-4">{experience.description}</p>
        
        <div className="space-y-2">
          {experience.achievements.map((achievement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-2"
            >
              <span className="text-cyan-400 mt-0.5">✓</span>
              <span className="text-sm">{achievement}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="hidden lg:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring' }}
          className={`w-5 h-5 rounded-full bg-gradient-to-r ${typeColors[experience.type]} relative z-10`}
        >
          <span className="absolute inset-0 rounded-full bg-inherit animate-ping opacity-75" />
        </motion.div>
        <div className="w-0.5 h-full bg-gradient-to-b from-cyan-500/50 to-transparent" />
      </div>

      <div className="lg:w-1/2 hidden lg:block" />
    </motion.div>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey in cybersecurity and software development
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-green-500 max-lg:hidden" />
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <TimelineCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}