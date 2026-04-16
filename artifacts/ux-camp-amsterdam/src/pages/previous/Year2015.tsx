import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";

const slides = [
  "Content Editors Are Users Too — Bas Evers",
  "Reverse Chaos Method of Requirements Prioritisation — Gena Drahun",
  "User Checks: Get to a Better Design Fast — Anouschka Scholten",
  "Context is King: Crafting Smarter, Adaptive Digital Products Today — Nick van der Linde",
];

const team = [
  "Tatiana Sidorenkova", "Doron Hirsch", "Dave de Bakker",
  "Daniel Kuipers", "Ning Xu", "Liang Hiah",
];

export default function Year2015() {
  return (
    <main>
      <Hero
        title="UXcamp Amsterdam 2015"
        subtitle="First Edition · Amsterdam"
      />

      <ContentSection>
        <h2>Looking back on UXcampAMS15</h2>
        <p>
          #UXcampAMS15 was a great day. UXcamp Amsterdam is a community event run by volunteers —
          and this was where it all began.
        </p>
        <a
          href="https://goo.gl/photos/82ZEwczoHbZfyT6R9"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm font-semibold text-[#B20101] underline underline-offset-2"
        >
          See photos from 2015 ↗
        </a>
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
        <h2>Sponsors</h2>
        <p className="mt-2 text-sm text-gray-600">A4 (Internationaal) · Adyen · Nedap</p>
      </ContentSection>

      <ContentSection alt>
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
