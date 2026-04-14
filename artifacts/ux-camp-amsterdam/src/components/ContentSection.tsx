import type { ReactNode } from "react";

interface ContentSectionProps {
  alt?: boolean;
  children: ReactNode;
}

export default function ContentSection({ alt, children }: ContentSectionProps) {
  return (
    <section className={`content-section${alt ? " content-section--alt" : ""}`}>
      <div className="container container--narrow">
        {children}
      </div>
    </section>
  );
}
