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
        <h2>Key Event Details</h2>
        <table>
          <tbody>
            <tr><td><strong>Start Time</strong></td><td>9:30 AM</td></tr>
            <tr><td><strong>Registration closes</strong></td><td>12:30 PM</td></tr>
            <tr>
              <td><strong>Venue</strong></td>
              <td>HvA Corry Tendeloohuis (CTH), Fraijlemaborg 133, 1102 CV Amsterdam</td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      <ContentSection alt>
        <h2>Getting There</h2>
        <p>
          The closest transit hub is <strong>Station Bijlmer ArenA</strong>, accessible via Metro 50
          and 54, and train.
        </p>
        <p>
          <strong>Do not drive.</strong> Large parts of the A10 highway will be blocked, and general
          city congestion is expected. Construction surrounds the venue — plan your journey in advance.
        </p>
        <p>
          <a
            href="https://maps.google.com/?q=Fraijlemaborg+133,+1102+CV+Amsterdam"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#B20101", textDecoration: "underline" }}
          >
            View on Google Maps &rarr;
          </a>
        </p>
      </ContentSection>

      <ContentSection>
        <h2>What to Bring</h2>
        <ul>
          <li><strong>Your Eventbrite ticket</strong> — volunteers will scan it at arrival</li>
          <li><strong>Lunch</strong> — there is a restaurant on-site, or bring your own</li>
          <li>
            <strong>Reusable water bottle and coffee tumbler</strong> — disposable cups are banned
            at the university
          </li>
        </ul>
      </ContentSection>

      <ContentSection alt>
        <h2>For Session Facilitators</h2>
        <p>
          All rooms feature both <strong>USB-C and HDMI ports</strong> for laptop connectivity.
          Bring appropriate adapters if needed.
        </p>
        <p>
          See also:{" "}
          <a href="/running-a-session" style={{ color: "#B20101", textDecoration: "underline" }}>
            Running a Session &rarr;
          </a>
        </p>
      </ContentSection>

      <ContentSection>
        <h2>Venue Layout</h2>
        <table>
          <thead>
            <tr><th>Floor</th><th>What's There</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>First Floor</strong></td><td>Registration &amp; opening room</td></tr>
            <tr><td><strong>Second Floor</strong></td><td>Session rooms 1–5</td></tr>
          </tbody>
        </table>
      </ContentSection>
    </main>
  );
}
