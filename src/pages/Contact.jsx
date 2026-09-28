import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { keyContacts } from "../data/navigation";
import useDocumentTitle from "../hooks/useDocumentTitle";

const fieldClass =
  "mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-iiti-royal focus:ring-2 focus:ring-iiti-gold/40";

export default function Contact() {
  useDocumentTitle("Contact us");
  const [draft, setDraft] = useState(null);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const topic = data.get("topic")?.toString().trim();
    const message = data.get("message")?.toString().trim();
    if (!name || !email || !message) {
      setError("Name, email, and message are required.");
      setDraft(null);
      return;
    }
    setError("");
    const body = `From: ${name} <${email}>\n\n${message}`;
    setDraft(`mailto:hostel@iiti.ac.in?subject=${encodeURIComponent(topic || "Hall of Residence enquiry")}&body=${encodeURIComponent(body)}`);
  }

  return (
    <div>
      <PageBanner
        eyebrow="Contact us"
        title="Hall of Residence Office"
        text="IIT Indore, Simrol, Khandwa Road, Indore 453552. For a live emergency, call security or the health centre before you write."
      />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <address className="rounded-2xl bg-iiti-navy p-6 not-italic text-white">
            <p className="flex items-start gap-2 text-sm leading-relaxed">
              <MapPin className="mt-0.5 h-4 w-4 text-iiti-gold" aria-hidden="true" />
              Hall of Residence Office
              <br />
              Indian Institute of Technology Indore
              <br />
              Simrol, Khandwa Road
              <br />
              Indore 453552, Madhya Pradesh
            </p>
            <a className="mt-4 flex items-center gap-2 text-sm hover:text-iiti-gold" href="tel:07316603468">
              <Phone className="h-4 w-4 text-iiti-gold" aria-hidden="true" />
              {keyContacts.hallOffice.phone}
            </a>
            <a className="mt-2 flex items-center gap-2 text-sm hover:text-iiti-gold" href="mailto:hostel@iiti.ac.in">
              <Mail className="h-4 w-4 text-iiti-gold" aria-hidden="true" />
              hostel@iiti.ac.in
            </a>
            <a
              className="mt-5 inline-flex text-sm font-semibold text-iiti-gold hover:underline"
              href="https://www.google.com/maps/search/?api=1&query=IIT+Indore+Simrol+Khandwa+Road"
              target="_blank"
              rel="noreferrer"
            >
              Open campus location
            </a>
          </address>

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {[
              keyContacts.chiefWarden,
              keyContacts.studentAffairs,
              keyContacts.gs,
              keyContacts.mess,
              keyContacts.securityDesk,
              { label: keyContacts.medical.label, phone: keyContacts.medical.phone },
              keyContacts.ambulance,
            ].map((item) => (
              <li key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-iiti-navy">{item.label}</p>
                {item.phone && <p className="mt-1 text-sm text-iiti-ink">{item.phone}</p>}
                {item.email && (
                  <a className="mt-1 block break-all text-sm text-iiti-royal" href={`mailto:${item.email}`}>
                    {item.email}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" noValidate>
          <h2 className="font-serif text-2xl text-iiti-navy">Write to the hall office</h2>
          <p className="mt-2 text-sm text-iiti-muted">
            This prepares an email to hostel@iiti.ac.in. It does not store the message on the website.
          </p>
          <div className="mt-5 grid gap-4">
            <label className="text-sm font-medium text-iiti-navy">
              Name
              <input name="name" className={fieldClass} autoComplete="name" />
            </label>
            <label className="text-sm font-medium text-iiti-navy">
              Email
              <input name="email" type="email" className={fieldClass} autoComplete="email" />
            </label>
            <label className="text-sm font-medium text-iiti-navy">
              Topic
              <input name="topic" className={fieldClass} placeholder="Allotment, mess, maintenance..." />
            </label>
            <label className="text-sm font-medium text-iiti-navy">
              Message
              <textarea name="message" rows={5} className={fieldClass} />
            </label>
          </div>
          {error && <p className="mt-3 text-sm text-red-700">{error}</p>}
          <button type="submit" className="mt-5 rounded-full bg-iiti-gold px-5 py-2.5 text-sm font-bold text-iiti-navy">
            Prepare email
          </button>
          {draft && (
            <a href={draft} className="ml-3 inline-flex text-sm font-semibold text-iiti-royal hover:underline">
              Open email draft
            </a>
          )}
        </form>
      </div>
    </div>
  );
}
