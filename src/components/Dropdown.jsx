import { useEffect, useId, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Sparkles } from "lucide-react";

export default function Dropdown({ label, items, align = "left", badge, spark = false }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const menuId = useId();
  const { pathname } = useLocation();
  const [path, setPath] = useState(pathname);
  const active = items.some((item) => item.to === pathname);

  if (path !== pathname) {
    setPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return undefined;

    function onPointerDown(event) {
      if (!ref.current?.contains(event.target)) setOpen(false);
    }

    function onKeyDown(event) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`flex items-center gap-1 px-2.5 py-3 text-sm font-semibold transition-colors ${
          active || open ? "text-iiti-gold" : "text-white hover:text-iiti-gold"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
        onClick={() => setOpen(true)}
      >
        {spark && <Sparkles className="h-3.5 w-3.5 text-iiti-gold" aria-hidden="true" />}
        <span>{label}</span>
        {badge && (
          <span className="rounded-full bg-iiti-gold px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-iiti-navy">
            {badge}
          </span>
        )}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      <div
        id={menuId}
        role="menu"
        className={`absolute top-full z-50 min-w-64 pt-1 ${align === "right" ? "right-0" : "left-0"} ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="overflow-hidden rounded-xl border border-white/10 bg-white py-1.5 shadow-2xl">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              role="menuitem"
              className={`block px-4 py-2.5 text-sm transition-colors ${
                pathname === item.to
                  ? "bg-iiti-mist font-semibold text-iiti-navy"
                  : "text-iiti-ink hover:bg-iiti-sky hover:text-iiti-royal"
              }`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
