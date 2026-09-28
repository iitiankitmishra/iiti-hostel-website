import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Mail, Menu, Phone, Sparkles, X } from "lucide-react";
import Dropdown from "./Dropdown";
import { keyContacts, navItems } from "../data/navigation";

function DesktopLink({ item }) {
  return (
    <NavLink
      to={item.to}
      end={item.to === "/"}
      className={({ isActive }) =>
        `px-2.5 py-3 text-sm font-semibold transition-colors ${
          isActive ? "text-iiti-gold" : "text-white hover:text-iiti-gold"
        }`
      }
    >
      {item.label}
    </NavLink>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const { pathname } = useLocation();
  const [path, setPath] = useState(pathname);

  if (path !== pathname) {
    setPath(pathname);
    setMobileOpen(false);
    setOpenSection(null);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 shadow-md shadow-iiti-navy/10">
      <div className="bg-iiti-gold text-iiti-navy">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-1.5 text-xs font-semibold sm:text-[13px]">
          <p className="tracking-wide">Hall helpline</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a className="inline-flex items-center gap-1 hover:underline" href={`tel:+916265224771`}>
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              Security {keyContacts.securityDesk.phone}
            </a>
            <a className="inline-flex items-center gap-1 hover:underline" href="tel:07316603571">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              Medical {keyContacts.medical.phone}
            </a>
            <a className="inline-flex items-center gap-1 hover:underline" href={`mailto:${keyContacts.hallOffice.email}`}>
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              {keyContacts.hallOffice.email}
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-iiti-mist bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img src="/iiti-mark.svg" alt="" width="56" height="56" className="h-12 w-12 shrink-0 sm:h-14 sm:w-14" />
            <span className="min-w-0">
              <span className="block truncate text-[10px] font-semibold uppercase tracking-[0.16em] text-iiti-gold-ink sm:text-[11px]">
                भारतीय प्रौद्योगिकी संस्थान इंदौर
              </span>
              <span className="block truncate text-[11px] font-semibold uppercase tracking-[0.14em] text-iiti-royal sm:text-xs">
                Indian Institute of Technology Indore
              </span>
              <span className="block truncate font-serif text-lg leading-tight text-iiti-navy sm:text-2xl">
                Hall of Residence
              </span>
            </span>
          </Link>

          <div className="hidden text-right lg:block">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-iiti-gold-ink">Hall office</p>
            <a className="mt-1 block text-sm font-semibold text-iiti-navy hover:text-iiti-royal" href="tel:07316603468">
              {keyContacts.hallOffice.phone}
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-iiti-mist p-2 text-iiti-navy xl:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <nav className="hidden bg-iiti-royal xl:block" aria-label="Primary">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-2">
          {navItems.map((item) =>
            item.children ? (
              <Dropdown
                key={item.label}
                label={item.label}
                items={item.children}
                align={item.align}
                badge={item.badge}
                spark={item.spark}
              />
            ) : (
              <DesktopLink key={item.label} item={item} />
            ),
          )}
        </div>
      </nav>

      {mobileOpen && (
        <div id="mobile-nav" className="max-h-[70vh] overflow-y-auto border-t border-white/10 bg-iiti-royal xl:hidden">
          <ul className="space-y-1 px-3 py-3">
            {navItems.map((item) =>
              item.children ? (
                <li key={item.label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-semibold text-white"
                    aria-expanded={openSection === item.label}
                    onClick={() => setOpenSection((current) => (current === item.label ? null : item.label))}
                  >
                    <span className="inline-flex items-center gap-2">
                      {item.spark && <Sparkles className="h-4 w-4 text-iiti-gold" aria-hidden="true" />}
                      {item.label}
                      {item.badge && (
                        <span className="rounded-full bg-iiti-gold px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-iiti-navy">
                          {item.badge}
                        </span>
                      )}
                    </span>
                    <ChevronDown className={`h-4 w-4 transition ${openSection === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {openSection === item.label && (
                    <ul className="mb-2 space-y-1 pl-3">
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <NavLink
                            to={child.to}
                            className={({ isActive }) =>
                              `block rounded-lg px-3 py-2 text-sm ${
                                isActive ? "bg-white/10 text-iiti-gold" : "text-slate-100 hover:bg-white/5"
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-3 text-sm font-semibold ${
                        isActive ? "bg-white/10 text-iiti-gold" : "text-white hover:bg-white/5"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
