import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";

export default function Year2024() {
  return (
    <main>
      <Hero
        title="UXcamp Amsterdam 2024"
        subtitle="June 29, 2024 · University of Applied Sciences Amsterdam"
      />

      <ContentSection>
        <h2>Overview</h2>
        <p>
          UXcamp Amsterdam 2024 was held on <strong>June 29th</strong> as a BarCamp format event for
          UX professionals, students, and enthusiasts from across Europe. The organisers described it
          as <strong>"truly special"</strong> — a day of learning, sharing, and discussion, featuring{" "}
          <strong>36 sessions</strong>.
        </p>

        <h3>Session Topics</h3>
        <ul>
          <li>Content modelling</li>
          <li>Design systems</li>
          <li>Accessibility</li>
          <li>AI applications in UX</li>
          <li>Career development</li>
          <li>Automotive HMI design</li>
          <li>Impostor syndrome</li>
          <li>Design career progression</li>
          <li>Emerging technologies</li>
        </ul>
      </ContentSection>

      <ContentSection alt>
        <h2>Session Slides</h2>
        <ul>
          <li><strong>Car HMI Solution for Driving Safety</strong> — Ruby Zhu</li>
          <li><strong>What Goes on a Roadmap</strong> — Peter Boersma</li>
          <li>
            <strong>Beyond Screen Readers: Accessibility — Changing Minds for Inclusive Design</strong>{" "}
            — Bettina Kast &amp; Erika Bonifaz
          </li>
          <li><strong>UX Research Session</strong> — Pedro Vaz</li>
          <li><strong>UX vs. SD</strong> — Irina Damascan</li>
          <li><strong>UX Twins</strong> — George Bugianishvili &amp; Sergio Martinez</li>
          <li><strong>UX Research with Farmers</strong> — Arunima Ved</li>
          <li><strong>UX Camp 2024 Session</strong> — Sofia Gomez</li>
        </ul>
      </ContentSection>

      <ContentSection>
        <h2>Community</h2>
        <p>
          UXcamp Amsterdam is part of a broader European UX community network, with sister events in
          Copenhagen, Hamburg, and Brighton.
        </p>
      </ContentSection>
    </main>
  );
}
