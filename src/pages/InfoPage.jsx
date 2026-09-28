import { Link, NavLink, useParams } from "react-router-dom";
import { Printer } from "lucide-react";
import ComplaintForm from "../components/ComplaintForm";
import GalleryGrid from "../components/GalleryGrid";
import PageBanner from "../components/PageBanner";
import Photo from "../components/Photo";
import { findNavGroup } from "../data/navigation";
import { galleryPhotos, getPage } from "../data/pages";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function InfoPage({ section }) {
  const { slug } = useParams();
  const page = getPage(section, slug);
  useDocumentTitle(page?.title ?? "Page not found");

  if (!page) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="font-serif text-4xl text-iiti-navy">Page not found</h1>
        <Link to="/" className="mt-6 inline-flex text-sm font-semibold text-iiti-royal">
          Back to home
        </Link>
      </div>
    );
  }

  const group = findNavGroup(`/${section}/${slug}`);

  return (
    <div>
      <PageBanner eyebrow={page.eyebrow} title={page.title} text={page.intro} />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[240px_1fr]">
        <aside className="no-print h-fit rounded-2xl border border-slate-200 bg-white p-4 lg:sticky lg:top-36">
          <p className="text-xs font-bold uppercase tracking-wider text-iiti-gold-ink">{group?.label ?? page.eyebrow}</p>
          <ul className="mt-3 space-y-1">
            {(group?.children ?? []).map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-sm ${
                      isActive ? "bg-iiti-navy font-semibold text-white" : "text-iiti-ink hover:bg-iiti-mist"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </aside>

        <article className="space-y-8">
          {page.image && (
            <Photo src={page.image.src} alt={page.image.alt} className="h-64 w-full rounded-2xl object-cover sm:h-80" />
          )}

          {page.contacts && (
            <ul className="grid gap-3 sm:grid-cols-2">
              {page.contacts.map((contact) => (
                <li key={contact.label} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-iiti-gold-ink">{contact.label}</p>
                  {contact.href ? (
                    <a className="mt-1 block font-semibold text-iiti-navy hover:text-iiti-royal" href={contact.href}>
                      {contact.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-semibold text-iiti-navy">{contact.value}</p>
                  )}
                </li>
              ))}
            </ul>
          )}

          {page.sections?.map((block) => (
            <section key={block.heading}>
              <h2 className="font-serif text-2xl text-iiti-navy">{block.heading}</h2>
              {block.body && <p className="mt-3 leading-relaxed text-iiti-ink">{block.body}</p>}
              {block.bullets && (
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-iiti-ink">
                  {block.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {page.events && (
            <ul className="grid gap-4 md:grid-cols-3">
              {page.events.map((event) => (
                <li key={event.title} className="rounded-2xl bg-iiti-navy p-5 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-iiti-gold">{event.date}</p>
                  <h3 className="mt-2 font-serif text-xl">{event.title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{event.venue}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200">{event.detail}</p>
                </li>
              ))}
            </ul>
          )}

          {page.gallery && <GalleryGrid photos={galleryPhotos} />}

          {page.printable && (
            <section className="print-sheet rounded-2xl border border-dashed border-iiti-gold bg-white p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-serif text-2xl text-iiti-navy">Printable blank</h2>
                <button
                  type="button"
                  className="no-print inline-flex items-center gap-2 rounded-full bg-iiti-navy px-4 py-2 text-sm font-semibold text-white"
                  onClick={() => window.print()}
                >
                  <Printer className="h-4 w-4" aria-hidden="true" />
                  Print form
                </button>
              </div>
              <p className="mt-2 text-sm text-iiti-muted">Hall of Residence, IIT Indore · {page.title}</p>
              <div className="mt-4 space-y-4">
                {page.printable.fields.map((field) => (
                  <div key={field}>
                    <p className="text-sm font-semibold text-iiti-navy">{field}</p>
                    <div className="mt-2 h-10 border-b border-slate-300" />
                  </div>
                ))}
              </div>
            </section>
          )}

          {page.formCategory && (
            <div className="no-print">
              <h2 className="mb-3 font-serif text-2xl text-iiti-navy">Write to the office</h2>
              <ComplaintForm initialCategory={page.formCategory} />
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
