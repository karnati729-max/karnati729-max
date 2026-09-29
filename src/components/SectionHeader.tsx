interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-6" />
      <p className="text-slate-400 text-base sm:text-lg leading-relaxed">{subtitle}</p>
    </div>
  );
}
