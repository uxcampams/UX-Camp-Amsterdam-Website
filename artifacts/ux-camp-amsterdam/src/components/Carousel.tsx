import { useEffect, useState } from "react";

type Slide = { src: string; caption: string };

export default function Carousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const goTo = (i: number) => setIndex((i + total) % total);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 5000);
    return () => clearInterval(id);
  }, [total]);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          height: "clamp(220px, 50vw, 480px)",
          background: "#000",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            transform: `translateX(-${index * 100}%)`,
            transition: "transform 700ms ease-in-out",
          }}
        >
          {slides.map((s, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                flex: "0 0 100%",
                height: "100%",
              }}
            >
              <img
                src={s.src}
                alt={s.caption}
                loading={i === 0 ? "eager" : "lazy"}
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: "12px 16px",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                }}
              >
                {s.caption}
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div
          style={{
            position: "absolute",
            bottom: 16,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 10,
            zIndex: 30,
          }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              aria-current={i === index}
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                border: 0,
                cursor: "pointer",
                background:
                  i === index ? "#fff" : "rgba(255,255,255,0.5)",
              }}
            />
          ))}
        </div>

        {/* Prev / Next */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            padding: "0 16px",
            display: "flex",
            alignItems: "center",
            background: "transparent",
            border: 0,
            cursor: "pointer",
            zIndex: 30,
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              borderRadius: 999,
              background: "rgba(255,255,255,0.3)",
              color: "#fff",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
          </span>
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "100%",
            padding: "0 16px",
            display: "flex",
            alignItems: "center",
            background: "transparent",
            border: 0,
            cursor: "pointer",
            zIndex: 30,
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              borderRadius: 999,
              background: "rgba(255,255,255,0.3)",
              color: "#fff",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
