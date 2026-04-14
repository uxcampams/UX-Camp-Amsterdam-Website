import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";

export default function Year2016() {
  return (
    <main>
      <Hero
        title="UXcamp Amsterdam 2016"
        subtitle="Second Edition · Amsterdam"
      />

      <ContentSection>
        <h2>Overview</h2>
        <p>
          UXcamp Amsterdam 2016 was the <strong>second edition</strong> of the event — described as
          "awesome" and notably hot. Active Twitter discussion used the hashtag{" "}
          <strong>#UXcampAMS16</strong>.
        </p>
      </ContentSection>

      <ContentSection alt>
        <h2>Presentations</h2>
        <table>
          <thead>
            <tr><th>Speaker</th><th>Session Topic</th></tr>
          </thead>
          <tbody>
            <tr><td>Martijn van Vreeden</td><td>Google Analytics Fundamentals</td></tr>
            <tr><td>Dean Birkett</td><td>Accessible UX</td></tr>
            <tr><td>Carina Palumbo &amp; Anette Hiltunen</td><td>Emotional Experiences in B2B Products</td></tr>
            <tr><td>Anouschka Scholten</td><td>User Involvement in Design</td></tr>
            <tr><td>Peter Bruun</td><td>Crowdtesting and UX</td></tr>
            <tr><td>Martin Andrle</td><td>Design Sprints with Incomplete Briefs</td></tr>
            <tr><td>Peter Boersma</td><td>Design Process Improvement</td></tr>
            <tr><td>Nick van der Linde</td><td>AI and UX Integration</td></tr>
          </tbody>
        </table>
      </ContentSection>

      <ContentSection>
        <h2>Sponsors</h2>
        <ul>
          <li>Adyen</li>
          <li>IceMobile</li>
          <li>Marktplaats</li>
          <li>Mirabeau</li>
          <li>Nomensa</li>
        </ul>
      </ContentSection>
    </main>
  );
}
