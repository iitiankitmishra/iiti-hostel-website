import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone, UserRound } from "lucide-react";
import Photo from "./Photo";

export default function HostelCard({ hostel }) {
  const label = `${hostel.name}. ${hostel.tagline}. Warden ${hostel.warden.name}. Office ${hostel.officePhone}. Explore webpage.`;

  return (
    <Link
      to={`/hostels/${hostel.id}`}
      aria-label={label}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm outline-none transition duration-300 hover:-translate-y-1 hover:border-iiti-gold/60 hover:shadow-xl hover:shadow-iiti-navy/10 focus-visible:ring-2 focus-visible:ring-iiti-gold"
    >
      <div className="relative h-44 overflow-hidden bg-iiti-navy">
        <Photo
          src={hostel.image.src}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-iiti-navy/50 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-iiti-navy/90 px-2.5 py-1 text-[11px] font-bold tracking-wider text-iiti-gold">
          {hostel.code}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-xl leading-snug text-iiti-navy">{hostel.shortName}</h3>
        <p className="mt-1 text-sm leading-snug text-iiti-muted">{hostel.name}</p>
        <p className="mt-3 text-sm font-semibold text-iiti-royal">{hostel.tagline}</p>
        <p className="mt-1 text-xs uppercase tracking-wider text-iiti-gold-ink">{hostel.capacity}</p>

        <div className="mt-4 space-y-1.5 border-t border-iiti-mist pt-3 text-sm text-iiti-ink sm:hidden">
          <p className="flex items-start gap-2">
            <UserRound className="mt-0.5 h-4 w-4 shrink-0 text-iiti-royal" aria-hidden="true" />
            {hostel.warden.name}
          </p>
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0 text-iiti-royal" aria-hidden="true" />
            {hostel.officePhone}
          </p>
          <p className="flex items-center gap-2 break-all">
            <Mail className="h-4 w-4 shrink-0 text-iiti-royal" aria-hidden="true" />
            {hostel.officeEmail}
          </p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden flex-col justify-end bg-gradient-to-t from-iiti-navy via-iiti-navy/88 to-iiti-navy/35 p-5 text-white opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:flex"
      >
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-iiti-gold">{hostel.code}</p>
        <p className="mt-1 font-serif text-2xl leading-tight">{hostel.shortName}</p>
        <p className="mt-1 text-sm text-slate-200">{hostel.tagline}</p>
        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <UserRound className="mt-0.5 h-4 w-4 shrink-0 text-iiti-gold" />
            <div>
              <dt className="text-[10px] uppercase tracking-wider text-slate-300">Warden</dt>
              <dd>{hostel.warden.name}</dd>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0 text-iiti-gold" />
            <dd>{hostel.officePhone}</dd>
          </div>
          <div className="flex items-center gap-2 break-all">
            <Mail className="h-4 w-4 shrink-0 text-iiti-gold" />
            <dd>{hostel.officeEmail}</dd>
          </div>
        </dl>
        <span className="mt-4 inline-flex w-fit items-center gap-1 rounded-full bg-iiti-gold px-3 py-1.5 text-xs font-bold text-iiti-navy">
          Click to Explore Webpage
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
