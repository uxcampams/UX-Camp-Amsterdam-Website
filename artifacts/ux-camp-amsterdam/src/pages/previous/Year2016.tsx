import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";
import OrganisingTeam, { type Organizer } from "@/components/OrganisingTeam";
import SessionCardList from "@/components/SessionCardList";
import PhotoGrid from "@/components/PhotoGrid";
import CtaBanner from "@/components/CtaBanner";

import event1 from "../../../assets/images/2016/event-1.jpg";
import event2 from "../../../assets/images/2016/event-2.jpg";
import event3 from "../../../assets/images/2016/event-3.jpg";
import event4 from "../../../assets/images/2016/event-4.jpg";
import event5 from "../../../assets/images/2016/event-5.jpg";
import event6 from "../../../assets/images/2016/event-6.jpg";

import sponsorAdyen from "../../../assets/images/companies-logos/sponsor-adyen.png";
import sponsorIcemobile from "../../../assets/images/companies-logos/sponsor-icemobile.png";
import sponsorMarktplaats from "../../../assets/images/companies-logos/sponsor-marktplaats.png";
import sponsorMirabeau from "../../../assets/images/companies-logos/sponsor-mirabeau.png";
import sponsorNomensa from "../../../assets/images/companies-logos/sponsor-nomensa.png";

import orgPhilipp from "../../../assets/images/2016/organizer-philipp.png";
import orgTatiana from "../../../assets/images/2016/organizer-tatiana.png";
import orgGareth from "../../../assets/images/2016/organizer-gareth.png";
import orgDoron from "../../../assets/images/2016/organizer-doron.png";
import orgPeter from "../../../assets/images/2016/organizer-peter.png";
import orgDave from "../../../assets/images/2016/organizer-dave.jpg";
import orgCarolina from "../../../assets/images/2016/organizer-carolina.jpg";
import orgMarcel from "../../../assets/images/2016/organizer-marcel.jpg";
import orgDaniel from "../../../assets/images/2016/organizer-daniel.jpg";
import orgNing from "../../../assets/images/2016/organizer-ning.jpeg";
import orgLiang from "../../../assets/images/2016/organizer-liang.jpg";

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

const photos = [
  { src: event1, alt: "Sponsors on stage" },
  { src: event2, alt: "UXcamp team" },
  { src: event3, alt: "Madness Session" },
  { src: event4, alt: "Carolina Gómez presenting" },
  { src: event5, alt: "Q&A with the audience" },
  { src: event6, alt: "Twitter wrap-up" },
];

const sponsors = [
  { src: sponsorAdyen, alt: "Adyen" },
  { src: sponsorIcemobile, alt: "IceMobile" },
  { src: sponsorMarktplaats, alt: "Marktplaats" },
  { src: sponsorMirabeau, alt: "Mirabeau" },
  { src: sponsorNomensa, alt: "Nomensa" },
];

const team: Organizer[] = [
  { name: "Philipp Engel",          role: "UX Director",                    photo: orgPhilipp,  linkedin: "https://linkedin.com/in/philippengel" },
  { name: "Tatiana Sidorenkova",    role: "UX Researcher",                  photo: orgTatiana,  linkedin: "https://linkedin.com/in/tatiana-sidorenkova-36087b9" },
  { name: "Gareth Simms",           role: "Product Owner",                  photo: orgGareth,   linkedin: "https://linkedin.com/in/garethsimms" },
  { name: "Doron Hirsch",           role: "UX & Game Designer",             photo: orgDoron,    linkedin: "https://linkedin.com/in/doron-hirsch-97992617" },
  { name: "Peter Boersma",          role: "Director of Product Design",     photo: orgPeter,    linkedin: "https://linkedin.com/in/pboersma" },
  { name: "Dave de Bakker",         role: "",                               photo: orgDave,     linkedin: "https://linkedin.com/in/davedebakker" },
  { name: "Carolina Gómez Naranjo", role: "UX Designer",                    photo: orgCarolina, linkedin: "https://linkedin.com/in/carolina-gómez-naranjo" },
  { name: "Marcel Hadderingh",      role: "Product Designer",               photo: orgMarcel,   linkedin: "https://linkedin.com/in/marcelhadderingh" },
  { name: "Daniel Kuipers",         role: "Founder & Business Dev Manager", photo: orgDaniel,   linkedin: "https://linkedin.com/in/danielkuipers" },
  { name: "Ning Xu",                role: "Product Manager & Analyst",      photo: orgNing,     linkedin: "https://linkedin.com/in/ningxxu" },
  { name: "Liang Hiah",             role: "UX Designer",                    photo: orgLiang,    linkedin: "https://linkedin.com/in/lianghiah" },
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
        <PhotoGrid images={photos} yearShort="16" seeAllHref="#" />
        <p style={{ marginTop: 16 }}>
          Special thanks to Den Tserkovnyi &amp; Filip Mishevski for the photos.
        </p>
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
            gap: 32,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {sponsors.map((s) => (
            <img
              key={s.alt}
              src={s.src}
              alt={s.alt}
              style={{ height: 48, width: "auto", objectFit: "contain" }}
            />
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
