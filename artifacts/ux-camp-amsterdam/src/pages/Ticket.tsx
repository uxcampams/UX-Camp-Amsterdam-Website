import Hero from "@/components/Hero";

export default function Ticket() {
  return (
    <main>
      <Hero variant="red" title="Get Your Ticket" subtitle="Tickets for UXcamp Amsterdam 2026 will be available soon.">
        <div className="coming-soon-badge">Coming Soon</div>
      </Hero>

      <section className="ticket-section">
        <div className="container">
          <h2>Register Your Interest</h2>
          <p>
            Want to be the first to know when tickets go on sale? Drop us a message and we'll keep
            you in the loop.
          </p>
          <a href="mailto:info@uxcampams.com" className="btn-primary">Register Your Interest</a>
        </div>
      </section>

      <section className="ticket-info">
        <div className="container">
          <span className="placeholder-notice">[PLACEHOLDER — Update pricing and inclusions]</span>
          <h2>What's Included?</h2>
          <p>
            UX Camp Amsterdam is a community-run unconference — we keep costs as low as possible.
            Your ticket covers access to all sessions, lunch, coffee &amp; refreshments throughout
            the day, and the after-party drinks.
          </p>
          <p>
            <strong>Ticket price: [PLACEHOLDER — e.g. €15 / free]</strong><br />
            We believe UX knowledge should be accessible to everyone. A small contribution helps us
            cover venue and catering costs, and ensures we can keep running this event for the
            community.
          </p>
          <p>
            [PLACEHOLDER — Add any notes about student discounts, early-bird pricing, group tickets,
            or scholarship places if applicable.]
          </p>
        </div>
      </section>
    </main>
  );
}
