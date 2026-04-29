import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";
import OrganisingTeam, { type Organizer } from "@/components/OrganisingTeam";
import SessionCardList from "@/components/SessionCardList";
import CtaBanner from "@/components/CtaBanner";

const slides = [
  "Free Design — Open Source et al — Maria Leonova",
  "Climbing the Mountain: Maturing UX in a corporate environment — Carina Palumbo & Murat Akyol",
  "Design & Marktplaats: How we're transforming on the go — Jeroen Mulder",
  "Data Driven Personas — Liset Molenaar",
  "Accessibility in Mobile Apps 2016 — Report — Agnieszka Czyżak",
  "Context Chat — Emma Haagen",
];

const team: Organizer[] = [
  { name: "Philipp Engel", role: "", linkedin: "#" },
  { name: "Tatiana Sidorenkova", role: "", linkedin: "#" },
  { name: "Gareth Simms", role: "", linkedin: "#" },
  { name: "Doron Hirsch", role: "", linkedin: "#" },
  { name: "Peter Boersma", role: "", linkedin: "#" },
  { name: "Carolina Gómez Naranjo", role: "", linkedin: "#" },
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
        <h2>Photos</h2>
        <p>Madness session, setup, sponsors &amp; activities, talks, mingling.</p>
        <a
          href="https://goo.gl/photos/NxyPfCmuV5FTzLGXA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download photos from Google Photos ↗
        </a>
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
        <h2>Organising team</h2>
        <OrganisingTeam organizers={team} />
      </ContentSection>

      <CtaBanner />
    </main>
  );
}
