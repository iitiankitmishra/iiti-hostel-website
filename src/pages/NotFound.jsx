import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Page not found");

  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-iiti-gold-ink">404</p>
      <h1 className="mt-2 font-serif text-4xl text-iiti-navy">This page is not on the portal</h1>
      <p className="mt-3 text-iiti-muted">The address may be outdated. The halls, people directory, and rules are linked from the home page.</p>
      <Link to="/" className="mt-6 inline-flex rounded-full bg-iiti-navy px-5 py-2.5 text-sm font-semibold text-white">
        Back to home
      </Link>
    </div>
  );
}
