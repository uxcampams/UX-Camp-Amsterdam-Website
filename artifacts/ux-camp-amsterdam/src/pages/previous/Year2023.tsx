import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";
import OrganisingTeam, { type Organizer } from "@/components/OrganisingTeam";
import SessionCardList from "@/components/SessionCardList";
import Impressions from "@/components/Impressions";
import CtaBanner from "@/components/CtaBanner";
import indrePhoto from "../../../assets/images/2024/Indre_Lauciute.png";
import tatianaPhoto from "../../../assets/images/2019/Tatiana_Sidorenkova.png";

const sessions = [
  "Beyond visual — Dean Birkett",
  "Typography — Julia Zaytseva",
  "Bruce Springsteen taught me how to get everybody to care about UX — Vincent Vijn",
  "UXD Minor — Nymphaea Notschaele",
  "Continuous Discovery — Pragam Rathore",
  "Best practices to make your team more user centric — Pieter Koenis",
  "Ninjas & Knights: a systems perspective on design practice — Scott Neilson",
];

const team: Organizer[] = [
  { name: "Lina Beltrán", role: "", linkedin: "#" },
  { name: "Indre Lauciute", role: "", linkedin: "#", photo: indrePhoto },
  { name: "Alona Sanbira", role: "", linkedin: "#" },
  { name: "Garima Chauhan", role: "", linkedin: "#" },
  { name: "Tatiana Sidorenkova", role: "", linkedin: "#", photo: tatianaPhoto },
];

const sponsors = ["Elsevier", "Marktplaats", "Rosenfeld Media", "Axure"];

export default function Year2023() {
  return (
    <main>
      <Hero
        title="UXcamp Amsterdam 2023"
        subtitle="September 18, 2023 · Amsterdam"
      />

      <ContentSection>
        <h2>Great come back of the event!</h2>
        <p>
          UX Camp Amsterdam is a BarCamp where you can share your knowledge, stories, and ideas
          about User Experience and related disciplines. As a one-day BarCamp event, it's made by
          the community for the community. There are no spectators, only contributors.
        </p>
      </ContentSection>

      <ContentSection alt>
        <Impressions yearShort="23" seeAllHref="https://uxcampams.com/photos-23" />
      </ContentSection>

      <ContentSection>
        <h2>Sessions</h2>
        <SessionCardList sessions={sessions} />
      </ContentSection>

      <ContentSection alt>
        <h2>Supported by</h2>
        <div
          style={{
            marginTop: 16,
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          {sponsors.map((s) => (
            <span
              key={s}
              style={{
                display: "inline-block",
                background: "#F5F5F5",
                border: "1px solid #CCCCCC",
                padding: "8px 16px",
                fontFamily: '"Open Sans", system-ui, sans-serif',
                fontWeight: 600,
                fontSize: 14,
                color: "#333333",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <h2>Organising team</h2>
        <OrganisingTeam organizers={team} />
      </ContentSection>

      <CtaBanner />
    </main>
  );
}
