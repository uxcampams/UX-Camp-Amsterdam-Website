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
    icon: "🔌",
    title: "Adapter (if presenting)",
    body: "Planning to show something? All rooms have HDMI and USB-C. Bring your own adapter just in case. And download anything you need in advance — venue Wi-Fi can be unpredictable.",
  },
  {
    icon: "🥪",
    title: "Buy or bring your own lunch",
    body: "There is a restaurant in the building on the first floor. You can buy your lunch there. Of course you can bring lunch for yourself and something small to share with your new friends.",
  },
];

const accessibility = [
  { icon: "🤫", title: "Quiet room", body: "Available all day — no sign-up needed." },
  { icon: "🤱", title: "Nursing room", body: "Available on the day — check at the registration desk on arrival." },
];

export default function Prepare() {
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

        .uxc-placeholder {
          background: ${WHITE};
          border: 1px solid ${MID_GREY};
          padding: 12px;
          font-family: ${FONT};
          font-style: italic;
          font-size: 14px;
          color: var(--color-text-muted);
          margin-top: 12px;
        }

        @media (max-width: 900px) {
          .uxc-grid-60-40 { grid-template-columns: 1fr; gap: 24px; }
          .uxc-grid-3 { grid-template-columns: 1fr; }
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
              For ticket holders
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
              Got your ticket? Here's your last reminder before July 4th.
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
              The practical stuff for right before the event: when to arrive, how to get there, and what to bring.
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
                          color: "var(--color-text-muted)",
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
      </div>
    </main>
  );
}
