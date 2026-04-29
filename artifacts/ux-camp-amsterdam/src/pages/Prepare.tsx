import { useEffect } from "react";
import { Link } from "wouter";

const RED = "#B20101";
const DARK = "#333333";
const LIGHT_GREY = "#F5F5F5";
const MID_GREY = "#CCCCCC";
const WHITE = "#FFFFFF";

const FONT = "'Open Sans', sans-serif";

const sectionPad: React.CSSProperties = { padding: "80px 5%" };
const innerWrap: React.CSSProperties = { maxWidth: 1200, margin: "0 auto" };

const timeLocation = [
  { label: "Date", value: "Saturday, July 4, 2026" },
  { label: "Doors open", value: "9:30 — Registration closes at 12:30" },
  { label: "Venue", value: "HvA Corry Tendeloohuis (CTH)" },
  { label: "Address", value: "Fraijlemaborg 133, 1102 CV Amsterdam" },
];

type Transport = { icon: string; title: string; body: React.ReactNode; placeholder?: boolean };

const transport: Transport[] = [
  {
    icon: "🚇",
    title: "By Metro / Train",
    body: (
      <>
        <p style={{ margin: 0, marginBottom: 8, fontWeight: 600 }}>
          Nearest Metro Station: Bullewijk (Metro 50 &amp; 54 — Orange Line)
        </p>
        <p style={{ margin: 0, marginBottom: 8 }}>From Amsterdam Central Station:</p>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li>Take Metro 54 (direction Gein) or Metro 50 (direction Gein)</li>
          <li>Get off at Bullewijk station (approx. 15 minutes)</li>
          <li>Walk 7–8 minutes</li>
        </ul>
      </>
    ),
  },
  {
    icon: "🚴",
    title: "By Bike",
    body: (
      <>
        <p style={{ margin: 0, marginBottom: 4 }}>From Amsterdam Central Station</p>
        <p style={{ margin: 0 }}>Time: 35–45 minutes</p>
      </>
    ),
  },
  {
    icon: "🚗",
    title: "By Car",
    body: "Public transport is easier — parking in Amsterdam on a summer Saturday is an adventure you don't need.",
  },
];

type BringItem = { icon: string; title: string; body: string; placeholder?: boolean };

const bring: BringItem[] = [
  {
    icon: "🎫",
    title: "Your ticket",
    body: "Have your Eventbrite ticket ready on your phone or printed. We scan at the door.",
  },
  {
    icon: "☕",
    title: "Your own cup",
    body: "The venue doesn't allow disposable cups. Bring a reusable water bottle and coffee tumbler. Water fountains and coffee machines are available on site.",
  },
  {
    icon: "🍱",
    title: "Lunch",
    body: "Catering situation TBD — confirm with Vincent/Aletta before publishing.",
    placeholder: true,
  },
  {
    icon: "🔌",
    title: "Adapter (if presenting)",
    body: "Planning to show something? All rooms have HDMI and USB-C. Bring your own adapter just in case. And download anything you need in advance — venue Wi-Fi can be unpredictable.",
  },
];

type DayCard = {
  time: string;
  title: string;
  body: string;
  highlight?: boolean;
  placeholderInner?: string;
};

const dayCards: DayCard[] = [
  {
    time: "10:00",
    title: "Madness Session",
    body: "Where the day's programme gets built. Grab a pitch card if you want to run a session.",
  },
  {
    time: "11:00+",
    title: "Sessions",
    body: "Check the schedule board. Move between rooms freely.",
  },
  {
    time: "All day",
    title: "Portfolio Review Corner",
    body: "Sign up at the whiteboard for a 25-min review. Morning and afternoon slots.",
  },
  {
    time: "All day",
    title: "Speed Networking",
    body: "Join a table, grab a prompt card. Meet a lot of people in a short amount of time.",
  },
  {
    time: "All day",
    title: "Insight Wall",
    body: "Add your thoughts to the prompts on the wall. Open all day.",
  },
  {
    time: "All day",
    title: "UX Therapy Booth",
    body: "Write something anonymously. Hear it read back later.",
  },
  {
    time: "All day",
    title: "Micro-Exhibition",
    body: "Browse anytime — startups, student work, UX games, book exchange.",
  },
  {
    time: "17:00",
    title: "Closing",
    body: "Highlights, thank yous, prizes.",
  },
  {
    time: "17:15",
    title: "After party 🎉",
    body: "",
    highlight: true,
    placeholderInner: "After party venue details — confirm with Vincent before publishing.",
  },
];

const accessibility = [
  { icon: "🤫", title: "Quiet room", body: "Available all day — no sign-up needed." },
  { icon: "🤱", title: "Nursing room", body: "Available on the day — check at the registration desk on arrival." },
  {
    icon: "🎤",
    title: "Please use the mic",
    body: "During sessions, please use the microphone — the person at the back will thank you.",
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

export default function Prepare() {
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
        .uxc-prep a { text-decoration: none; }

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

        .uxc-btn-outline {
          display: inline-block;
          background: ${WHITE};
          color: ${RED};
          padding: 10px 24px;
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
        .uxc-btn-outline:hover { background: ${RED}; color: ${WHITE}; }

        .uxc-grid-60-40 { display: grid; grid-template-columns: 60fr 40fr; gap: 48px; align-items: start; }
        .uxc-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .uxc-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }

        .uxc-placeholder {
          background: ${WHITE};
          border: 1px solid ${MID_GREY};
          padding: 12px;
          font-family: ${FONT};
          font-style: italic;
          font-size: 14px;
          color: ${MID_GREY};
          margin-top: 12px;
        }

        .uxc-footer-nav a { color: ${WHITE}; font-size: 14px; }
        .uxc-footer-nav a:hover { color: ${RED}; }

        @media (max-width: 900px) {
          .uxc-grid-60-40 { grid-template-columns: 1fr; gap: 24px; }
          .uxc-grid-3 { grid-template-columns: 1fr; }
          .uxc-grid-2 { grid-template-columns: 1fr; }
          .uxc-h2 { font-size: 26px; }
        }
      `}</style>

      <div className="uxc-prep">
        {/* SECTION 1 — HERO */}
        <section style={{ background: DARK, color: WHITE, padding: "100px 5% 80px" }}>
          <div style={innerWrap}>
            <p
              style={{
                display: "inline-block",
                background: WHITE,
                padding: "6px 12px",
                fontFamily: FONT,
                fontWeight: 300,
                fontSize: 13,
                color: RED,
                textTransform: "uppercase",
                letterSpacing: 2,
                margin: 0,
                marginBottom: 24,
              }}
            >
              July 4, 2026
            </p>
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
              See you on July 4th! Here's everything you need.
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
                maxWidth: 640,
              }}
            >
              We're so excited to welcome you to #UXcampAMS26. Here's a quick guide to help your day run smoothly.
            </p>
          </div>
        </section>

        {/* SECTION 2 — TIME & LOCATION */}
        <section style={{ background: LIGHT_GREY, ...sectionPad }}>
          <div style={innerWrap}>
            <p className="uxc-eyebrow">Where and when</p>
            <h2 className="uxc-h2" style={{ marginBottom: 32 }}>Time &amp; location</h2>

            <div className="uxc-grid-60-40">
              <div>
                <dl style={{ margin: 0 }}>
                  {timeLocation.map((item) => (
                    <div
                      key={item.label}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "140px 1fr",
                        gap: 16,
                        padding: "14px 0",
                        borderBottom: `1px solid ${MID_GREY}`,
                        alignItems: "baseline",
                      }}
                    >
                      <dt
                        style={{
                          fontFamily: FONT,
                          fontWeight: 600,
                          fontSize: 13,
                          color: MID_GREY,
                          textTransform: "uppercase",
                          letterSpacing: 1,
                          margin: 0,
                        }}
                      >
                        {item.label}
                      </dt>
                      <dd
                        style={{
                          fontFamily: FONT,
                          fontWeight: 400,
                          fontSize: 16,
                          color: DARK,
                          margin: 0,
                        }}
                      >
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div style={{ marginTop: 24 }}>
                  <a
                    href="https://share.google/yLOQSabwIkGrJnmXW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="uxc-btn-outline"
                  >
                    Get directions →
                  </a>
                </div>
              </div>

              <div style={{ width: "100%", minHeight: 280 }}>
                <iframe
                  title="UX Camp Amsterdam venue map — Fraijlemaborg 133, 1102 CV Amsterdam"
                  width="100%"
                  height={600}
                  frameBorder={0}
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=%20Fraijlemaborg%20133,%201102%20CV%20Amsterdam+(undefined)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  style={{ display: "block", border: 0 }}
                />
              </div>
            </div>

            <div
              style={{
                marginTop: 24,
                background: LIGHT_GREY,
                border: `1px solid ${MID_GREY}`,
                padding: 20,
                textAlign: "center",
                fontFamily: FONT,
                fontStyle: "italic",
                fontSize: 14,
                color: MID_GREY,
              }}
            >
              Floor plan — add simple venue diagram showing session rooms, registration desk, Portfolio Review Corner, Insight Wall, Micro-Exhibition Space, quiet room, and nursing room.
            </div>
          </div>
        </section>

        {/* SECTION 3 — GETTING THERE */}
        <section style={{ background: WHITE, ...sectionPad }}>
          <div style={innerWrap}>
            <h2 className="uxc-h2" style={{ marginBottom: 32 }}>Getting there</h2>

            <div className="uxc-grid-3">
              {transport.map((t) => (
                <div
                  key={t.title}
                  style={{
                    background: LIGHT_GREY,
                    border: `1px solid ${MID_GREY}`,
                    borderTop: `4px solid ${RED}`,
                    padding: 28,
                  }}
                >
                  <div style={{ fontSize: 32, lineHeight: 1, marginBottom: 16 }}>{t.icon}</div>
                  <h3
                    style={{
                      fontFamily: FONT,
                      fontWeight: 600,
                      fontSize: 18,
                      color: DARK,
                      margin: 0,
                      marginBottom: 12,
                    }}
                  >
                    {t.title}
                  </h3>
                  {t.placeholder ? (
                    <div className="uxc-placeholder" style={{ marginTop: 0 }}>
                      {t.body}
                    </div>
                  ) : (
                    <div
                      style={{
                        fontFamily: FONT,
                        fontWeight: 400,
                        fontSize: 15,
                        lineHeight: 1.6,
                        color: DARK,
                      }}
                    >
                      {t.body}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — WHAT TO BRING */}
        <section style={{ background: LIGHT_GREY, ...sectionPad }}>
          <div style={innerWrap}>
            <p className="uxc-eyebrow">Don't forget</p>
            <h2 className="uxc-h2" style={{ marginBottom: 32 }}>What to bring</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {bring.map((b) => (
                <div
                  key={b.title}
                  style={{
                    background: WHITE,
                    border: `1px solid ${MID_GREY}`,
                    borderLeft: `4px solid ${RED}`,
                    padding: "24px 28px",
                    display: "flex",
                    gap: 20,
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{ fontSize: 32, lineHeight: 1, flex: "0 0 auto" }}>{b.icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3
                      style={{
                        fontFamily: FONT,
                        fontWeight: 600,
                        fontSize: 17,
                        color: DARK,
                        margin: 0,
                        marginBottom: 8,
                      }}
                    >
                      {b.title}
                    </h3>
                    {b.placeholder ? (
                      <div className="uxc-placeholder" style={{ marginTop: 0 }}>
                        {b.body}
                      </div>
                    ) : (
                      <p
                        style={{
                          fontFamily: FONT,
                          fontWeight: 400,
                          fontSize: 15,
                          lineHeight: 1.6,
                          color: DARK,
                          margin: 0,
                        }}
                      >
                        {b.body}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — WHAT'S HAPPENING ON THE DAY */}
        <section style={{ background: WHITE, ...sectionPad }}>
          <div style={innerWrap}>
            <p className="uxc-eyebrow">On the day</p>
            <h2 className="uxc-h2" style={{ marginBottom: 32 }}>What's happening</h2>

            <div className="uxc-grid-2">
              {dayCards.map((c, i) => {
                const isHighlight = !!c.highlight;
                const cardBg = isHighlight ? DARK : LIGHT_GREY;
                const titleColor = isHighlight ? WHITE : DARK;
                const bodyColor = isHighlight ? MID_GREY : DARK;
                return (
                  <div
                    key={i}
                    style={{
                      background: cardBg,
                      border: `1px solid ${MID_GREY}`,
                      padding: "20px 24px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: FONT,
                        fontWeight: 600,
                        fontSize: 13,
                        color: isHighlight ? WHITE : RED,
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        marginBottom: 8,
                      }}
                    >
                      {c.time}
                    </div>
                    <h3
                      style={{
                        fontFamily: FONT,
                        fontWeight: 600,
                        fontSize: 16,
                        color: titleColor,
                        margin: 0,
                        marginBottom: 8,
                      }}
                    >
                      {c.title}
                    </h3>
                    {c.body && (
                      <p
                        style={{
                          fontFamily: FONT,
                          fontWeight: 400,
                          fontSize: 14,
                          lineHeight: 1.6,
                          color: bodyColor,
                          margin: 0,
                        }}
                      >
                        {c.body}
                      </p>
                    )}
                    {c.placeholderInner && (
                      <div
                        style={{
                          background: "transparent",
                          border: `1px solid rgba(255,255,255,0.3)`,
                          padding: 12,
                          marginTop: 8,
                          fontFamily: FONT,
                          fontStyle: "italic",
                          fontSize: 14,
                          color: WHITE,
                        }}
                      >
                        {c.placeholderInner}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 6 — ACCESSIBILITY */}
        <section style={{ background: LIGHT_GREY, ...sectionPad }}>
          <div style={innerWrap}>
            <h2 className="uxc-h2" style={{ marginBottom: 12 }}>
              We want everyone to feel comfortable
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
              }}
            >
              A few things worth knowing before the day:
            </p>

            <div className="uxc-grid-3">
              {accessibility.map((a) => (
                <div
                  key={a.title}
                  style={{
                    background: WHITE,
                    border: `1px solid ${MID_GREY}`,
                    borderTop: `4px solid ${DARK}`,
                    padding: 28,
                  }}
                >
                  <div style={{ fontSize: 32, lineHeight: 1, marginBottom: 16 }}>{a.icon}</div>
                  <h3
                    style={{
                      fontFamily: FONT,
                      fontWeight: 600,
                      fontSize: 17,
                      color: DARK,
                      margin: 0,
                      marginBottom: 12,
                    }}
                  >
                    {a.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: FONT,
                      fontWeight: 400,
                      fontSize: 15,
                      lineHeight: 1.6,
                      color: DARK,
                      margin: 0,
                    }}
                  >
                    {a.body}
                  </p>
                </div>
              ))}
            </div>

            <p
              style={{
                fontFamily: FONT,
                fontStyle: "italic",
                fontSize: 14,
                color: MID_GREY,
                marginTop: 24,
                marginBottom: 0,
                textAlign: "center",
              }}
            >
              Room locations to be confirmed with Greg and Vincent before publishing.
            </p>
          </div>
        </section>

        {/* SECTION 7 — CLOSING MESSAGE */}
        <section style={{ background: DARK, color: WHITE, padding: "80px 5%" }}>
          <div style={{ ...innerWrap, textAlign: "center" }}>
            <h2
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: 36,
                color: WHITE,
                margin: 0,
                marginBottom: 24,
              }}
            >
              Now it's over to you
            </h2>
            <p
              style={{
                fontFamily: FONT,
                fontWeight: 300,
                fontSize: 18,
                lineHeight: 1.8,
                color: WHITE,
                margin: "0 auto 32px",
                maxWidth: 600,
              }}
            >
              We've been working behind the scenes for months to get to today. When those doors open, it's yours — to connect, share, and bring your best to the UX community. We can't wait.
            </p>
            <p
              style={{
                fontFamily: FONT,
                fontWeight: 600,
                fontSize: 17,
                color: RED,
                margin: 0,
                marginBottom: 16,
              }}
            >
              See you tomorrow. 🧡
            </p>
            <p
              style={{
                fontFamily: FONT,
                fontWeight: 300,
                fontSize: 15,
                color: MID_GREY,
                letterSpacing: 2,
                margin: 0,
              }}
            >
              #UXcampAMS26
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
