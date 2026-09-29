import { GraduationCap, Target, Lightbulb, BookOpen } from 'lucide-react';
import { about, personalInfo } from '@/data/portfolio';
import { SectionHeader } from '@/components/SectionHeader';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get To Know Me"
          title="About Me"
          subtitle="My journey, interests, and aspirations in the world of technology and data."
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {/* Education */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/30 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {about.education.map((edu, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-slate-700">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-slate-900" />
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h4 className="text-white font-semibold">{edu.degree}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400 font-medium">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-cyan-400/80 text-sm font-medium mb-2">{edu.field}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Interests */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/30 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-400/10 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Technical Interests</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {about.technicalInterests.map((interest, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-xl bg-slate-700/50 border border-slate-600/50 text-slate-300 text-sm font-medium hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Career Goals — full width */}
          <div className="lg:col-span-2 bg-gradient-to-br from-slate-800/50 to-slate-800/30 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/30 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-teal-400/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Career Goals</h3>
            </div>

            <p className="text-slate-400 leading-relaxed text-base sm:text-lg">
              {about.careerGoals}
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
              <BookOpen className="w-4 h-4" />
              <span>
                Currently studying <strong className="text-cyan-400">{personalInfo.course}</strong>{' '}
                as part of Team <strong className="text-cyan-400">{personalInfo.team}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
