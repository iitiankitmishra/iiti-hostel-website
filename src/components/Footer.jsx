import { Link } from "react-router-dom";
import { HeartPulse, Mail, MapPin, Phone, Shield } from "lucide-react";
import { footerQuickLinks, keyContacts } from "../data/navigation";

function ContactLine({ label, phone, email }) {
  return (
    <div>
      <p className="font-semibold text-white">{label}</p>
      {phone && (
        <a className="mt-1 flex items-start gap-2 text-sm text-slate-300 hover:text-iiti-gold" href={`tel:${phone.replace(/[^\d+]/g, "")}`}>
          <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {phone}
        </a>
      )}
      {email && (
        <a className="mt-1 flex items-start gap-2 break-all text-sm text-slate-300 hover:text-iiti-gold" href={`mailto:${email}`}>
          <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {email}
        </a>
      )}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-iiti-navy text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/iiti-mark.svg" alt="" width="44" height="44" className="h-11 w-11" />
            <p className="font-serif text-xl text-white">IITI Hostels</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            Halls of Residence at the Indian Institute of Technology Indore. A fully residential campus where students of every programme live, dine, and work together.
          </p>
          <p className="mt-4 flex items-start gap-2 text-sm text-slate-300">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-iiti-gold" aria-hidden="true" />
            <span>
              Hall of Residence Office
              <br />
              IIT Indore, Simrol, Khandwa Road
              <br />
              Indore 453552, Madhya Pradesh
            </span>
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-iiti-gold">Quick links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {footerQuickLinks.map((link) => (
              <li key={link.to}>
                <Link className="text-slate-300 hover:text-white" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-iiti-gold">Key contacts</h2>
          <div className="mt-4 space-y-4">
            <ContactLine {...keyContacts.gs} />
            <ContactLine {...keyContacts.studentAffairs} />
            <ContactLine {...keyContacts.chiefWarden} />
            <ContactLine {...keyContacts.mess} />
            <ContactLine label="Security desk" phone={keyContacts.securityDesk.phone} email={keyContacts.securityDesk.email} />
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-iiti-gold">Emergency & support</h2>
          <div className="mt-4 space-y-3">
            <a
              href="tel:+916265224771"
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:border-iiti-gold/50"
            >
              <Shield className="mt-0.5 h-5 w-5 text-iiti-gold" aria-hidden="true" />
              <span>
                <span className="block text-sm font-semibold text-white">24/7 security hotline</span>
                <span className="text-sm text-iiti-gold">{keyContacts.securityDesk.phone}</span>
                <span className="mt-1 block text-xs text-slate-400">Control room {keyContacts.securityRoom.phone}</span>
              </span>
            </a>
            <a
              href="tel:07316603571"
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:border-iiti-gold/50"
            >
              <HeartPulse className="mt-0.5 h-5 w-5 text-iiti-gold" aria-hidden="true" />
              <span>
                <span className="block text-sm font-semibold text-white">Medical health centre</span>
                <span className="text-sm text-iiti-gold">{keyContacts.medical.phone}</span>
                <span className="mt-1 block text-xs text-slate-400">{keyContacts.medical.note}</span>
              </span>
            </a>
            <a
              href="tel:7509062832"
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:border-iiti-gold/50"
            >
              <Phone className="mt-0.5 h-5 w-5 text-iiti-gold" aria-hidden="true" />
              <span>
                <span className="block text-sm font-semibold text-white">Ambulance</span>
                <span className="text-sm text-iiti-gold">{keyContacts.ambulance.phone}</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Hall of Residence · Indian Institute of Technology Indore</p>
          <p className="flex gap-4">
            <a className="hover:text-white" href="https://www.iiti.ac.in/home" target="_blank" rel="noreferrer">
              Institute website
            </a>
            <a className="hover:text-white" href="https://hostel.iiti.ac.in/main" target="_blank" rel="noreferrer">
              Hostel directory
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
