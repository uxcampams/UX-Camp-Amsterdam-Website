import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";

export default function Year2025() {
  const team = [
    "Arunima Ved", "Talita Collare", "Nien-Hua Gu",
    "María de los Ángeles Adrián", "Vincent Vijn", "Indre Lauciute", "Rita Costa Pereira",
  ];

  return (
    <main>
      <Hero
        title="UXcamp Amsterdam 2025"
        subtitle="8th Edition · June 21, 2025 · HvA Corry Tendeloohuis, Amsterdam"
      />

      <ContentSection>
        <h2>8th edition — and another one for the books</h2>
        <p>
          UXcampAMS25 brought together UX professionals, students, and enthusiasts for a full day of
          sessions, workshops, and conversations. Thank you to everyone who pitched, attended, and
          helped make it happen.
        </p>
      </ContentSection>

      <ContentSection alt>
        <h2>Sessions</h2>
        <p className="text-sm text-gray-400 italic">Full session list coming soon.</p>
      </ContentSection>

      <ContentSection>
        <h2>Sponsors</h2>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li><strong>Location sponsor:</strong> HvA / CMD Amsterdam</li>
          <li><strong>Giveaway sponsor:</strong> Interaction Design Foundation (IxDF)</li>
        </ul>
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
