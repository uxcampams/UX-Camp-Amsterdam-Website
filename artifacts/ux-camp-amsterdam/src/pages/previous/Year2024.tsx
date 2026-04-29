import { Link } from "wouter";
import { TICKET_URL } from "../../constants";
import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";
import OrganisingTeam, { type Organizer } from "@/components/OrganisingTeam";

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
        <div className="mt-6">
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Join UX Camp Amsterdam 2026 →
          </a>
        </div>
      </ContentSection>

      <ContentSection alt>
        <h2>Impressions from #UXcampAMS24</h2>
        <p className="text-sm text-gray-400 italic mb-4">Photo gallery coming soon.</p>
        <a
          href="https://www.instagram.com/uxcampamsterdam/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-[#B20101] underline underline-offset-2"
        >
          Follow @uxcampamsterdam for regular visual updates ↗
        </a>
      </ContentSection>

      <ContentSection>
        <h2>36 sessions</h2>
        <ol className="mt-4 divide-y divide-[#ccc] border-t border-[#ccc]">
          {sessions.map((s, i) => (
            <li key={s} className="py-3 text-sm text-gray-600 grid grid-cols-[28px_1fr] gap-3">
              <span className="text-xs font-bold text-[#B20101]">{i + 1}</span>
              {s}
            </li>
          ))}
        </ol>
      </ContentSection>

      <ContentSection alt>
        <h2>Sponsors</h2>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li><strong>Location sponsor:</strong> CMD Amsterdam / Hogeschool van Amsterdam (HvA)</li>
          <li><strong>Giveaway sponsor:</strong> Axure</li>
        </ul>
      </ContentSection>

      <ContentSection>
        <h2>Organising team</h2>
        <OrganisingTeam organizers={team} />
        <div className="mt-8 pt-6 border-t border-[#ccc]">
          <h3 className="text-sm font-bold uppercase tracking-wider mb-3">Will you join UX Camp Amsterdam 2026?</h3>
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Get ticket →
          </a>
        </div>
      </ContentSection>
    </main>
  );
}
