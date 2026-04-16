import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";

const sessions = [
  "Beyond visual — Dean Birkett",
  "Typography — Julia Zaytseva",
  "Bruce Springsteen taught me how to get everybody to care about UX — Vincent Vijn",
  "UXD Minor — Nymphaea Notschaele",
  "Continuous Discovery — Pragam Rathore",
  "Best practices to make your team more user centric — Pieter Koenis",
  "Ninjas & Knights: a systems perspective on design practice — Scott Neilson",
];

const team = [
  "Lina Beltrán", "Indre Lauciute", "Alona Sanbira", "Garima Chauhan", "Tatiana Sidorenkova",
];

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
        <h2>Impressions from #UXcampAMS23</h2>
        <p className="text-sm text-gray-400 italic mb-4">Photo gallery coming soon.</p>
        <a
          href="https://www.instagram.com/uxcampamsterdam/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-[#B20101] underline underline-offset-2"
        >
          Follow @uxcampamsterdam for regular visual updates ↗
        </a>
      </ContentSection>

      <ContentSection>
        <h2>Sessions &amp; slides</h2>
        <ul className="mt-4 divide-y divide-[#ccc] border-t border-[#ccc]">
          {sessions.map((s) => (
            <li key={s} className="py-3 text-sm text-gray-600">{s}</li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection alt>
        <h2>Sponsors</h2>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li><strong>Main sponsors:</strong> Elsevier · Marktplaats</li>
          <li><strong>Giveaway sponsors:</strong> Rosenfeld Media · Axure</li>
        </ul>
      </ContentSection>

      <ContentSection>
        <h2>Organising team</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {team.map((name) => (
            <span key={name} className="border border-[#ccc] px-3 py-1.5 text-sm text-[#333]">{name}</span>
          ))}
        </div>
      </ContentSection>
    </main>
  );
}
