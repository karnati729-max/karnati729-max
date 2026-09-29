import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { SectionHeader } from '@/components/SectionHeader';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="My Work"
          title="Projects"
          subtitle="A selection of projects I've built while exploring data science and web development."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-slate-800/50 rounded-2xl p-7 border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <FolderGit2 className="w-6 h-6 text-cyan-400" />
                </div>

                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-slate-700/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                      aria-label={`${project.name} GitHub repository`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-slate-700/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                      aria-label={`${project.name} live demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 rounded-lg bg-slate-700/40 text-slate-400 text-xs font-medium border border-slate-600/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
