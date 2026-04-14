import { Link } from "wouter";
import logoSrc from "../../assets/UX_Camp_Amsterdam_Logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__logo">
            <Link href="/" aria-label="UX Camp Amsterdam — Home">
              <img src={logoSrc} alt="UX Camp Amsterdam" />
            </Link>
          </div>
          <ul className="footer__nav" aria-label="Footer navigation">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/how-it-works">How It Works</Link></li>
            <li><Link href="/sponsorship">Sponsorship</Link></li>
            <li>
              <a href="https://www.instagram.com/uxcampamsterdam/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
          <div className="footer__copy">
            <p>&copy; 2026 UXcamp Amsterdam</p>
          </div>
        </div>
      </div>
      <div className="footer__bottom">#UXcampAMS26</div>
    </footer>
  );
}
