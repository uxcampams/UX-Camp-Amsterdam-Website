import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";

export default function Year2017() {
  return (
    <main>
      <Hero
        title="UXcamp Amsterdam 2017"
        subtitle="April 22, 2017 · Amsterdam"
      />

      <ContentSection>
        <h2>Overview</h2>
        <p>
          UXcamp AMS 2017 brought together UX professionals, students, and enthusiasts from across
          Europe and beyond.
        </p>
        <blockquote>
          <p>"Done &amp; dusted for another year" — the event concluded successfully with an after-party.</p>
        </blockquote>
      </ContentSection>

      <ContentSection alt>
        <h2>Session Topics</h2>
        <p>Slide decks were shared covering topics including:</p>
        <ul>
          <li>Design and open-source initiatives</li>
          <li>UX maturity in corporate environments</li>
          <li>Data-driven personas</li>
          <li>Mobile app accessibility</li>
          <li>Design transformation at marketplace platforms</li>
        </ul>
      </ContentSection>

      <ContentSection>
        <h2>Photo Documentation</h2>
        <table>
          <thead>
            <tr><th>Category</th><th>Photos</th></tr>
          </thead>
          <tbody>
            <tr><td>Setup</td><td>10 images</td></tr>
            <tr><td>Talks &amp; Presentations</td><td>35 images</td></tr>
            <tr><td>Sponsor activities</td><td>18 images</td></tr>
            <tr><td>Mingling / Networking</td><td>12 images</td></tr>
            <tr><td>General event coverage</td><td>17 images</td></tr>
          </tbody>
        </table>
      </ContentSection>
    </main>
  );
}
