import { Link } from "wouter";

const RED = "#B20101";
const DARK = "#333333";
const LIGHT_GREY = "#F5F5F5";
const MID_GREY = "#CCCCCC";
const WHITE = "#FFFFFF";

const FONT = "'Open Sans', sans-serif";

const stats = [
  { value: "9th", label: "Edition" },
  { value: "150+", label: "Participants" },
  { value: "25+", label: "Sessions" },
  { value: "4", label: "Tracks" },
];

const tracks = [
  {
    name: "UX Research",
    body: "Methods, insights, and stories from people uncovering what users really need.",
  },
  {
    name: "UX & Product Design",
    body: "Craft, process, and patterns from designers shipping work in the real world.",
  },
  {
    name: "Strategy & Leadership",
    body: "Building teams, influencing roadmaps, and growing design as a discipline.",
  },
  {
    name: "Career & Community",
    body: "Portfolios, mentorship, and the messy, human side of working in UX.",
  },
];

const sessions = [
  { title: "Portfolio Review Corner", meta: "All day · Open table" },
  { title: "Speed Networking", meta: "Morning · 30 min" },
  { title: "Fishbowl Discussions", meta: "Afternoon · 45 min" },
  { title: "UX Therapy Booth", meta: "Drop-in · All day" },
  { title: "Insight Wall", meta: "All day · Contribute anytime" },
  { title: "Micro-Exhibition Space", meta: "All day · Show your work" },
];

const sectionPad: React.CSSProperties = {
  padding: "80px 5%",
};
const innerWrap: React.CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
};

export default function Home() {
  return (
    <main style={{ fontFamily: FONT, color: DARK }}>
      <style>{`
        .uxc-home a { text-decoration: none; }
        .uxc-btn-primary {
          display: inline-block;
          background: ${RED};
          color: ${WHITE};
          padding: 14px 32px;
          font-size: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-weight: 600;
          border: 2px solid ${RED};
          border-radius: 0;
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .uxc-btn-primary:hover { background: ${DARK}; border-color: ${DARK}; }
        .uxc-btn-outline {
          display: inline-block;
          background: transparent;
          color: ${WHITE};
          padding: 14px 32px;
          font-size: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-weight: 600;
          border: 2px solid ${WHITE};
          border-radius: 0;
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .uxc-btn-outline:hover { background: ${WHITE}; color: ${DARK}; }
        .uxc-btn-on-red {
          display: inline-block;
          background: ${WHITE};
          color: ${RED};
          padding: 16px 40px;
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

        .uxc-stats { display: flex; flex-direction: row; }
        .uxc-stat {
          flex: 1 1 0;
          text-align: center;
          padding: 56px 24px;
          border-right: 1px solid rgba(255,255,255,0.3);
        }
        .uxc-stat:last-child { border-right: none; }

        .uxc-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        .uxc-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .uxc-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 900px) {
          .uxc-grid-2 { grid-template-columns: 1fr; gap: 32px; }
          .uxc-grid-4 { grid-template-columns: repeat(2, 1fr); }
          .uxc-grid-3 { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .uxc-stats { flex-wrap: wrap; }
          .uxc-stat {
            flex: 1 1 50%;
            border-right: 1px solid rgba(255,255,255,0.3);
            border-bottom: 1px solid rgba(255,255,255,0.3);
          }
          .uxc-stat:nth-child(2n) { border-right: none; }
          .uxc-stat:nth-child(n+3) { border-bottom: none; }
          .uxc-grid-4 { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="uxc-home">
        {/* HERO */}
        <section
          style={{
            background: DARK,
            color: WHITE,
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px 5%",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 980, margin: "0 auto" }}>
            <h1
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: "clamp(48px, 8vw, 80px)",
                lineHeight: 1.05,
                letterSpacing: "-0.5px",
                color: WHITE,
                margin: 0,
              }}
            >
              UX Camp Amsterdam 2026
            </h1>

            <p
              style={{
                fontFamily: FONT,
                fontWeight: 300,
                fontSize: 22,
                color: RED,
                marginTop: 24,
                marginBottom: 0,
              }}
            >
              All eXperiences start with yoU!
            </p>

            <p
              style={{
                fontFamily: FONT,
                fontWeight: 400,
                fontSize: 16,
                color: MID_GREY,
                marginTop: 16,
                marginBottom: 40,
              }}
            >
              Saturday, July 4, 2026 · Hogeschool van Amsterdam
            </p>

            <div style={{ display: "inline-flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
              <a
                href="https://www.eventbrite.com/e/ux-camp-amsterdam-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="uxc-btn-primary"
              >
                Register Now
              </a>
              <a href="#about" className="uxc-btn-outline">Learn More</a>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section style={{ background: RED, color: WHITE }}>
          <div className="uxc-stats">
            {stats.map((s) => (
              <div key={s.label} className="uxc-stat">
                <div
                  style={{
                    fontFamily: FONT,
                    fontWeight: 800,
                    fontSize: 48,
                    lineHeight: 1,
                    color: WHITE,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: FONT,
                    fontWeight: 300,
                    fontSize: 14,
                    color: WHITE,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    marginTop: 12,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" style={{ background: LIGHT_GREY, ...sectionPad }}>
          <div style={innerWrap}>
            <div className="uxc-grid-2">
              <div>
                <h2
                  style={{
                    fontFamily: FONT,
                    fontWeight: 800,
                    fontSize: "clamp(32px, 4vw, 44px)",
                    color: DARK,
                    margin: 0,
                    marginBottom: 24,
                  }}
                >
                  What is UX Camp?
                </h2>
                <p
                  style={{
                    fontFamily: FONT,
                    fontWeight: 400,
                    fontSize: 17,
                    lineHeight: 1.7,
                    color: DARK,
                    margin: 0,
                    marginBottom: 16,
                  }}
                >
                  UX Camp Amsterdam is a free-flowing unconference where you set the agenda,
                  run the sessions, and shape the day. Show up with an idea, a case study, a
                  rant, or a question — pitch it in 30 seconds and, if people want to hear it,
                  you're on.
                </p>
                <p
                  style={{
                    fontFamily: FONT,
                    fontWeight: 400,
                    fontSize: 17,
                    lineHeight: 1.7,
                    color: DARK,
                    margin: 0,
                  }}
                >
                  No keynotes. No panels. No gatekeepers. Just 150+ designers, researchers,
                  and product folks building one day together — and walking out with more
                  conversations than they came with.
                </p>
              </div>

              <div
                style={{
                  background: WHITE,
                  borderLeft: `4px solid ${RED}`,
                  padding: "40px 32px",
                }}
              >
                <p
                  style={{
                    fontFamily: FONT,
                    fontWeight: 300,
                    fontSize: 28,
                    lineHeight: 1.4,
                    color: DARK,
                    margin: 0,
                  }}
                >
                  All eXperiences start with yoU!
                </p>
                <p
                  style={{
                    fontFamily: FONT,
                    fontWeight: 600,
                    fontSize: 12,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    color: MID_GREY,
                    marginTop: 24,
                    marginBottom: 0,
                  }}
                >
                  — UX Camp Amsterdam
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRACKS */}
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
              4 Tracks
            </h2>

            <div className="uxc-grid-4">
              {tracks.map((t) => (
                <div
                  key={t.name}
                  style={{
                    background: WHITE,
                    border: `1px solid ${MID_GREY}`,
                    borderTop: `4px solid ${RED}`,
                    padding: 32,
                  }}
                >
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
                    {t.name}
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
                    {t.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SESSIONS */}
        <section style={{ background: LIGHT_GREY, ...sectionPad }}>
          <div style={innerWrap}>
            <h2
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: "clamp(32px, 4vw, 44px)",
                color: DARK,
                margin: 0,
                marginBottom: 16,
                textAlign: "center",
              }}
            >
              New Session Formats
            </h2>
            <p
              style={{
                fontFamily: FONT,
                fontWeight: 400,
                fontSize: 16,
                color: DARK,
                textAlign: "center",
                margin: "0 auto 48px",
                maxWidth: 640,
              }}
            >
              Alongside the usual pitched sessions, we've added new ways to connect this year.
            </p>

            <div className="uxc-grid-3">
              {sessions.map((s) => (
                <div
                  key={s.title}
                  style={{
                    background: WHITE,
                    border: `1px solid ${MID_GREY}`,
                    padding: 24,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: FONT,
                      fontWeight: 600,
                      fontSize: 16,
                      color: DARK,
                      margin: 0,
                      marginBottom: 8,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: FONT,
                      fontWeight: 400,
                      fontSize: 13,
                      color: MID_GREY,
                      margin: 0,
                    }}
                  >
                    {s.meta}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 48 }}>
              <Link
                href="/how-it-works"
                style={{
                  fontFamily: FONT,
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  color: RED,
                }}
              >
                Learn how the day works →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: RED, color: WHITE, ...sectionPad }}>
          <div style={{ ...innerWrap, textAlign: "center" }}>
            <h2
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: "clamp(36px, 5vw, 56px)",
                color: WHITE,
                margin: 0,
                marginBottom: 16,
              }}
            >
              Join Us in Amsterdam
            </h2>
            <p
              style={{
                fontFamily: FONT,
                fontWeight: 300,
                fontSize: 18,
                color: WHITE,
                margin: "0 auto 40px",
                maxWidth: 640,
              }}
            >
              Saturday, July 4, 2026 · Hogeschool van Amsterdam
            </p>
            <a
              href="https://www.eventbrite.com/e/ux-camp-amsterdam-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="uxc-btn-on-red"
            >
              Register Now
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
