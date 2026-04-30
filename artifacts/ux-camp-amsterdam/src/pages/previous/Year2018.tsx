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
import peterPhoto from "../../../assets/images/2016/organizer-peter.png";
import event02 from "@assets/event-02_1777549725283.jpg";
import event04 from "@assets/event-04_1777549725283.jpg";
import event05 from "@assets/event-05_1777549725277.jpg";
import event06 from "@assets/event-06_1777549725278.jpg";
import event10 from "@assets/event-10_1777549725278.jpg";
import event19 from "@assets/event-19_1777549725279.jpg";
import event20 from "@assets/event-20_1777549725279.jpg";
import event22 from "@assets/event-22_1777549725279.jpg";
import event27 from "@assets/event-27_1777549725280.jpg";
import event28 from "@assets/event-28_1777549725280.jpg";
import event29 from "@assets/event-29_1777549725280.jpg";
import event31 from "@assets/event-31_1777549725280.jpg";
import event32 from "@assets/event-32_1777549725281.jpg";
import event33 from "@assets/event-33_1777549725281.jpg";
import event34 from "@assets/event-34_1777549725281.jpg";
import event36 from "@assets/event-36_1777549725281.jpg";
import event37 from "@assets/event-37_1777549725282.jpg";
import event38 from "@assets/event-38_1777549725282.jpg";
import event40 from "@assets/event-40_1777549725282.jpg";
import event212 from "@assets/event-212_1777549725282.jpg";

const eventPhotos = [
  { src: event212, caption: "UXcamp Amsterdam 2018 — Group photo" },
  { src: event02, caption: "UXcamp Amsterdam 2018" },
  { src: event04, caption: "UXcamp Amsterdam 2018" },
  { src: event05, caption: "UXcamp Amsterdam 2018" },
  { src: event06, caption: "UXcamp Amsterdam 2018" },
  { src: event10, caption: "UXcamp Amsterdam 2018" },
  { src: event19, caption: "UXcamp Amsterdam 2018" },
  { src: event20, caption: "UXcamp Amsterdam 2018" },
  { src: event22, caption: "UXcamp Amsterdam 2018" },
  { src: event27, caption: "UXcamp Amsterdam 2018" },
  { src: event28, caption: "UXcamp Amsterdam 2018" },
  { src: event29, caption: "UXcamp Amsterdam 2018" },
  { src: event31, caption: "UXcamp Amsterdam 2018" },
  { src: event32, caption: "UXcamp Amsterdam 2018" },
  { src: event33, caption: "UXcamp Amsterdam 2018" },
  { src: event34, caption: "UXcamp Amsterdam 2018" },
  { src: event36, caption: "UXcamp Amsterdam 2018" },
  { src: event37, caption: "UXcamp Amsterdam 2018" },
  { src: event38, caption: "UXcamp Amsterdam 2018" },
  { src: event40, caption: "UXcamp Amsterdam 2018" },
];

const timeSlots = [
  {
    time: "11:00 – 11:45",
    sessions: [
      "Lovability — Emiel Langeberg",
      "From Tech Startup to Design Driven Company — Tanya Zavyalova",
      "Designing Dashboards and Making Data Visualization Sexy Again — Irina Damascan",
      "UX & Customer Journey Approach for Area Development — Laurens and Nona",
      "How to engage stakeholders using relay ideation — Roos Voorend",
      "Designing a minor UX for IT students — Nymphale and EEF",
    ],
  },
  {
    time: "12:00 – 12:45",
    sessions: [
      "Moderated Remote Research",
      "New Skills: what you need to be an effective designer — Paul",
      "Stepping-in / stepping-out at the right moment — Yvonne Gillis",
      "Blockchain Essentials — Jan Van Boesschoten",
      "UX for Startup & Scale up — Koen van der Veldt",
    ],
  },
  {
    time: "14:00 – 14:45",
    sessions: [
      "Creating Magic: UX Design & AI — Matthijs Zwinderman",
      "Developers are adult-sized children — Pimm Hogeling",
      "New Method: Objective UX Measure — Gray Holland",
      "Your first month as a UX/Product Designer — Ibrahim Farah",
      "Customer Loyalty Canvas — Rob Punselie",
      "Persona, Empathy Map, Customer Profile — Anouschka Scholten",
    ],
  },
  {
    time: "15:00 – 15:45",
    sessions: [
      "Understanding cultural differences and their impact on design — Bindu and Anna",
      "From the dark side — Diana Prokusheva",
      "Blockchain belongs to you (too) — Qaid Jacobs",
      "Yes U can with User Checks — Anouschka Scholten",
      "Explore how to balance visitor experience in the Van Gogh Museum — Sanneke Prins",
      "What's Adobe XD? — Bernardo Ramalho",
      "Designing Data Products at Speed — Jan Srutek",
      "Empathy Mapping — Sandy Daehnert",
    ],
  },
  {
    time: "16:00 – 16:45",
    sessions: [
      "Standing Out in the Digital Crowd — Dave de Bakker and Jorge Delgado",
      "Learnings from 30+ Design Sprints — Anne Botsvine",
      "My Experience Hiring Experience Pros! — Harry Oram",
    ],
  },
];

const team: Organizer[] = [
  { name: "Philipp Engel", role: "", linkedin: "#", photo: philippPhoto },
  { name: "Tatiana Sidorenkova", role: "", linkedin: "#", photo: tatianaPhoto },
  { name: "Gareth Simms", role: "", linkedin: "#", photo: garethPhoto },
  { name: "Doron Hirsch", role: "", linkedin: "#", photo: doronPhoto },
  { name: "Peter Boersma", role: "", linkedin: "#", photo: peterPhoto },
];

const sponsors = [
  "Ijsfontein",
  "Adobe",
  "UX Academy",
  "Mirabeau",
  "Happy Labs",
  "Marktplaats",
  "Nomensa",
  "UXPressia",
  "Rosenfeld Media",
  "Sketch",
];

export default function Year2018() {
  return (
    <main>
      <Hero
        title="UXcamp Amsterdam 2018"
        subtitle="June 9, 2018 · Ijsfontein, Marineterrein Amsterdam"
      />

      <ContentSection>
        <h2>That was fun!</h2>
        <p>
          The sun shone, the knowledge was abundant and the beer flowed. What better way to spend a
          Saturday than with our incredibly awesome attendees and sponsors? We had an absolute blast
          catching up with friends and meeting new people. From 'Extreme Rock Paper Scissors' through
          to the after-party, you gave your all and helped us raise the bar once again.
        </p>
        <p>
          28 sessions across four time slots. A free, community-driven conference for user experience
          professionals.
        </p>
      </ContentSection>

      <ContentSection alt>
        <Impressions
          yearShort="18"
          slides={eventPhotos}
          seeAllHref="https://uxcampams.com/uxcampams18-photos"
        />
      </ContentSection>

      <ContentSection>
        <h2>Sessions</h2>
        {timeSlots.map((slot) => (
          <div key={slot.time} style={{ marginBottom: 32 }}>
            <p
              style={{
                fontFamily: '"Open Sans", system-ui, sans-serif',
                fontWeight: 700,
                fontSize: 13,
                color: "#B20101",
                textTransform: "uppercase",
                letterSpacing: 1,
                margin: "0 0 8px",
              }}
            >
              {slot.time}
            </p>
            <SessionCardList sessions={slot.sessions} />
          </div>
        ))}
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
