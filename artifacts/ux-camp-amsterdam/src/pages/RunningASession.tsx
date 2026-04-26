import { useEffect } from "react";
import { Link } from "wouter";
import heroBg from "../../assets/images/Running_a_session_hero.jpg";

const RED = "#B20101";
const DARK = "#333333";
const LIGHT_GREY = "#F5F5F5";
const MID_GREY = "#CCCCCC";
const WHITE = "#FFFFFF";

const FONT = "'Open Sans', sans-serif";

const sectionPad: React.CSSProperties = { padding: "80px 5%" };
const innerWrap: React.CSSProperties = { maxWidth: 1200, margin: "0 auto" };

const reasons = [
  "To give back to a community you've learned a lot from",
  "To connect with people who care about the same topics you do",
  "To think more clearly — talking about something out loud does that",
  "To practise speaking and facilitating, which matter for our work",
  "Because the gong is kind of fun",
];

type Step = {
  number: string;
  title: string;
  body: string;
  pills?: string[];
  link?: { label: string; href: string };
  placeholder?: string;
};

const steps: Step[] = [
  {
    number: "1",
    title: "Pick a topic",
    body: "Pick something you're genuinely curious or passionate about. You don't need all the answers. Ask yourself: what question do I keep coming back to? What did I learn the hard way? What would I love to debate with a room full of smart UX people?",
  },
  {
    number: "2",
    title: "Decide your goal",
    body: "What do you want people to walk away with? Nail this before you prepare — it shapes everything. When you're done, check it against this goal.",
  },
  {
    number: "3",
    title: "Choose a format",
    body: "Talk, case study, workshop, or structured discussion. If you're not sure, go for a discussion — less pressure on you, more interesting for the room. Details on each format are on the About page.",
    pills: ["Talk", "Case Study", "Workshop", "Structured Discussion"],
    link: { label: "See format details →", href: "/how-it-works" },
  },
  {
    number: "4",
    title: "Pitch in the Madness Session",
    body: "At 10am, grab a pitch card, join the queue, and give your 30-second pitch. Tell us: what it's about, what people will take away, and whether it's for beginners or more experienced attendees. If you pitch, you get a slot. That's the deal.",
    placeholder: "2026 pitch card template — add image here before publishing",
  },
  {
    number: "5",
    title: "Run it",
    body: "Arrive at your room a few minutes before your slot. Rooms have HDMI and USB-C, bring your own adapter if needed — we can't guarantee spares. Download anything you need beforehand; Wi-Fi can be slow. Keep an eye on time. Shorter sessions almost always land better. Break a leg.",
    pills: ["HDMI available", "USB-C available", "Bring your own adapter"],
  },
];

const quotes = [
  {
    text: "I kept waiting until I had the perfect topic. Turns out the thing I was most unsure about was exactly what people wanted to talk about.",
    name: "[Speaker name]",
    role: "[Role], UXcampAMS 2024",
  },
  {
    text: "30 seconds to pitch sounds terrifying. Then you do it and realise the hardest part is already over.",
    name: "[Speaker name]",
    role: "[Role], UXcampAMS 2024",
  },
  {
    text: "The room was more generous than I expected. People genuinely want you to do well.",
    name: "[Speaker name]",
    role: "[Role], UXcampAMS 2023",
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

export default function RunningASession() {
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
        .uxc-rs a { text-decoration: none; }

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

        .uxc-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
        .uxc-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }

        .uxc-step-row {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 32px;
          align-items: start;
          padding: 32px 0;
          border-bottom: 1px solid ${MID_GREY};
        }
        .uxc-step-row:last-child { border-bottom: none; }

        .uxc-mini-pill {
          display: inline-block;
          background: ${LIGHT_GREY};
          border: 1px solid ${MID_GREY};
          color: ${DARK};
          padding: 6px 14px;
          font-family: ${FONT};
          font-weight: 400;
          font-size: 13px;
          line-height: 1.3;
        }

        .uxc-link {
          display: inline-block;
          font-family: ${FONT};
          font-weight: 600;
          font-size: 14px;
          color: ${RED};
        }
        .uxc-link:hover { color: ${DARK}; }

        .uxc-footer-nav a { color: ${WHITE}; font-size: 14px; }
        .uxc-footer-nav a:hover { color: ${RED}; }

        @media (max-width: 900px) {
          .uxc-grid-2 { grid-template-columns: 1fr; gap: 32px; }
          .uxc-grid-3 { grid-template-columns: 1fr; }
          .uxc-step-row { grid-template-columns: 1fr; gap: 12px; }
        }
      `}</style>

      <div className="uxc-rs">
        {/* SECTION 1 — HERO */}
        <section
          style={{
            backgroundImage: `linear-gradient(rgba(51,51,51,0.78), rgba(51,51,51,0.85)), url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: WHITE,
            padding: "100px 5% 80px",
          }}
        >
          <div style={innerWrap}>
            <p
              style={{
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
              Running a session
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
              You don't need to be an expert. You just need to care.
            </h1>

            <p
              style={{
                fontFamily: FONT,
                fontWeight: 300,
                fontSize: 18,
                lineHeight: 1.6,
                color: MID_GREY,
                margin: 0,
                marginTop: 24,
                marginBottom: 32,
                maxWidth: 640,
              }}
            >
              Every year, half our session leaders are running one for the first time. They're practitioners just like you with something real to share.
            </p>

            <a href="#how-it-works" className="uxc-btn-primary">
              Here's how it works →
            </a>
          </div>
        </section>

        {/* SECTION 2 — WHY RUN A SESSION? */}
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
                    marginBottom: 16,
                  }}
                >
                  Still thinking about it?
                </h2>
                <p
                  style={{
                    fontFamily: FONT,
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: 1.7,
                    color: DARK,
                    margin: 0,
                    marginBottom: 24,
                  }}
                >
                  Here are the reasons people actually do it:
                </p>

                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {reasons.map((r) => (
                    <li
                      key={r}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 16,
                        padding: "14px 0",
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
                          lineHeight: 1.8,
                          color: DARK,
                        }}
                      >
                        {r}
                      </span>
                    </li>
                  ))}
                </ul>
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
                  "The best sessions aren't the most polished ones. They're the most honest ones."
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
                  Heard at UXcampAMS, every year.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — HOW TO RUN A SESSION */}
        <section id="how-it-works" style={{ background: WHITE, ...sectionPad }}>
          <div style={innerWrap}>
            <p
              style={{
                fontFamily: FONT,
                fontWeight: 300,
                fontSize: 13,
                color: RED,
                textTransform: "uppercase",
                letterSpacing: 2,
                margin: 0,
                marginBottom: 12,
              }}
            >
              Step by step
            </p>
            <h2
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: 32,
                color: DARK,
                margin: 0,
                marginBottom: 32,
              }}
            >
              How to run a session
            </h2>

            <div>
              {steps.map((s) => (
                <div key={s.number} className="uxc-step-row">
                  <div
                    style={{
                      fontFamily: FONT,
                      fontWeight: 800,
                      fontSize: 48,
                      lineHeight: 1,
                      color: RED,
                      minWidth: 80,
                    }}
                  >
                    {s.number}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: FONT,
                        fontWeight: 600,
                        fontSize: 20,
                        color: DARK,
                        margin: 0,
                        marginBottom: 12,
                      }}
                    >
                      {s.title}
                    </h3>
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
                      {s.body}
                    </p>

                    {s.pills && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                        {s.pills.map((p) => (
                          <span key={p} className="uxc-mini-pill">
                            {p}
                          </span>
                        ))}
                      </div>
                    )}

                    {s.link && (
                      <div style={{ marginTop: 12 }}>
                        <Link href={s.link.href} className="uxc-link">
                          {s.link.label}
                        </Link>
                      </div>
                    )}

                    {s.placeholder && (
                      <div
                        style={{
                          background: LIGHT_GREY,
                          border: `1px solid ${MID_GREY}`,
                          padding: 20,
                          marginTop: 16,
                          textAlign: "center",
                          fontFamily: FONT,
                          fontStyle: "italic",
                          fontSize: 14,
                          color: MID_GREY,
                        }}
                      >
                        {s.placeholder}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — TIPS FROM PAST SPEAKERS */}
        <section style={{ background: LIGHT_GREY, ...sectionPad }}>
          <div style={innerWrap}>
            <h2
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: 32,
                color: DARK,
                margin: 0,
                marginBottom: 48,
                textAlign: "center",
              }}
            >
              From people who've done it
            </h2>

            <div className="uxc-grid-3">
              {quotes.map((q, i) => (
                <div
                  key={i}
                  style={{
                    background: WHITE,
                    border: `1px solid ${MID_GREY}`,
                    borderTop: `4px solid ${RED}`,
                    padding: 32,
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      fontFamily: FONT,
                      fontWeight: 800,
                      fontSize: 48,
                      lineHeight: 1,
                      color: RED,
                      marginBottom: 16,
                    }}
                  >
                    "
                  </div>
                  <p
                    style={{
                      fontFamily: FONT,
                      fontWeight: 300,
                      fontSize: 17,
                      lineHeight: 1.7,
                      color: DARK,
                      margin: 0,
                      marginBottom: 24,
                    }}
                  >
                    {q.text}
                  </p>
                  <div
                    style={{
                      fontFamily: FONT,
                      fontWeight: 600,
                      fontSize: 14,
                      color: DARK,
                      marginBottom: 4,
                    }}
                  >
                    {q.name}
                  </div>
                  <div
                    style={{
                      fontFamily: FONT,
                      fontWeight: 400,
                      fontSize: 13,
                      color: MID_GREY,
                    }}
                  >
                    {q.role}
                  </div>
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
                marginTop: 32,
                marginBottom: 0,
                textAlign: "center",
              }}
            >
              Quotes to be refreshed with 2024/2025 speakers before publishing.
            </p>
          </div>
        </section>

        {/* SECTION 5 — SPEAKER PREP WEBINAR */}
        <section style={{ background: WHITE, ...sectionPad }}>
          <div style={innerWrap}>
            <div
              style={{
                background: LIGHT_GREY,
                borderLeft: `4px solid ${RED}`,
                padding: "28px 36px",
              }}
            >
              <p
                style={{
                  fontFamily: FONT,
                  fontWeight: 400,
                  fontSize: 12,
                  color: RED,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  margin: 0,
                  marginBottom: 12,
                }}
              >
                For first-time session leaders
              </p>
              <h3
                style={{
                  fontFamily: FONT,
                  fontWeight: 600,
                  fontSize: 20,
                  lineHeight: 1.4,
                  color: DARK,
                  margin: 0,
                  marginBottom: 16,
                }}
              >
                We're running a short online speaker prep session before the event.
              </h3>
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
                A chance to talk through your idea, get some feedback, and feel more confident before the day. Details will be shared in your ticket confirmation email.
              </p>
              <p
                style={{
                  fontFamily: FONT,
                  fontWeight: 400,
                  fontStyle: "italic",
                  fontSize: 14,
                  color: MID_GREY,
                  margin: 0,
                }}
              >
                Add speaker webinar date and link here once confirmed.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6 — CTA BANNER */}
        <section style={{ background: RED, color: WHITE, padding: "60px 5%" }}>
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
              Ready to pitch your idea?
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
                  style={{
                    display: "block",
                    fontFamily: FONT,
                    fontWeight: 600,
                    fontSize: 14,
                    color: WHITE,
                    marginBottom: 8,
                  }}
                >
                  Instagram @uxcampamsterdam
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
