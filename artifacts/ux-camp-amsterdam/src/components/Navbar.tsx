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
              <a
                href="https://www.eventbrite.com/e/ux-camp-amsterdam-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ticket"
              >
                Ticket
              </a>
            </li>
            <li className="nav-dropdown">
              <button className="nav-link nav-link--dropdown" aria-haspopup="true">
                How it works ▾
              </button>
              <ul className="nav-dropdown__menu" aria-label="How it works submenu">
                <li><Link href="/about">About UXcamp Amsterdam</Link></li>
                <li><Link href="/sponsorship">Sponsorship</Link></li>
                <li><Link href="/running-a-session">Running a Session</Link></li>
                <li><Link href="/prepare">Prepare for the Day</Link></li>
              </ul>
            </li>
            <li>
              <a
                href="https://www.instagram.com/uxcampamsterdam/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                Updates ↗
              </a>
            </li>
            <li className="nav-dropdown">
              <button className="nav-link nav-link--dropdown" aria-haspopup="true">
                Previous ▾
              </button>
              <ul className="nav-dropdown__menu" aria-label="Previous editions submenu">
                <li><Link href="/previous/2024">UXcamp Ams '24</Link></li>
                <li><Link href="/previous/2023">UXcamp Ams '23</Link></li>
                <li><Link href="/previous/2019">UXcamp Ams '19</Link></li>
                <li><Link href="/previous/2018">UXcamp Ams '18</Link></li>
                <li><Link href="/previous/2017">UXcamp Ams '17</Link></li>
                <li><Link href="/previous/2016">UXcamp Ams '16</Link></li>
                <li><Link href="/previous/2015">UXcamp Ams '15</Link></li>
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
          href="https://www.eventbrite.com/e/ux-camp-amsterdam-2026"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ticket"
          onClick={closeMenu}
        >
          Ticket
        </a>
        <Link href="/about" onClick={closeMenu}>About UXcamp Amsterdam</Link>
        <Link href="/sponsorship" onClick={closeMenu}>Sponsorship</Link>
        <Link href="/running-a-session" onClick={closeMenu}>Running a Session</Link>
        <Link href="/prepare" onClick={closeMenu}>Prepare for the Day</Link>
        <a href="https://www.instagram.com/uxcampamsterdam/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Updates ↗</a>
        <Link href="/previous/2024" onClick={closeMenu}>UXcamp Ams '24</Link>
        <Link href="/previous/2023" onClick={closeMenu}>UXcamp Ams '23</Link>
        <Link href="/previous/2019" onClick={closeMenu}>UXcamp Ams '19</Link>
        <Link href="/previous/2018" onClick={closeMenu}>UXcamp Ams '18</Link>
        <Link href="/previous/2017" onClick={closeMenu}>UXcamp Ams '17</Link>
        <Link href="/previous/2016" onClick={closeMenu}>UXcamp Ams '16</Link>
        <Link href="/previous/2015" onClick={closeMenu}>UXcamp Ams '15</Link>
      </nav>
    </nav>
  );
}
