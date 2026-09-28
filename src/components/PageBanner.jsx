export default function PageBanner({ eyebrow, title, text }) {
  return (
    <div className="relative overflow-hidden bg-iiti-navy text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_42%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:py-14">
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-iiti-gold">{eyebrow}</p>
        )}
        <h1 className="mt-2 max-w-4xl font-serif text-3xl leading-tight sm:text-5xl">{title}</h1>
        {text && <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">{text}</p>}
      </div>
    </div>
  );
}
