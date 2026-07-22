'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { Network, ArrowRight, X, ExternalLink, ShieldCheck } from 'lucide-react'

// Pretty URL for the human-facing "open full page" links (Netlify serves the directory index).
const BRIEF_URL = '/care-console/'
// Explicit file path for the <iframe> so it resolves on every host (some dev servers don't map a
// directory request to index.html the way the production CDN does).
const BRIEF_SRC = '/care-console/index.html'

export default function CareConsoleModule() {
  const [open, setOpen] = useState(false)
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  // Lock body scroll + close on Escape while the modal is open, and move focus to Close.
  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    closeBtnRef.current?.focus()
    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const tags = ['Care coordination', 'Nonprofit-built', 'Live pilot', 'PHI-safe by design']

  return (
    <section id="care-console" className="py-20 relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-dark-border bg-dark-surface/50 backdrop-blur-s p-6 sm:p-10 group hover:border-blue-primary/30 transition-all duration-300"
        >
          {/* soft ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br from-blue-primary/20 to-green-primary/20 blur-3xl"
          />

          <div className="relative">
            <p className="text-sm font-semibold tracking-widest uppercase text-blue-primary mb-3">
              Love is a Habit &middot; Flagship Initiative
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              The Care Coordination Console
            </h2>
            <p className="text-base sm:text-lg text-gray-medium max-w-3xl leading-relaxed mb-6">
              A platform I&rsquo;m building to fix how people find mental-health care &mdash; connecting crisis
              lines, practices, and doctors so no one falls through the cracks. It&rsquo;s free for every
              practice, and identifiable client data never touches our servers.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs rounded-full border border-green-primary/30 bg-green-primary/10 text-green-primary"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-lg font-medium px-6 py-3 text-base bg-gradient-to-r from-blue-primary to-green-primary text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-primary/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-primary focus:ring-offset-2 focus:ring-offset-dark-bg"
                aria-haspopup="dialog"
              >
                <Network className="w-5 h-5" />
                View the executive brief
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={BRIEF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-light hover:text-blue-primary transition-colors font-medium"
              >
                Open full page
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Pop-up scrollable module. No AnimatePresence: React unmounts instantly on close, so the
          overlay can never get stuck (entrance animation only — an instant close is fine UX). */}
      {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-s"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="The Care Coordination Console — executive summary"
          >
            <motion.div
              className="relative w-full max-w-5xl h-[90vh] flex flex-col rounded-xl overflow-hidden border border-dark-border bg-dark-surface shadow-2xl"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 0.61, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* header bar */}
              <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 border-b border-dark-border bg-dark-bg/60 flex-shrink-0">
                <div className="flex items-center gap-2 min-w-0 text-gray-light">
                  <ShieldCheck className="w-4 h-4 text-green-primary flex-shrink-0" />
                  <span className="font-display font-semibold text-sm sm:text-base truncate">
                    The Care Coordination Console
                  </span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                  <a
                    href={BRIEF_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs sm:text-sm text-gray-light hover:text-blue-primary hover:bg-dark-surface transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="hidden sm:inline">Open full page</span>
                  </a>
                  <button
                    ref={closeBtnRef}
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-gray-light hover:text-white hover:bg-dark-surface transition-colors focus:outline-none focus:ring-2 focus:ring-blue-primary"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* scrollable brief */}
              <iframe
                src={BRIEF_SRC}
                title="The Care Coordination Console — executive summary"
                className="flex-1 w-full border-0 bg-white"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        )}
    </section>
  )
}
