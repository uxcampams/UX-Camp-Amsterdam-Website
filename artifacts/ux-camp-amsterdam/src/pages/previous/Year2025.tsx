import { useEffect } from "react";
import { Link } from "wouter";
import CtaBanner from "@/components/CtaBanner";
import photoAudience from "../../../assets/images/UX_Camp_Amsterdam_2025.jpg";
import photoOrganizers from "../../../assets/images/Polina_Popravka_UX_Camp_Amsterdam.jpeg";
import nienHuaPhoto from "../../../assets/images/2024/Nien-Hua_Gu.png";
import mariaPhoto from "../../../assets/images/2024/Maria_Adrian.png";
import vincentPhoto from "../../../assets/images/2024/Vincent_Vijn.png";
import indrePhoto from "../../../assets/images/2024/Indre_Lauciute.png";
import ritaPhoto from "../../../assets/images/2024/Rita_Costa_Pereira.png";

const RED = "#B20101";
const DARK = "#333333";
const LIGHT_GREY = "#F5F5F5";
const MID_GREY = "#CCCCCC";
const WHITE = "#FFFFFF";

const FONT = "'Open Sans', sans-serif";

const sectionPad: React.CSSProperties = { padding: "80px 5%" };
const innerWrap: React.CSSProperties = { maxWidth: 1200, margin: "0 auto" };

const sessions: string[] = [
  "Designing with AI - Creative AI by Andreas Kruszakim-Liborka",
  "How do I make that change? by Sneha Das",
  "My Path into Hearables: A journey in research & Design by Shih-Ching Chang",
  "The Future of UX Research in the Age of AI by Ataur Rahman",
  "Evaluating AI (Med AI) + (Trust) + AI responses in Healthcare by Ujayan Dhar",
  "Speed Dating - A Fast Fun Way to Connect with Fellow UX Campers by Arunima Ved",
  "Rapid testing when you have no time by Karina Yugay",
  "Accessible by Research: A step-by-step UX and Human Factors Journey in Vision Assistive Tech by Yen Liu",
  "How to keep your head cool while designing Complex interfaces by Vincent Vijn",
  "Mirror Anxiety by Lynn Huang",
  "From Chaos to Clarity: The Hidden Power of Design Systems by Anu (Anu Mod Ajith)",
  "The Role & Identity, Shift of A Designer by Luke Chen",
  "Intelligence Interfaces: The history of AI through UI by Aleksandar Papez",
  "Networking: From Awkward to Awesome by Evgenia Golubeva",
  "UX meets Learning Experience Design by Pedro Vaz",
  "Let's talk UX metrics by Denys Tserkomy",
  "Designing AI Agents: What to Consider by Heather Bell",
  "Concept Diagrams by Peter Boersma",
  "3D Printing for UX Decision-Making by Natalia Romancheva",
  "UX for Social Impact by Iris & Claudia BG",
  "Data Driven Design Beyond Inst: A Case Study on Responsible Value Based Design by Lade Tawak",
  "Journey into the World of Strategy: Moving from Execution to Strategy by Varsha Prasad",
  "Love, Prompt, Robot! - A human-AI interaction by Liu, Shao-Ying (Kenny)",
  "How to Make Complex Products and Projects Less Complicated by Gabriela Casagranda",
  "From Designer to Founder, and Vice Versa by Chase Almuir",
  "Embody Brave Space: How to build courage within group dynamics? by Yihua/Amy",
  "How to handle stakeholder feedback during design reviews by Nicole Weber",
  "UXR + AI by Tatiana Sidorenkova",
];

const team: { name: string; photo?: string }[] = [
  { name: "Arunima Ved" },
  { name: "Talita Collare" },
  { name: "Nien-Hua Gu", photo: nienHuaPhoto },
  { name: "María de los Ángeles Adrián", photo: mariaPhoto },
  { name: "Vincent Vijn", photo: vincentPhoto },
  { name: "Indre Lauciute", photo: indrePhoto },
  { name: "Rita Costa Pereira", photo: ritaPhoto },
];

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

export default function Year2025() {
  useEffect(() => {
    const globalFooter = document.querySelector("footer.footer") as HTMLElement | null;
    if (globalFooter) globalFooter.style.display = "none";
    return () => {
      if (globalFooter) globalFooter.style.display = "";
    };
  }, []);

  return (
    <main style={{ fontFamily: FONT, color: DARK }}>
      <style>{`
        .uxc-y25 a { text-decoration: none; }

        .uxc-eyebrow {
          font-family: ${FONT};
          font-weight: 300;
          font-size: 13px;
          color: ${RED};
          text-transform: uppercase;
          letter-spacing: 2px;
          margin: 0 0 12px 0;
        }
        .uxc-h2 {
          font-family: ${FONT};
          font-weight: 800;
          font-size: 32px;
          line-height: 1.2;
          color: ${DARK};
          margin: 0;
        }

        .uxc-btn-primary {
          display: inline-block;
          background: ${RED};
          color: ${WHITE};
          padding: 14px 36px;
          font-family: ${FONT};
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
          border: 2px solid ${RED};
          border-radius: 0;
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .uxc-btn-primary:hover { background: ${DARK}; border-color: ${DARK}; color: ${WHITE}; }

        .uxc-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .uxc-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .uxc-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }

        .uxc-team-avatar {
          width: 80px;
          height: 80px;
          border: 2px solid ${RED};
          color: ${RED};
          font-family: ${FONT};
          font-weight: 800;
          font-size: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px;
          border-radius: 50%;
          background: ${WHITE};
        }

        .uxc-newsletter-input {
          flex: 1;
          padding: 14px 16px;
          font-family: ${FONT};
          font-size: 15px;
          color: ${DARK};
          background: ${WHITE};
          border: 1px solid ${MID_GREY};
          border-radius: 0;
          outline: none;
        }
        .uxc-newsletter-input:focus { border-color: ${RED}; }

        .uxc-footer-nav a { color: ${WHITE}; font-size: 14px; }
        .uxc-footer-nav a:hover { color: ${RED}; }

        @media (max-width: 900px) {
          .uxc-grid-2 { grid-template-columns: 1fr; }
          .uxc-grid-3 { grid-template-columns: 1fr; }
          .uxc-grid-4 { grid-template-columns: repeat(2, 1fr); }
          .uxc-h2 { font-size: 26px; }
          .uxc-y25-photo-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .uxc-y25-photo-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="uxc-y25">
        {/* SECTION 1 — HERO */}
        <section style={{ background: DARK, color: WHITE, padding: "100px 5% 80px" }}>
          <div style={innerWrap}>
            <h1
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: "clamp(36px, 5vw, 60px)",
                lineHeight: 1.1,
                color: WHITE,
                margin: 0,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              UX Camp Amsterdam 2025
            </h1>
            <p
              style={{
                fontFamily: FONT,
                fontWeight: 300,
                fontSize: 18,
                lineHeight: 1.6,
                color: WHITE,
                margin: 0,
                marginTop: 24,
                maxWidth: 680,
              }}
            >
              June 21, 2025 · Hogeschool van Amsterdam
            </p>
          </div>
        </section>

        {/* SECTION 2 — EVENT PHOTOS */}
        <section style={{ background: LIGHT_GREY, ...sectionPad }}>
          <div style={innerWrap}>
            <h2 className="uxc-h2" style={{ marginBottom: 24 }}>
              Impressions from #UXcampAMS25
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 8,
              }}
              className="uxc-y25-photo-grid"
            >
              {[
                {
                  src: photoAudience,
                  alt: "Attendees raising hands during a session at UX Camp Amsterdam 2025",
                },
                {
                  src: photoOrganizers,
                  alt: "Organizers presenting the day's schedule at UX Camp Amsterdam 2025",
                },
              ].map((p, i) => (
                <div
                  key={i}
                  style={{
                    width: "100%",
                    aspectRatio: "4 / 3",
                    overflow: "hidden",
                    border: `1px solid ${MID_GREY}`,
                    background: MID_GREY,
                    borderRadius: 0,
                  }}
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      borderRadius: 0,
                    }}
                  />
                </div>
              ))}
            </div>

            <div style={{ marginTop: 24 }}>
              <a
                href="https://www.instagram.com/uxcampamsterdam/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: FONT,
                  fontWeight: 600,
                  fontSize: 14,
                  color: RED,
                  textDecoration: "none",
                  letterSpacing: 0.5,
                }}
              >
                See all photos from #UXcampAMS25 →
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 4 — SESSIONS */}
        <section style={{ background: LIGHT_GREY, ...sectionPad }}>
          <div style={innerWrap}>
            <p className="uxc-eyebrow">{sessions.length} sessions, one day</p>
            <h2 className="uxc-h2" style={{ marginBottom: 32 }}>
              Sessions from UXcampAMS 2025
            </h2>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {sessions.map((s, i) => (
                <li
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "44px 1fr",
                    gap: 16,
                    padding: "16px 0",
                    borderBottom: `1px solid ${MID_GREY}`,
                    alignItems: "baseline",
                  }}
                >
                  <span
                    style={{
                      fontFamily: FONT,
                      fontWeight: 800,
                      fontSize: 14,
                      color: RED,
                      letterSpacing: 1,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    style={{
                      fontFamily: FONT,
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: 1.6,
                      color: DARK,
                    }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 5 — ORGANISING TEAM */}
        <section style={{ background: WHITE, ...sectionPad }}>
          <div style={innerWrap}>
            <p className="uxc-eyebrow">2025 team</p>
            <h2 className="uxc-h2" style={{ marginBottom: 32 }}>
              The people who made it happen
            </h2>

            <div className="uxc-grid-4">
              {team.map(({ name, photo }) => {
                const initial = name.trim().charAt(0).toUpperCase();
                return (
                  <div
                    key={name}
                    style={{
                      background: WHITE,
                      border: `1px solid ${MID_GREY}`,
                      padding: 24,
                      textAlign: "center",
                    }}
                  >
                    {photo ? (
                      <img
                        src={photo}
                        alt={name}
                        loading="lazy"
                        style={{
                          width: 80,
                          height: 80,
                          objectFit: "cover",
                          objectPosition: "center top",
                          border: `2px solid ${RED}`,
                          borderRadius: "50%",
                          display: "block",
                          margin: "0 auto 12px",
                          background: WHITE,
                        }}
                      />
                    ) : (
                      <div
                        className="uxc-team-avatar"
                        aria-hidden="true"
                        style={{ background: LIGHT_GREY }}
                      >
                        {initial}
                      </div>
                    )}
                    <div
                      style={{
                        fontFamily: FONT,
                        fontWeight: 600,
                        fontSize: 16,
                        color: DARK,
                        lineHeight: 1.4,
                      }}
                    >
                      {name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <CtaBanner />

        {/* FOOTER (same as homepage) */}
        <footer style={{ background: DARK, color: WHITE, padding: "80px 5% 24px" }}>
          <div style={innerWrap}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr 1fr",
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

              <ul
                className="uxc-footer-nav"
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px 24px",
                }}
              >
                {footerNav.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>

              <div>
                <a
                  href="https://www.instagram.com/uxcampamsterdam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", fontFamily: FONT, fontWeight: 600, fontSize: 14, color: WHITE, marginBottom: 8 }}
                >
                  Instagram @uxcampamsterdam
                </a>
                <a
                  href="https://www.linkedin.com/company/amsterdamux/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", fontFamily: FONT, fontWeight: 600, fontSize: 14, color: WHITE, marginBottom: 8 }}
                >
                  LinkedIn Amsterdam UX
                </a>
                <span
                  style={{
                    fontFamily: FONT,
                    fontWeight: 400,
                    fontSize: 14,
                    color: MID_GREY,
                  }}
                >
                  #UXcampAMS26
                </span>
              </div>
            </div>

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
            @media (max-width: 900px) {
              .uxc-footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
            }
          `}</style>
        </footer>
      </div>
    </main>
  );
}
