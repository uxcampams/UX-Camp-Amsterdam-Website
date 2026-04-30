import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";
import OrganisingTeam, { type Organizer } from "@/components/OrganisingTeam";
import SessionCardList from "@/components/SessionCardList";
import Impressions from "@/components/Impressions";
import CtaBanner from "@/components/CtaBanner";
import nienHuaPhoto from "../../../assets/images/2024/Nien-Hua_Gu.png";
import event1 from "../../../assets/images/2024/event/20240629_120357.jpg";
import event2 from "../../../assets/images/2024/event/20240629_153725.jpg";
import event3 from "../../../assets/images/2024/event/20240629_165340.jpg";
import event4 from "../../../assets/images/2024/event/20240629_173111.jpg";
import event5 from "../../../assets/images/2024/event/1000014612.jpg";
import event6 from "../../../assets/images/2024/event/1000014617.jpg";
import event7 from "../../../assets/images/2024/event/1000014623.jpg";
import event8 from "../../../assets/images/2024/event/1000014637.jpg";
import event9 from "../../../assets/images/2024/event/1000014642.jpg";
import event10 from "../../../assets/images/2024/event/IMG_9210.jpg";
import event11 from "../../../assets/images/2024/event/IMG_9226.jpg";
import event12 from "../../../assets/images/2024/event/IMG_9227.jpg";
import event13 from "../../../assets/images/2024/event/IMG_9229.jpg";
import event14 from "../../../assets/images/2024/event/IMG_9230.jpg";
import event15 from "../../../assets/images/2024/event/IMG_9296.jpg";
import event16 from "../../../assets/images/2024/event/IMG_9357.jpg";
import event17 from "../../../assets/images/2024/event/IMG_9362.jpg";
import event18 from "../../../assets/images/2024/event/IMG_9373.jpg";
import event19 from "../../../assets/images/2024/event/IMG_9421.jpg";
import event20 from "../../../assets/images/2024/event/IMG_9422.jpg";
import event21 from "../../../assets/images/2024/event/IMG_9423.jpg";
import event22 from "../../../assets/images/2024/event/IMG_9471.jpg";
import event23 from "../../../assets/images/2024/event/IMG_9474.jpg";
import mariaPhoto from "../../../assets/images/2024/Maria_Adrian.png";
import vincentPhoto from "../../../assets/images/2024/Vincent_Vijn.png";
import indrePhoto from "../../../assets/images/2024/Indre_Lauciute.png";
import ritaPhoto from "../../../assets/images/2024/Rita_Costa_Pereira.png";
import tatianaPhoto from "../../../assets/images/2024/Tatiana_Sidorenkova.png";

const sessions = [
  "Content Modelling for Everyone — Larry Swanson",
  "How to build a community of designers in your company — Sheila Sheikh",
  "What goes on a roadmap? — Peter Boersma",
  "Car HMI Design for driving safely — Ruby Zhu",
  "Tips to redesign a 30-year old software — Santiago Guio",
  "Combining innovation and structure in design systems for next-gen electrical engineering — Anastasia Subow",
  "What is a knowledge graph and why should I care? — Larry Swanson",
  "How to collect feedback about metrics — Natalie Kanikina",
  "Storytelling with data — Kevin Hardeman",
  "One of the secrets engineers keep — Pimm Hogeling",
  "From Scrum Master to Leader: building strong, collaborative teams — Sabrina Couto",
  "Learning from creating a UX guild — Luke Chen",
  "Beyond (back) to basics: High quality UX with IA & Research — Sebastian Wachholz",
  "Conducting user research with farmers in rural India — Arunima Ved",
  "Unleash your inner brand — Tsvetelina Obretenova",
  "Understanding and overcoming Impostor Syndrome — Karina Yugay",
  "User Experience vs. Service Design roles and responsibilities — Irina Damascan",
  "Healthy work habits for UX-ers — Pieta van der Molen",
  "Seven mistakes on the path to seniority — Julia Zaytseva",
  "A design career journey: IC and management roles in corporate frameworks — Philipp Engel",
  "AI & Natural Intelligence — George Bugianishvili and Sergio Martinez",
  "Beyond accessibility: changing minds for an inclusive practice — Bettina Kast and Erika Bonifaz",
  "Navigating the challenges of a solo UX Designer — Sofia Aquino Gomez",
  "Accessibility in practice — Marli Ritter and Iris Latour",
  "AI for UX, in practice — Lara Oral",
  "Conversational UX Writing — Jorinde Beijerling",
  "Role of UX in the evolving P2P economy & Gen AI — Jan Mwesigwa",
  "A designer in a world of engineers — Pedro Vaz",
  "Beyond user centricity — Celina Breitenborn",
  "7 ingredients for a happy and impactful design team — Benjamin Lipinski",
  "Negotiating design decisions — Tsvetelina Obretenova",
  "Designing at startup vs. enterprise — Xiaoyu Shen",
  "Design career progress in creative and practical business — Duy Le",
  "Democratisation and its possible inevitability — Lade Tawak",
  "Reframe your downsides into USP for job hunting — Nymphaea Notschaele",
  "Synthetive: interactive board game on AI in political campaigns — Muskan Jain",
];

const eventPhotos = [
  { src: event1, caption: "Welcome morning" },
  { src: event2, caption: "Session in full swing" },
  { src: event3, caption: "Hallway conversations" },
  { src: event4, caption: "Wrap-up of the day" },
  { src: event5, caption: "Audience listening in" },
  { src: event6, caption: "Speaker on stage" },
  { src: event7, caption: "Group discussion" },
  { src: event8, caption: "Networking break" },
  { src: event9, caption: "Sharing ideas" },
  { src: event10, caption: "Madness session" },
  { src: event11, caption: "Schedule wall" },
  { src: event12, caption: "Coffee break" },
  { src: event13, caption: "Workshop time" },
  { src: event14, caption: "Engaged audience" },
  { src: event15, caption: "Q&A" },
  { src: event16, caption: "Lunch together" },
  { src: event17, caption: "Discussion circle" },
  { src: event18, caption: "Side conversation" },
  { src: event19, caption: "Smiling crowd" },
  { src: event20, caption: "Note taking" },
  { src: event21, caption: "Camp atmosphere" },
  { src: event22, caption: "Closing thank yous" },
  { src: event23, caption: "After-party kicks off" },
];

const team: Organizer[] = [
  { name: "Nien-Hua Gu", role: "", linkedin: "#", photo: nienHuaPhoto },
  { name: "María de los Ángeles Adrián", role: "", linkedin: "#", photo: mariaPhoto },
  { name: "Vincent Vijn", role: "", linkedin: "#", photo: vincentPhoto },
  { name: "Indre Lauciute", role: "", linkedin: "#", photo: indrePhoto },
  { name: "Rita Costa Pereira", role: "", linkedin: "#", photo: ritaPhoto },
  { name: "Tatiana Sidorenkova", role: "", linkedin: "#", photo: tatianaPhoto },
];

const sponsors = ["CMD Amsterdam / Hogeschool van Amsterdam (HvA)", "Axure"];

export default function Year2024() {
  return (
    <main>
      <Hero
        title="UXcamp Amsterdam 2024"
        subtitle="June 29, 2024 · University of Applied Sciences Amsterdam"
      />

      <ContentSection>
        <h2>It was truly special!</h2>
        <p>
          UX Camp Amsterdam 2024 was a truly special edition of the camp! We loved spending our
          Saturday with you. We'd like to thank each and every one of you who attended and joined us
          for a day of learning, sharing and discussion. It makes all our effort and hard work
          worthwhile and keeps us motivated to keep improving next year.
        </p>
        <p>
          UXcampAMS24 saw UX professionals, students and enthusiasts from across Europe. The day
          ended with a fantastic after-party where the fun and conversations continued.
        </p>
      </ContentSection>

      <ContentSection alt>
        <Impressions yearShort="24" slides={eventPhotos} seeAllHref="https://uxcampams.com/photos-24" />
      </ContentSection>

      <ContentSection>
        <h2>Sessions</h2>
        <SessionCardList sessions={sessions} />
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
        <h2>The people who made it happen</h2>
        <OrganisingTeam organizers={team} />
      </ContentSection>

      <CtaBanner />
    </main>
  );
}
