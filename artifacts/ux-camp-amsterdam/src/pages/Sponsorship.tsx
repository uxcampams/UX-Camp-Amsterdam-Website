import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";

const tiers = [
  {
    name: "Main Sponsor",
    price: "€3,025",
    note: "Limited to 4 slots",
    description: "Main sponsors gain maximum visibility of their brand before, during, and after the camp to engage with attendees.",
    includes: [
      "Mentioning on the website",
      "Dedicated social media post introducing the company",
      "Stand at the venue",
      "2 min onstage at opening",
      "Branded room (on schedule + banners in the room)",
      "Mention in follow-up email to participants",
      "5 tickets",
    ],
  },
  {
    name: "Event Sponsor",
    price: "€1,210",
    note: "Multiple slots available",
    description: "Event sponsors get a physical presence at the camp to engage with attendees during and after the event.",
    includes: [
      "Mentioning on the website",
      "Stand at the venue",
      "Mention in follow-up email to participants",
      "3 tickets",
    ],
  },
  {
    name: "Product Sponsor",
    price: "Min. €121 value",
    note: "Multiple slots available",
    description: "Product sponsors award the community through product donations for best contributions during camp.",
    includes: [
      "Mentioning on the website",
      "Products given out as prizes for best talks, workshops, and discussions",
    ],
  },
];

export default function Sponsorship() {
  return (
    <main>
      <Hero
        title="Help make UX Camp happen. Get in front of the people who build digital Amsterdam."
        subtitle="UXcamp Amsterdam is a non-profit, volunteer-run event. We rely on sponsors to make it happen — and in return, you get direct access to a genuinely engaged UX community."
      >
        <div className="hero__cta">
          <a href="mailto:info@uxcampams.com" className="btn-primary">Get in touch →</a>
        </div>
      </Hero>

      {/* Who comes */}
      <ContentSection>
        <h2>150+ UX professionals. Every kind of discipline.</h2>
        <p>
          Our audience spans the full UX field — designers, researchers, product managers,
          developers, data scientists, service designers. Most are individual contributors at
          mid-to-senior level, split roughly equally between agency and in-house teams.
        </p>
        <p>
          The organising team also runs the <strong>AmsterdamUX community</strong> — 5,700+ members,
          190+ events organised.
        </p>
      </ContentSection>

      {/* Why sponsor */}
      <ContentSection alt>
        <h2>What sponsoring gets you</h2>
        <p className="mb-4">
          UXcampAMS is where Amsterdam's UX community actually shows up. Here's what sponsoring gets you.
        </p>
        <ul className="mt-2 space-y-2">
          {[
            "Your brand in the room with Amsterdam's UX community",
            "Direct access to designers, researchers, PMs, and developers",
            "Employer brand visibility with mid-to-senior practitioners",
            "Connections with UX talent for hiring or partnerships",
            "A chance to genuinely support the community — not just market to it",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-sm text-gray-600">
              <span className="text-[#B20101] font-bold shrink-0">—</span>
              {item}
            </li>
          ))}
        </ul>
      </ContentSection>

      {/* Tiers */}
      <section className="section">
        <div className="container">
          <h2 className="section__heading">Sponsorship tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {tiers.map((tier) => (
              <div key={tier.name} className="border border-[#ccc] p-6 flex flex-col">
                <p className="text-xs font-bold uppercase tracking-widest text-[#B20101] mb-1">{tier.note}</p>
                <h3 className="text-base font-bold uppercase tracking-wider mb-1">{tier.name}</h3>
                <p className="text-xl font-bold text-[#B20101] mb-4">{tier.price}</p>
                <p className="text-sm text-gray-500 mb-4">{tier.description}</p>
                <ul className="space-y-1.5 mt-auto">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-gray-600">
                      <span className="text-[#B20101] shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in touch */}
      <ContentSection alt>
        <h2>Interested? Let's talk.</h2>
        <p>Reach out and we'll send you the full sponsorship deck.</p>
        <div className="mt-6">
          <a href="mailto:info@uxcampams.com" className="btn-primary">Contact Us</a>
        </div>
      </ContentSection>
    </main>
  );
}
