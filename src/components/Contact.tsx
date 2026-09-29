import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { SectionHeader } from '@/components/SectionHeader';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Let's Talk"
          title="Get In Touch"
          subtitle="Have a question, opportunity, or just want to say hello? I'd love to hear from you."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {/* Email card */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="group bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300 text-center flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-white font-semibold mb-1">Email</h3>
            <p className="text-slate-400 text-sm break-all">{personalInfo.email}</p>
          </a>

          {/* LinkedIn card */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-400/40 transition-all duration-300 text-center flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-xl bg-blue-400/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Linkedin className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-white font-semibold mb-1">LinkedIn</h3>
            <p className="text-slate-400 text-sm">Let's connect</p>
          </a>

          {/* GitHub card */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-slate-400/50 transition-all duration-300 text-center flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-xl bg-slate-700/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Github className="w-7 h-7 text-slate-300" />
            </div>
            <h3 className="text-white font-semibold mb-1">GitHub</h3>
            <p className="text-slate-400 text-sm">Check my code</p>
          </a>
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
          >
            <Send className="w-5 h-5" />
            Send Me a Message
          </a>
        </div>
      </div>
    </section>
  );
}
