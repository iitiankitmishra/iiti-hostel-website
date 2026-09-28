import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Utensils,
  Wifi,
} from "lucide-react";
import HostelCard from "../components/HostelCard";
import NoticeTicker from "../components/NoticeTicker";
import { hostels } from "../data/hostels";
import { heroSlides } from "../data/media";
import { notices } from "../data/notices";
import useDocumentTitle from "../hooks/useDocumentTitle";

const stats = [
  { icon: Building2, label: "Halls of residence", value: "9" },
  { icon: ShieldCheck, label: "Security cover", value: "24×7" },
  { icon: Utensils, label: "Central dining capacity", value: "3,000" },
  { icon: Wifi, label: "Room internet", value: "24 hrs" },
];

export default function Home() {
  useDocumentTitle("Hall of Residence");
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div>
      <section
        className="relative min-h-[34rem] overflow-hidden bg-iiti-navy text-white"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {heroSlides.map((slide, slideIndex) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slideIndex === index ? slide.alt : ""}
            referrerPolicy="no-referrer"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              slideIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-iiti-navy via-iiti-navy/80 to-iiti-navy/25" />
        <div className="relative mx-auto flex min-h-[34rem] max-w-6xl flex-col justify-center px-4 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-iiti-gold">IIT Indore · Simrol campus</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">Halls of Residence</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-100 sm:text-lg">
            A fully residential institute. Students of every programme live on campus, in halls that run from the Chief Warden’s office down to a warden and a supervisor along with hostel attendent in each block.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#halls"
              className="inline-flex items-center gap-2 rounded-full bg-iiti-gold px-5 py-2.5 text-sm font-bold text-iiti-navy transition hover:bg-[#e3c45a]"
            >
              Explore the halls
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              to="/people"
              className="inline-flex items-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-iiti-gold hover:text-iiti-gold"
            >
              People directory
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-3">
            <button
              type="button"
              className="rounded-full border border-white/20 p-2 hover:border-iiti-gold"
              aria-label="Previous campus photograph"
              onClick={() => setIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length)}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Campus photographs">
              {heroSlides.map((slide, slideIndex) => (
                <button
                  key={slide.src}
                  type="button"
                  role="tab"
                  aria-selected={slideIndex === index}
                  aria-label={`Show photograph ${slideIndex + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    slideIndex === index ? "w-8 bg-iiti-gold" : "w-2.5 bg-white/50"
                  }`}
                  onClick={() => setIndex(slideIndex)}
                />
              ))}
            </div>
            <button
              type="button"
              className="rounded-full border border-white/20 p-2 hover:border-iiti-gold"
              aria-label="Next campus photograph"
              onClick={() => setIndex((current) => (current + 1) % heroSlides.length)}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-8 max-w-6xl px-4">
        <NoticeTicker items={notices} />
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-iiti-gold-ink">Campus life</p>
            <h2 className="mt-2 font-serif text-3xl text-iiti-navy sm:text-4xl">A residential campus, not a set of buildings</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-iiti-ink">
              <p>
                Students from every academic programme live on campus. Alumni often describe the halls as the place where they learned how to share a room, argue a menu, and make friends who outlast a semester. Accommodation is on a sharing basis, except in Jagadish Chandra Bose Hall, where married research students and some staff have a single-room apartment with a small kitchen.
              </p>
              <p>
                The halls are headed together by the Chief Warden, supported by the hostel coordination office. Each hall has its own warden and a supervisor or junior assistant at the desk. Devi Ahilya Hall, with its extension, is the residence for women students. Everyone else among the student blocks lives in shared rooms, including the newer BH-07 hall and P.M. Ajay Hall.
              </p>
              <p>
                Dining is common. The institute asks every resident to eat at the Central Dining Hall, which sits with the academic pods and the library so the walk between a class, a book, and a meal stays short. Three kitchens serve the hall, a student dining committee watches the menu, and a night canteen covers the late hours.
              </p>
            </div>
          </div>
          <aside className="rounded-3xl bg-iiti-navy p-6 text-white shadow-xl">
            <h3 className="font-serif text-2xl">How the halls are run</h3>
            <ul className="mt-4 space-y-4 text-sm leading-relaxed text-slate-200">
              <li>
                <span className="block font-semibold text-iiti-gold">Chief Warden</span>
                <span className="mt-1 block">Dr. Saptarshi Ghosh</span>
                <a className="block break-all hover:text-iiti-gold" href="mailto:chiefwarden@iiti.ac.in">chiefwarden@iiti.ac.in</a>
                <a className="block hover:text-iiti-gold" href="tel:07316603346">0731-6603346</a>
              </li>
              <li>
                <span className="block font-semibold text-iiti-gold">General Secretary (Hostels)</span>
                <span className="mt-1 block">Mr. Badal Singh</span>
                <a className="mt-1 block break-all hover:text-iiti-gold" href="mailto:gs.hostel@iiti.ac.in">gs.hostel@iiti.ac.in</a>
                <a className="block hover:text-iiti-gold" href="tel:07316603468">+91 95985 53276</a>
              </li>
              <li>
                <span className="block font-semibold text-iiti-gold">Around each room</span>
                Wi-Fi, indoor games, a common room, laundry, furniture, CCTV, and a security guard.
              </li>
              <li>
                <span className="block font-semibold text-iiti-gold">Close by</span>
                Bank, post office, utility store, eateries, dining hall, and a salon.
              </li>
            </ul>
          </aside>
        </div>

        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <stat.icon className="h-6 w-6 text-iiti-royal" aria-hidden="true" />
              <dt className="mt-3 text-sm text-iiti-muted">{stat.label}</dt>
              <dd className="font-serif text-3xl text-iiti-navy">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="halls" className="scroll-mt-28 border-t border-iiti-mist bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-iiti-gold-ink">Nine residences</p>
              <h2 className="mt-2 font-serif text-3xl text-iiti-navy sm:text-4xl">Halls of Residence</h2>
              <p className="mt-3 text-iiti-muted">
                Hover a card for the warden and the hall office. Select it to open that hall’s page. On a phone, the office details sit on the card itself.
              </p>
            </div>
            <Link to="/people" className="text-sm font-semibold text-iiti-royal hover:text-iiti-navy">
              All wardens and staff
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {hostels.map((hostel) => (
              <HostelCard key={hostel.id} hostel={hostel} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 lg:grid-cols-2">
        <div className="rounded-3xl border border-red-100 bg-white p-7 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-800">Zero tolerance</p>
          <h2 className="mt-2 font-serif text-3xl text-iiti-navy">Anti-ragging</h2>
          <p className="mt-3 leading-relaxed text-iiti-ink">
            Ragging is treated as a criminal offence. The institute’s anti-ragging committee keeps the halls free of it, and a report to the warden or any hall staff stays confidential.
          </p>
          <Link to="/rules/anti-ragging" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-iiti-royal">
            Read the policy <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-iiti-royal to-iiti-navy p-7 text-white shadow-sm">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-iiti-gold">
            New · Hostel Dazz
          </p>
          <h2 className="mt-2 font-serif text-3xl">Culture, sport, and the hall album</h2>
          <p className="mt-3 leading-relaxed text-slate-200">
            Hall nights, the annual cultural fest, and the inter-hostel championship sit on one calendar, with a photo gallery from across the residences.
          </p>
          <Link
            to="/dazz/events"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-iiti-gold px-4 py-2 text-sm font-bold text-iiti-navy"
          >
            Open Hostel Dazz <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
