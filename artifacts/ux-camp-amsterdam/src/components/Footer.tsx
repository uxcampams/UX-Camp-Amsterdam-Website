import { Link } from "wouter";

const RED = "#B20101";
const DARK = "#333333";
const MID_GREY = "#CCCCCC";
const WHITE = "#FFFFFF";

const FONT = "'Open Sans', sans-serif";

const innerWrap: React.CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
};

const footerNav = [
  { label: "About", href: "/how-it-works" },
  { label: "Sessions", href: "/running-a-session" },
  { label: "Tracks", href: "/how-it-works" },
  { label: "Sponsorship", href: "/ux-camp-amsterdam-sponsorship" },
  { label: "Running a Session", href: "/running-a-session" },
  { label: "Prepare for the Event", href: "/prepare-for-the-day" },
  { label: "Previous Events", href: "/previous/2025" },
  { label: "Alumni", href: "/alumni" },
];

export default function Footer() {
  return (
    <footer style={{ background: DARK, color: WHITE, padding: "80px 5% 24px" }}>
      <div style={innerWrap}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 48,
            alignItems: "start",
          }}
          className="uxc-footer-grid"
        >
          <div>
            <div
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: 22,
                color: WHITE,
                lineHeight: 1.1,
                letterSpacing: 1,
              }}
            >
              UXCAMP
            </div>
            <div
              style={{
                fontFamily: FONT,
                fontWeight: 400,
                fontSize: 18,
                color: WHITE,
                lineHeight: 1.1,
                letterSpacing: 1,
                marginBottom: 16,
              }}
            >
              AMSTERDAM
            </div>
            <p
              style={{
                fontFamily: FONT,
                fontWeight: 300,
                fontSize: 14,
                color: MID_GREY,
                margin: 0,
              }}
            >
              All eXperiences start with yoU!
            </p>
          </div>

          <div className="uxc-footer-social" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 32 }}>
            <div style={{ textAlign: "left" }}>
              <p
                style={{
                  fontFamily: FONT,
                  fontWeight: 400,
                  fontSize: 16,
                  color: WHITE,
                  margin: 0,
                  marginBottom: 16,
                }}
              >
                Follow along for updates
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href="https://www.instagram.com/uxcampamsterdam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uxc-footer-btn"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/amsterdamux/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uxc-footer-btn"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div style={{ textAlign: "right" }}>
              <p
                style={{
                  fontFamily: FONT,
                  fontWeight: 400,
                  fontSize: 16,
                  color: WHITE,
                  margin: 0,
                  marginBottom: 16,
                }}
              >
                Have any questions?
              </p>
              <a href="mailto:info@uxcampams.com" className="uxc-footer-btn">
                Email us
              </a>
            </div>
          </div>
        </div>

        <ul
          className="uxc-footer-nav"
          style={{
            listStyle: "none",
            margin: 0,
            marginTop: 48,
            padding: 0,
            paddingTop: 48,
            borderTop: `1px solid ${MID_GREY}`,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "12px 24px",
          }}
        >
          {footerNav.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <div
          style={{
            marginTop: 48,
            paddingTop: 24,
            borderTop: `1px solid ${MID_GREY}`,
            fontFamily: FONT,
            fontWeight: 400,
            fontSize: 13,
            color: MID_GREY,
          }}
        >
          © 2026 UX Camp Amsterdam
        </div>
      </div>

      <style>{`
        .uxc-footer-nav a { color: ${WHITE}; font-size: 14px; }
        .uxc-footer-nav a:hover { color: ${RED}; }
        .uxc-footer-btn {
          display: inline-block;
          background: transparent;
          color: ${WHITE};
          padding: 12px 24px;
          font-family: ${FONT};
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-weight: 600;
          border: 2px solid ${WHITE};
          text-decoration: none;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .uxc-footer-btn:hover { background: ${WHITE}; color: ${DARK}; }
        @media (max-width: 900px) {
          .uxc-footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .uxc-footer-nav { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .uxc-footer-social { flex-direction: column !important; align-items: flex-start !important; }
          .uxc-footer-social > div { text-align: left !important; }
        }
      `}</style>
    </footer>
  );
}
