import type { ReactNode } from "react";

interface ContentSectionProps {
  alt?: boolean;
  children: ReactNode;
}

const FONT = '"Open Sans", system-ui, sans-serif';
const DARK = "#333333";
const LIGHT_GREY = "#F5F5F5";
const WHITE = "#FFFFFF";

export default function ContentSection({ alt, children }: ContentSectionProps) {
  return (
    <section
      style={{
        background: alt ? LIGHT_GREY : WHITE,
        padding: "80px 5%",
        fontFamily: FONT,
        color: DARK,
      }}
      className="uxc-content-section"
    >
      <style>{`
        .uxc-content-section h2 {
          font-family: ${FONT};
          font-weight: 800;
          font-size: clamp(28px, 3vw, 36px);
          color: ${DARK};
          margin: 0 0 20px;
          line-height: 1.2;
        }
        .uxc-content-section h3 {
          font-family: ${FONT};
          font-weight: 600;
          font-size: 18px;
          color: ${DARK};
          margin: 0 0 12px;
        }
        .uxc-content-section p {
          font-family: ${FONT};
          font-weight: 400;
          font-size: 16px;
          line-height: 1.7;
          color: ${DARK};
          margin: 0 0 16px;
        }
        .uxc-content-section a:not(.btn-primary):not(.uxc-btn-on-red) {
          color: #B20101;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .uxc-content-section .btn-primary {
          display: inline-block;
          background: #B20101;
          color: ${WHITE};
          padding: 14px 32px;
          font-family: ${FONT};
          font-weight: 800;
          font-size: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
          border: 2px solid #B20101;
          border-radius: 0;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .uxc-content-section .btn-primary:hover {
          background: ${WHITE};
          color: #B20101;
        }
      `}</style>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>{children}</div>
    </section>
  );
}
