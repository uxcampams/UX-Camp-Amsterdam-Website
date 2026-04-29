export type Organizer = {
  name: string;
  role?: string;
  photo?: string;
  linkedin?: string;
};

const FONT = '"Open Sans", system-ui, sans-serif';
const DARK = "#333333";
const MID_GREY = "#CCCCCC";
const LIGHT_GREY = "#F5F5F5";

export default function OrganisingTeam({ organizers }: { organizers: Organizer[] }) {
  return (
    <div
      style={{
        marginTop: 24,
        display: "flex",
        flexWrap: "wrap",
        gap: 12,
      }}
    >
      {organizers.map((p) => {
        const isLink = p.linkedin && p.linkedin !== "#";
        const inner = (
          <span
            style={{
              fontFamily: FONT,
              fontWeight: 400,
              fontSize: 14,
              color: DARK,
            }}
          >
            {p.name}
          </span>
        );
        const pillStyle: React.CSSProperties = {
          display: "inline-block",
          background: LIGHT_GREY,
          border: `1px solid ${MID_GREY}`,
          borderRadius: 0,
          padding: "8px 16px",
          textDecoration: "none",
        };
        if (isLink) {
          return (
            <a
              key={p.name}
              href={p.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={pillStyle}
              aria-label={`${p.name} on LinkedIn`}
            >
              {inner}
            </a>
          );
        }
        return (
          <span key={p.name} style={pillStyle}>
            {inner}
          </span>
        );
      })}
    </div>
  );
}
