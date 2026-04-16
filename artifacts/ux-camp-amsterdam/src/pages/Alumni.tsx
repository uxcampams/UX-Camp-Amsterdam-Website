import Hero from "@/components/Hero";

const alumni = [
  { name: "Arunima Ved", role: "UX Researcher", years: ["2025"], linkedin: "https://linkedin.com/in/arunimaved/" },
  { name: "Talita Collare", role: "Product (UX/UI) Designer", years: ["2025", "2026"], linkedin: "https://linkedin.com/in/talitacollares/" },
  { name: "Nien-Hua Gu", role: "Product Design Freelancer", years: ["2024", "2025", "2026"], linkedin: "https://linkedin.com/in/nienhua-gu/" },
  { name: "María de los Ángeles Adrián", role: "Product Designer", years: ["2024", "2025"], linkedin: "https://linkedin.com/in/maria-adrian/" },
  { name: "Lina Beltrán", role: "Product Design Manager", years: ["2023"], linkedin: "https://linkedin.com/in/linabeltranc/" },
  { name: "Vincent Vijn", role: "Design Lead, Researcher & Lecturer", years: ["2024", "2025", "2026"], linkedin: "https://linkedin.com/in/vincentvijn/" },
  { name: "Indre Lauciute", role: "UX Designer", years: ["2023", "2024", "2025", "2026"], linkedin: "https://linkedin.com/in/indrelauciute/" },
  { name: "Alona Sanbira", role: "UX Designer", years: ["2023"], linkedin: "https://linkedin.com/in/alona-sanbira-ux/" },
  { name: "Garima Chauhan", role: "UX Designer", years: ["2023"], linkedin: "https://linkedin.com/in/chauhangarima/" },
  { name: "Rita Costa Pereira", role: "", years: ["2024", "2025"], linkedin: "" },
  { name: "Philipp Engel", role: "UX Director", years: ["2016", "2017", "2018", "2019", "2020"], linkedin: "https://linkedin.com/in/philippengel/" },
  { name: "Tatiana Sidorenkova", role: "UX Researcher", years: ["2015", "2016", "2017", "2018", "2019", "2020", "2023", "2024"], linkedin: "https://linkedin.com/in/tatiana-sidorenkova-36087b9/" },
  { name: "Gareth Simms", role: "Product Owner", years: ["2016", "2017", "2018", "2019", "2020"], linkedin: "https://linkedin.com/in/garethsimms/" },
  { name: "Anna-Christina de Wit", role: "Art Director / Visual Designer", years: ["2020"], linkedin: "https://linkedin.com/in/anna-christina-de-wit/" },
  { name: "Doron Hirsch", role: "UX & Game Designer", years: ["2015", "2016", "2017", "2018", "2019", "2020"], linkedin: "https://linkedin.com/in/doron-hirsch-97992617/" },
  { name: "Xiaoyu Shen", role: "Product Designer", years: ["2019", "2020"], linkedin: "https://linkedin.com/in/xiaoyu-shen/" },
  { name: "Peter Boersma", role: "Director of Product Design", years: ["2016", "2017", "2018", "2020"], linkedin: "https://linkedin.com/in/pboersma/" },
  { name: "Dave de Bakker", role: "Experience Strategist", years: ["2015", "2016", "2019"], linkedin: "https://linkedin.com/in/davedebakker/" },
  { name: "Carolina Gómez Naranjo", role: "UX Designer", years: ["2016", "2017"], linkedin: "https://linkedin.com/in/carolina-gomez-naranjo-02631454/" },
  { name: "Marcel Hadderingh", role: "Product Designer", years: ["2016"], linkedin: "https://linkedin.com/in/marcelhadderingh/" },
  { name: "Daniel Kuipers", role: "Founder & Business Dev Manager", years: ["2015", "2016"], linkedin: "https://linkedin.com/in/danielkuipers/" },
  { name: "Ning Xu", role: "Product Manager & Analyst", years: ["2015", "2016"], linkedin: "https://linkedin.com/in/ningxxu/" },
  { name: "Liang Hiah", role: "UX Designer", years: ["2015", "2016"], linkedin: "https://linkedin.com/in/lianghiah/" },
];

export default function Alumni() {
  return (
    <main>
      <Hero
        title="Alumni"
        subtitle="All current and past UX Camp Amsterdam members"
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {alumni.map((person) => (
              <div key={person.name} className="border border-[#ccc] p-5">
                <p className="text-sm font-bold uppercase tracking-wider text-[#333] mb-1">{person.name}</p>
                {person.role && (
                  <p className="text-xs text-gray-500 mb-3">{person.role}</p>
                )}
                <div className="flex flex-wrap gap-1 mb-3">
                  {person.years.map((year) => (
                    <span key={year} className="text-[11px] font-bold bg-[#B20101] text-white px-2 py-0.5 uppercase tracking-wider">
                      {year}
                    </span>
                  ))}
                </div>
                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold uppercase tracking-wider text-[#B20101] underline underline-offset-2 hover:text-[#8B0000] transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
