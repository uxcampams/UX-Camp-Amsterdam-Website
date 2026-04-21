import placeholder from "../../assets/images/organizer-placeholder.svg";

export type Organizer = {
  name: string;
  role?: string;
  photo?: string;
  linkedin?: string;
};

export default function OrganisingTeam({ organizers }: { organizers: Organizer[] }) {
  return (
    <div
      style={{
        marginTop: 24,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        gap: 24,
      }}
    >
      {organizers.map((p) => (
        <div
          key={p.name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img
            src={p.photo || placeholder}
            alt={p.name}
            style={{
              width: 140,
              height: 140,
              objectFit: "cover",
              borderRadius: "50%",
              border: "3px solid #fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              background: "#f0f0f0",
            }}
          />
          <div style={{ marginTop: 12, fontWeight: 700, color: "#333" }}>
            {p.name}
          </div>
          <div style={{ fontSize: 13, color: "#666", marginTop: 2, minHeight: 18 }}>
            {p.role || "\u00A0"}
          </div>
          <a
            href={p.linkedin || "#"}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: 8,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              fontWeight: 600,
              color: "#B20101",
              textDecoration: "none",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.22 0z" />
            </svg>
            LinkedIn
          </a>
        </div>
      ))}
    </div>
  );
}
