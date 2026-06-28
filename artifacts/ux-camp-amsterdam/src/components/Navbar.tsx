import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import logoSrc from "../../assets/UX_Camp_Amsterdam_Logo.png";
import { TICKET_URL } from "../constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const [pastOpen, setPastOpen] = useState(false);
  const closeMenu = () => { setMobileOpen(false); setPastOpen(false); };

  const toggleDropdown = (i: number) =>
    setOpenDropdown(prev => prev === i ? null : i);

  const handleTriggerKeyDown = (i: number, menuId: string) =>
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setOpenDropdown(i);
        setTimeout(() => {
          document.getElementById(menuId)?.querySelector<HTMLElement>("a, button")?.focus();
        }, 0);
      }
    };

  const handleMenuKeyDown = (i: number) =>
    (e: React.KeyboardEvent<HTMLUListElement>) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        triggerRefs.current[i]?.focus();
      } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const items = Array.from(e.currentTarget.querySelectorAll<HTMLElement>("a, button"));
        const idx = items.indexOf(document.activeElement as HTMLElement);
        const next = e.key === "ArrowDown"
          ? (idx + 1) % items.length
          : (idx - 1 + items.length) % items.length;
        items[next]?.focus();
      }
    };

  const handleDropdownBlur = (e: React.FocusEvent<HTMLLIElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setOpenDropdown(null);
    }
  };

  return (
    <nav ref={navRef} className="navbar" role="navigation" aria-label="Main navigation">
      <div className="container">
        <div className="navbar__inner">

          <Link href="/" className="navbar__logo" aria-label="UX Camp Amsterdam — Home">
            <img src={logoSrc} alt="UX Camp Amsterdam" />
          </Link>

          <ul className="navbar__links" aria-label="Desktop navigation">
            <li>
              <a
                href={TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ticket"
              >
                Ticket
              </a>
            </li>
            <li className="nav-dropdown" onBlur={handleDropdownBlur}>
              <button
                ref={el => { triggerRefs.current[0] = el; }}
                className="nav-link nav-link--dropdown"
                aria-haspopup="true"
                aria-expanded={openDropdown === 0}
                aria-controls="dropdown-menu-0"
                onClick={() => toggleDropdown(0)}
                onKeyDown={handleTriggerKeyDown(0, "dropdown-menu-0")}
              >
                How it works ▾
              </button>
              <ul
                id="dropdown-menu-0"
                className={`nav-dropdown__menu${openDropdown === 0 ? " is-open" : ""}`}
                aria-label="How it works submenu"
                onKeyDown={handleMenuKeyDown(0)}
              >
                <li><Link href="/how-it-works">About UXcamp Amsterdam</Link></li>
                <li><Link href="/ux-camp-amsterdam-sponsorship">Sponsorship</Link></li>
                <li><Link href="/running-a-session">Running a Session</Link></li>
                <li><Link href="/prepare-for-the-day">Before You Arrive</Link></li>
              </ul>
            </li>
            <li className="nav-dropdown" onBlur={handleDropdownBlur}>
              <button
                ref={el => { triggerRefs.current[1] = el; }}
                className="nav-link nav-link--dropdown"
                aria-haspopup="true"
                aria-expanded={openDropdown === 1}
                aria-controls="dropdown-menu-1"
                onClick={() => toggleDropdown(1)}
                onKeyDown={handleTriggerKeyDown(1, "dropdown-menu-1")}
              >
                Follow us ▾
              </button>
              <ul
                id="dropdown-menu-1"
                className={`nav-dropdown__menu${openDropdown === 1 ? " is-open" : ""}`}
                aria-label="Follow us submenu"
                onKeyDown={handleMenuKeyDown(1)}
              >
                <li>
                  <a href="https://www.instagram.com/uxcampamsterdam/" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/amsterdamux/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-dropdown" onBlur={handleDropdownBlur}>
              <button
                ref={el => { triggerRefs.current[2] = el; }}
                className="nav-link nav-link--dropdown"
                aria-haspopup="true"
                aria-expanded={openDropdown === 2}
                aria-controls="dropdown-menu-2"
                onClick={() => toggleDropdown(2)}
                onKeyDown={handleTriggerKeyDown(2, "dropdown-menu-2")}
              >
                Previous ▾
              </button>
              <ul
                id="dropdown-menu-2"
                className={`nav-dropdown__menu${openDropdown === 2 ? " is-open" : ""}`}
                aria-label="Previous editions submenu"
                onKeyDown={handleMenuKeyDown(2)}
              >
                <li><Link href="/previous/2025">UXcamp Ams '25</Link></li>
                <li><Link href="/2024-post-event">UXcamp Ams '24</Link></li>
                <li><Link href="/uxcamp-ams-2023">UXcamp Ams '23</Link></li>
                <li><Link href="/uxcamp-ams-2019">UXcamp Ams '19</Link></li>
                <li><Link href="/welcome">UXcamp Ams '18</Link></li>
                <li><Link href="/uxcampams17">UXcamp Ams '17</Link></li>
                <li><Link href="/2016">UXcamp Ams '16</Link></li>
                <li><Link href="/2015">UXcamp Ams '15</Link></li>
              </ul>
            </li>
          </ul>

          <button
            className="navbar__hamburger"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className={`navbar__mobile${mobileOpen ? " is-open" : ""}`}
        aria-label="Mobile navigation"
      >
        <a
          href={TICKET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ticket"
          onClick={closeMenu}
        >
          Ticket
        </a>
        <Link href="/how-it-works" onClick={closeMenu}>About UXcamp Amsterdam</Link>
        <Link href="/ux-camp-amsterdam-sponsorship" onClick={closeMenu}>Sponsorship</Link>
        <Link href="/running-a-session" onClick={closeMenu}>Running a Session</Link>
        <Link href="/prepare-for-the-day" onClick={closeMenu}>Before You Arrive</Link>
        <a href="https://www.instagram.com/uxcampamsterdam/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Instagram</a>
        <a href="https://www.linkedin.com/company/amsterdamux/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>LinkedIn</a>
        <button
          className="navbar__mobile-group-toggle"
          onClick={() => setPastOpen(o => !o)}
          aria-expanded={pastOpen}
        >
          Past events {pastOpen ? "▴" : "▾"}
        </button>
        {pastOpen && (
          <div className="navbar__mobile-group">
            <Link href="/previous/2025" onClick={closeMenu}>UXcamp Ams '25</Link>
            <Link href="/2024-post-event" onClick={closeMenu}>UXcamp Ams '24</Link>
            <Link href="/uxcamp-ams-2023" onClick={closeMenu}>UXcamp Ams '23</Link>
            <Link href="/uxcamp-ams-2019" onClick={closeMenu}>UXcamp Ams '19</Link>
            <Link href="/welcome" onClick={closeMenu}>UXcamp Ams '18</Link>
            <Link href="/uxcampams17" onClick={closeMenu}>UXcamp Ams '17</Link>
            <Link href="/2016" onClick={closeMenu}>UXcamp Ams '16</Link>
            <Link href="/2015" onClick={closeMenu}>UXcamp Ams '15</Link>
          </div>
        )}
      </nav>
    </nav>
  );
}
