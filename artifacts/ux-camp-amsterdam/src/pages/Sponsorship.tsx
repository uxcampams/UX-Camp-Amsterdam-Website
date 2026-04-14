import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";

export default function Sponsorship() {
  return (
    <main>
      <Hero
        title="Sponsorship"
        subtitle="Support the Amsterdam UX community"
      />

      <ContentSection>
        <h2>About the Event</h2>
        <p>
          UXcamp Amsterdam is an <strong>open-for-all, participatory one-day BarCamp</strong> where
          all content is generated and brought by its participants. The organising team also manages
          the <strong>AmsterdamUX community</strong> — with 5,700+ members and 190+ organised events
          — encouraging knowledge sharing across designers, researchers, product managers, developers,
          and data scientists.
        </p>

        <h3>2025 Event Stats</h3>
        <table>
          <tbody>
            <tr><td><strong>Edition</strong></td><td>8th</td></tr>
            <tr><td><strong>Expected Attendance</strong></td><td>150 participants</td></tr>
            <tr><td><strong>Sessions</strong></td><td>25+</td></tr>
            <tr><td><strong>Concurrent Tracks</strong></td><td>4</td></tr>
            <tr><td><strong>Location</strong></td><td>HvA Wibauthuis, Amsterdam</td></tr>
          </tbody>
        </table>
      </ContentSection>

      <ContentSection alt>
        <h2>Why Sponsor?</h2>
        <ul>
          <li>Build brand association with UX design</li>
          <li>Access a highly targeted professional audience</li>
          <li>Promote employer reputation to digital industry leaders</li>
          <li>Identify recruitment candidates</li>
          <li>Contribute to the local community</li>
        </ul>
      </ContentSection>

      <ContentSection>
        <h2>Sponsorship Tiers</h2>

        <h3>Main Sponsor — €3,025 <em>(limited to 4 slots)</em></h3>
        <ul>
          <li>Website listing and social media promotion</li>
          <li>Exhibition booth</li>
          <li>2-minute opening remarks</li>
          <li>Branded session room</li>
          <li>5 tickets</li>
        </ul>

        <h3>Event Sponsor — €1,210 <em>(multiple available)</em></h3>
        <ul>
          <li>Website mention</li>
          <li>Booth presence</li>
          <li>Follow-up communication</li>
          <li>3 tickets</li>
        </ul>

        <h3>Product Sponsor — minimum €121 value</h3>
        <ul>
          <li>Website listing</li>
          <li>Product donations awarded as prizes</li>
        </ul>
      </ContentSection>

      <ContentSection alt>
        <h2>Get in Touch</h2>
        <p>
          Interested in sponsoring? We'd love to hear from you.
        </p>
        <a href="mailto:info@uxcampams.com" className="btn-primary">Contact Us</a>
      </ContentSection>
    </main>
  );
}
