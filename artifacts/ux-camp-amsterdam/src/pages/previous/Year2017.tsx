import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";
import OrganisingTeam, { type Organizer } from "@/components/OrganisingTeam";
import SessionCardList from "@/components/SessionCardList";
import Impressions from "@/components/Impressions";
import CtaBanner from "@/components/CtaBanner";
import philippPhoto from "../../../assets/images/2019/Philipp_Engel.jpg";
import tatianaPhoto from "../../../assets/images/2019/Tatiana_Sidorenkova.png";
import garethPhoto from "../../../assets/images/2019/Gareth_Simms.jpg";
import doronPhoto from "../../../assets/images/2019/Doron_Hirsch.jpg";
import peterPhoto from "../../../assets/images/2016/organizer-peter.jpg";
import carolinaPhoto from "../../../assets/images/2016/organizer-carolina.jpg";
import madness01 from "@assets/madness-01_1777549899985.jpg";
import madness02 from "@assets/madness-02_1777549991318.jpg";
import madness12 from "@assets/madness-12_1777549926816.jpg";
import setup05 from "@assets/setup-05_1777549986437.jpg";
import setup08 from "@assets/setup-08_1777549930656.jpg";
import sponsors11 from "@assets/sponsors-11_1777549936155.jpg";
import talks01 from "@assets/talks-01_1777549962915.jpg";
import talks02 from "@assets/talks-02_1777549963991.jpg";
import talks08 from "@assets/talks-08_1777549939657.jpg";
import talks16 from "@assets/talks-16_1777549942782.jpg";
import talks17 from "@assets/talks-17_1777549954606.jpg";
import talks27 from "@assets/talks-27_1777549952061.jpg";
import talks31 from "@assets/talks-31_1777549949877.jpg";
import talks33 from "@assets/talks-33_1777549950827.jpg";
import mingling06 from "@assets/mingling-06_1777549982984.jpg";
import mingling07 from "@assets/mingling-07_1777549975605.jpg";
import mingling08 from "@assets/mingling-08_1777549974361.jpg";
import mingling11 from "@assets/mingling-11_1777549972868.jpg";

const eventPhotos = [
  { src: madness01, caption: "Opening — Madness session" },
  { src: mingling08, caption: "Registration & arrival" },
  { src: mingling07, caption: "Welcome desk" },
  { src: setup08, caption: "Schedule grid" },
  { src: setup05, caption: "Pinning sessions to the map" },
  { src: madness12, caption: "Sign-up sheets" },
  { src: talks01, caption: "Opening keynote" },
  { src: talks02, caption: "Session in progress" },
  { src: talks08, caption: "Talk: Internet at scale" },
  { src: talks16, caption: "Madness session — 60 seconds" },
  { src: talks17, caption: "Sketching wireframes" },
  { src: talks27, caption: "Audience Q&A" },
  { src: talks31, caption: "Discussion session" },
  { src: talks33, caption: "Whiteboard talk" },
  { src: mingling11, caption: "Networking break" },
  { src: mingling06, caption: "Mingling between sessions" },
  { src: sponsors11, caption: "Mirabeau rubber duck workshop" },
  { src: madness02, caption: "Closing — UXcampAMS17 team" },
];

const slides = [
  "Free Design — Open Source et al — Maria Leonova",
  "Climbing the Mountain: Maturing UX in a corporate environment — Carina Palumbo & Murat Akyol",
  "Design & Marktplaats: How we're transforming on the go — Jeroen Mulder",
  "Data Driven Personas — Liset Molenaar",
  "Accessibility in Mobile Apps 2016 — Report — Agnieszka Czyżak",
  "Context Chat — Emma Haagen",
];

const team: Organizer[] = [
  { name: "Philipp Engel", role: "", linkedin: "#", photo: philippPhoto },
  { name: "Tatiana Sidorenkova", role: "", linkedin: "#", photo: tatianaPhoto },
  { name: "Gareth Simms", role: "", linkedin: "#", photo: garethPhoto },
  { name: "Doron Hirsch", role: "", linkedin: "#", photo: doronPhoto },
  { name: "Peter Boersma", role: "", linkedin: "#", photo: peterPhoto },
  { name: "Carolina Gómez Naranjo", role: "", linkedin: "#", photo: carolinaPhoto },
];

export default function Year2017() {
  return (
    <main>
      <Hero
        title="UXcamp Amsterdam 2017"
        subtitle="April 22, 2017 · Amsterdam"
      />

      <ContentSection>
        <h2>Done &amp; dusted for another year</h2>
        <p>
          UXcampAMS17 saw UX professionals, students and enthusiasts from across Europe and beyond
          come together for a day of learning, sharing and discussion. The day ended with a fantastic
          after-party where the fun and conversations continued. We'd like to thank each and every
          one of you who attended.
        </p>
      </ContentSection>

      <ContentSection alt>
        <Impressions
          yearShort="17"
          slides={eventPhotos}
          seeAllHref="https://goo.gl/photos/NxyPfCmuV5FTzLGXA"
        />
      </ContentSection>

      <ContentSection>
        <h2>Slides</h2>
        <p>
          Still waiting for a number of slide packs from presenters. If you presented and your slides
          are available, please send them to{" "}
          <a href="mailto:info@uxcampams.com">info@uxcampams.com</a>.
        </p>
        <SessionCardList sessions={slides} />
      </ContentSection>

      <ContentSection alt>
        <h2>The people who made it happen</h2>
        <OrganisingTeam organizers={team} />
      </ContentSection>

      <CtaBanner />
    </main>
  );
}
