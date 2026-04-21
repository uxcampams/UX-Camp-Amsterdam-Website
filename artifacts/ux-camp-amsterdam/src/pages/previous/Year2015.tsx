import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";
import Carousel from "@/components/Carousel";
import receptionImg from "../../../assets/images/2015/reception.jpg";
import madness1Img from "../../../assets/images/2015/madness1.jpg";
import scheduleImg from "../../../assets/images/2015/schedule.jpg";
import madness2Img from "../../../assets/images/2015/madness2.jpg";
import presentationImg from "../../../assets/images/2015/presentation.jpg";
import foodImg from "../../../assets/images/2015/food.jpg";
import sponsorA4 from "../../../assets/images/2015/sponsor-a4.png";
import sponsorAdyen from "../../../assets/images/2015/sponsor-adyen.png";
import sponsorNedap from "../../../assets/images/2015/sponsor-nedap.png";
import orgTatiana from "../../../assets/images/2015/organizer-tatiana.png";
import orgDoron from "../../../assets/images/2015/organizer-doron.png";
import orgDave from "../../../assets/images/2015/organizer-dave.jpg";
import orgDaniel from "../../../assets/images/2015/organizer-daniel.jpg";
import orgNing from "../../../assets/images/2015/organizer-ning.jpeg";
import orgLiang from "../../../assets/images/2015/organizer-liang.jpg";

type Organizer = {
  name: string;
  role: string;
  photo: string;
  linkedin: string;
};

const organizers: Organizer[] = [
  { name: "Doron Hirsch",        role: "UX & Game Designer",              photo: orgDoron,   linkedin: "https://linkedin.com/in/doron-hirsch-97992617" },
  { name: "Dave de Bakker",      role: "",                                photo: orgDave,    linkedin: "https://linkedin.com/in/davedebakker" },
  { name: "Daniel Kuipers",      role: "Founder & Business Dev Manager",  photo: orgDaniel,  linkedin: "https://linkedin.com/in/danielkuipers" },
  { name: "Ning Xu",             role: "Product Manager & Analyst",       photo: orgNing,    linkedin: "https://linkedin.com/in/ningxxu" },
  { name: "Liang Hiah",          role: "UX Designer",                     photo: orgLiang,   linkedin: "https://linkedin.com/in/lianghiah" },
  { name: "Tatiana Sidorenkova", role: "UX Researcher",                   photo: orgTatiana, linkedin: "https://linkedin.com/in/tatiana-sidorenkova-36087b9" },
];

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
        <div
          style={{
            marginTop: 24,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "32px 48px",
          }}
        >
          <img
            src={sponsorA4}
            alt="Amsterdam University of Applied Sciences"
            style={{ height: 64, width: "auto", objectFit: "contain" }}
          />
          <img
            src={sponsorAdyen}
            alt="Adyen"
            style={{ height: 48, width: "auto", objectFit: "contain" }}
          />
          <img
            src={sponsorNedap}
            alt="Nedap"
            style={{ height: 40, width: "auto", objectFit: "contain" }}
          />
        </div>
      </ContentSection>

      <ContentSection alt>
        <h2>Organising team</h2>
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
                src={p.photo}
                alt={p.name}
                style={{
                  width: 140,
                  height: 140,
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "3px solid #fff",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                }}
              />
              <div style={{ marginTop: 12, fontWeight: 700, color: "#333" }}>
                {p.name}
              </div>
              <div style={{ fontSize: 13, color: "#666", marginTop: 2, minHeight: 18 }}>
                {p.role || "\u00A0"}
              </div>
              <a
                href={p.linkedin}
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
      </ContentSection>
    </main>
  );
}
