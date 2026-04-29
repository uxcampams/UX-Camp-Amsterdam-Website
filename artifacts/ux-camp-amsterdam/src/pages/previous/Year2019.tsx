import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";
import OrganisingTeam, { type Organizer } from "@/components/OrganisingTeam";
import SessionCardList from "@/components/SessionCardList";
import CtaBanner from "@/components/CtaBanner";

const slides = [
  "Beyond visual — Dean Birkett",
  "Typography — Julia Zaytseva",
  "Bruce Springsteen taught me how to get everybody to care about UX — Vincent Vijn",
  "UXD Minor — Nymphaea Notschaele",
  "Continuous Discovery — Pragam Rathore",
  "Best practices to make your team more user centric — Pieter Koenis",
  "Ninjas & Knights: a systems perspective on design practice — Scott Neilson",
];

const team: Organizer[] = [
  { name: "Philipp Engel", role: "", linkedin: "#" },
  { name: "Tatiana Sidorenkova", role: "", linkedin: "#" },
  { name: "Gareth Simms", role: "", linkedin: "#" },
  { name: "Doron Hirsch", role: "", linkedin: "#" },
  { name: "Xiaoyu Shen", role: "", linkedin: "#" },
  { name: "Dave de Bakker", role: "", linkedin: "#" },
];

const sponsors = [
  "Marktplaats",
  "Elsevier",
  "Happy Labs",
  "Digital Society School",
  "InVision",
  "Framer",
  "Sketch",
  "Rosenfeld Media",
  "O'Reilly",
];

export default function Year2019() {
  return (
    <main>
      <Hero
        title="UXcamp Amsterdam 2019"
        subtitle="5th Edition · June 1, 2019 · Amsterdam"
      />

      <ContentSection>
        <h2>What an awesome 5th edition!</h2>
        <p>
          From Tiger, Ninja, Grandma to afterparty beers in the sunshine (and EVERYTHING in
          between), 2019 was another truly special edition of UXcampAMS. We truly loved spending our
          Saturday with you. It makes all of the effort and hard work worthwhile and makes us even
          hungrier to keep improving year on year.
        </p>
      </ContentSection>

      <ContentSection alt>
        <h2>Slides</h2>
        <SessionCardList sessions={slides} />
      </ContentSection>

      <ContentSection>
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

      <ContentSection alt>
        <h2>Organising team</h2>
        <OrganisingTeam organizers={team} />
      </ContentSection>

      <CtaBanner />
    </main>
  );
}
