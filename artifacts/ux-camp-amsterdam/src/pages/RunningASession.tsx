import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";

const steps = [
  {
    title: "Pick a topic",
    body: "Pick something you're genuinely curious or passionate about. You don't need all the answers. Ask yourself: what question do I keep coming back to? What did I learn the hard way? What would I love to debate with a room full of smart UX people?",
  },
  {
    title: "Decide your goal",
    body: "What do you want people to walk away with? Nail this before you prepare — it shapes everything. When you're done, check it against this goal.",
  },
  {
    title: "Choose a format",
    body: "Talk, case study, workshop, or structured discussion. If you're not sure, go for a discussion — less pressure on you, more interesting for the room. Details on each format are on the About page.",
  },
  {
    title: "Pitch in the Madness Session",
    body: "At 10am, grab a pitch card, join the queue, and give your 30-second pitch. Tell us: what it's about, what people will take away, and whether it's for beginners or more experienced attendees. If you pitch, you get a slot. That's the deal.",
  },
  {
    title: "Run it",
    body: "Arrive at your room a few minutes before your slot. Rooms have HDMI and USB-C — bring your own adapter if needed, we can't guarantee spares. Download anything you need beforehand; Wi-Fi can be slow. Keep an eye on time. Shorter sessions almost always land better. Break a leg.",
  },
];

export default function RunningASession() {
  return (
    <main>
      <Hero
        title="You don't need to be an expert. You just need to care."
        subtitle="Every year, half our session leaders are running one for the first time. They're practitioners just like you — with something real to share."
      >
        <div className="hero__cta">
          <a href="#how-to-run" className="btn-outline">Here's how it works →</a>
        </div>
      </Hero>

      {/* Why run a session */}
      <ContentSection>
        <h2>Still thinking about it?</h2>
        <p className="mb-4">Here are the reasons people actually do it:</p>
        <ul className="space-y-2">
          {[
            "To give back to a community you've learned a lot from",
            "To connect with people who care about the same topics you do",
            "To think more clearly — talking about something out loud does that",
            "To practise speaking and facilitating, which matter for our work",
            "Because the gong is kind of fun",
          ].map((reason) => (
            <li key={reason} className="flex gap-3 text-sm text-gray-600">
              <span className="text-[#B20101] font-bold shrink-0">—</span>
              {reason}
            </li>
          ))}
        </ul>
      </ContentSection>

      {/* Steps */}
      <ContentSection alt>
        <h2 id="how-to-run">How to run a session</h2>
        <ol className="mt-6 divide-y divide-[#ccc] border-t border-[#ccc]">
          {steps.map((step, i) => (
            <li key={step.title} className="grid grid-cols-[48px_1fr] gap-5 py-6">
              <span className="text-2xl font-bold text-[#B20101] leading-snug">{i + 1}</span>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </ContentSection>

      {/* Tips from past speakers */}
      <ContentSection>
        <h2>From people who've done it</h2>
        <p className="text-sm text-gray-400 italic mt-2">
          Speaker quotes coming soon — we're collecting tips from 2024 and 2025 session leaders.
        </p>
        <p className="text-sm text-gray-500 mt-4">
          We're also running a short online speaker prep session before the event for anyone who
          wants to talk through their idea or get some feedback. Details will be shared in the ticket
          confirmation email.
        </p>
      </ContentSection>
    </main>
  );
}
