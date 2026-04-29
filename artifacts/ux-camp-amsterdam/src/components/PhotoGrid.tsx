interface PhotoGridProps {
  images: { src: string; alt?: string }[];
}

const MID_GREY = "#CCCCCC";

export default function PhotoGrid({ images }: PhotoGridProps) {
  return (
    <div
      style={{
        marginTop: 16,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: 8,
      }}
    >
      {images.map((img, i) => (
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
            src={img.src}
            alt={img.alt || `Photo ${i + 1}`}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      ))}
    </div>
  );
}
