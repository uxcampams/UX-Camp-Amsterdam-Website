import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";

export default function Year2015() {
  return (
    <main>
      <Hero
        title="UXcamp Amsterdam 2015"
        subtitle="First Edition · Amsterdam"
      />

      <ContentSection>
        <h2>Overview</h2>
        <p>
          UXcamp Amsterdam 2015 was the very first edition — a community event run entirely by
          volunteers.
        </p>
        <blockquote>
          <p>"UXcamp Amsterdam is a community event run by volunteers."</p>
        </blockquote>
      </ContentSection>

      <ContentSection alt>
        <h2>Presentations</h2>
        <table>
          <thead>
            <tr><th>Speaker</th><th>Session Title</th></tr>
          </thead>
          <tbody>
            <tr><td>Bas Evers</td><td>Content Editors Are Users Too</td></tr>
            <tr><td>Gena Drahun</td><td>Reverse Chaos Method of Requirements Prioritisation</td></tr>
            <tr><td>Anouschka Scholten</td><td>User Checks: Get to a Better Design Fast</td></tr>
            <tr><td>Nick van der Linde</td><td>Context is King: Crafting Smarter, Adaptive Digital Products Today</td></tr>
          </tbody>
        </table>
      </ContentSection>

      <ContentSection>
        <h2>Sponsors</h2>
        <ul>
          <li>A4</li>
          <li>Adyen</li>
          <li>Nedap</li>
        </ul>
      </ContentSection>
    </main>
  );
}
