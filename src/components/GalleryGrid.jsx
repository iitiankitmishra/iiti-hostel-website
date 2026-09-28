import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Photo from "./Photo";

export default function GalleryGrid({ photos }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return undefined;
    function onKey(event) {
      if (event.key === "Escape") setActive(null);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {photos.map((photo) => (
          <li key={photo.src}>
            <button
              type="button"
              className="group block w-full overflow-hidden rounded-2xl border border-slate-200 bg-iiti-navy text-left shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-iiti-gold"
              onClick={() => setActive(photo)}
            >
              <Photo
                src={photo.src}
                alt={photo.alt}
                className="h-40 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-48"
              />
              <span className="block px-3 py-2 text-xs text-slate-200 sm:text-sm">{photo.alt}</span>
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-iiti-navy/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Close photograph"
            onClick={() => setActive(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <Photo src={active.src} alt={active.alt} className="max-h-[80vh] w-full rounded-xl object-contain" />
            <figcaption className="mt-3 text-center text-sm text-slate-200">{active.alt}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
