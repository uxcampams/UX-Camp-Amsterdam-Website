import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";

export default function Year2019() {
  return (
    <main>
      <Hero
        title="UXcamp Amsterdam 2019"
        subtitle="June 1, 2019 · Fifth Edition"
      />

      <ContentSection>
        <h2>Overview</h2>
        <p>
          UXcamp Amsterdam 2019 was the <strong>fifth edition</strong> of this BarCamp for user
          experience professionals and enthusiasts.
        </p>
        <blockquote>
          <p>
            "From Tiger, Ninja, Grandma to afterparty beers in the sunshine (and EVERYTHING in
            between), 2019 was another truly special edition."
          </p>
        </blockquote>
        <p>
          Multiple sessions with presentation materials were shared afterwards. Topics included design
          leadership, typography, and user research methodologies. Over{" "}
          <strong>100 photographs</strong> were shared on the website and promoted via Instagram.
        </p>

        <h3>Notable Presenters</h3>
        <ul>
          <li>Dean Birkett</li>
          <li>Julia Zaytseva</li>
          <li>Vincent Vijn</li>
        </ul>
      </ContentSection>

      <ContentSection alt>
        <h2>Sponsors</h2>
        <ul>
          <li><strong>Location Sponsor:</strong> Digital Society School</li>
          <li><strong>Event Sponsor:</strong> Marktplaats</li>
          <li><strong>Event Sponsor:</strong> Elsevier</li>
        </ul>
      </ContentSection>
    </main>
  );
}
