import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";
import Carousel from "@/components/Carousel";
import receptionImg from "../../../assets/images/2015/reception.jpg";
import madness1Img from "../../../assets/images/2015/madness1.jpg";
import scheduleImg from "../../../assets/images/2015/schedule.jpg";
import madness2Img from "../../../assets/images/2015/madness2.jpg";
import presentationImg from "../../../assets/images/2015/presentation.jpg";
import foodImg from "../../../assets/images/2015/food.jpg";

const carouselSlides = [
  { src: receptionImg, caption: "Reception" },
  { src: madness1Img, caption: "Madness Session 1" },
  { src: scheduleImg, caption: "Schedule" },
  { src: madness2Img, caption: "Madness Session 2" },
  { src: presentationImg, caption: "Presentation" },
  { src: foodImg, caption: "Food" },
];

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
        <div className="mt-6">
          <Carousel slides={carouselSlides} />
        </div>
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
