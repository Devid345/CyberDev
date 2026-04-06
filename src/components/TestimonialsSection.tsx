'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { testimonials } from '@/data/testimonials'

function TestimonialCard({ testimonial, isActive }: { testimonial: typeof testimonials[0]; isActive: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.9 }}
      transition={{ duration: 0.3 }}
      className={`relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border ${isActive ? 'border-cyan-500/50' : ''} transition-all`}
    >
      <div className="absolute top-4 right-4">
        <svg className="w-10 h-10 text-cyan-500/20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-3.702.812-6.528 2.432-8.476 1.62-1.947 3.873-2.921 6.76-2.921v3.876c-1.916 0-3.334.627-4.257 1.881-.922 1.255-1.383 3.008-1.383 5.259v3.385h4.649v3.387h-7.201zm-14.017 0v-7.391c0-3.702.812-6.528 2.432-8.476 1.62-1.947 3.873-2.921 6.76-2.921v3.876c-1.916 0-3.334.627-4.257 1.881-.922 1.255-1.383 3.008-1.383 5.259v3.385h4.649v3.387h-7.201z" />
        </svg>
      </div>
      
      <div className="mb-6">
        <p className="text-lg text-foreground leading-relaxed">
          &ldquo;{testimonial.content}&rdquo;
        </p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-2xl font-bold text-white">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-foreground">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
        </div>
      </div>
      
      <div className="mt-4 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.svg
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-500'}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </motion.svg>
        ))}
      </div>
    </motion.div>
  )
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            What People Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Testimonials from colleagues and clients
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <TestimonialCard
                testimonial={testimonials[activeIndex]}
                isActive={true}
              />
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500'
                    : 'bg-border hover:bg-cyan-500/50'
                }`}
              />
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <motion.button
              onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-card border border-border hover:border-cyan-500/50 flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-card border border-border hover:border-cyan-500/50 flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}