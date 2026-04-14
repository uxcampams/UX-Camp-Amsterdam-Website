import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import logoSrc from "../../assets/UX_Camp_Amsterdam_Logo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <nav ref={navRef} className="navbar" role="navigation" aria-label="Main navigation">
      <div className="container">
        <div className="navbar__inner">

          <Link href="/" className="navbar__logo" aria-label="UX Camp Amsterdam — Home">
            <img src={logoSrc} alt="UX Camp Amsterdam" />
          </Link>

          <ul className="navbar__links" aria-label="Desktop navigation">
            <li>
              <Link href="/ticket" className="btn-ticket">Ticket</Link>
            </li>
            <li className="nav-dropdown">
              <Link href="/how-it-works" className="nav-link">How it works ▾</Link>
              <ul className="nav-dropdown__menu" aria-label="How it works submenu">
                <li><Link href="/how-it-works">About UXcamp Amsterdam</Link></li>
                <li><Link href="/sponsorship">Sponsorship</Link></li>
                <li><Link href="/running-a-session">Running a Session</Link></li>
                <li><Link href="/prepare">Prepare for the Day</Link></li>
              </ul>
            </li>
            <li className="nav-dropdown">
              <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>Updates ▾</a>
              <ul className="nav-dropdown__menu" aria-label="Updates submenu">
                <li><a href="https://www.instagram.com/uxcampamsterdam/" target="_blank" rel="noopener noreferrer">Instagram ↗</a></li>
              </ul>
            </li>
            <li className="nav-dropdown">
              <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>Previous ▾</a>
              <ul className="nav-dropdown__menu" aria-label="Previous editions submenu">
                <li><a href="#">UXcamp Ams '25</a></li>
                <li><a href="#">UXcamp Ams '24</a></li>
                <li><a href="#">UXcamp Ams '23</a></li>
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
        <Link href="/ticket" className="btn-ticket" onClick={closeMenu}>Ticket</Link>
        <Link href="/how-it-works" onClick={closeMenu}>About UXcamp Amsterdam</Link>
        <Link href="/sponsorship" onClick={closeMenu}>Sponsorship</Link>
        <Link href="/running-a-session" onClick={closeMenu}>Running a Session</Link>
        <Link href="/prepare" onClick={closeMenu}>Prepare for the Day</Link>
        <a href="https://www.instagram.com/uxcampamsterdam/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
        <a href="#">UXcamp Ams '25</a>
        <a href="#">UXcamp Ams '24</a>
        <a href="#">UXcamp Ams '23</a>
      </nav>
    </nav>
  );
}
