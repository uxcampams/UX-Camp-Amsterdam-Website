import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Lanyard from "../components/Lanyard/Lanyard";
import PortfolioCornerModal from "../components/PortfolioCornerModal";
import { TICKET_URL } from "../constants";
import heroBg from "../../assets/images/Home_hero.jpg";
import indrePortrait from "../../assets/images/2026/Indre_Lauciute.jpg";
import talitaPortrait from "../../assets/images/2026/Talita_Collares.jpg";
import pedroPortrait from "../../assets/images/2026/Pedro_Gameiro.jpg";
import nienHuaPortrait from "../../assets/images/2026/Nien-Hua_Gu.png";
import vincentPortrait from "../../assets/images/2026/Vincent_Vijn.jpg";
import minYuPortrait from "../../assets/images/2026/Min_Yu_Wu.jpg";
import gregPortrait from "../../assets/images/2026/Greg_Weinstein.jpg";
import mannanPortrait from "../../assets/images/2026/Mannan_Gupta.jpg";
import sharonPortrait from "../../assets/images/2026/Sharon_Li.jpg";
import meghanaPortrait from "../../assets/images/2026/Meghana_Gautam.jpg";
import nivedithaPortrait from "../../assets/images/2026/Niveditha_Kulkarni.jpg";
import photo1 from "@assets/DSC01914_1777548359984.jpg";
import photo2 from "@assets/DSC01928_1777548359984.jpg";
import photo3 from "@assets/DSC02022_1777548359977.jpg";
import photo4 from "@assets/DSC02035_1777548359977.jpg";
import photo5 from "@assets/DSC02043_1777548359978.jpg";
import photo6 from "@assets/DSC02053_1777548359979.jpg";
import marq1 from "@assets/DSC01930_1777548359975.jpg";
import marq2 from "@assets/DSC01931_1777548359977.jpg";
import marq3 from "@assets/DSC02037_1777548359978.jpg";
import marq4 from "@assets/DSC02045_1777548359978.jpg";
import marq5 from "@assets/Frame_139_1777548359979.jpg";
import marq6 from "@assets/Group_137_1777548359980.jpg";

const RED = "#B20101";
const DARK = "#333333";
const LIGHT_GREY = "#F5F5F5";
const MID_GREY = "#CCCCCC";
const WHITE = "#FFFFFF";

const FONT = "'Open Sans', sans-serif";

const stats = [
  { number: 9, suffix: "th", label: "Edition" },
  { number: 120, suffix: "+", label: "Participants" },
  { number: 25, suffix: "+", label: "Sessions" },
];

function AnimatedNumber({ number, suffix }: { number: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * number));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [number]);

  return (
    <div ref={ref}>
      {count}{suffix}
    </div>
  );
}


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

const schedule: { time: string; label: string; highlight?: boolean }[] = [
  { time: "9:30", label: "Doors open — registration, coffee, saying hi to strangers" },
  { time: "10:00", label: "Welcome & Madness Session — pitches, voting, live schedule built" },
  { time: "11:00–11:25", label: "Session 1" },
  { time: "11:30–11:55", label: "Session 2" },
  { time: "12:00–12:25", label: "Session 3" },
  { time: "12:30", label: "Lunch" },
  { time: "13:30–13:55", label: "Session 4" },
  { time: "14:00–14:25", label: "Session 5" },
  { time: "14:30–14:55", label: "Session 6" },
  { time: "15:00", label: "Break" },
  { time: "15:30–15:55", label: "Session 7" },
  { time: "16:00–16:25", label: "Session 8" },
  { time: "17:00", label: "Closing — highlights, thank yous, prizes" },
  { time: "17:15", label: "After party — drinks, the best conversations of the day 🎉", highlight: true },
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
  { name: "Indre Lauciute", role: "Product Designer", linkedin: "https://www.linkedin.com/in/indrelauciute/", photo: indrePortrait },
  { name: "Talita Collares", role: "Data-driven Designer", linkedin: "https://www.linkedin.com/in/talitacollares/", photo: talitaPortrait },
  { name: "Nien-Hua Gu", role: "Product Designer", linkedin: "https://www.linkedin.com/in/nienhua-gu/", photo: nienHuaPortrait },
  { name: "Pedro Gameiro", role: "Design Lead", linkedin: "https://www.linkedin.com/in/pedrogameiro/", photo: pedroPortrait },
  { name: "Vincent Vijn", role: "Design Lead", linkedin: "https://www.linkedin.com/in/vincentvijn/", photo: vincentPortrait },
  { name: "Min Yu Wu", role: "UI/UX Designer", linkedin: "https://www.linkedin.com/in/minyuwu/", photo: minYuPortrait },
  { name: "Greg Weinstein", role: "Inclusive Design and Accessibility Consultant", linkedin: "https://www.linkedin.com/in/gregoryweinsteinphd/", photo: gregPortrait },
  { name: "Mannan Gupta", role: "Mixed-Methods Researcher", linkedin: "https://www.linkedin.com/in/mannangupta/", photo: mannanPortrait },
  { name: "Sharon Li", role: "Service / Product Designer", linkedin: "https://www.linkedin.com/in/sharon-li-539a8b16a/", photo: sharonPortrait },
  { name: "Meghana Gautam", role: "UX Researcher", linkedin: "https://www.linkedin.com/in/meghanagautam/", photo: meghanaPortrait },
  { name: "Niveditha Kulkarni", role: "UX/UI Designer", linkedin: "https://www.linkedin.com/in/nivedithakulkarni/", photo: nivedithaPortrait },
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
  const [portfolioOpen, setPortfolioOpen] = useState(false);

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

        .uxc-h2 { font-family: ${FONT}; font-weight: 800; font-size: 32px; line-height: 1.2; color: ${DARK}; margin: 0; }
        .uxc-eyebrow { font-family: ${FONT}; font-weight: 300; font-size: 13px; color: ${RED}; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 12px 0; }
        .uxc-grid-60-40 { display: grid; grid-template-columns: 60fr 40fr; gap: 48px; align-items: start; }

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
          padding: 32px 16px;
          border-right: 1px solid rgba(255,255,255,0.3);
        }
        .uxc-stat:last-child { border-right: none; }

        .uxc-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: stretch; }
        .uxc-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: stretch; }
        .uxc-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .uxc-grid-photos { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }

        .uxc-lanyard-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          align-items: center;
        }
        .uxc-lanyard-col { order: 2; min-width: 0; overflow: hidden; }
        .uxc-lanyard-content { order: 1; min-width: 0; }

        .uxc-timeline-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px 48px;
        }

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
          width: 120px;
          height: 120px;
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

        .uxc-hero .uxc-btn-primary { background: ${DARK}; border-color: ${DARK}; }
        .uxc-hero .uxc-btn-primary:hover { background: ${WHITE}; color: ${DARK}; border-color: ${WHITE}; }


        .uxc-hero-marquee {
          position: absolute;
          right: 0; top: 0; bottom: 0;
          width: 800px;
          overflow: hidden;
          pointer-events: none;
          display: flex;
          gap: 8px;
        }
        .uxc-hero-marquee::before {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 160px;
          background: linear-gradient(to top, ${RED}, transparent);
          z-index: 2;
        }
        .uxc-hero-marquee-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .uxc-hero-marquee-col.up {
          animation: uxc-marquee-up 28s linear infinite;
        }
        .uxc-hero-marquee-col.down {
          animation: uxc-marquee-down 24s linear infinite;
        }
        .uxc-hero-marquee-col img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
          opacity: 0.55;
        }
        @keyframes uxc-marquee-up {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @keyframes uxc-marquee-down {
          from { transform: translateY(-50%); }
          to { transform: translateY(0); }
        }
        @media (min-width: 1400px) {
          .uxc-hero-marquee { width: 1000px; }
        }
        @media (max-width: 900px) {
          .uxc-hero { padding-top: 400px !important; }
          .uxc-hero-marquee {
            top: 0;
            bottom: auto;
            left: 0;
            right: 0;
            width: 100%;
            height: 360px;
          }
          .uxc-hero-marquee::before {
            left: 0; right: 0; top: auto;
            bottom: 0;
            width: auto;
            height: 80px;
            background: linear-gradient(to top, ${RED}, transparent);
          }
          .uxc-hero-marquee-col img { height: 360px; }
        }

        @media (max-width: 900px) {
          .uxc-grid-60-40 { grid-template-columns: 1fr; gap: 24px; }
          .uxc-h2 { font-size: 26px; }
          .uxc-grid-2 { grid-template-columns: 1fr; gap: 32px; }
          .uxc-grid-3 { grid-template-columns: 1fr; }
          .uxc-grid-4 { grid-template-columns: repeat(2, 1fr); }
          .uxc-grid-photos { grid-template-columns: repeat(2, 1fr); }
          .uxc-team-grid { grid-template-columns: repeat(2, 1fr); }
          .uxc-lanyard-layout { grid-template-columns: 1fr; }
          .uxc-lanyard-col { order: 1; }
          .uxc-lanyard-content { order: 2; }
          .uxc-timeline-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .uxc-stats { flex-wrap: nowrap; }
          .uxc-stat {
            flex: 1 1 0;
            min-width: 0;
            border-right: 1px solid rgba(255,255,255,0.3);
            border-bottom: none;
          }
          .uxc-stat:last-child { border-right: none; }
          .uxc-grid-4 { grid-template-columns: 1fr; }
          .uxc-grid-photos { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="uxc-home">
        {/* SECTION 1 — HERO */}
        <section className="uxc-hero" style={{ position: "relative", overflow: "hidden", background: RED, color: WHITE, padding: "100px 5% 80px" }}>
          {/* Vertical photo marquee — 3 columns, alternating directions */}
          <div className="uxc-hero-marquee">
            {([
              { photos: [photo1, photo2, marq1, marq2], dir: "up" },
              { photos: [photo3, marq3, photo4, marq4], dir: "down" },
              { photos: [marq5, photo5, marq6, photo6], dir: "up" },
            ] as { photos: string[]; dir: string }[]).map(({ photos, dir }, ci) => (
              <div key={ci} className={`uxc-hero-marquee-col ${dir}`}>
                {[...photos, ...photos].map((src, i) => (
                  <img key={i} src={src} alt="" aria-hidden="true" />
                ))}
              </div>
            ))}
          </div>

          <div style={{ ...innerWrap, textAlign: "left", position: "relative", zIndex: 1 }}>
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
            </div>
          </div>
        </section>

        {/* SECTION 2 — STATS / EVENT AT A GLANCE */}
        <section style={{ background: RED, color: WHITE, borderTop: "1px solid rgba(255,255,255,0.3)" }}>
          <div className="uxc-stats">
            {stats.map((s) => (
              <div key={s.label} className="uxc-stat">
                <div
                  style={{
                    fontFamily: FONT,
                    fontWeight: 800,
                    fontSize: 36,
                    lineHeight: 1,
                    color: WHITE,
                  }}
                >
                  <AnimatedNumber number={s.number} suffix={s.suffix} />
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
            <div className="uxc-lanyard-layout">
              {/* Lanyard — right on desktop, top on mobile */}
              <div className="uxc-lanyard-col" style={{ marginTop: -80 }}>
                <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
              </div>

              {/* Text content */}
              <div className="uxc-lanyard-content">
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
                  }}
                >
                  UX Camp Amsterdam is back for its 9th edition — a community-run unconference where you set the agenda, run the sessions, and shape the day. No keynotes. No panels. No passive sitting. Everyone contributes.
                </p>

                <Link href="/how-it-works" className="uxc-link" style={{ display: "inline-block" }}>
                  About UX Camp Amsterdam →
                </Link>
              </div>
            </div>

            {/* Full-width row: Here's how it works */}
            <p
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: 20,
                color: DARK,
                margin: "48px 0 24px",
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
              {newFormats.map((f) => {
                const isPortfolioCorner = f.title === "Portfolio Review Corner";
                return (
                  <div
                    key={f.title}
                    className="uxc-card"
                    role={isPortfolioCorner ? "button" : undefined}
                    tabIndex={isPortfolioCorner ? 0 : undefined}
                    onClick={isPortfolioCorner ? () => setPortfolioOpen(true) : undefined}
                    onKeyDown={
                      isPortfolioCorner
                        ? (e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              setPortfolioOpen(true);
                            }
                          }
                        : undefined
                    }
                    style={isPortfolioCorner ? { cursor: "pointer" } : undefined}
                  >
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
                    {isPortfolioCorner && (
                      <span
                        style={{
                          display: "inline-block",
                          fontFamily: FONT,
                          fontWeight: 600,
                          fontSize: 14,
                          color: RED,
                          marginTop: 12,
                        }}
                      >
                        Learn more →
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <PortfolioCornerModal open={portfolioOpen} onOpenChange={setPortfolioOpen} />

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

            <div style={{ marginBottom: 48, width: "100%", aspectRatio: "16 / 7", overflow: "hidden" }}>
              <img
                src={heroBg}
                alt="Group photo from UX Camp Amsterdam"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
              />
            </div>

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
                Everything you need before you arrive →
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
              Impressions from #UXcampAMS25
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
                    alt={`UX Camp Amsterdam 2025 — photo ${i + 1}`}
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
              <Link href="/previous/2025" className="uxc-link">
                See more photos →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 7 — LOCATION */}
        <section style={{ background: WHITE, ...sectionPad }}>
          <div style={innerWrap}>
            <p className="uxc-eyebrow">Where and when</p>
            <h2 className="uxc-h2" style={{ marginBottom: 32 }}>Time &amp; location</h2>

            <div className="uxc-grid-60-40">
              <div>
                <dl style={{ margin: 0 }}>
                  {[
                    { label: "Date", value: "Saturday, July 4, 2026" },
                    { label: "Doors open", value: "9:30 — Registration closes at 12:30" },
                    { label: "Venue", value: "HvA Corry Tendeloohuis (CTH)" },
                    { label: "Address", value: "Fraijlemaborg 133, 1102 CV Amsterdam" },
                  ].map((item) => (
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
                  height={400}
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

        {/* SECTION 7B — HOW THE DAY FLOWS */}
        <section style={{ background: LIGHT_GREY, ...sectionPad }}>
          <div style={innerWrap}>
            <h3
              style={{
                fontFamily: FONT,
                fontWeight: 800,
                fontSize: 24,
                color: DARK,
                margin: 0,
                marginBottom: 32,
                textAlign: "center",
              }}
            >
              How the day flows
            </h3>

            <div
              className="uxc-timeline-grid"
              style={{
                maxWidth: 1000,
                margin: "0 auto",
              }}
            >
              {schedule.map((item) => (
                <div
                  key={item.time}
                  className="uxc-timeline-item"
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 24,
                    paddingLeft: 32,
                    paddingBottom: 24,
                    borderLeft: `2px solid ${MID_GREY}`,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: -6,
                      top: 6,
                      width: 10,
                      height: 10,
                      background: RED,
                      borderRadius: "50%",
                    }}
                  />
                  <div
                    style={{
                      minWidth: 120,
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

        {/* SECTION 8 — THE TEAM */}
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
                <a
                  key={member.name}
                  href={member.linkedin ?? "https://www.linkedin.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uxc-team-card"
                  style={{ textDecoration: "none" }}
                >
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="uxc-avatar"
                      style={{ objectFit: "cover", objectPosition: "center top" }}
                    />
                  ) : (
                    <div className="uxc-avatar" aria-hidden="true">
                      {getInitials(member.name)}
                    </div>
                  )}
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
                  <span
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
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
