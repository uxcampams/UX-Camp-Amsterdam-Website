import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";
import OrganisingTeam, { type Organizer } from "@/components/OrganisingTeam";
import SessionCardList from "@/components/SessionCardList";
import PhotoGrid from "@/components/PhotoGrid";
import CtaBanner from "@/components/CtaBanner";
import receptionImg from "../../../assets/images/2015/reception.jpg";
import madness1Img from "../../../assets/images/2015/madness1.jpg";
import scheduleImg from "../../../assets/images/2015/schedule.jpg";
import madness2Img from "../../../assets/images/2015/madness2.jpg";
import presentationImg from "../../../assets/images/2015/presentation.jpg";
import foodImg from "../../../assets/images/2015/food.jpg";
import sponsorA4 from "../../../assets/images/companies-logos/sponsor-a4.png";
import sponsorAdyen from "../../../assets/images/companies-logos/sponsor-adyen-2015.png";
import sponsorNedap from "../../../assets/images/companies-logos/sponsor-nedap.png";
import orgTatiana from "../../../assets/images/2015/organizer-tatiana.png";
import orgDoron from "../../../assets/images/2015/organizer-doron.png";
import orgDave from "../../../assets/images/2015/organizer-dave.jpg";
import orgDaniel from "../../../assets/images/2015/organizer-daniel.jpg";
import orgNing from "../../../assets/images/2015/organizer-ning.jpeg";
import orgLiang from "../../../assets/images/2015/organizer-liang.jpg";

const organizers: Organizer[] = [
  { name: "Doron Hirsch",        role: "UX & Game Designer",              photo: orgDoron,   linkedin: "https://linkedin.com/in/doron-hirsch-97992617" },
  { name: "Dave de Bakker",      role: "",                                photo: orgDave,    linkedin: "https://linkedin.com/in/davedebakker" },
  { name: "Daniel Kuipers",      role: "Founder & Business Dev Manager",  photo: orgDaniel,  linkedin: "https://linkedin.com/in/danielkuipers" },
  { name: "Ning Xu",             role: "Product Manager & Analyst",       photo: orgNing,    linkedin: "https://linkedin.com/in/ningxxu" },
  { name: "Liang Hiah",          role: "UX Designer",                     photo: orgLiang,   linkedin: "https://linkedin.com/in/lianghiah" },
  { name: "Tatiana Sidorenkova", role: "UX Researcher",                   photo: orgTatiana, linkedin: "https://linkedin.com/in/tatiana-sidorenkova-36087b9" },
];

const photos = [
  { src: receptionImg, alt: "Reception" },
  { src: madness1Img, alt: "Madness Session 1" },
  { src: scheduleImg, alt: "Schedule" },
  { src: madness2Img, alt: "Madness Session 2" },
  { src: presentationImg, alt: "Presentation" },
  { src: foodImg, alt: "Food" },
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
      </ContentSection>

      <ContentSection alt>
        <PhotoGrid images={photos} yearShort="15" seeAllHref="https://goo.gl/photos/82ZEwczoHbZfyT6R9" />
      </ContentSection>

      <ContentSection>
        <h2>Slides</h2>
        <p>A selection of slide decks from the day:</p>
        <SessionCardList sessions={slides} />
      </ContentSection>

      <ContentSection alt>
        <h2>Supported by</h2>
        <div
          style={{
            marginTop: 16,
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

      <ContentSection>
        <h2>Organising team</h2>
        <OrganisingTeam organizers={organizers} />
      </ContentSection>

      <CtaBanner />
    </main>
  );
}
