import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";

const slides = [
  "Beyond visual — Dean Birkett",
  "Typography — Julia Zaytseva",
  "Bruce Springsteen taught me how to get everybody to care about UX — Vincent Vijn",
  "UXD Minor — Nymphaea Notschaele",
  "Continuous Discovery — Pragam Rathore",
  "Best practices to make your team more user centric — Pieter Koenis",
  "Ninjas & Knights: a systems perspective on design practice — Scott Neilson",
];

const team = [
  "Philipp Engel", "Tatiana Sidorenkova", "Gareth Simms",
  "Doron Hirsch", "Xiaoyu Shen", "Dave de Bakker",
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
        <h2>Session slides</h2>
        <ul className="mt-4 divide-y divide-[#ccc] border-t border-[#ccc]">
          {slides.map((s) => (
            <li key={s} className="py-3 text-sm text-gray-600">{s}</li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection>
        <h2>Photos</h2>
        <p className="text-sm text-gray-500">
          Over 100 photographs from the event were shared on Instagram.
        </p>
        <a
          href="https://www.instagram.com/uxcampamsterdam/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm font-semibold text-[#B20101] underline underline-offset-2"
        >
          Follow @uxcampamsterdam ↗
        </a>
      </ContentSection>

      <ContentSection alt>
        <h2>Sponsors</h2>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li><strong>Event sponsors:</strong> Marktplaats · Elsevier · Happy Labs</li>
          <li><strong>Location sponsor:</strong> Digital Society School — hosted at Marineterrein Amsterdam</li>
          <li><strong>Afterparty sponsor:</strong> InVision</li>
          <li><strong>Giveaway sponsors:</strong> Framer · Sketch · Rosenfeld Media · O'Reilly</li>
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
