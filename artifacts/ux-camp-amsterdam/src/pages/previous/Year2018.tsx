import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";
import OrganisingTeam, { type Organizer } from "@/components/OrganisingTeam";

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


  { name: "Philipp Engel", role: "", linkedin: "#" },


  { name: "Tatiana Sidorenkova", role: "", linkedin: "#" },


  { name: "Gareth Simms", role: "", linkedin: "#" },


  { name: "Doron Hirsch", role: "", linkedin: "#" },


  { name: "Peter Boersma", role: "", linkedin: "#" },


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
        <h2>Photos</h2>
        <p className="text-sm text-gray-500 mb-3">
          Big thanks to our audiovisual camp volunteers: Ans de Nijs, Kira Laktionov, Larissa Herbst,
          Mark Kemper, Matthijs Rijken, Pimm de Hogeling, Scott Neilson and Thomas Beelen!
        </p>
        <a
          href="https://www.instagram.com/uxcampamsterdam/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-[#B20101] underline underline-offset-2"
        >
          Follow @uxcampamsterdam ↗
        </a>
      </ContentSection>

      <ContentSection>
        <h2>28 sessions</h2>
        <div className="mt-4 space-y-8">
          {timeSlots.map((slot) => (
            <div key={slot.time}>
              <p className="text-xs font-bold uppercase tracking-widest text-[#B20101] mb-2">{slot.time}</p>
              <ul className="divide-y divide-[#ccc] border-t border-[#ccc]">
                {slot.sessions.map((s) => (
                  <li key={s} className="py-2 text-sm text-gray-600">{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection alt>
        <h2>Sponsors</h2>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li><strong>Location sponsor:</strong> Ijsfontein — hosted at Marineterrein Amsterdam</li>
          <li><strong>Event sponsors:</strong> Adobe · UX Academy · Mirabeau · Happy Labs · Marktplaats · Nomensa</li>
          <li><strong>Product sponsors:</strong> UXPressia · Rosenfeld Media · Sketch</li>
        </ul>
      </ContentSection>

      <ContentSection>
        <h2>Organising team</h2>
        <OrganisingTeam organizers={team} />
      </ContentSection>
    </main>
  );
}
