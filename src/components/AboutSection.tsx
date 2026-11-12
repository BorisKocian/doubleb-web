import { content } from "@/content/sk";

const people = [
  { name: "Boris", role: "programuje a rozumie produktu", photo: "/team/boris.jpg", w: 1122, h: 1122 },
  { name: "Barbora", role: "programuje a rozumie produktu", photo: "/team/barbora.jpg", w: 1254, h: 1254 },
];

export function AboutSection() {
  const { eyebrow, headingBefore, headingAfter, personItems, note } = content.about;

  return (
    <section className="section db-wrap" id="o-nas">
      <div className="section-head">
        <div className="eyebrow">
          <span className="db-dot db-on" />
          04 / {eyebrow.replace("04 / ", "")}
        </div>
        <h2>
          {headingBefore}
          <span className="accent">celé naše štúdio.</span>
          {headingAfter.replace(". Obaja.", " Obaja.")}
        </h2>
        <p>
          DoubleB sú dve B: Boris a Barbora. Sme manželia a projekty robíme spolu, preto každý z nás pozná celý projekt, produkt aj kód.
        </p>
      </div>

      <div className="team-grid">
        {people.map((person) => (
          <article className="person" key={person.name}>
            <div className="person-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={person.photo}
                alt={person.name}
                width={person.w}
                height={person.h}
                loading="lazy"
              />
            </div>
            <div className="person-copy">
              <h3>{person.name}</h3>
              <p>{person.role}</p>
              <ul>
                {personItems.map((trait) => (
                  <li key={trait}>{trait}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
        <p className="team-point">{note}</p>
      </div>
    </section>
  );
}
