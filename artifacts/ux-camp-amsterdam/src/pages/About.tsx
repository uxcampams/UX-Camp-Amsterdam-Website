import { useEffect } from "react";
import { Link } from "wouter";
import heroBg from "../../assets/images/About_hero.jpg";

const RED = "#B20101";
const DARK = "#333333";
const LIGHT_GREY = "#F5F5F5";
const MID_GREY = "#CCCCCC";
const WHITE = "#FFFFFF";

const FONT = "'Open Sans', sans-serif";

const schedule: { time: string; label: string; highlight?: boolean }[] = [
  { time: "9:30", label: "Doors open — registration, coffee, saying hi to strangers" },
  { time: "10:00", label: "Welcome & Madness Session — pitches, voting, live schedule built" },
  { time: "11:00", label: "Session rounds begin across all tracks" },
  { time: "12:30", label: "Lunch" },
  { time: "13:30", label: "Afternoon sessions" },
  { time: "15:00", label: "Break" },
  { time: "15:30", label: "Final session rounds" },
  { time: "17:00", label: "Closing — highlights, thank yous, prizes" },
  { time: "17:15", label: "After party — drinks, the best conversations of the day 🎉", highlight: true },
];

type NewFormatCard = {
  icon: string;
  title: string;
  body: string;
  pills?: string[];
};

const newFormats: NewFormatCard[] = [
  {
    icon: "🗂",
    title: "Portfolio Review Corner",
    body: "Bring your piece of work whether it's finished, messy, or in-progress. Get structured feedback from a peer or an experienced mentor in a dedicated 25-minute slot. Two slots: one in the morning, one after lunch. Sign up at the whiteboard on the day.",
  },
  {
    icon: "⚡",
    title: "Speed Networking",
    body: "5-minute rounds, prompt cards on every table, themed tables for researchers, freelancers, career switchers, and design leads. It sounds chaotic. It works incredibly well.",
    pills: [
      "What UX mistake taught you the most?",
      "What skill are you building right now?",
      "What's something you changed your mind about?",
    ],
  },
];

const sessionFormats = [
  {
    title: "Talk / Presentation",
    body: "Share knowledge on a topic you care about. Bring slides if you want, leave time for Q&A. Works best when you have a point of view, not just information.",
  },
  {
    title: "Case Study",
    body: "Show what you did, what worked, what didn't, and what you'd do differently. The honest ones are always the best.",
  },
  {
    title: "Workshop",
    body: "A hands-on session where people actually do something, apply a skill, solve a problem, make something together. Bring any specialist materials you need beyond paper and post-its.",
  },
  {
    title: "Structured Discussion",
    body: "Bring a frame, some questions, and a point of view. Formats like World Café or Birds of a Feather work well. The key word is structured — open-ended discussions without a guide rarely land.",
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

const sectionPad: React.CSSProperties = { padding: "80px 5%" };
const innerWrap: React.CSSProperties = { maxWidth: 1200, margin: "0 auto" };

export default function About() {
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
        .uxc-about a { text-decoration: none; }

        .uxc-btn-on-red {
          display: inline-block;
          background: ${WHITE};
          color: ${RED};
          padding: 14px 36px;
          font-size: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-weight: 800;
          border: 2px solid ${WHITE};
          border-radius: 0;
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .uxc-btn-on-red:hover { background: ${DARK}; color: ${WHITE}; border-color: ${DARK}; }

        .uxc-link {
          display: inline-block;
          font-family: ${FONT};
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: ${RED};
        }
        .uxc-link:hover { color: ${DARK}; }

        .uxc-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
        .uxc-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .uxc-grid-2x2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }

        .uxc-card {
          background: ${WHITE};
          border: 1px solid ${MID_GREY};
          border-top: 4px solid ${RED};
          padding: 28px;
          display: flex;
          flex-direction: column;
        }

        .uxc-tag {
          display: inline-block;
          background: ${RED};
          color: ${WHITE};
          padding: 6px 14px;
          font-family: ${FONT};
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 0;
        }

        .uxc-mini-pill {
          display: inline-block;
          background: ${LIGHT_GREY};
          border: 1px solid ${MID_GREY};
          color: ${DARK};
          padding: 10px 14px;
          font-family: ${FONT};
          font-weight: 400;
          font-size: 13px;
          line-height: 1.3;
        }

        .uxc-footer-nav a { color: ${WHITE}; font-size: 14px; }
        .uxc-footer-nav a:hover { color: ${RED}; }

        @media (max-width: 900px) {
          .uxc-grid-2 { grid-template-columns: 1fr; gap: 32px; }
          .uxc-grid-3 { grid-template-columns: 1fr; }
          .uxc-grid-2x2 { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="uxc-about">
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
          <div style={{ ...innerWrap, textAlign: "left" }}>
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
              How it works
            </p>

            <h1
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: "clamp(36px, 5vw, 60px)",
                lineHeight: 1.1,
                color: WHITE,
                margin: 0,
                maxWidth: 1000,
              }}
            >
              So, how does this all work?
            </h1>

            <p
              style={{
                fontFamily: FONT,
                fontWeight: 300,
                fontSize: 18,
                lineHeight: 1.6,
                color: WHITE,
                marginTop: 24,
                marginBottom: 0,
                maxWidth: 680,
              }}
            >
              UXcampAMS is a one-day, non-profit BarCamp for UX designers, researchers, product thinkers and anyone who cares about building better experiences. Now in its 9th edition, it's made entirely by the community, for the community.
            </p>
          </div>
        </section>

        {/* SECTION 2 — WHAT IS A BARCAMP? */}
        <section style={{ background: LIGHT_GREY, ...sectionPad }}>
          <div style={innerWrap}>
            <div className="uxc-grid-2">
              <div>
                <h2
                  style={{
                    fontFamily: FONT,
                    fontWeight: 800,
                    fontSize: 28,
                    lineHeight: 1.2,
                    color: DARK,
                    margin: 0,
                    marginBottom: 24,
                  }}
                >
                  No agenda. No speaker list. Just people with ideas.
                </h2>
                <p
                  style={{
                    fontFamily: FONT,
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: 1.7,
                    color: DARK,
                    margin: 0,
                    marginBottom: 16,
                  }}
                >
                  A BarCamp is an open, participant-driven event. There's no pre-announced programme. The agenda gets built on the day, by you, and everyone else in the room.
                </p>
                <p
                  style={{
                    fontFamily: FONT,
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: 1.7,
                    color: DARK,
                    margin: 0,
                  }}
                >
                  Every attendee is invited to pitch a session in the morning. Pitches are 30 seconds flat, we have a gong, and we use it. The audience votes by raising their hands, the organisers assign rooms and time slots, and the day begins.
                </p>
              </div>

              <div
                style={{
                  background: WHITE,
                  borderLeft: `4px solid ${RED}`,
                  padding: 28,
                }}
              >
                <p
                  style={{
                    fontFamily: FONT,
                    fontWeight: 300,
                    fontSize: 22,
                    lineHeight: 1.4,
                    color: DARK,
                    margin: 0,
                    marginBottom: 16,
                  }}
                >
                  "There are no spectators. Only contributors."
                </p>
                <p
                  style={{
                    fontFamily: FONT,
                    fontWeight: 400,
                    fontSize: 14,
                    color: MID_GREY,
                    margin: 0,
                  }}
                >
                  The first rule of BarCamp.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — HOW THE DAY FLOWS */}
        <section style={{ background: WHITE, ...sectionPad }}>
          <div style={innerWrap}>
            <h2
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: "clamp(32px, 4vw, 44px)",
                color: DARK,
                margin: 0,
                marginBottom: 48,
                textAlign: "center",
              }}
            >
              How the day flows
            </h2>

            <div
              style={{
                position: "relative",
                paddingLeft: 32,
                borderLeft: `2px solid ${MID_GREY}`,
                maxWidth: 820,
                margin: "0 auto",
              }}
            >
              {schedule.map((item) => (
                <div
                  key={item.time}
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 24,
                    paddingBottom: 24,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: -38,
                      top: 6,
                      width: 10,
                      height: 10,
                      background: RED,
                      borderRadius: "50%",
                    }}
                  />
                  <div
                    style={{
                      minWidth: 80,
                      fontFamily: FONT,
                      fontWeight: 600,
                      fontSize: 16,
                      color: RED,
                    }}
                  >
                    {item.time}
                  </div>
                  <div
                    style={{
                      fontFamily: FONT,
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: 1.6,
                      color: item.highlight ? RED : DARK,
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — WHAT'S NEW IN 2026 */}
        <section style={{ background: LIGHT_GREY, ...sectionPad }}>
          <div style={innerWrap}>
            <span className="uxc-tag">New in 2026</span>
            <h2
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: "clamp(32px, 4vw, 44px)",
                color: DARK,
                margin: 0,
                marginTop: 16,
                marginBottom: 20,
              }}
            >
              More ways to connect this year
            </h2>
            <p
              style={{
                fontFamily: FONT,
                fontWeight: 400,
                fontSize: 17,
                lineHeight: 1.7,
                color: DARK,
                margin: 0,
                marginBottom: 32,
                maxWidth: 820,
              }}
            >
              We've added new formats alongside the usual sessions to make the day more hands-on and more fun.
            </p>

            <div className="uxc-grid-3">
              {newFormats.map((f) => (
                <div key={f.title} className="uxc-card">
                  <div style={{ fontSize: 32, marginBottom: 16, lineHeight: 1 }}>{f.icon}</div>
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
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: FONT,
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: DARK,
                      margin: 0,
                    }}
                  >
                    {f.body}
                  </p>
                  {f.pills && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                      {f.pills.map((p) => (
                        <span key={p} className="uxc-mini-pill">
                          {p}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — SESSION FORMATS */}
        <section style={{ background: WHITE, ...sectionPad }}>
          <div style={innerWrap}>
            <p
              style={{
                fontFamily: FONT,
                fontWeight: 400,
                fontSize: 14,
                color: MID_GREY,
                margin: 0,
                marginBottom: 12,
              }}
            >
              Sessions at UXcampAMS come in a few different shapes:
            </p>
            <h2
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: "clamp(32px, 4vw, 44px)",
                color: DARK,
                margin: 0,
                marginBottom: 32,
              }}
            >
              What kinds of sessions can people run?
            </h2>

            <div className="uxc-grid-2x2">
              {sessionFormats.map((f) => (
                <div key={f.title} className="uxc-card">
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
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: FONT,
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: DARK,
                      margin: 0,
                    }}
                  >
                    {f.body}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link href="/running-a-session" className="uxc-link">
                Thinking about running one? →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 6 — CTA BANNER */}
        <section style={{ background: RED, color: WHITE, ...sectionPad }}>
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
              Ready to join?
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
              Saturday, July 4, 2026 · Amsterdam
            </p>
            <a
              href="https://www.eventbrite.com/e/ux-camp-amsterdam-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="uxc-btn-on-red"
            >
              Grab your ticket →
            </a>
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
