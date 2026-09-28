import { Link, useParams } from "react-router-dom";
import { Mail, MapPin, Phone, UserRound } from "lucide-react";
import ComplaintForm from "../components/ComplaintForm";
import FacilityList from "../components/FacilityList";
import GalleryGrid from "../components/GalleryGrid";
import Photo from "../components/Photo";
import { getHostelById, hostels } from "../data/hostels";
import useDocumentTitle from "../hooks/useDocumentTitle";

function ContactCard({ role, name, email, phone }) {
  const dial = phone.split("ext")[0].replace(/[^\d+]/g, "");

  return (
    <li className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-wider text-iiti-gold-ink">{role}</p>
      <p className="mt-1 flex items-start gap-2 font-serif text-lg text-iiti-navy">
        <UserRound className="mt-1 h-4 w-4 shrink-0 text-iiti-royal" aria-hidden="true" />
        {name}
      </p>
      <a className="mt-3 flex items-center gap-2 break-all text-sm hover:text-iiti-royal" href={`mailto:${email}`}>
        <Mail className="h-4 w-4 shrink-0 text-iiti-royal" aria-hidden="true" />
        {email}
      </a>
      <a className="mt-1 flex items-center gap-2 text-sm hover:text-iiti-royal" href={`tel:${dial}`}>
        <Phone className="h-4 w-4 shrink-0 text-iiti-royal" aria-hidden="true" />
        {phone}
      </a>
    </li>
  );
}

export default function HostelDetail() {
  const { hostelId } = useParams();
  const hostel = getHostelById(hostelId);
  useDocumentTitle(hostel ? hostel.shortName : "Hall not found");

  if (!hostel) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="font-serif text-4xl text-iiti-navy">This hall is not on the directory</h1>
        <p className="mt-3 text-iiti-muted">Check the code in the address, or go back to the nine halls.</p>
        <Link to="/#halls" className="mt-6 inline-flex rounded-full bg-iiti-navy px-5 py-2.5 text-sm font-semibold text-white">
          All halls
        </Link>
      </div>
    );
  }

  const others = hostels.filter((item) => item.id !== hostel.id).slice(0, 3);

  return (
    <article>
      <header className="relative min-h-[22rem] bg-iiti-navy text-white">
        <Photo src={hostel.image.src} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-iiti-navy via-iiti-navy/75 to-iiti-navy/35" />
        <div className="relative mx-auto flex min-h-[22rem] max-w-6xl flex-col justify-end px-4 py-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-iiti-gold">
            <Link to="/" className="hover:underline">Home</Link>
            <span aria-hidden="true"> / </span>
            Halls of Residence
          </p>
          <p className="mt-3 text-sm font-bold tracking-[0.16em] text-iiti-gold">{hostel.code}</p>
          <h1 className="mt-1 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">{hostel.name}</h1>
          <p className="mt-3 text-lg text-slate-100">{hostel.tagline}</p>
          <dl className="mt-6 flex flex-wrap gap-3 text-sm">
            <div className="rounded-full bg-white/10 px-3 py-1.5">{hostel.audience}</div>
            <div className="rounded-full bg-white/10 px-3 py-1.5">Capacity {hostel.capacity}</div>
            <div className="rounded-full bg-white/10 px-3 py-1.5">{hostel.warden.name}</div>
          </dl>
        </div>
      </header>

      <div className="border-b border-iiti-mist bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-4 py-3 text-sm font-semibold">
          {[
            ["#about", "About"],
            ["#warden", "Warden"],
            ["#horc", "HORC"],
            ["#desk", "Supervisor"],
            ["#facilities", "Facilities"],
            ["#notices", "Notices"],
            ["#gallery", "Gallery"],
            ["#complaint", "Complaint"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="rounded-full px-3 py-1.5 text-iiti-royal hover:bg-iiti-mist">
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[1fr_300px]">
        <div className="space-y-14">
          <section id="about" className="scroll-mt-36">
            <h2 className="font-serif text-3xl text-iiti-navy">About the hall</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-iiti-ink">
              {hostel.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-iiti-muted">
              <MapPin className="h-4 w-4 text-iiti-royal" aria-hidden="true" />
              IIT Indore, Simrol, Khandwa Road, Indore 453552
            </p>
          </section>

          <section id="warden" className="scroll-mt-36">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-iiti-gold-ink">People · 1</p>
            <h2 className="mt-2 font-serif text-3xl text-iiti-navy">Warden</h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              <ContactCard role="Warden" {...hostel.warden} />
              {hostel.associateWarden && <ContactCard role="Associate Warden" {...hostel.associateWarden} />}
            </ul>
          </section>

          <section id="horc" className="scroll-mt-36">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-iiti-gold-ink">People · 2</p>
            <h2 className="mt-2 font-serif text-3xl text-iiti-navy">HORC</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-iiti-muted">
              Hall Secretary, Sports Secretary, Cultural Secretary, SnT Secretary, and Dining Secretary. These posts are elected each year. Until a name is entered for this session, the card uses the hall office.
            </p>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {hostel.horc.map((member) => (
                <ContactCard key={member.role} {...member} />
              ))}
            </ul>
          </section>

          <section id="desk" className="scroll-mt-36">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-iiti-gold-ink">People · 3</p>
            <h2 className="mt-2 font-serif text-3xl text-iiti-navy">Supervisor & Attendant</h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {hostel.desk.map((member) => (
                <ContactCard key={member.role} {...member} />
              ))}
            </ul>
          </section>

          <section id="facilities" className="scroll-mt-36">
            <h2 className="font-serif text-3xl text-iiti-navy">Facilities</h2>
            <div className="mt-5">
              <FacilityList facilities={hostel.facilities} />
            </div>
          </section>

          <section id="notices" className="scroll-mt-36">
            <h2 className="font-serif text-3xl text-iiti-navy">Notice board</h2>
            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-iiti-royal">Notices</h3>
                <ul className="mt-3 space-y-3">
                  {hostel.notices.map((notice) => (
                    <li key={notice.title} className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-xs font-semibold text-iiti-gold-ink">{notice.date}</p>
                      <p className="mt-1 font-semibold text-iiti-navy">{notice.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-iiti-muted">{notice.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-iiti-royal">Hall events</h3>
                <ul className="mt-3 space-y-3">
                  {hostel.events.map((event) => (
                    <li key={event.title} className="rounded-2xl bg-iiti-navy p-4 text-white">
                      <p className="text-xs font-semibold text-iiti-gold">{event.date} · {event.place}</p>
                      <p className="mt-1 font-semibold">{event.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-200">{event.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="gallery" className="scroll-mt-36">
            <h2 className="font-serif text-3xl text-iiti-navy">Photo gallery</h2>
            <div className="mt-5">
              <GalleryGrid photos={hostel.gallery} />
            </div>
          </section>

          <section id="complaint" className="scroll-mt-36">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="font-serif text-3xl text-iiti-navy">Complaint & feedback</h2>
                <p className="mt-2 max-w-2xl text-sm text-iiti-muted">
                  Send maintenance notes and feedback to {hostel.officeEmail}, or call {hostel.officePhone}.
                </p>
              </div>
            </div>
            <div className="mt-5">
              <ComplaintForm initialCategory="Feedback" initialHostel={hostel.id} />
            </div>
          </section>
        </div>

        <aside className="h-fit space-y-4 lg:sticky lg:top-36">
          <div className="rounded-2xl bg-iiti-navy p-5 text-white">
            <p className="text-xs font-bold uppercase tracking-wider text-iiti-gold">Hall office</p>
            <p className="mt-2 font-serif text-xl">{hostel.shortName}</p>
            <a className="mt-4 flex items-center gap-2 text-sm hover:text-iiti-gold" href={`tel:${hostel.officePhone.replace(/[^\d+]/g, "")}`}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              {hostel.officePhone}
            </a>
            <a className="mt-2 flex items-center gap-2 break-all text-sm hover:text-iiti-gold" href={`mailto:${hostel.officeEmail}`}>
              <Mail className="h-4 w-4" aria-hidden="true" />
              {hostel.officeEmail}
            </a>
            <a
              href="#complaint"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-iiti-gold px-4 py-2.5 text-sm font-bold text-iiti-navy"
            >
              Quick complaint / feedback
            </a>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-iiti-navy">Other halls</p>
            <ul className="mt-3 space-y-2 text-sm">
              {others.map((item) => (
                <li key={item.id}>
                  <Link className="text-iiti-royal hover:text-iiti-navy" to={`/hostels/${item.id}`}>
                    {item.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
}
