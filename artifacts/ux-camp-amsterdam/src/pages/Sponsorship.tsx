import { useEffect } from "react";
import { Link } from "wouter";
import heroBg from "../../assets/images/Sponsorship_hero.jpg";

const RED = "#B20101";
const DARK = "#333333";
const LIGHT_GREY = "#F5F5F5";
const MID_GREY = "#CCCCCC";
const WHITE = "#FFFFFF";

const FONT = "'Open Sans', sans-serif";

const sectionPad: React.CSSProperties = { padding: "80px 5%" };
const innerWrap: React.CSSProperties = { maxWidth: 1200, margin: "0 auto" };

const benefits = [
  "Your brand in the room with Amsterdam's UX community",
  "Direct access to designers, researchers, PMs, and developers",
  "Employer brand visibility with mid-to-senior practitioners",
  "Connections with UX talent for hiring or partnerships",
  "A chance to genuinely support the community — not just market to it",
];

type Tier = {
  name: string;
  price: string;
  priceSize: number;
  description: string;
  pillText: string;
  pillBg: string;
  topAccent: string;
  includes: string[];
};

const tiers: Tier[] = [
  {
    name: "Main Sponsor",
    price: "€3,025",
    priceSize: 36,
    description:
      "Main sponsors gain maximum visibility of their brand before, during, and after the camp to engage with attendees.",
    pillText: "Limited to 4 slots",
    pillBg: RED,
    topAccent: RED,
    includes: [
      "Mentioning on the website",
      "Exposure on social media (dedicated post introducing the company)",
      "Stand at the venue",
      "2 min onstage at opening",
      "Branded room (on schedule, banners in the rooms)",
      "Mention in follow-up email to participants",
      "5 tickets",
    ],
  },
  {
    name: "Event Sponsor",
    price: "€1,210",
    priceSize: 36,
    description:
      "Event sponsors get a physical presence at the camp to engage with attendees during and after the event.",
    pillText: "Multiple slots available",
    pillBg: DARK,
    topAccent: DARK,
    includes: [
      "Mentioning on the website",
      "Stand at the venue",
      "Mentioning in follow-up email to participants",
      "3 tickets",
    ],
  },
  {
    name: "Product Sponsor",
    price: "Min. value of €121",
    priceSize: 28,
    description:
      "Product sponsors award the community through product donations for best contributions during camp.",
    pillText: "Multiple slots available",
    pillBg: DARK,
    topAccent: MID_GREY,
    includes: [
      "Mentioning on the website",
      "Products given out as prizes for best talks, workshops, discussions and/or in raffle/lottery at closing session",
    ],
  },
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

export default function Sponsorship() {
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
        .uxc-sponsor a { text-decoration: none; }

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

        .uxc-btn-on-red {
          display: inline-block;
          background: ${WHITE};
          color: ${RED};
          padding: 14px 36px;
          font-family: ${FONT};
          font-weight: 800;
          font-size: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
          border: 2px solid ${WHITE};
          border-radius: 0;
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .uxc-btn-on-red:hover { background: ${DARK}; color: ${WHITE}; border-color: ${DARK}; }

        .uxc-tier-grid {
          display: grid;
          grid-template-columns: 60% 40%;
          gap: 32px;
          align-items: start;
        }

        .uxc-logo-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 32px;
        }

        .uxc-logo-box {
          height: 80px;
          background: ${LIGHT_GREY};
          border: 1px solid ${MID_GREY};
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: ${FONT};
          font-size: 13px;
          color: ${MID_GREY};
        }

        .uxc-footer-nav a { color: ${WHITE}; font-size: 14px; }
        .uxc-footer-nav a:hover { color: ${RED}; }

        @media (max-width: 900px) {
          .uxc-tier-grid { grid-template-columns: 1fr; gap: 24px; }
          .uxc-logo-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <div className="uxc-sponsor">
        {/* SECTION 1 — HERO */}
        <section
          style={{
            backgroundImage: `linear-gradient(rgba(51,51,51,0.6), rgba(51,51,51,0.6)), url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: WHITE,
            padding: "100px 5% 80px",
          }}
        >
          <div style={innerWrap}>
            <h1
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: "clamp(32px, 4.5vw, 56px)",
                lineHeight: 1.15,
                color: WHITE,
                margin: 0,
                maxWidth: 780,
              }}
            >
              Help make UX Camp happen. Get in front of the people who build digital Amsterdam.
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
                marginBottom: 32,
                maxWidth: 640,
              }}
            >
              UXcamp Amsterdam is a non-profit, volunteer-run event. We rely on sponsors to make it happen and in return, you get direct access to a genuinely engaged UX community.
            </p>

            <a href="#get-in-touch" className="uxc-btn-primary">
              Get in touch →
            </a>
          </div>
        </section>

        {/* SECTION 2 — WHO COMES? */}
        <section style={{ background: LIGHT_GREY, ...sectionPad }}>
          <div style={innerWrap}>
            <h2
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: 32,
                lineHeight: 1.2,
                color: DARK,
                margin: 0,
                marginBottom: 24,
                maxWidth: 820,
              }}
            >
              150+ UX professionals. Every kind of discipline.
            </h2>
            <p
              style={{
                fontFamily: FONT,
                fontWeight: 400,
                fontSize: 16,
                lineHeight: 1.7,
                color: DARK,
                margin: 0,
                marginBottom: 32,
                maxWidth: 680,
              }}
            >
              Our audience spans the full UX field, designers, researchers, product managers, developers, data scientists, service designers. Most are individual contributors at mid-to-senior level, split roughly equally between agency and in-house teams.
            </p>

            <div
              style={{
                background: WHITE,
                borderLeft: `4px solid ${RED}`,
                padding: "24px 28px",
                maxWidth: 820,
              }}
            >
              <p
                style={{
                  fontFamily: FONT,
                  fontWeight: 600,
                  fontSize: 17,
                  lineHeight: 1.5,
                  color: DARK,
                  margin: 0,
                }}
              >
                The organising team also runs the AmsterdamUX community — 5,700+ members, 190+ events.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — WHY SPONSOR? */}
        <section style={{ background: WHITE, ...sectionPad }}>
          <div style={innerWrap}>
            <h2
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: 32,
                lineHeight: 1.2,
                color: DARK,
                margin: 0,
                marginBottom: 16,
              }}
            >
              What sponsoring gets you
            </h2>
            <p
              style={{
                fontFamily: FONT,
                fontWeight: 400,
                fontSize: 16,
                lineHeight: 1.7,
                color: DARK,
                margin: 0,
                marginBottom: 32,
                maxWidth: 820,
              }}
            >
              UXcampAMS is where Amsterdam's UX community actually shows up. Here's what sponsoring gets you.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, maxWidth: 900 }}>
              {benefits.map((b) => (
                <li
                  key={b}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                    padding: "16px 0",
                    borderBottom: `1px solid ${MID_GREY}`,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      flex: "0 0 12px",
                      width: 12,
                      height: 12,
                      background: RED,
                      marginTop: 6,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: FONT,
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: 1.6,
                      color: DARK,
                    }}
                  >
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 4 — SPONSORSHIP TIERS */}
        <section style={{ background: LIGHT_GREY, ...sectionPad }}>
          <div style={innerWrap}>
            <h2
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: 32,
                color: DARK,
                margin: 0,
                marginBottom: 12,
                textAlign: "center",
              }}
            >
              Sponsorship tiers
            </h2>
            <p
              style={{
                fontFamily: FONT,
                fontWeight: 300,
                fontSize: 16,
                color: MID_GREY,
                margin: 0,
                marginBottom: 48,
                textAlign: "center",
              }}
            >
              Three ways to get involved. All help make UX Camp happen.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  style={{
                    background: WHITE,
                    border: `1px solid ${MID_GREY}`,
                    borderTop: `4px solid ${tier.topAccent}`,
                    padding: "36px 40px",
                  }}
                >
                  <div className="uxc-tier-grid">
                    {/* Left side: pill, name, price */}
                    <div>
                      <span
                        style={{
                          display: "inline-block",
                          background: tier.pillBg,
                          color: WHITE,
                          padding: "4px 12px",
                          fontFamily: FONT,
                          fontWeight: 600,
                          fontSize: 11,
                          letterSpacing: 1,
                          textTransform: "uppercase",
                          borderRadius: 0,
                          marginBottom: 16,
                        }}
                      >
                        {tier.pillText}
                      </span>
                      <h3
                        style={{
                          fontFamily: FONT,
                          fontWeight: 800,
                          fontSize: 24,
                          color: DARK,
                          margin: 0,
                          marginBottom: 12,
                        }}
                      >
                        {tier.name}
                      </h3>
                      <div
                        style={{
                          fontFamily: FONT,
                          fontWeight: 800,
                          fontSize: tier.priceSize,
                          color: RED,
                          lineHeight: 1.1,
                        }}
                      >
                        {tier.price}
                      </div>
                    </div>

                    {/* Right side: description + includes */}
                    <div>
                      <p
                        style={{
                          fontFamily: FONT,
                          fontWeight: 400,
                          fontSize: 15,
                          lineHeight: 1.6,
                          color: DARK,
                          margin: 0,
                          marginBottom: 24,
                        }}
                      >
                        {tier.description}
                      </p>

                      <div
                        style={{
                          fontFamily: FONT,
                          fontWeight: 600,
                          fontSize: 14,
                          letterSpacing: 1,
                          textTransform: "uppercase",
                          color: DARK,
                          marginBottom: 12,
                        }}
                      >
                        What's included:
                      </div>

                      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {tier.includes.map((item) => (
                          <li
                            key={item}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 12,
                              padding: "8px 0",
                            }}
                          >
                            <span
                              aria-hidden="true"
                              style={{
                                flex: "0 0 10px",
                                width: 10,
                                height: 10,
                                background: RED,
                                marginTop: 6,
                              }}
                            />
                            <span
                              style={{
                                fontFamily: FONT,
                                fontWeight: 400,
                                fontSize: 15,
                                lineHeight: 1.5,
                                color: DARK,
                              }}
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — PREVIOUS SPONSORS */}
        <section style={{ background: WHITE, ...sectionPad }}>
          <div style={innerWrap}>
            <h2
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: 32,
                color: DARK,
                margin: 0,
                textAlign: "center",
              }}
            >
              We've been supported by some great companies
            </h2>

            <div className="uxc-logo-grid">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="uxc-logo-box">
                  Sponsor logo
                </div>
              ))}
            </div>

            <p
              style={{
                fontFamily: FONT,
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: 14,
                color: MID_GREY,
                marginTop: 16,
                marginBottom: 0,
                textAlign: "center",
              }}
            >
              Logo grid — add past sponsor logos here before publishing.
            </p>
          </div>
        </section>

        {/* SECTION 6 — GET IN TOUCH */}
        <section id="get-in-touch" style={{ background: RED, color: WHITE, ...sectionPad }}>
          <div style={{ ...innerWrap, textAlign: "center" }}>
            <h2
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: 36,
                color: WHITE,
                margin: 0,
                marginBottom: 16,
              }}
            >
              Interested? Let's talk.
            </h2>
            <p
              style={{
                fontFamily: FONT,
                fontWeight: 300,
                fontSize: 18,
                color: WHITE,
                margin: "0 auto 32px",
              }}
            >
              Reach out and we'll send you the full sponsorship deck.
            </p>
            <div>
              <a href="mailto:sponsor@uxcampams.com" className="uxc-btn-on-red">
                Get in touch →
              </a>
            </div>
            <p
              style={{
                fontFamily: FONT,
                fontWeight: 400,
                fontSize: 14,
                color: WHITE,
                opacity: 0.6,
                margin: 0,
                marginTop: 24,
              }}
            >
              sponsor@uxcampams.com — add final contact email before publishing
            </p>
          </div>
        </section>

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
                <details style={{ marginBottom: 8 }}>
                  <summary
                    style={{
                      fontFamily: FONT,
                      fontWeight: 600,
                      fontSize: 14,
                      color: WHITE,
                      cursor: "pointer",
                      listStyle: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    Follow us ↓
                  </summary>
                  <div style={{ paddingTop: 10, display: "flex", flexDirection: "column", gap: 8 }}>
                    <a
                      href="https://www.instagram.com/uxcampamsterdam/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontFamily: FONT, fontWeight: 400, fontSize: 14, color: MID_GREY }}
                    >
                      Instagram @uxcampamsterdam
                    </a>
                    <a
                      href="https://www.linkedin.com/company/amsterdamux/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontFamily: FONT, fontWeight: 400, fontSize: 14, color: MID_GREY }}
                    >
                      LinkedIn Amsterdam UX
                    </a>
                  </div>
                </details>
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
