const FONT = '"Open Sans", system-ui, sans-serif';
const RED = "#B20101";
const DARK = "#333333";
const MID_GREY = "#CCCCCC";
const WHITE = "#FFFFFF";

interface SessionCardListProps {
  sessions: string[];
}

function splitTitleSpeaker(s: string): { title: string; speaker?: string } {
  const idx = s.indexOf(" — ");
  if (idx === -1) return { title: s };
  return { title: s.slice(0, idx).trim(), speaker: s.slice(idx + 3).trim() };
}

export default function SessionCardList({ sessions }: SessionCardListProps) {
  return (
    <div
      style={{
        marginTop: 24,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 16,
      }}
    >
      {sessions.map((s) => {
        const { title, speaker } = splitTitleSpeaker(s);
        return (
          <div
            key={s}
            style={{
              background: WHITE,
              border: `1px solid ${MID_GREY}`,
              borderTop: `4px solid ${RED}`,
              borderRadius: 0,
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <div
              style={{
                fontFamily: FONT,
                fontWeight: 600,
                fontSize: 15,
                color: DARK,
                lineHeight: 1.4,
              }}
            >
              {title}
            </div>
            {speaker && (
              <div
                style={{
                  fontFamily: FONT,
                  fontWeight: 400,
                  fontSize: 14,
                  color: MID_GREY,
                  lineHeight: 1.4,
                }}
              >
                {speaker}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
