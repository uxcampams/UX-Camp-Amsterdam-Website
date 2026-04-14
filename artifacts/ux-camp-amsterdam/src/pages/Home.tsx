import { Link } from "wouter";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Hero
        eyebrow="Annual UX Unconference"
        title="UX Camp Amsterdam 2026"
        subtitle="A BarCamp around User Experience Design & Research"
        meta="4th July, 2026 · Hogeschool van Amsterdam"
      >
        <div className="hero__cta">
          <Link href="/ticket" className="btn-primary">Get Your Ticket</Link>
          <Link href="/prepare" className="hero__secondary-link">
            Information for participants &rarr;
          </Link>
        </div>
      </Hero>

      {/* About */}
      <section className="section text-center">
        <div className="container container--narrow">
          <h2 className="section__heading">UX Stories From the Community For the Community</h2>
          <p className="prose">
            UX Camp Amsterdam is a BarCamp where you can share your knowledge, stories, and ideas about
            User Experience Design and related disciplines. As a one-day unconference event, it's made by
            the community for the community. There are no spectators, only contributors.
            Come and join in!
          </p>
        </div>
      </section>

      {/* How to Contribute */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section__heading text-center">How to Contribute</h2>
          <div className="grid-3">
            <div className="grid-3__item">
              <h3>Run a Session</h3>
              <p>
                Everyone who visits is offered the opportunity to give a talk, workshop, or lead a
                discussion. You pitch your ideas first thing in the morning and the audience votes.
              </p>
            </div>
            <div className="grid-3__item">
              <h3>Support the Event</h3>
              <p>
                We ask participants to volunteer some of their time to help make the event a success —
                moving chairs, assisting with registration, or directing attendees.
              </p>
            </div>
            <div className="grid-3__item">
              <h3>Spread the Word</h3>
              <p>
                Share your experience using #UXcampAMS26. If you see, hear or learn something cool,
                let the community know!
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/how-it-works" className="section__more-link">More on How it works &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Where and When */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 className="section__heading">Where and When?</h2>
              <div>
                <p className="where-when__label">Date &amp; Time</p>
                <p className="where-when__value">July 4, 2026 &middot; 9:30&ndash;17:15</p>
              </div>
              <div>
                <p className="where-when__label">Location</p>
                <p className="where-when__value">Hogeschool van Amsterdam</p>
              </div>
              <ul className="schedule" aria-label="Event schedule">
                <li><span className="time">9:30</span> <span>Registration</span></li>
                <li><span className="time">10:00</span> <span>Welcome &amp; Madness</span></li>
                <li><span className="time">11:00</span> <span>Rounds 1–3</span></li>
                <li><span className="time">12:30</span> <span>Lunch</span></li>
                <li><span className="time">13:30</span> <span>Rounds 4–6</span></li>
                <li><span className="time">15:00</span> <span>Break</span></li>
                <li><span className="time">15:30</span> <span>Rounds 7–8</span></li>
                <li><span className="time">17:00</span> <span>Closing</span></li>
                <li><span className="time">17:15</span> <span>Drinks &amp; After Party</span></li>
              </ul>
            </div>
            <div>
              <iframe
                className="map-embed"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.2617218837394!2d4.893951115810566!3d52.36297177978712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e21c3efde3c9%3A0x25e0ba7f12ee7f8d!2sHogeschool%20van%20Amsterdam!5e0!3m2!1sen!2snl!4v1620000000000!5m2!1sen!2snl"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hogeschool van Amsterdam map"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
