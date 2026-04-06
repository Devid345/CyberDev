'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface Skill {
  name: string
  level: number
  color: string
  category: 'security' | 'development' | 'tools' | 'soft'
}

const skills: Skill[] = [
  { name: 'Pentesting', level: 95, color: '#ef4444', category: 'security' },
  { name: 'Bug Bounty', level: 92, color: '#f97316', category: 'security' },
  { name: 'Network Security', level: 88, color: '#eab308', category: 'security' },
  { name: 'Web App Security', level: 90, color: '#84cc16', category: 'security' },
  
  { name: 'React/Next.js', level: 95, color: '#22c55e', category: 'development' },
  { name: 'TypeScript', level: 90, color: '#14b8a6', category: 'development' },
  { name: 'Node.js', level: 85, color: '#06b6d4', category: 'development' },
  { name: 'Python', level: 80, color: '#0ea5e9', category: 'development' },
  
  { name: 'Burp Suite', level: 95, color: '#3b82f6', category: 'tools' },
  { name: 'Metasploit', level: 85, color: '#6366f1', category: 'tools' },
  { name: 'Wireshark', level: 88, color: '#8b5cf6', category: 'tools' },
  { name: 'Git', level: 90, color: '#a855f7', category: 'tools' },
  
  { name: 'Problem Solving', level: 95, color: '#ec4899', category: 'soft' },
  { name: 'Communication', level: 85, color: '#f43f5e', category: 'soft' },
  { name: 'Leadership', level: 80, color: '#f97316', category: 'soft' },
  { name: 'Continuous Learning', level: 98, color: '#eab308', category: 'soft' },
]

const categoryColors: Record<string, string> = {
  'security': 'from-red-500 to-orange-500',
  'development': 'from-green-500 to-emerald-500',
  'tools': 'from-blue-500 to-cyan-500',
  'soft': 'from-pink-500 to-rose-500',
}

function FloatingIcon({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[0.5, 0]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </mesh>
  )
}

function SkillMesh() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <FloatingIcon position={[-2, 1, -1]} color="#ef4444" />
      <FloatingIcon position={[2, -1, 0]} color="#22c55e" />
      <FloatingIcon position={[0, 2, -2]} color="#3b82f6" />
      <FloatingIcon position={[-1, -1, 1]} color="#ec4899" />
    </>
  )
}

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill.name}</span>
        <motion.span
          animate={{ scale: isHovered ? 1.1 : 1 }}
          className="text-muted-foreground"
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-3 bg-card rounded-full overflow-hidden border border-border">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05 + 0.2 }}
          className="h-full rounded-full relative"
          style={{ backgroundColor: skill.color }}
        >
          <motion.div
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            className="absolute inset-0 bg-white/20"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent" />
        </motion.div>
      </div>
    </motion.div>
  )
}

function RadarChart() {
  const categories = [
    { name: 'Security', value: 95 },
    { name: 'Development', value: 90 },
    { name: 'Tools', value: 88 },
    { name: 'Soft Skills', value: 85 },
    { name: 'Research', value: 92 },
  ]
  
  const size = 200
  const center = size / 2
  const radius = size / 2 - 20
  
  const getPoint = (index: number, value: number) => {
    const angle = (index * 2 * Math.PI) / categories.length - Math.PI / 2
    const r = (value / 100) * radius
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    }
  }
  
  const points = categories.map((cat, i) => getPoint(i, cat.value))
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z'
  
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="mx-auto">
      {categories.map((_, i) => {
        const angle = (i * 2 * Math.PI) / categories.length - Math.PI / 2
        const endPoint = {
          x: center + radius * Math.cos(angle),
          y: center + radius * Math.sin(angle),
        }
        return (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={endPoint.x}
            y2={endPoint.y}
            stroke="currentColor"
            strokeOpacity="0.2"
            className="text-foreground"
          />
        )
      })}
      
      {[20, 40, 60, 80, 100].map((level) => (
        <polygon
          key={level}
          points={categories.map((_, i) => {
            const angle = (i * 2 * Math.PI) / categories.length - Math.PI / 2
            const r = (level / 100) * radius
            return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`
          }).join(' ')}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.1"
          className="text-foreground"
        />
      ))}
      
      <motion.polygon
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        points={points.map((p) => `${p.x},${p.y}`).join(' ')}
        fill="url(#gradient)"
        stroke="#00ffff"
        strokeWidth={2}
      />
      
      {categories.map((cat, i) => {
        const angle = (i * 2 * Math.PI) / categories.length - Math.PI / 2
        const labelPoint = getPoint(i, 115)
        return (
          <text
            key={i}
            x={labelPoint.x}
            y={labelPoint.y}
            textAnchor="middle"
            alignmentBaseline="middle"
            className="text-xs fill-foreground"
          >
            {cat.name}
          </text>
        )
      })}
      
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00ffff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0066ff" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function EnhancedSkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  
  const categories = [...new Set(skills.map(s => s.category))]
  const filteredSkills = activeCategory
    ? skills.filter(s => s.category === activeCategory)
    : skills

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <SkillMesh />
        </Canvas>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical and soft skills acquired throughout my career
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap gap-2 mb-8">
              <motion.button
                onClick={() => setActiveCategory(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === null
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-card border border-border hover:border-cyan-500/50'
                }`}
              >
                All
              </motion.button>
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? `bg-gradient-to-r ${categoryColors[cat]} text-white`
                      : 'bg-card border border-border hover:border-cyan-500/50'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </motion.button>
              ))}
            </div>

            <div className="space-y-6">
              {filteredSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
            <RadarChart />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 grid grid-cols-2 gap-4 w-full max-w-xs"
            >
              <div className="text-center p-4 rounded-xl bg-card/50 border border-border">
                <div className="text-3xl font-bold text-cyan-400">50+</div>
                <div className="text-sm text-muted-foreground">Vulnerabilities Found</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card/50 border border-border">
                <div className="text-3xl font-bold text-cyan-400">15+</div>
                <div className="text-sm text-muted-foreground">Hall of Fames</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card/50 border border-border">
                <div className="text-3xl font-bold text-cyan-400">100+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card/50 border border-border">
                <div className="text-3xl font-bold text-cyan-400">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}