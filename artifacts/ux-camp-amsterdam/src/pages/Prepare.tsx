import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";

export default function Prepare() {
  return (
    <main>
      <Hero
        title="Prepare for the Day"
        subtitle="Everything you need to know before you arrive"
      />

      <ContentSection>
        <span className="placeholder-notice">[PLACEHOLDER]</span>
        <h2>What to Bring</h2>
        <p>
          UX Camp Amsterdam is a casual, collaborative day — dress comfortably and come ready to
          engage. Here's what we recommend bringing along:
        </p>
        <p>
          [PLACEHOLDER — Add a bulleted list: laptop/notebook, business cards, sticky notes, a
          session idea, open mind, etc. Keep it friendly and practical.]
        </p>
      </ContentSection>

      <ContentSection alt>
        <span className="placeholder-notice">[PLACEHOLDER]</span>
        <h2>How to Get There</h2>
        <p>
          The event is held at <strong>Hogeschool van Amsterdam</strong>, located in the heart of
          Amsterdam. It's easily reachable by public transport, bike, and on foot.
        </p>
        <p>
          <a
            href="https://maps.google.com/?q=Hogeschool+van+Amsterdam"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#B20101", textDecoration: "underline" }}
          >
            View on Google Maps &rarr;
          </a>
        </p>
        <p>
          [PLACEHOLDER — Add directions by tram/metro, bicycle tips, nearest station, and any
          parking information. Note if there are any entry requirements on the day.]
        </p>
      </ContentSection>

      <ContentSection>
        <span className="placeholder-notice">[PLACEHOLDER]</span>
        <h2>What to Expect on the Day</h2>
        <p>
          Doors open at 9:30 for registration. The Madness Session (where participants pitch and
          vote on sessions) starts at 10:00. From there, the day unfolds organically — you choose
          which sessions to attend, and you're free to move between rooms.
        </p>
        <p>
          [PLACEHOLDER — Describe the day flow in more detail. Mention catering/lunch arrangements,
          whether there's Wi-Fi, how the rooms are set up, and what a typical session looks like.]
        </p>
      </ContentSection>

      <ContentSection alt>
        <span className="placeholder-notice">[PLACEHOLDER]</span>
        <h2>Code of Conduct</h2>
        <p>
          UX Camp Amsterdam is committed to creating a welcoming, inclusive, and respectful
          environment for everyone. All participants are expected to follow our code of conduct
          throughout the day.
        </p>
        <p>
          [PLACEHOLDER — Add the full or summarised code of conduct. Key points typically include:
          be respectful, no harassment, inclusive language, reporting procedures, and consequences
          for violations.]
        </p>
      </ContentSection>
    </main>
  );
}
