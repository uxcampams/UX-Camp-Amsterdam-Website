interface PhotoGridProps {
  images: { src: string; alt?: string }[];
  yearShort?: string;
  seeAllHref?: string;
}

const FONT = '"Open Sans", system-ui, sans-serif';
const RED = "#B20101";
const DARK = "#333333";
const MID_GREY = "#CCCCCC";

export default function PhotoGrid({ images, yearShort, seeAllHref }: PhotoGridProps) {
  const limited = images.slice(0, 6);
  return (
    <>
      {yearShort && (
        <h2
          style={{
            fontFamily: FONT,
            fontWeight: 800,
            fontSize: "clamp(28px, 3vw, 36px)",
            color: DARK,
            margin: "0 0 24px",
            lineHeight: 1.2,
          }}
        >
          Impressions from #UXcampAMS{yearShort}
        </h2>
      )}
      <style>{`
        .uxc-photo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }
        @media (max-width: 900px) {
          .uxc-photo-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .uxc-photo-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <div className="uxc-photo-grid">
        {limited.map((img, i) => (
          <div
            key={i}
            style={{
              width: "100%",
              aspectRatio: "4 / 3",
              overflow: "hidden",
              border: `1px solid ${MID_GREY}`,
              background: MID_GREY,
              borderRadius: 0,
            }}
          >
            <img
              src={img.src}
              alt={img.alt || `Photo ${i + 1}`}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                borderRadius: 0,
              }}
            />
          </div>
        ))}
      </div>
      {yearShort && (
        <div style={{ marginTop: 24 }}>
          <a
            href={seeAllHref || "#"}
            target={seeAllHref && seeAllHref !== "#" ? "_blank" : undefined}
            rel={seeAllHref && seeAllHref !== "#" ? "noopener noreferrer" : undefined}
            style={{
              fontFamily: FONT,
              fontWeight: 600,
              fontSize: 14,
              color: RED,
              textDecoration: "none",
              letterSpacing: 0.5,
            }}
          >
            See all photos from #UXcampAMS{yearShort} →
          </a>
        </div>
      )}
    </>
  );
}
