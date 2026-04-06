'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'React/Next.js', level: 95, color: 'from-cyan-400 to-blue-500' },
  { name: 'TypeScript', level: 90, color: 'from-blue-400 to-indigo-500' },
  { name: 'Node.js', level: 85, color: 'from-green-400 to-emerald-500' },
  { name: 'Python', level: 80, color: 'from-yellow-400 to-orange-500' },
  { name: 'Web Security', level: 88, color: 'from-red-400 to-pink-500' },
  { name: 'Bug Bounty', level: 85, color: 'from-purple-400 to-pink-500' },
  { name: 'Three.js/WebGL', level: 75, color: 'from-pink-400 to-rose-500' },
  { name: 'Machine Learning', level: 70, color: 'from-orange-400 to-red-500' },
]

const stats = [
  { value: '50+', label: 'Bugs Found' },
  { value: '10+', label: 'Hall of Fames' },
  { value: '100+', label: 'Articles Written' },
  { value: '1M+', label: 'Lines of Code' },
]

function SkillBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="mb-4"
    >
      <div className="flex justify-between mb-2">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-3 bg-card rounded-full overflow-hidden border border-border">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className={`h-full bg-gradient-to-r ${color} rounded-full relative`}
        >
          <span className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate security researcher and developer
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m an AI-powered developer and cybersecurity enthusiast who loves breaking things 
                (ethically) and building them back better. My journey started with curiosity about 
                how systems work and evolved into a passion for securing them.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a bug bounty hunter, I&apos;ve discovered vulnerabilities in major platforms and 
                contributed to making the internet safer. I believe in responsible disclosure 
                and sharing knowledge with the community.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I&apos;m not hunting bugs or coding, you&apos;ll find me writing articles, 
                contributing to open-source projects, or exploring new security tools and techniques.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-card/50 border border-border"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">Skills & Expertise</h3>
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} {...skill} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}