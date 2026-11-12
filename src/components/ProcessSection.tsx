import { content } from "@/content/sk";

export function ProcessSection() {
  const { eyebrow, lead, express, standard, note } = content.process;

  return (
    <section className="section db-wrap work-section" id="ako-pracujeme">
      <div className="section-head">
        <div className="eyebrow">
          <span className="db-dot db-on" />
          03 / {eyebrow.replace("03 / ", "")}
        </div>
        <h2>
          Dve tempá. <span className="accent">Express</span>, keď sa ponáhľate.
        </h2>
        <p>{lead}</p>
      </div>

      <div className="mode-grid">
        {/* Express */}
        <article className="mode-card mode-express">
          <div className="mode-label">
            <div className="eyebrow">
              <span className="db-dot db-on" />
              keď to potrebujete hneď
            </div>
            <span>do 10 dní</span>
          </div>
          <h3>DoubleB Express</h3>
          <p className="mode-subtitle">{express.title}</p>
          <ul>
            {express.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <footer>
            <span>od úvodného hovoru</span>
            <a href="#kontakt" className="db-btn db-btn--primary">
              <span className="db-dot" />
              {express.cta}
            </a>
          </footer>
        </article>

        {/* Štandard */}
        <article className="mode-card">
          <div className="mode-label">
            <div className="eyebrow">
              <span className="db-dot" />
              keď máte čas
            </div>
            <span>do 48 hodín</span>
          </div>
          <h3>Štandard</h3>
          <p className="mode-subtitle">{standard.title}</p>
          <ul>
            {standard.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <footer>
            <span>od úvodného hovoru</span>
            <a href="#kontakt" className="db-btn">
              <span className="db-dot" />
              {standard.cta}
            </a>
          </footer>
        </article>
      </div>

      <p className="work-note">{note}</p>
    </section>
  );
}
