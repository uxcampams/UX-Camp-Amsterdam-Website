import type { ReactNode } from "react";

interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  meta?: string;
  variant?: "dark" | "red";
  children?: ReactNode;
}

export default function Hero({ eyebrow, title, subtitle, meta, variant = "dark", children }: HeroProps) {
  return (
    <header className={`hero${variant === "red" ? " hero--red" : ""}`}>
      <div className="container">
        {eyebrow && <p className="hero__eyebrow">{eyebrow}</p>}
        <h1 className="hero__title">{title}</h1>
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
        {meta && <p className="hero__meta">{meta}</p>}
        {children}
      </div>
    </header>
  );
}
