import Carousel from "./Carousel";

const FONT = '"Open Sans", system-ui, sans-serif';
const RED = "#B20101";
const DARK = "#333333";
const MID_GREY = "#CCCCCC";
const LIGHT_GREY = "#F5F5F5";

type Slide = { src: string; caption: string };

interface ImpressionsProps {
  yearShort: string;
  slides?: Slide[];
  seeAllHref?: string;
}

export default function Impressions({ yearShort, slides, seeAllHref }: ImpressionsProps) {
  const hasPhotos = slides && slides.length > 0;

  return (
    <>
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

      {hasPhotos ? (
        <Carousel slides={slides!} />
      ) : (
        <div
          style={{
            width: "100%",
            background: LIGHT_GREY,
            border: `1px solid ${MID_GREY}`,
            padding: "48px 24px",
            textAlign: "center",
            fontFamily: FONT,
            color: DARK,
          }}
        >
          <div
            style={{
              fontFamily: FONT,
              fontWeight: 800,
              fontSize: 22,
              color: RED,
              marginBottom: 12,
              letterSpacing: 1,
            }}
          >
            No photos archived from this year (yet).
          </div>
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
            We are still tracking down photos from #UXcampAMS{yearShort}. If you
            were there and have shots to share, please reach out — we’d love to
            add them.
          </p>
        </div>
      )}

      {seeAllHref && (
        <div style={{ marginTop: 24 }}>
          <a
            href={seeAllHref}
            target={seeAllHref.startsWith("http") ? "_blank" : undefined}
            rel={seeAllHref.startsWith("http") ? "noopener noreferrer" : undefined}
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
