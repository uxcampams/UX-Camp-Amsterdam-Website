import { useEffect } from "react";
import { Link } from "wouter";
import { TICKET_URL } from "../constants";
import heroBg from "../../assets/images/Home_hero.jpg";
import photo1 from "../../assets/images/1000014612.jpg";
import photo2 from "../../assets/images/1000014617.jpg";
import photo3 from "../../assets/images/1000014623.jpg";
import photo4 from "../../assets/images/1000014637.jpg";
import photo5 from "../../assets/images/20240629_120357.jpg";
import photo6 from "../../assets/images/20240629_153725.jpg";

const RED = "#B20101";
const DARK = "#333333";
const LIGHT_GREY = "#F5F5F5";
const MID_GREY = "#CCCCCC";
const WHITE = "#FFFFFF";

const FONT = "'Open Sans', sans-serif";

const stats = [
  { value: "9th", label: "Edition" },
  { value: "120+", label: "Participants" },
  { value: "25+", label: "Sessions" },
];


const newFormats = [
  {
    title: "Speed Networking",
    body: "Back on popular demand! Fast, structured, actually useful.",
  },
  {
    title: "Portfolio Review Corner",
    body: "New to UX? Someone will have you back.",
  },
];

const audienceCards = [
  {
    icon: "💡",
    title: "I have something to share",
    body: "A project you learned from. A question you keep coming back to. A half-formed idea you want to think through with other people. You don't need to be an expert.",
    link: "/running-a-session",
    linkLabel: "How to run a session →",
  },
  {
    icon: "🙌",
    title: "I'm here to learn and meet people",
    body: "Attend sessions, join discussions, write something on the Insight Wall, get feedback on your work, or just have a really good conversation over lunch.",
    link: "/how-it-works",
    linkLabel: "What to expect →",
  },
  {
    icon: "🧡",
    title: "My company wants to support",
    body: "150+ UX professionals in one room. Help make it happen and get your brand in front of Amsterdam's design community.",
    link: "/ux-camp-amsterdam-sponsorship",
    linkLabel: "Sponsorship info →",
  },
];

const firstTimeItems = [
  { icon: "🎫", title: "", text: "Your ticket — Eventbrite, on your phone is fine" },
  {
    icon: "☕",
    title: "BYOC — Bring Your Own Cup",
    text: "The venue doesn't allow disposable cups. Bring a reusable water bottle and coffee tumbler.",
  },
  { icon: "💡", title: "", text: "An idea, a question, or just curiosity — that's honestly enough" },
];

const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

const team = [
  { name: "Indre Lauciute", role: "UX Designer" },
  { name: "Talita Collare", role: "Product Designer" },
  { name: "Nien-Hua Gu", role: "Product Designer" },
  { name: "Pedro", role: "[Role TBC]" },
  { name: "Vincent Vijn", role: "Design Lead" },
  { name: "May", role: "UX Researcher" },
  { name: "Greg Weinstein", role: "[Role TBC]" },
  { name: "Mannan", role: "[Role TBC]" },
  { name: "Sharon", role: "[Role TBC]" },
  { name: "Meghana", role: "[Role TBC]" },
  { name: "Niveditha", role: "Product Designer" },
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

const sectionPad: React.CSSProperties = {
  padding: "80px 5%",
};
const innerWrap: React.CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
};

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function Home() {
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

        .uxc-stats { display: flex; flex-direction: row; }
        .uxc-stat {
          flex: 1 1 0;
          text-align: center;
          padding: 56px 24px;
          border-right: 1px solid rgba(255,255,255,0.3);
        }
        .uxc-stat:last-child { border-right: none; }

        .uxc-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: stretch; }
        .uxc-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: stretch; }
        .uxc-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .uxc-grid-photos { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }

        .uxc-card {
          background: ${WHITE};
          border: 1px solid ${MID_GREY};
          border-top: 4px solid ${RED};
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }
        .uxc-card-flat {
          background: ${WHITE};
          border: 1px solid ${MID_GREY};
          border-top: 4px solid ${RED};
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 16px;
          height: 100%;
        }

        .uxc-pill {
          display: inline-block;
          background: ${LIGHT_GREY};
          color: ${DARK};
          border: 1px solid ${DARK};
          padding: 10px 20px;
          font-family: ${FONT};
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.5px;
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
        }

        .uxc-team-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .uxc-team-card {
          background: ${WHITE};
          border: 1px solid ${MID_GREY};
          padding: 24px;
          text-align: center;
        }
        .uxc-avatar {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: ${LIGHT_GREY};
          color: ${RED};
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: ${FONT};
          font-weight: 800;
          font-size: 22px;
          margin: 0 auto 16px;
          border: 2px solid ${RED};
        }

        .uxc-social-pill {
          display: inline-block;
          background: ${RED};
          color: ${WHITE};
          padding: 12px 24px;
          font-family: ${FONT};
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.5px;
        }
        .uxc-social-pill:hover { background: ${WHITE}; color: ${RED}; }

        .uxc-footer-nav a { color: ${WHITE}; font-size: 14px; }
        .uxc-footer-nav a:hover { color: ${RED}; }

        @media (max-width: 900px) {
          .uxc-grid-2 { grid-template-columns: 1fr; gap: 32px; }
          .uxc-grid-3 { grid-template-columns: 1fr; }
          .uxc-grid-4 { grid-template-columns: repeat(2, 1fr); }
          .uxc-grid-photos { grid-template-columns: repeat(2, 1fr); }
          .uxc-team-grid { grid-template-columns: repeat(2, 1fr); }
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
          .uxc-grid-photos { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="uxc-home">
        {/* SECTION 1 — HERO (reduced height) */}
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
                fontSize: 14,
                color: RED,
                textTransform: "uppercase",
                letterSpacing: 2,
                margin: 0,
                marginBottom: 24,
              }}
            >
              Amsterdam · Saturday, July 4, 2026
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
              One day. 25 sessions. Come with a design idea, leave with ten more.
            </h1>

            <p
              style={{
                fontFamily: FONT,
                fontWeight: 300,
                fontSize: 18,
                lineHeight: 1.6,
                color: WHITE,
                marginTop: 24,
                marginBottom: 40,
                maxWidth: 680,
              }}
            >
              UX Camp Amsterdam is back for its 9th edition. A free-flowing unconference where you set the agenda, run the sessions, and shape the day. Everyone contributes. No one just watches.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a
                href={TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="uxc-btn-primary"
              >
                Grab your ticket →
              </a>
              <a href="#how-it-works" className="uxc-btn-outline">
                How does it work?
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2 — STATS / EVENT AT A GLANCE */}
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

        {/* SECTION 3 — WHAT IS THIS? */}
        <section id="how-it-works" style={{ background: LIGHT_GREY, ...sectionPad }}>
          <div style={innerWrap}>
            <p
              style={{
                display: "inline-block",
                background: WHITE,
                padding: "6px 12px",
                fontFamily: FONT,
                fontWeight: 600,
                fontSize: 13,
                color: RED,
                textTransform: "uppercase",
                letterSpacing: 1,
                margin: 0,
                marginBottom: 16,
              }}
            >
              What is this thing?
            </p>
            <h2
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: "clamp(32px, 4vw, 44px)",
                color: DARK,
                margin: 0,
                marginBottom: 20,
                maxWidth: 820,
              }}
            >
              It's an unconference. There are no spectators. Only contributors.
            </h2>
            <p
              style={{
                fontFamily: FONT,
                fontWeight: 400,
                fontSize: 17,
                lineHeight: 1.7,
                color: DARK,
                margin: 0,
                marginBottom: 40,
                maxWidth: 820,
              }}
            >
              UX Camp Amsterdam is back for its 9th edition — a community-run unconference where you set the agenda, run the sessions, and shape the day. No keynotes. No panels. No passive sitting. Everyone contributes.
            </p>

            <Link href="/how-it-works" className="uxc-link" style={{ display: "inline-block", marginBottom: 40 }}>
              About UX Camp Amsterdam →
            </Link>

            <p
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: 20,
                color: DARK,
                margin: 0,
                marginBottom: 24,
              }}
            >
              Here's how it works:
            </p>

            <div className="uxc-grid-2" style={{ gap: 24, alignItems: "stretch" }}>
              <div className="uxc-card" style={{ justifyContent: "flex-start", padding: 28 }}>
                <h3
                  style={{
                    fontFamily: FONT,
                    fontWeight: 700,
                    fontSize: 17,
                    color: RED,
                    margin: 0,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  For participants
                </h3>
                <p
                  style={{
                    fontFamily: FONT,
                    fontWeight: 400,
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: DARK,
                    margin: 0,
                    marginTop: 16,
                  }}
                >
                  You can volunteer for one task on the day — taking photos, taking notes, or helping reset the venue. Choose your task when buying your ticket.
                </p>
              </div>

              <div className="uxc-card" style={{ justifyContent: "flex-start", padding: 28 }}>
                <h3
                  style={{
                    fontFamily: FONT,
                    fontWeight: 700,
                    fontSize: 17,
                    color: RED,
                    margin: 0,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  For presenters
                </h3>
                <p
                  style={{
                    fontFamily: FONT,
                    fontWeight: 400,
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: DARK,
                    margin: 0,
                    marginTop: 16,
                    marginBottom: 16,
                  }}
                >
                  Show up in the morning with an idea, a case study, a rant, or a question you can't stop thinking about. Pitch it in 30 seconds. If people want to hear it, you're on. Sessions are voted in live by the audience, the programme is built in the room, and the day belongs to whoever shows up.
                </p>
                <Link href="/running-a-session" className="uxc-link">
                  See details on how to prepare a session →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — WHAT'S NEW IN 2026 */}
        <section style={{ background: WHITE, ...sectionPad }}>
          <div style={innerWrap}>
            <span className="uxc-tag" style={{ marginBottom: 20 }}>
              New in 2026
            </span>
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
              What's New in 2026
            </h2>
            <p
              style={{
                fontFamily: FONT,
                fontWeight: 400,
                fontSize: 17,
                lineHeight: 1.7,
                color: DARK,
                margin: 0,
                marginBottom: 40,
                maxWidth: 820,
              }}
            >
              Alongside the regular sessions, we've added new formats to make the day more hands-on:
            </p>

            <div className="uxc-grid-2" style={{ gap: 24, marginBottom: 32 }}>
              {newFormats.map((f) => (
                <div key={f.title} className="uxc-card">
                  <h3
                    style={{
                      fontFamily: FONT,
                      fontWeight: 700,
                      fontSize: 17,
                      color: DARK,
                      margin: 0,
                      marginBottom: 10,
                    }}
                  >
                    {f.title}
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
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — COME AS YOU ARE */}
        <section style={{ background: LIGHT_GREY, ...sectionPad }}>
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
              Come as you are
            </h2>

            <div className="uxc-grid-3">
              {audienceCards.map((c) => (
                <div key={c.title} className="uxc-card">
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{c.icon}</div>
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
                    {c.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: FONT,
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: DARK,
                      margin: 0,
                      marginBottom: 16,
                      flex: 1,
                    }}
                  >
                    {c.body}
                  </p>
                  <Link href={c.link} className="uxc-link">
                    {c.linkLabel}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5B — FIRST TIME? */}
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
              First time? Here's all you need.
            </h2>

            <div className="uxc-grid-3">
              {firstTimeItems.map((item) => (
                <div key={item.icon} className="uxc-card-flat">
                  <span style={{ fontSize: 32, lineHeight: 1 }}>{item.icon}</span>
                  <span
                    style={{
                      fontFamily: FONT,
                      fontWeight: 600,
                      fontSize: 16,
                      color: DARK,
                      lineHeight: 1.3,
                      minHeight: "1.3em",
                      display: "block",
                    }}
                  >
                    {item.title || "\u00A0"}
                  </span>
                  <span
                    style={{
                      fontFamily: FONT,
                      fontWeight: 400,
                      fontSize: 15,
                      lineHeight: 1.6,
                      color: DARK,
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link href="/prepare-for-the-day" className="uxc-link">
                Full details on what to expect →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 6 — PHOTOS */}
        <section style={{ background: LIGHT_GREY, ...sectionPad }}>
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
              Impressions from #UXcampAMS24
            </h2>

            <div className="uxc-grid-photos">
              {photos.map((src, i) => (
                <div
                  key={i}
                  style={{
                    width: "100%",
                    aspectRatio: "4 / 3",
                    overflow: "hidden",
                    border: `1px solid ${MID_GREY}`,
                    background: MID_GREY,
                  }}
                >
                  <img
                    src={src}
                    alt={`UX Camp Amsterdam 2024 — photo ${i + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link href="/2024-post-event" className="uxc-link">
                See more photos →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 7 — THE TEAM */}
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
              The people behind UXcampAMS26
            </h2>

            <div className="uxc-team-grid">
              {team.map((member) => (
                <div key={member.name} className="uxc-team-card">
                  <div className="uxc-avatar" aria-hidden="true">
                    {getInitials(member.name)}
                  </div>
                  <p
                    style={{
                      fontFamily: FONT,
                      fontWeight: 600,
                      fontSize: 16,
                      color: DARK,
                      margin: 0,
                      marginBottom: 4,
                    }}
                  >
                    {member.name}
                  </p>
                  <p
                    style={{
                      fontFamily: FONT,
                      fontWeight: 400,
                      fontSize: 14,
                      color: DARK,
                      margin: 0,
                      marginBottom: 12,
                    }}
                  >
                    {member.role}
                  </p>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 32,
                      height: 32,
                      border: `1px solid ${MID_GREY}`,
                      color: DARK,
                      fontFamily: FONT,
                      fontWeight: 800,
                      fontSize: 13,
                    }}
                  >
                    in
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8 — SOCIAL STRIP */}
        <section style={{ background: DARK, ...sectionPad }}>
          <div style={{ ...innerWrap, textAlign: "center" }}>
            <p
              style={{
                fontFamily: FONT,
                fontWeight: 400,
                fontSize: 18,
                color: WHITE,
                margin: 0,
                marginBottom: 24,
              }}
            >
              Follow along for updates
            </p>
            <div style={{ display: "inline-flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
              <a
                href="https://www.instagram.com/uxcampamsterdam/"
                target="_blank"
                rel="noopener noreferrer"
                className="uxc-btn-outline"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/amsterdamux/"
                target="_blank"
                rel="noopener noreferrer"
                className="uxc-btn-outline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
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
              {/* Left: logo + tagline */}
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

              {/* Center: nav */}
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

              {/* Right: social */}
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
