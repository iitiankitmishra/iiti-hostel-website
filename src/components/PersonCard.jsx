import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const TITLES = new Set(["Dr.", "Prof.", "Mr.", "Ms.", "Mrs.", "Cdr."]);

function initials(name) {
  const parts = name
    .replace("(Retd.)", "")
    .split(/\s+/)
    .filter((part) => part && !TITLES.has(part));
  const letters = parts.slice(0, 2).map((part) => part[0]);
  return letters.join("").toUpperCase() || "IIT";
}

export default function PersonCard({ person }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-iiti-gold/50 hover:shadow-lg">
      <div className="flex items-start gap-4">
        <div
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-iiti-navy to-iiti-royal font-serif text-lg text-iiti-gold"
          aria-hidden="true"
        >
          {initials(person.name)}
        </div>
        <div className="min-w-0">
          <h3 className="font-serif text-lg leading-snug text-iiti-navy">{person.name}</h3>
          <p className="mt-1 text-sm font-semibold text-iiti-royal">{person.designation}</p>
          <p className="mt-1 text-xs uppercase tracking-wider text-iiti-gold-ink">{person.department}</p>
        </div>
      </div>

      <div className="mt-4 space-y-2 border-t border-iiti-mist pt-4 text-sm">
        <a
          className="flex items-start gap-2 break-all text-iiti-ink hover:text-iiti-royal"
          href={`mailto:${person.email}`}
        >
          <Mail className="mt-0.5 h-4 w-4 shrink-0 text-iiti-royal" aria-hidden="true" />
          {person.email}
        </a>
        <a className="flex items-start gap-2 text-iiti-ink hover:text-iiti-royal" href={`tel:${person.phone.split("ext")[0].replace(/[^\d+]/g, "")}`}>
          <Phone className="mt-0.5 h-4 w-4 shrink-0 text-iiti-royal" aria-hidden="true" />
          <span>
            <span className="sr-only">Office phone </span>
            {person.phone}
          </span>
        </a>
      </div>

      {person.illustrative && (
        <p className="mt-3 text-xs leading-relaxed text-iiti-muted">
          Illustrative office-bearer for this portal. Mail the address above to reach the current council.
        </p>
      )}

      {person.hostelId && (
        <Link
          to={`/hostels/${person.hostelId}`}
          className="mt-4 text-sm font-semibold text-iiti-royal hover:text-iiti-navy"
        >
          Open hall page
        </Link>
      )}
    </article>
  );
}
