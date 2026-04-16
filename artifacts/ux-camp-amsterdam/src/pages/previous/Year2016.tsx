import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";

const slides = [
  "Google Analytics fundamentals — Martijn van Vreeden",
  "Accessible UX — Dean Birkett",
  "Designing emotional experiences in a B2B product — Carina Palumbo and Anette Hiltunen",
  "Involve users always and get a better design fast — Anouschka Scholten",
  "Crowdtesting & UX — Peter Bruun",
  "Design sprint and incomplete briefs — Martin Andrle",
  "Improve your design process — Peter Boersma",
  "AI meets UX — Nick van der Linde",
];

const team = [
  "Philipp Engel", "Tatiana Sidorenkova", "Gareth Simms", "Doron Hirsch",
  "Peter Boersma", "Dave de Bakker", "Carolina Gómez Naranjo", "Marcel Hadderingh",
  "Daniel Kuipers", "Ning Xu", "Liang Hiah",
];

export default function Year2016() {
  return (
    <main>
      <Hero
        title="UXcamp Amsterdam 2016"
        subtitle="Second Edition · Amsterdam"
      />

      <ContentSection>
        <h2>Looking back on UXcampAMS16</h2>
        <p>
          The second edition of UXcamp Amsterdam was awesome… and hot. Active Twitter discussion
          used the hashtag <strong>#UXcampAMS16</strong>.
        </p>
      </ContentSection>

      <ContentSection alt>
        <h2>Presentations</h2>
        <p className="text-sm text-gray-500 mb-4">
          A selection of slide decks from the day:
        </p>
        <ul className="divide-y divide-[#ccc] border-t border-[#ccc]">
          {slides.map((s) => (
            <li key={s} className="py-3 text-sm text-gray-600">{s}</li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection>
        <h2>Photos</h2>
        <p className="text-sm text-gray-500">
          Special thanks to Den Tserkovnyi &amp; Filip Mishevski for the photos.
        </p>
      </ContentSection>

      <ContentSection alt>
        <h2>Sponsors</h2>
        <p className="mt-2 text-sm text-gray-600">Adyen · IceMobile · Marktplaats · Mirabeau · Nomensa</p>
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
