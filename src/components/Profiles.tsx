import { FileText, ExternalLink } from 'lucide-react';
import { Linkedin, Github, Kaggle } from '@/components/icons';
import { personalInfo } from '@/data/portfolio';
import { SectionHeader } from '@/components/SectionHeader';

const profiles = [
  {
    name: 'LinkedIn',
    description: 'Connect with me professionally and see my career journey.',
    href: personalInfo.linkedin,
    icon: Linkedin,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20 hover:border-blue-400/50',
    glow: 'hover:shadow-blue-500/10',
  },
  {
    name: 'GitHub',
    description: 'Explore my code repositories and open-source contributions.',
    href: personalInfo.github,
    icon: Github,
    color: 'text-slate-300',
    bg: 'bg-slate-700/40',
    border: 'border-slate-600/40 hover:border-slate-400/50',
    glow: 'hover:shadow-slate-500/10',
  },
  {
    name: 'Kaggle',
    description: 'Check out my data science notebooks and competition entries.',
    href: personalInfo.kaggle,
    icon: Kaggle,
    color: 'text-teal-400',
    bg: 'bg-teal-400/10',
    border: 'border-teal-400/20 hover:border-teal-400/50',
    glow: 'hover:shadow-teal-500/10',
  },
  {
    name: 'Resume',
    description: 'Download or view my resume to learn more about my background.',
    href: personalInfo.resume,
    icon: FileText,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20 hover:border-cyan-400/50',
    glow: 'hover:shadow-cyan-500/10',
  },
];

export default function Profiles() {
  return (
    <section id="profiles" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Connect With Me"
          title="Profiles & Resume"
          subtitle="Find me across the platforms where I share my work and journey."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile) => {
            const Icon = profile.icon;
            const isResume = profile.name === 'Resume';

            return (
              <a
                key={profile.name}
                href={profile.href}
                {...(isResume
                  ? { download: true }
                  : { target: '_blank', rel: 'noopener noreferrer' })}
                className={`group bg-slate-800/50 rounded-2xl p-6 border ${profile.border} hover:shadow-xl ${profile.glow} transition-all duration-300 hover:scale-[1.03] flex flex-col items-center text-center`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${profile.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-8 h-8 ${profile.color}`} />
                </div>

                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                  {profile.name}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {profile.description}
                </p>

                <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${profile.color}`}>
                  {isResume ? 'Download' : 'Visit'}
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
