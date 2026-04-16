import { Link } from "wouter";
import Hero from "@/components/Hero";

export default function Home() {
  const stats = [
    { value: "9th", label: "Edition" },
    { value: "150+", label: "Participants" },
    { value: "25+", label: "Sessions" },
    { value: "4", label: "Tracks" },
  ];

  const howCards = [
    {
      icon: "🎤",
      title: "Pitch something",
      body: "30 seconds in the morning. That's all it takes to get a session slot. Talk, workshop, or discussion — your choice.",
    },
    {
      icon: "🙋",
      title: "Vote with your hands",
      body: "The audience raises their hands for sessions they want. That's how the day's programme gets built live, in the room, by everyone.",
    },
    {
      icon: "🎉",
      title: "Leave with more than you came with",
      body: "By the end of the day you'll have had conversations you didn't plan, heard ideas that shift something, and yes — there's an after party. You've earned it.",
    },
  ];

  const newFormats = [
    "Portfolio Review Corner",
    "Speed Networking",
    "Fishbowl Discussions",
    "UX Therapy Booth",
    "Insight Wall",
    "Micro-Exhibition Space",
  ];

  const audienceCards = [
    {
      icon: "💡",
      title: "I have something to share",
      body: "A project you learned from. A question you keep coming back to. A half-formed idea you want to think through with other people. You don't need to be an expert.",
      link: "/running-a-session",
      linkLabel: "How to run a session →",
    },
    {
      icon: "🙌",
      title: "I'm here to learn and meet people",
      body: "Attend sessions, join discussions, write something on the Insight Wall, get feedback on your work, or just have a really good conversation over lunch.",
      link: "/about",
      linkLabel: "What to expect →",
    },
    {
      icon: "🧡",
      title: "My company wants to support",
      body: "150+ UX professionals in one room. Help make it happen and get your brand in front of Amsterdam's design community.",
      link: "/sponsorship",
      linkLabel: "Sponsorship info →",
    },
  ];

  const team = [
    { name: "Indre Lauciute", role: "UX Designer" },
    { name: "Talita Collare", role: "Product Designer" },
    { name: "Nien-Hua Gu", role: "Product Designer" },
    { name: "Pedro", role: "—" },
    { name: "Vincent Vijn", role: "Design Lead" },
    { name: "May", role: "UX Researcher" },
    { name: "Greg Weinstein", role: "—" },
    { name: "Mannan", role: "—" },
    { name: "Sharon", role: "—" },
    { name: "Meghana", role: "—" },
    { name: "Niveditha", role: "Product Designer" },
  ];

  return (
    <main>
      {/* Hero */}
      <Hero
        eyebrow="Amsterdam · Saturday, July 4, 2026"
        title="One day. No agenda. Come with a story, leave with ten more."
        subtitle="UX Camp Amsterdam is back for its 9th edition. A free-flowing unconference where you set the agenda, run the sessions, and shape the day. Everyone contributes. No one just watches."
      >
        <div className="hero__cta">
          <a
            href="https://www.eventbrite.com/e/ux-camp-amsterdam-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Grab your ticket →
          </a>
          <a href="#how-it-works" className="hero__secondary-link">
            How does it work?
          </a>
        </div>
      </Hero>

      {/* Stats */}
      <section className="section section--alt">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 border border-[#ccc]">
            {stats.map((s) => (
              <div key={s.label} className="border border-[#ccc] p-8 text-center">
                <p className="text-4xl font-bold text-[#B20101] leading-none mb-2">{s.value}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is this? */}
      <section id="how-it-works" className="section">
        <div className="container">
          <p className="text-xs font-bold uppercase tracking-widest text-[#B20101] mb-3">What is this thing?</p>
          <h2 className="section__heading">It's an unconference. You're the speaker.</h2>
          <p className="prose max-w-2xl mb-4">
            Show up with an idea, a case study, a rant, a question you can't stop thinking about —
            pitch it in 30 seconds, and if people want to hear it, you're on. No gatekeepers. No
            keynotes. No boring panels.
          </p>
          <Link href="/about" className="section__more-link">Learn how it all works →</Link>

          <div className="grid-3 mt-10">
            {howCards.map((c) => (
              <div key={c.title} className="border border-[#ccc] p-6">
                <div className="text-3xl mb-4">{c.icon}</div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-2">{c.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's new in 2026 */}
      <section className="section section--alt">
        <div className="container">
          <p className="text-xs font-bold uppercase tracking-widest text-[#B20101] mb-3">New in 2026</p>
          <h2 className="section__heading">More ways to connect this year</h2>
          <p className="prose max-w-2xl mb-6">
            We've added new formats alongside the usual sessions to make the day more hands-on and more fun.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {newFormats.map((f) => (
              <span key={f} className="border-2 border-[#333] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#333]">
                {f}
              </span>
            ))}
          </div>
          <Link href="/about" className="section__more-link">See what's happening →</Link>
        </div>
      </section>

      {/* Come as you are */}
      <section className="section">
        <div className="container">
          <h2 className="section__heading text-center">Come as you are</h2>
          <div className="grid-3 mt-10">
            {audienceCards.map((c) => (
              <div key={c.title} className="border border-[#ccc] p-6 flex flex-col">
                <div className="text-3xl mb-4">{c.icon}</div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-2">{c.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{c.body}</p>
                <Link
                  href={c.link}
                  className="mt-4 text-xs font-bold uppercase tracking-wider text-[#B20101] hover:text-[#8B0000] transition-colors"
                >
                  {c.linkLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First time teaser */}
      <section className="section section--alt">
        <div className="container container--narrow">
          <h2 className="section__heading text-center">First time? Here's all you need.</h2>
          <ul className="mt-8 divide-y divide-[#ccc] border-t border-b border-[#ccc]">
            {[
              { icon: "🎫", text: "Your ticket — Eventbrite, on your phone is fine" },
              { icon: "☕", text: "Your own cup — the venue doesn't allow disposable cups" },
              { icon: "💡", text: "An idea, a question, or just curiosity — that's honestly enough" },
            ].map((item) => (
              <li key={item.icon} className="flex items-start gap-4 py-4">
                <span className="text-xl shrink-0">{item.icon}</span>
                <span className="text-sm text-gray-600">{item.text}</span>
              </li>
            ))}
          </ul>
          <div className="text-center mt-6">
            <Link href="/prepare" className="section__more-link">Full details on what to expect →</Link>
          </div>
        </div>
      </section>

      {/* Organising team */}
      <section className="section">
        <div className="container">
          <h2 className="section__heading text-center">The people behind UXcampAMS26</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
            {team.map((member) => (
              <div key={member.name} className="border border-[#ccc] p-4">
                <p className="text-sm font-bold uppercase tracking-wider text-[#333] mb-1">{member.name}</p>
                <p className="text-xs text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social strip */}
      <section className="section section--alt">
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-2">Follow along for updates</p>
          <a
            href="https://www.instagram.com/uxcampamsterdam/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold text-[#B20101] hover:text-[#8B0000] transition-colors"
          >
            @uxcampamsterdam
          </a>
          <p className="text-sm text-gray-400 mt-2">#UXcampAMS26</p>
        </div>
      </section>
    </main>
  );
}
