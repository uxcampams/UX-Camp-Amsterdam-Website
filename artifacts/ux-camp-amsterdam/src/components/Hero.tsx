import type { ReactNode } from "react";

interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  meta?: string;
  variant?: "dark" | "red";
  children?: ReactNode;
}

const FONT = '"Open Sans", system-ui, sans-serif';
const RED = "#B20101";
const DARK = "#333333";
const WHITE = "#FFFFFF";

export default function Hero({ eyebrow, title, subtitle, meta, variant = "dark", children }: HeroProps) {
  const bg = variant === "red" ? RED : DARK;
  return (
    <header
      style={{
        background: bg,
        color: WHITE,
        padding: "100px 5% 80px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {eyebrow && (
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
              marginBottom: 24,
            }}
          >
            {eyebrow}
          </p>
        )}
        <h1
          style={{
            fontFamily: FONT,
            fontWeight: 800,
            fontSize: "clamp(32px, 4.5vw, 56px)",
            lineHeight: 1.15,
            color: WHITE,
            margin: 0,
            maxWidth: 900,
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              fontFamily: FONT,
              fontWeight: 300,
              fontSize: 18,
              lineHeight: 1.6,
              color: WHITE,
              margin: 0,
              marginTop: 20,
              maxWidth: 780,
            }}
          >
            {subtitle}
          </p>
        )}
        {meta && (
          <p
            style={{
              fontFamily: FONT,
              fontWeight: 600,
              fontSize: 14,
              color: WHITE,
              margin: 0,
              marginTop: 16,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            {meta}
          </p>
        )}
        {children}
      </div>
    </header>
  );
}
