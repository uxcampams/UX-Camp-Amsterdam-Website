export type Organizer = {
  name: string;
  role?: string;
  photo?: string;
  linkedin?: string;
};

const FONT = '"Open Sans", system-ui, sans-serif';
const RED = "#B20101";
const DARK = "#333333";
const MID_GREY = "#CCCCCC";
const LIGHT_GREY = "#F5F5F5";
const WHITE = "#FFFFFF";

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function OrganisingTeam({ organizers }: { organizers: Organizer[] }) {
  return (
    <>
      <style>{`
        .uxc-org-team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 24px;
        }
        @media (max-width: 900px) {
          .uxc-org-team-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .uxc-org-team-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <div className="uxc-org-team-grid">
        {organizers.map((p) => {
          const isLink = p.linkedin && p.linkedin !== "#";
          const cardStyle: React.CSSProperties = {
            background: WHITE,
            border: `1px solid ${MID_GREY}`,
            padding: 24,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            borderRadius: 0,
          };
          const inner = (
            <>
              <div
                aria-hidden="true"
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: LIGHT_GREY,
                  color: RED,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: FONT,
                  fontWeight: 800,
                  fontSize: 22,
                  marginBottom: 16,
                  border: `2px solid ${RED}`,
                }}
              >
                {getInitials(p.name)}
              </div>
              <div
                style={{
                  fontFamily: FONT,
                  fontWeight: 600,
                  fontSize: 16,
                  color: DARK,
                  marginBottom: 4,
                  lineHeight: 1.3,
                }}
              >
                {p.name}
              </div>
              {p.role && (
                <div
                  style={{
                    fontFamily: FONT,
                    fontWeight: 400,
                    fontSize: 14,
                    color: DARK,
                    lineHeight: 1.4,
                  }}
                >
                  {p.role}
                </div>
              )}
            </>
          );
          if (isLink) {
            return (
              <a
                key={p.name}
                href={p.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={cardStyle}
                aria-label={`${p.name} on LinkedIn`}
              >
                {inner}
              </a>
            );
          }
          return (
            <div key={p.name} style={cardStyle}>
              {inner}
            </div>
          );
        })}
      </div>
    </>
  );
}
