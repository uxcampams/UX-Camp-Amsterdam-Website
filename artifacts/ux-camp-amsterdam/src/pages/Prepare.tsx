import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";

const daySchedule = [
  { time: "Madness Session 10:00", label: "Where the day's programme gets built. Grab a pitch card if you want to run a session." },
  { time: "Sessions 11:00+", label: "Check the schedule board. Move between rooms freely." },
  { time: "Portfolio Review Corner", label: "Sign up at the whiteboard for a 25-min review. Morning and afternoon slots." },
  { time: "Speed Networking", label: "Join a table, grab a prompt card. Meet a lot of people in a short amount of time." },
  { time: "Insight Wall", label: "Add your thoughts to the prompts on the wall. Open all day." },
  { time: "UX Therapy Booth", label: "Write something anonymously. Hear it read back later." },
  { time: "Micro-Exhibition", label: "Browse anytime — startups, student work, UX games, book exchange." },
  { time: "Closing 17:00", label: "Highlights, thank yous, prizes." },
  { time: "After Party 17:15", label: "Venue details to be confirmed." },
];

export default function Prepare() {
  return (
    <main>
      <Hero
        title="See you on July 4th! Here's everything you need."
        subtitle="We're so excited to welcome you to #UXcampAMS26. Here's a quick guide to help your day run smoothly."
      />

      {/* Time & location */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 className="section__heading">Time &amp; location</h2>
              <div className="space-y-4 mt-4">
                {[
                  { label: "Date", value: "Saturday, July 4, 2026" },
                  { label: "Doors open", value: "9:30 — Registration closes at 12:30" },
                  { label: "Venue", value: "HvA Corry Tendeloohuis (CTH)" },
                  { label: "Address", value: "Fraijlemaborg 133, 1102 CV Amsterdam" },
                ].map((row) => (
                  <div key={row.label}>
                    <p className="where-when__label">{row.label}</p>
                    <p className="where-when__value">{row.value}</p>
                  </div>
                ))}
                <a
                  href="https://maps.google.com/?q=Fraijlemaborg+133,+1102+CV+Amsterdam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#B20101] underline underline-offset-2 hover:text-[#8B0000] transition-colors"
                >
                  Get directions →
                </a>
              </div>
            </div>
            <div>
              <iframe
                className="map-embed"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.5!2d4.9478!3d52.3089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5ec3b2d5b4e4b%3A0x1!2sFraijlemaborg+133%2C+1102+CV+Amsterdam!5e0!3m2!1sen!2snl!4v1620000000000!5m2!1sen!2snl"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Getting there */}
      <ContentSection alt>
        <h2>Getting there</h2>
        <div className="mt-4 space-y-4">
          {[
            { icon: "🚇", label: "Metro / Train", value: "Nearest station and line details to be confirmed closer to the date." },
            { icon: "🚲", label: "Bike", value: "Bike parking available at or near the venue." },
            { icon: "🚗", label: "Car", value: "Public transport is easier — parking in Amsterdam on a summer Saturday is an adventure you don't need." },
          ].map((row) => (
            <div key={row.label} className="flex gap-4">
              <span className="text-xl shrink-0">{row.icon}</span>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider mb-1">{row.label}</p>
                <p className="text-sm text-gray-500">{row.value}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* What to bring */}
      <ContentSection>
        <h2>What to bring</h2>
        <ul className="mt-4 divide-y divide-[#ccc] border-t border-b border-[#ccc]">
          {[
            { icon: "🎫", label: "Ticket", value: "Have your Eventbrite ticket ready on your phone or printed. We scan at the door." },
            { icon: "☕", label: "Your cup", value: "The venue doesn't allow disposable cups. Bring a reusable water bottle and coffee tumbler. Water fountains and coffee machines are available on site." },
            { icon: "🍱", label: "Lunch", value: "Catering details to be confirmed — check back closer to the event." },
            { icon: "🔌", label: "Adapter (if presenting)", value: "All rooms have HDMI and USB-C. Bring your own adapter just in case, and download anything you need in advance — venue Wi-Fi can be unpredictable." },
          ].map((item) => (
            <li key={item.label} className="flex gap-4 py-4">
              <span className="text-xl shrink-0 pt-0.5">{item.icon}</span>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-sm text-gray-500">{item.value}</p>
              </div>
            </li>
          ))}
        </ul>
      </ContentSection>

      {/* Day schedule */}
      <ContentSection alt>
        <h2>What's happening on the day</h2>
        <ul className="mt-4 divide-y divide-[#ccc] border-t border-b border-[#ccc]">
          {daySchedule.map((item) => (
            <li key={item.time} className="py-4 grid grid-cols-[180px_1fr] gap-4 text-sm">
              <span className="font-bold text-[#B20101] uppercase tracking-wider">{item.time}</span>
              <span className="text-gray-600">{item.label}</span>
            </li>
          ))}
        </ul>
      </ContentSection>

      {/* Accessibility */}
      <ContentSection>
        <h2>We want everyone to feel comfortable</h2>
        <p className="mb-4">A few things worth knowing before the day:</p>
        <ul className="space-y-2">
          {[
            "Quiet room available all day — no sign-up needed",
            "Nursing room available — check at the registration desk on arrival",
            "Please use the mic during sessions — the person at the back will thank you",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-sm text-gray-600">
              <span className="text-[#B20101] font-bold shrink-0">—</span>
              {item}
            </li>
          ))}
        </ul>
      </ContentSection>

      {/* Closing */}
      <ContentSection alt>
        <h2>Now it's over to you</h2>
        <p>
          We've been working behind the scenes for months to get to today. When those doors open,
          it's yours — to connect, share, and bring your best to the UX community. We can't wait.
        </p>
        <p className="mt-4 font-semibold">See you tomorrow. 🧡</p>
        <p className="mt-2 text-sm text-gray-400 tracking-widest uppercase">#UXcampAMS26</p>
      </ContentSection>
    </main>
  );
}
