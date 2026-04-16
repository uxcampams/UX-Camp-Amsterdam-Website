import { Link } from "wouter";
import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";

const schedule = [
  { time: "9:30", label: "Doors open — registration, coffee, saying hi to strangers" },
  { time: "10:00", label: "Welcome & Madness Session — pitches, voting, live schedule built" },
  { time: "11:00", label: "Session rounds begin across all tracks" },
  { time: "12:30", label: "Lunch" },
  { time: "13:30", label: "Afternoon sessions" },
  { time: "15:00", label: "Break" },
  { time: "15:30", label: "Final session rounds" },
  { time: "17:00", label: "Closing — highlights, thank yous, prizes" },
  { time: "17:15", label: "After party — drinks, the best conversations of the day 🧡" },
];

const newFormats = [
  {
    icon: "🗂",
    title: "Portfolio Review Corner",
    body: "Bring your piece of work — finished, messy, or in-progress. Get structured feedback from a peer or an experienced mentor in a dedicated 25-minute slot. Two slots: one in the morning, one after lunch. Sign up at the whiteboard on the day.",
  },
  {
    icon: "⚡",
    title: "Speed Networking",
    body: "5-minute rounds, prompt cards on every table, themed tables for researchers, freelancers, career switchers, and design leads. It sounds chaotic. It works incredibly well.",
  },
  {
    icon: "🐟",
    title: "Fishbowl Discussions",
    body: "Four chairs in the centre of the room. One always empty. Anyone can step in — but someone has to step out first. A rotating, open conversation with no moderator and no agenda.",
  },
  {
    icon: "📌",
    title: "Insight Wall",
    body: "A shared wall with prompts you can add to all day. Take a post-it, add your thought, read what others are writing. By the end of the day it becomes something unexpectedly good.",
  },
  {
    icon: "🛋",
    title: "UX Therapy Booth",
    body: `Write something anonymously. \u201cMy PM doesn't understand research.\u201d \u201cStakeholders killed my best idea.\u201d A facilitator reads them out and responds — part humour, part solidarity, entirely real.`,
  },
  {
    icon: "🔭",
    title: "Micro-Exhibition Space",
    body: "A corner of the venue for local UX startups, student projects, a book exchange, UX games, and a career clinic. Drop in anytime during the day.",
  },
];

const sessionFormats = [
  {
    title: "Talk / Presentation",
    body: "Share knowledge on a topic you care about. Bring slides if you want, leave time for Q&A. Works best when you have a point of view, not just information.",
  },
  {
    title: "Case Study",
    body: "Show what you did, what worked, what didn't, and what you'd do differently. The honest ones are always the best.",
  },
  {
    title: "Workshop",
    body: "A hands-on session where people actually do something — apply a skill, solve a problem, make something together. Bring any specialist materials you need beyond paper and post-its.",
  },
  {
    title: "Structured Discussion",
    body: "Bring a frame, some questions, and a point of view. Formats like World Café or Birds of a Feather work well. The key word is structured — open-ended discussions without a guide rarely land.",
  },
];

export default function About() {
  return (
    <main>
      <Hero
        eyebrow="How it works"
        title="So, how does this all work?"
        subtitle="UXcampAMS is a one-day, non-profit BarCamp for UX designers, researchers, product thinkers and anyone who cares about building better experiences. Now in its 9th edition, it's made entirely by the community, for the community."
      />

      {/* What is a BarCamp */}
      <ContentSection>
        <h2>No agenda. No speaker list. Just people with ideas.</h2>
        <p>
          A BarCamp is an open, participant-driven event. There's no pre-announced programme. The
          agenda gets built on the day, by you, and everyone else in the room.
        </p>
        <p>
          Every attendee is invited to pitch a session in the morning. Pitches are 30 seconds flat —
          we have a gong, and we use it. The audience votes by raising their hands, the organisers
          assign rooms and time slots, and the day begins.
        </p>
      </ContentSection>

      {/* How the day flows */}
      <ContentSection alt>
        <h2>How the day flows</h2>
        <ol className="mt-6 border-l-2 border-[#B20101] pl-7 space-y-5">
          {schedule.map((item) => (
            <li key={item.time} className="relative">
              <span
                className="absolute -left-8.75 top-1 w-2.5 h-2.5 rounded-full bg-[#B20101]"
                style={{ outline: "2px solid #B20101", outlineOffset: "2px" }}
              />
              <p className="text-xs font-bold uppercase tracking-widest text-[#B20101] mb-0.5">{item.time}</p>
              <p className="text-sm text-gray-600">{item.label}</p>
            </li>
          ))}
        </ol>
      </ContentSection>

      {/* What's new in 2026 */}
      <section className="section">
        <div className="container">
          <p className="text-xs font-bold uppercase tracking-widest text-[#B20101] mb-3">New in 2026</p>
          <h2 className="section__heading">More ways to connect this year</h2>
          <div className="grid-3 mt-8">
            {newFormats.map((f) => (
              <div key={f.title} className="border border-[#ccc] p-6">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session formats */}
      <section className="section section--alt">
        <div className="container container--narrow">
          <h2 className="section__heading">Sessions come in a few different shapes</h2>
          <div className="mt-6 divide-y divide-[#ccc] border-t border-b border-[#ccc]">
            {sessionFormats.map((f) => (
              <div key={f.title} className="py-5">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/running-a-session" className="section__more-link">
              Thinking about running one? →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
