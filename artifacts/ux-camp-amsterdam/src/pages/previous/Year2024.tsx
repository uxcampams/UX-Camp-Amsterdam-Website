import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";
import OrganisingTeam, { type Organizer } from "@/components/OrganisingTeam";
import SessionCardList from "@/components/SessionCardList";
import CtaBanner from "@/components/CtaBanner";

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

const team: Organizer[] = [
  { name: "Nien-Hua Gu", role: "", linkedin: "#" },
  { name: "María de los Ángeles Adrián", role: "", linkedin: "#" },
  { name: "Vincent Vijn", role: "", linkedin: "#" },
  { name: "Indre Lauciute", role: "", linkedin: "#" },
  { name: "Rita Costa Pereira", role: "", linkedin: "#" },
  { name: "Tatiana Sidorenkova", role: "", linkedin: "#" },
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
        <h2>Impressions from #UXcampAMS24</h2>
        <p style={{ marginTop: 24 }}>
          <a
            href="https://uxcampams.com/photos-24"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: '"Open Sans", system-ui, sans-serif',
              fontWeight: 600,
              fontSize: 14,
              color: "#B20101",
              textDecoration: "none",
              letterSpacing: 0.5,
            }}
          >
            See all photos from #UXcampAMS24 →
          </a>
        </p>
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
        <h2>Organising team</h2>
        <OrganisingTeam organizers={team} />
      </ContentSection>

      <CtaBanner />
    </main>
  );
}
