'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  User, Headphones, ToggleRight, Target, MessageSquare, Heart,
  Inbox, ClipboardList, Database, CheckCircle2, ArrowRight, X, ExternalLink
} from 'lucide-react'
import Container from '@/components/ui/Container'

// Link to the full case-study document (lives in /public/kentlands/).
// Use the explicit index.html so it resolves identically in local dev and on Netlify.
const BUILD_URL = '/kentlands/index.html'

type Step = { Icon: React.ComponentType<{ className?: string }>; t: string; s: string }
type Accent = 'blue' | 'green' | 'purple'
type Person = { id: string; label: string; role: string; Icon: React.ComponentType<{ className?: string }>; accent: Accent; steps: Step[] }

const PEOPLE: Person[] = [
  {
    id: 'patient', label: 'Patient', role: 'looking for help', Icon: User, accent: 'blue',
    steps: [
      { Icon: User, t: '“I need someone for my teen.”', s: 'A few plain questions — no jargon, no forms to wrestle.' },
      { Icon: Target, t: 'Matched to the right clinician', s: 'Best fit across 95+ signals · welcoming new clients.' },
      { Icon: MessageSquare, t: 'Connected in one tap', s: 'A text or a HIPAA-safe form — whichever they prefer.' },
      { Icon: Heart, t: 'In care — never lost', s: 'Every step is tracked; the follow-up happens on its own.' },
    ],
  },
  {
    id: 'coordinator', label: 'Coordinator', role: 'on the front line', Icon: Headphones, accent: 'green',
    steps: [
      { Icon: Inbox, t: 'An inquiry comes in', s: 'Captured instantly as a contact with full history.' },
      { Icon: Headphones, t: 'Guided through the call', s: '17 call flows + a values “North Star” on every call.' },
      { Icon: ClipboardList, t: 'The call note writes itself', s: 'Every answer captured as the conversation happens.' },
      { Icon: Database, t: 'One-click handoff', s: 'Straight into the CRM — stamped, staged, and routed.' },
    ],
  },
  {
    id: 'clinician', label: 'Clinician', role: 'doing the work', Icon: ToggleRight, accent: 'purple',
    steps: [
      { Icon: ToggleRight, t: 'Tap “Open”', s: 'From a panel docked right beside the EHR.' },
      { Icon: Database, t: 'Synced to the record', s: 'No spreadsheet, no admin in the loop.' },
      { Icon: Target, t: 'Live in the matcher', s: 'New-client referrals start flowing — within minutes.' },
      { Icon: CheckCircle2, t: 'Right-fit clients arrive', s: 'Matched to exactly the people they serve best.' },
    ],
  },
]

const ACCENT: Record<Accent, { text: string; chip: string; dot: string; ring: string; iconbg: string }> = {
  blue:   { text: 'text-blue-primary',     chip: 'bg-blue-primary/15 text-blue-primary',       dot: 'bg-blue-primary',     ring: 'border-blue-primary/60 bg-blue-primary/10',     iconbg: 'bg-blue-primary/15 text-blue-primary' },
  green:  { text: 'text-green-primary',    chip: 'bg-green-primary/15 text-green-primary',      dot: 'bg-green-primary',    ring: 'border-green-primary/60 bg-green-primary/10',   iconbg: 'bg-green-primary/15 text-green-primary' },
  purple: { text: 'text-purple-electric',  chip: 'bg-purple-electric/15 text-purple-electric',  dot: 'bg-purple-electric',  ring: 'border-purple-electric/60 bg-purple-electric/10', iconbg: 'bg-purple-electric/15 text-purple-electric' },
}

export default function ShowcaseSection() {
  const [sel, setSel] = useState(0)
  const [userTook, setUserTook] = useState(false)
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  // Open the full case study in an in-page modal: lock scroll, close on Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [open])

  // When the section first scrolls into view, quickly fan through all three
  // people so visitors realize it's interactive, then settle into a slow rotate.
  useEffect(() => {
    if (!inView || userTook) return
    let i = 0
    let timer: ReturnType<typeof setTimeout>
    const tick = () => {
      if (userTook) return
      i++
      setSel(i % PEOPLE.length)
      timer = setTimeout(tick, i < 4 ? 760 : 5200)
    }
    timer = setTimeout(tick, 760)
    return () => clearTimeout(timer)
  }, [inView, userTook])

  const pick = (i: number) => { setSel(i); setUserTook(true) }
  const person = PEOPLE[sel]
  const ac = ACCENT[person.accent]

  return (
    <section id="featured-build" className="relative py-24 sm:py-32 overflow-hidden">
      {/* soft backdrop glow */}
      <div className="absolute inset-0 supernova-bg opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-transparent to-dark-bg" />

      <Container className="relative z-10">
        {/* heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-primary/30 bg-blue-primary/10 backdrop-blur-sm mb-6">
            <span className="text-sm text-blue-primary font-medium">Featured build · Kentlands Psychotherapy</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Systems that don&apos;t lose people
          </h2>
          <p className="text-lg text-gray-medium leading-relaxed">
            In six months I rebuilt a therapy practice&apos;s entire operation into one connected system.
            The point was never the software &mdash; it was the person on the other end. Pick one and follow their path.
          </p>

          {/* stat chips */}
          <div className="flex flex-wrap justify-center gap-3 mt-7">
            {[['726', 'inquiries tracked'], ['70+', 'features built'], ['$0', 'added infrastructure']].map(([n, l]) => (
              <span key={l} className="inline-flex items-baseline gap-2 rounded-full border border-dark-border bg-dark-surface/70 px-4 py-2">
                <b className="font-display text-white text-lg">{n}</b>
                <span className="text-sm text-gray-medium">{l}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* interactive panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-3xl mx-auto rounded-2xl border border-dark-border bg-dark-surface/60 backdrop-blur-sm p-5 sm:p-7 shadow-2xl"
        >
          {/* person selector */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-7">
            {PEOPLE.map((p, i) => {
              const pac = ACCENT[p.accent]
              const on = i === sel
              const PIcon = p.Icon
              return (
                <button
                  key={p.id}
                  onClick={() => pick(i)}
                  className={`rounded-xl border px-2 py-3 sm:py-4 text-center transition-all duration-300 ${
                    on ? `${pac.ring} text-white scale-[1.03]` : 'border-dark-border bg-dark-bg/40 text-gray-medium hover:text-white hover:border-gray-dark'
                  }`}
                >
                  <PIcon className={`w-6 h-6 mx-auto mb-1.5 ${on ? pac.text : ''}`} />
                  <div className="text-sm font-semibold">{p.label}</div>
                  <div className="hidden sm:block text-xs opacity-70 mt-0.5">{p.role}</div>
                </button>
              )
            })}
          </div>

          {/* journey timeline */}
          <AnimatePresence mode="wait">
            <motion.div key={person.id} className="relative pl-2">
              {person.steps.map((step, idx) => {
                const SIcon = step.Icon
                const last = idx === person.steps.length - 1
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.12 }}
                    className="relative flex gap-4 pl-7 pb-5 last:pb-0"
                  >
                    {/* connector + dot */}
                    {!last && <span className="absolute left-[7px] top-6 bottom-0 w-px bg-dark-border" />}
                    <span className={`absolute left-0 top-1.5 w-4 h-4 rounded-full ring-4 ring-dark-surface ${ac.dot}`} />
                    {/* card */}
                    <div className="flex-1 flex items-start gap-3 rounded-xl border border-dark-border bg-dark-bg/40 px-4 py-3">
                      <span className={`shrink-0 w-9 h-9 rounded-lg grid place-items-center ${ac.iconbg}`}>
                        <SIcon className="w-5 h-5" />
                      </span>
                      <div>
                        <div className="text-white font-semibold text-sm sm:text-[15px]">{step.t}</div>
                        <div className="text-gray-medium text-sm mt-0.5 leading-relaxed">{step.s}</div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-dark-border pt-6">
            <span className="text-sm text-gray-medium">An interactive look at six months of work.</span>
            <button
              onClick={() => setOpen(true)}
              className="group inline-flex items-center px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-blue-primary to-green-primary transition-all duration-300 hover:shadow-lg hover:shadow-blue-primary/25 hover:scale-105"
            >
              Explore the full build
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </Container>

      {/* Full case study, in an in-page modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-6xl h-[92vh] flex flex-col rounded-2xl overflow-hidden border border-dark-border bg-dark-bg shadow-2xl"
            >
              <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 border-b border-dark-border bg-dark-surface/80">
                <span className="text-sm font-medium text-white truncate">Kentlands Psychotherapy &mdash; The Build</span>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={BUILD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs text-gray-medium hover:text-white transition-colors"
                  >
                    Open in new tab <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                    className="w-9 h-9 grid place-items-center rounded-lg border border-dark-border text-gray-medium hover:text-white hover:border-gray-dark transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <iframe
                src={BUILD_URL}
                title="Kentlands Psychotherapy — The Build"
                className="flex-1 w-full bg-dark-bg"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
