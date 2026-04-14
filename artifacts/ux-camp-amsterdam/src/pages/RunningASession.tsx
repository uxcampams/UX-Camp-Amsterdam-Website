import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";

export default function RunningASession() {
  return (
    <main>
      <Hero
        title="Running a Session"
        subtitle="Share your knowledge with the UX community"
      />

      <ContentSection>
        <h2>Why Run a Session?</h2>
        <p>
          UXcamp Amsterdam invites community members to lead sessions sharing knowledge and fostering
          connections. The event welcomes practitioners of <strong>all experience levels</strong> —
          expertise isn't required, but passion for your topic is essential.
        </p>
        <p>Consider running a session if you want to:</p>
        <ul>
          <li>Contribute to the community</li>
          <li>Connect with peers who share similar interests</li>
          <li>Explore alternative perspectives</li>
          <li>Deepen your understanding through discussion</li>
          <li>Develop public speaking and facilitation skills</li>
        </ul>
      </ContentSection>

      <ContentSection alt>
        <h2>How to Prepare</h2>

        <h3>1. Choose Your Topic</h3>
        <p>
          Select something you're genuinely passionate about. The audience voluntarily attends
          sessions that match their interests.
        </p>

        <h3>2. Define Your Goals</h3>
        <p>Clarify what attendees should take away from your presentation.</p>

        <h3>3. Select a Format</h3>
        <p>Consider interactive options like:</p>
        <ul>
          <li><strong>World Café</strong> discussions</li>
          <li><strong>Fishbowl</strong> conversations</li>
          <li><strong>Birds of a Feather</strong> sessions</li>
          <li>Workshops with audience exercises</li>
          <li>Standard talks with Q&amp;A</li>
        </ul>
      </ContentSection>

      <ContentSection>
        <h2>Session Details</h2>
        <table>
          <tbody>
            <tr><td><strong>Duration</strong></td><td>25 minutes (longer formats available on request)</td></tr>
            <tr><td><strong>Tech Setup</strong></td><td>Rooms have screens and speakers</td></tr>
            <tr><td><strong>Connectivity</strong></td><td>Bring HDMI or USB-C cable</td></tr>
            <tr><td><strong>Wi-Fi</strong></td><td>⚠ Do NOT rely on Wi-Fi — it is often slower than expected</td></tr>
          </tbody>
        </table>
      </ContentSection>

      <ContentSection alt>
        <h2>The Pitch Process</h2>
        <p>
          During the morning <strong>"Madness" session</strong>, speakers pitch their topic in{" "}
          <strong>30 seconds</strong>, covering:
        </p>
        <ol>
          <li>What the session is about</li>
          <li>What attendees will learn</li>
          <li>Target audience level</li>
        </ol>
        <p>All pitches receive a scheduled slot.</p>
      </ContentSection>
    </main>
  );
}
