import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";

export default function Year2018() {
  return (
    <main>
      <Hero
        title="UXcamp Amsterdam 2018"
        subtitle="June 9, 2018 · Ijsfontein, Marineterrein Amsterdam"
      />

      <ContentSection>
        <h2>Overview</h2>
        <p>
          UXcamp Amsterdam 2018 was a <strong>free, community-driven conference</strong> for user
          experience professionals, held at Ijsfontein offices on Marineterrein. The BarCamp-style
          unconference featured <strong>28 sessions</strong> across four time slots.
        </p>

        <h3>Session Schedule</h3>
        <table>
          <thead>
            <tr><th>Time</th><th>Parallel Sessions</th></tr>
          </thead>
          <tbody>
            <tr><td>11:00 – 11:45 AM</td><td>5 sessions</td></tr>
            <tr><td>12:00 – 12:45 PM</td><td>6 sessions</td></tr>
            <tr><td>2:00 – 2:45 PM</td><td>6 sessions</td></tr>
            <tr><td>3:00 – 3:45 PM</td><td>6 sessions</td></tr>
          </tbody>
        </table>
      </ContentSection>

      <ContentSection alt>
        <h2>Notable Session Topics</h2>
        <ul>
          <li>Lovability — Design it, measure it</li>
          <li>Creating Magic: UX Design &amp; Artificial Intelligence</li>
          <li>Blockchain Essentials</li>
          <li>Design Sprints and Customer Loyalty Canvas</li>
          <li>Cultural differences and design impact</li>
          <li>Empathy mapping and user research</li>
        </ul>
      </ContentSection>
    </main>
  );
}
