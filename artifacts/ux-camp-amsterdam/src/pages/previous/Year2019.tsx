import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";
import OrganisingTeam, { type Organizer } from "@/components/OrganisingTeam";
import SessionCardList from "@/components/SessionCardList";
import Impressions from "@/components/Impressions";
import CtaBanner from "@/components/CtaBanner";
import philippPhoto from "../../../assets/images/2019/Philipp_Engel.png";
import tatianaPhoto from "../../../assets/images/2019/Tatiana_Sidorenkova.png";
import garethPhoto from "../../../assets/images/2019/Gareth_Simms.png";
import doronPhoto from "../../../assets/images/2019/Doron_Hirsch.png";
import xiaoyuPhoto from "../../../assets/images/2019/Xiaoyu_Shen.jpg";
import davePhoto from "../../../assets/images/2019/Dave_de_Bakker.jpg";
import photo05 from "@assets/UXcampAMS19_-_5_1777549315515.png";
import photo18 from "@assets/UXcampAMS19_-_18_1777549315517.png";
import photo35 from "@assets/UXcampAMS19_-_35_1777549315517.png";
import photo36 from "@assets/UXcampAMS19_-_36_1777549315518.png";
import photo39 from "@assets/UXcampAMS19_-_39_1777549315519.png";
import photo40 from "@assets/UXcampAMS19_-_40_1777549315520.png";
import photo41 from "@assets/UXcampAMS19_-_41_1777549315520.png";
import photo42 from "@assets/UXcampAMS19_-_42_1777549315521.png";
import photo47 from "@assets/UXcampAMS19_-_47_1777549315521.png";
import photo55 from "@assets/UXcampAMS19_-_55_1777549315522.png";
import photo60 from "@assets/UXcampAMS19_-_60_1777549315522.png";
import photo85 from "@assets/UXcampAMS19_-_85_1777549315522.png";
import photo86 from "@assets/UXcampAMS19_-_86_1777549315523.png";
import photo91 from "@assets/UXcampAMS19_-_91_1777549315523.png";
import photo93 from "@assets/UXcampAMS19_-_93_1777549315523.png";
import photo95 from "@assets/UXcampAMS19_-_95_1777549315523.png";
import photo96 from "@assets/UXcampAMS19_-_96_1777549315524.png";
import photo100 from "@assets/UXcampAMS19_-_100_1777549315524.png";
import photo102 from "@assets/UXcampAMS19_-_102_1777549315524.png";

const eventPhotos = [
  { src: photo05, caption: "UXcamp Amsterdam 2019" },
  { src: photo18, caption: "UXcamp Amsterdam 2019" },
  { src: photo35, caption: "UXcamp Amsterdam 2019" },
  { src: photo36, caption: "UXcamp Amsterdam 2019" },
  { src: photo39, caption: "UXcamp Amsterdam 2019" },
  { src: photo40, caption: "UXcamp Amsterdam 2019" },
  { src: photo41, caption: "UXcamp Amsterdam 2019" },
  { src: photo42, caption: "UXcamp Amsterdam 2019" },
  { src: photo47, caption: "UXcamp Amsterdam 2019" },
  { src: photo55, caption: "UXcamp Amsterdam 2019" },
  { src: photo60, caption: "UXcamp Amsterdam 2019" },
  { src: photo85, caption: "UXcamp Amsterdam 2019" },
  { src: photo86, caption: "UXcamp Amsterdam 2019" },
  { src: photo91, caption: "UXcamp Amsterdam 2019" },
  { src: photo93, caption: "UXcamp Amsterdam 2019" },
  { src: photo95, caption: "UXcamp Amsterdam 2019" },
  { src: photo96, caption: "UXcamp Amsterdam 2019" },
  { src: photo100, caption: "UXcamp Amsterdam 2019" },
  { src: photo102, caption: "UXcamp Amsterdam 2019" },
];

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
  { name: "Philipp Engel", role: "", linkedin: "#", photo: philippPhoto },
  { name: "Tatiana Sidorenkova", role: "", linkedin: "#", photo: tatianaPhoto },
  { name: "Gareth Simms", role: "", linkedin: "#", photo: garethPhoto },
  { name: "Doron Hirsch", role: "", linkedin: "#", photo: doronPhoto },
  { name: "Xiaoyu Shen", role: "", linkedin: "#", photo: xiaoyuPhoto },
  { name: "Dave de Bakker", role: "", linkedin: "#", photo: davePhoto },
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
        <Impressions
          yearShort="19"
          slides={eventPhotos}
          seeAllHref="https://uxcampams.com/photos19"
        />
      </ContentSection>

      <ContentSection>
        <h2>Slides</h2>
        <SessionCardList sessions={slides} />
      </ContentSection>

      <ContentSection alt>
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

      <ContentSection>
        <h2>Organising team</h2>
        <OrganisingTeam organizers={team} />
      </ContentSection>

      <CtaBanner />
    </main>
  );
}
