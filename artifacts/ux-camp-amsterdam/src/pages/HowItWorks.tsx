import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";

export default function HowItWorks() {
  return (
    <main>
      <Hero
        title="How It Works"
        subtitle="Everything you need to know about the unconference format"
      />

      <ContentSection>
        <span className="placeholder-notice">[PLACEHOLDER]</span>
        <h2>What Is a BarCamp / Unconference?</h2>
        <p>
          A BarCamp is a participant-driven event. Unlike traditional conferences, there are no
          pre-booked speakers or fixed agenda. The programme is created on the day, by the people
          who show up. Everyone is encouraged to contribute — whether by running a session, asking
          questions, or sparking a conversation.
        </p>
        <p>
          [PLACEHOLDER — Add more detail about the unconference philosophy, open space technology,
          the "law of two feet", and what makes UX Camp Amsterdam unique.]
        </p>
      </ContentSection>

      <ContentSection alt>
        <span className="placeholder-notice">[PLACEHOLDER]</span>
        <h2>The Madness Session</h2>
        <p>
          The day kicks off with the Madness Session — our chaotic, energetic session-pitching
          ritual. Anyone who wants to run a session steps up to the front, gives a one-minute pitch,
          and the crowd votes with their feet.
        </p>
        <p>
          [PLACEHOLDER — Describe the Madness Session in more detail: how long it runs, how many
          sessions get selected, how the schedule is formed on the day.]
        </p>
      </ContentSection>

      <ContentSection>
        <span className="placeholder-notice">[PLACEHOLDER]</span>
        <h2>Voting &amp; Schedule</h2>
        <p>
          After the pitches, participants vote for the sessions they most want to attend. The most
          popular pitches are assigned rooms and time slots, forming the day's schedule. The grid
          goes up on a big board for everyone to see.
        </p>
        <p>
          [PLACEHOLDER — Describe voting mechanics: sticker dots, show-of-hands, digital tool, etc.
          How many rooms / time slots are available? How is the schedule communicated?]
        </p>
      </ContentSection>

      <ContentSection alt>
        <span className="placeholder-notice">[PLACEHOLDER]</span>
        <h2>What Kind of Sessions Happen?</h2>
        <p>
          Sessions at UX Camp Amsterdam vary wildly — and that's the point. Past sessions have
          included hands-on workshops, lightning talks, open discussions, live critiques, research
          deep-dives, and more.
        </p>
        <p>
          [PLACEHOLDER — Add 4–6 example session types with brief descriptions. Consider including
          quotes or examples from past editions to show the breadth of topics.]
        </p>
      </ContentSection>
    </main>
  );
}
