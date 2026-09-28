import { Link } from "react-router-dom";
import { Megaphone } from "lucide-react";

export default function NoticeTicker({ items }) {
  const loop = [...items, ...items];

  return (
    <div className="flex overflow-hidden rounded-2xl border border-iiti-mist bg-white shadow-lg shadow-iiti-navy/10">
      <div className="flex shrink-0 items-center gap-2 bg-iiti-navy px-4 text-xs font-bold uppercase tracking-[0.14em] text-iiti-gold">
        <Megaphone className="h-4 w-4" aria-hidden="true" />
        <span className="hidden sm:inline">Announcements</span>
      </div>
      <div className="relative flex-1 overflow-hidden py-3">
        <div className="animate-marquee flex w-max items-center gap-10 pr-10">
          {loop.map((item, index) => (
            <Link
              key={`${item.to}-${index}`}
              to={item.to}
              className="whitespace-nowrap text-sm text-iiti-ink transition-colors hover:text-iiti-royal"
            >
              <span className="mr-2 text-iiti-gold" aria-hidden="true">
                ●
              </span>
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
