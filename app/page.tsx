'use client';

import React, { useState } from 'react';
import {
  Terminal,
  TrendingUp,
  ShieldCheck,
  Server,
  ChevronRight,
  ExternalLink,
  Code2
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import data from '@/app/data/personal_exp.json'
import Footer from './components/footer';
import { BrandIcon } from './components/icons';
import { siRefinedgithub } from 'simple-icons';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const { EXPERIENCE, PROJECTS } = data


const SectionHeader = ({ title, icon: Icon }: { title: string, icon: any }) => (
  <div className="flex items-center gap-3 mb-8 border-b border-fintech-800 pb-4">
    <Icon className="w-5 h-5 text-fintech-500" />
    <h2 className="text-xl font-mono uppercase tracking-wider text-fintech-400">{title}</h2>
  </div>
);

const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("bg-fintech-800/50 border border-fintech-800 p-6 rounded-sm backdrop-blur-sm hover:border-fintech-500/50 transition-colors", className)}>
    {children}
  </div>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-2 py-1 text-xs font-mono text-fintech-400 bg-fintech-500/10 rounded border border-fintech-500/20">
    {children}
  </span>
);

export default function Portfolio() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-12 md:py-24 space-y-24">

      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 text-fintech-400 font-mono text-sm border border-fintech-800 px-3 py-1 rounded-full bg-fintech-900">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fintech-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-fintech-500"></span>
          </span>
          System Status: Online
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
          Building Your Next <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fintech-400 to-fintech-500">
            Application Interface
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
          Founder, Architect, and API Specialist. I bridge the gap between complex financial regulations and scalable code.
          10+ years optimising high throughput systems.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a href="#contact" className="px-6 py-3 bg-fintech-500 text-white font-medium rounded hover:bg-fintech-400 transition-colors">
            Contact Me
          </a>
          <a href="#projects" className="px-6 py-3 border border-fintech-700 text-slate-300 font-medium rounded hover:border-fintech-500 transition-colors">
            View Architecture
          </a>
        </div>
      </section>

      {/* 2. STATS / SPECIALTY GRID */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Years Exp", val: "5+", icon: TrendingUp },
          { label: "APIs Built", val: "10+", icon: Server },
          { label: "Volume", val: "$1M+", icon: ShieldCheck },
          { label: "Uptime", val: "99.9%", icon: Terminal },
        ].map((stat, i) => (
          <Card key={i} className="flex flex-col items-center text-center justify-center py-8">
            <stat.icon className="w-6 h-6 text-fintech-500 mb-2" />
            <span className="text-2xl font-bold text-white font-mono">{stat.val}</span>
            <span className="text-xs text-slate-500 uppercase tracking-widest mt-1">{stat.label}</span>
          </Card>
        ))}
      </section>

      <section>
        <SectionHeader title="Execution Log" icon={Code2} />
        <div className="space-y-6 border-l border-fintech-800 ml-3 pl-8 relative">
          {EXPERIENCE.map((job, i) => (
            <div key={i} className="relative group">

              <div className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-fintech-900 bg-fintech-800 group-hover:bg-fintech-500 transition-colors" />

              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-xl font-semibold text-white group-hover:text-fintech-400 transition-colors">
                  {job.role}
                </h3>
                <span className="font-mono text-sm text-slate-500">{job.period}</span>
              </div>
              <div className="text-fintech-500 font-mono text-sm mb-2">{job.company}</div>
              <p className="text-slate-400 leading-relaxed max-w-3xl">
                {job.desc}
              </p>
            </div>
          ))}
        </div>
      </section>


      <section id="projects">
        <SectionHeader title="System Architecture" icon={Server} />

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => {
            const isExpanded = expandedProject === i;

            return (
              <Card key={i} className={`relative overflow-hidden group transition-all duration-300 ${isExpanded ? 'md:col-span-2' : ''}`}>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-fintech-500" />
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  </div>
                  <Badge>{project.stats}</Badge>
                </div>

                <p className="text-slate-400 mb-4">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs text-slate-500 border border-fintech-800 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Expand Toggle */}
                <button
                  onClick={() => setExpandedProject(isExpanded ? null : i)}
                  className="flex items-center gap-1 text-sm text-fintech-400 hover:text-white transition-colors"
                >
                  {isExpanded ? 'Collapse Specs' : 'View Specs'}
                  <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-fintech-700 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="bg-black/30 p-4 rounded font-mono text-sm text-slate-300">
                      <p className="text-fintech-500 mb-2">// Technical Implementation Details</p>
                      <p>{`> Architecture: ${project.architecture}`}</p>
                      <p>{`> Deployment: ${project.deployment}`}</p>
                      {/* <p>{`> Latency target: `}</p> */}
                      <div className="mt-4 flex gap-4">
                        {project.github_link !== '#' ? <a href={project.github_link} className="flex items-center gap-2 text-white hover:underline"><BrandIcon icon={siRefinedgithub} size={20} className="w-4 h-4" /> Repo (Private)</a> : <></>}
                        {project.live_demo_uri !== "#" ?
                          <a href={project.live_demo_uri} className="flex items-center gap-2 text-white hover:underline"><ExternalLink className="w-4 h-4" /> Live Demo</a> : <></>}
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}