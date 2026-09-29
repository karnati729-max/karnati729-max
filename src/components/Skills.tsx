import { Sparkles } from 'lucide-react';
import { skills } from '@/data/portfolio';
import { SectionHeader } from '@/components/SectionHeader';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What I Work With"
          title="Skills"
          subtitle="A collection of skills I've developed through my studies and projects."
        />

        <div className="mt-16 flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {skills.map((skill, i) => (
            <div
              key={skill}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Sparkles className="w-4 h-4 text-cyan-400/70 group-hover:text-cyan-400 transition-colors" />
              <span className="text-white font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
