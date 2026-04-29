import { TICKET_URL } from "../constants";

const FONT = '"Open Sans", system-ui, sans-serif';
const RED = "#B20101";
const WHITE = "#FFFFFF";

export default function CtaBanner() {
  return (
    <section
      style={{
        background: RED,
        color: WHITE,
        padding: "60px 5%",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
            margin: 0,
            marginBottom: 28,
          }}
        >
          Saturday, July 4, 2026 · Amsterdam
        </p>
        <a
          href={TICKET_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: WHITE,
            color: RED,
            padding: "14px 36px",
            fontFamily: FONT,
            fontWeight: 800,
            fontSize: 14,
            letterSpacing: 1,
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: 0,
            border: `2px solid ${WHITE}`,
          }}
        >
          Grab your ticket →
        </a>
      </div>
    </section>
  );
}
