import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";

export default function Year2023() {
  return (
    <main>
      <Hero
        title="UXcamp Amsterdam 2023"
        subtitle="September 18, 2023 · Amsterdam"
      />

      <ContentSection>
        <h2>Overview</h2>
        <p>
          UXcamp Amsterdam 2023 was a BarCamp around User Experience Design &amp; Research where the
          community came together to share knowledge and ideas.
        </p>
        <blockquote>
          <p>"There are no spectators, only contributors."</p>
        </blockquote>
        <p>
          Sessions covered a wide range of UX topics and presentation materials were shared with the
          community afterwards.
        </p>

        <h3>Organising Team</h3>
        <ul>
          <li><strong>Lina Beltrán</strong> — Product Design Manager</li>
          <li><strong>Indre Lauciute</strong> — UX Designer</li>
        </ul>
      </ContentSection>

      <ContentSection alt>
        <h2>Session Slides</h2>
        <ul>
          <li><strong>Beyond Visual</strong> — Dean Birkett</li>
          <li><strong>Typography</strong> — Julia Zaytseva</li>
          <li>
            <strong>Bruce Springsteen Taught Me How to Get Everybody to Care About UX</strong>{" "}
            — Vincent Vijn
          </li>
          <li><strong>UXD Minor</strong> — Nymphaea Notschaele</li>
          <li><strong>Continuous Discovery</strong> — Indre Lauciute</li>
        </ul>
      </ContentSection>
    </main>
  );
}
