import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";

export default function About() {
  return (
    <main>
      <Hero
        title="About UXcamp Amsterdam"
        subtitle="A one-day, non-profit BarCamp for the UX community"
      />

      <ContentSection>
        <h2>What Is UXcamp Amsterdam?</h2>
        <p>
          UXcamp Amsterdam is a <strong>one-day, non-profit event</strong> that brings together a
          community of UXers from Amsterdam and beyond for a day of knowledge sharing, learning, and
          discussions on User Experience.
        </p>
        <p>
          All content is generated and brought by its participants. There are no pre-booked speakers,
          no fixed agenda, and no spectators — only contributors.
        </p>
      </ContentSection>

      <ContentSection alt>
        <h2>The BarCamp Format</h2>
        <p>
          The event operates on a <strong>BarCamp model</strong> — participants create the agenda on
          the day itself. All participants are offered a chance to give a talk, run a discussion, or
          a workshop lasting <strong>25 minutes</strong> (extendable for workshops).
        </p>

        <h3>The Madness Session</h3>
        <p>The morning kicks off with a <strong>"Madness Session"</strong> where:</p>
        <ol>
          <li>Speakers pitch their topics in <strong>30 seconds</strong></li>
          <li>The audience votes by raising hands</li>
          <li>The schedule for the day is set</li>
        </ol>
      </ContentSection>

      <ContentSection>
        <h2>Session Types</h2>
        <table>
          <thead>
            <tr><th>Format</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Presentations</strong></td><td>Overview of a topic in the UX field</td></tr>
            <tr><td><strong>Case Studies</strong></td><td>Applied UX knowledge from real projects</td></tr>
            <tr><td><strong>Workshops</strong></td><td>Hands-on skill development</td></tr>
            <tr><td><strong>Structured Discussions</strong></td><td>Focused conversations for shared learning</td></tr>
          </tbody>
        </table>
      </ContentSection>

      <ContentSection alt>
        <h2>Participation Philosophy</h2>
        <blockquote>
          <p>NO SPECTATORS, ONLY PARTICIPANTS.</p>
        </blockquote>
        <p>
          The event emphasises <strong>involvement, inclusion, community and learning</strong>. Even
          non-presenters contribute through active session engagement, asking questions, sharing
          insights, and assisting with event logistics.
        </p>

        <h3>Event Structure</h3>
        <ul>
          <li><strong>Before lunch (12:30):</strong> 3 session rounds</li>
          <li><strong>After lunch:</strong> 6 session rounds</li>
          <li><strong>End of day:</strong> Closing remarks &amp; after-party</li>
        </ul>
      </ContentSection>
    </main>
  );
}
