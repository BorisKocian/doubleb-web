"use client";

import { useState } from "react";
import { site } from "@/config/site";
import { content } from "@/content/sk";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { ProjectMedia } from "./ProjectMedia";

const projectItems = [
  {
    slug: "cee",
    tab: "CEE Startup Voucher",
    tabMeta: "platforma súťaže",
    type: "platforma na prihlášky a hodnotenie súťaže CEE Startup Voucher, pre MSIC a Inoviu",
    title: "Prihlášky do CEE Startup Voucher sme spustili 10 dní po prvom hovore.",
    text: "Za 10 dní sme z prvých hovorov definovali MVP, postavili ho, otestovali a spustili, takže prihlášky sa otvorili načas. Ďalšie dva mesiace sme pridávali hodnotenie s pomocou AI, porotu a viac kôl súťaže.",
    facts: [
      ["10 dní", "od prvého hovoru po spustenie prihlášok"],
      ["+2 mesiace", "hodnotenie s pomocou AI, porota a viac kôl"],
    ],
    tags: "Next.js · AI hodnotenie",
    placeholder: "screenshot CEE produktu",
    image: "/projects/cee.jpg",
    imageAlt: "Náhľad platformy CEE Startup Voucher na troch monitoroch.",
    href: "",
  },
  {
    slug: "smartgym",
    tab: "SmartGym",
    tabMeta: "fitness aplikácia",
    type: "aplikácia pre fitness centrá",
    title: "SmartGym",
    text: "Web, iOS a Android z jedného kódu. Na aplikácii pracujeme od januára.",
    facts: [
      ["10+ mesiacov", "vývoja"],
      ["web, iOS a Android", "z jedného kódu"],
    ],
    tags: "Capacitor · App Store",
    placeholder: "screenshot aplikácie SmartGym",
    image: "/projects/smartgym.jpg",
    imageAlt: "Náhľad aplikácie SmartGym na piatich mobilných obrazovkách.",
    href: "",
  },
  {
    slug: "iudicata",
    tab: "Iudicata",
    tabMeta: "vlastný produkt",
    type: "vlastný produkt",
    title: "Iudicata",
    text: "Vyhľadávanie v judikatúre a legislatíve s pomocou AI. Postavili sme ho celý sami, od nápadu po produkčnú verziu. Vývoj sme zastavili, keď trh obsadili silnejší hráči. Povedať si to včas je tiež zručnosť.",
    facts: [
      ["AI", "vyhľadávanie v judikatúre a legislatíve"],
      ["od nápadu", "po produkčnú verziu"],
    ],
    tags: "AI · vyhľadávanie",
    placeholder: "screenshot produktu Iudicata",
    image: "/projects/iudicata.jpg",
    imageAlt: "Náhľad webovej aplikácie Iudicata na monitore a dvoch obrazovkách.",
    href: site.links.iudicata,
  },
];

type Project = (typeof projectItems)[number];

function ProjectDetail({ project }: { project: Project }) {
  return (
    <>
      <div className="case-copy">
        <div className="eyebrow">
          <span className="db-dot db-on" />
          {project.type}
        </div>
        <h3>{project.title}</h3>
        <p>{project.text}</p>
        <div className="case-metrics">
          {project.facts.map((fact) => (
            <div key={fact[0]}>
              <strong>{fact[0]}</strong>
              <span>{fact[1]}</span>
            </div>
          ))}
        </div>
        <div className="project-meta">
          <span>{project.tags}</span>
          {project.href && (
            <a href={project.href} target="_blank" rel="noopener noreferrer">
              Otvoriť projekt ↗
            </a>
          )}
        </div>
      </div>
      {project.image ? (
        <ProjectMedia
          src={project.image}
          alt={project.imageAlt}
          width={1254}
          height={1254}
        />
      ) : (
        <MediaPlaceholder label={project.placeholder} />
      )}
    </>
  );
}

export function ProjectsSection() {
  const { eyebrow } = content.projects;
  const [selected, setSelected] = useState(0);
  const project = projectItems[selected];

  // Mobilný zoznam: každý projekt sa rozbaľuje samostatne, viac naraz. Keby sa
  // predchádzajúci pri otvorení ďalšieho zbalil, obsah nad prstom by zmizol a
  // stránka by odskočila.
  const [expanded, setExpanded] = useState<number[]>([0]);
  const toggle = (index: number) =>
    setExpanded((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );

  return (
    <section className="section projects-section db-wrap" id="projekty">
      <div className="section-head">
        <div className="eyebrow">
          <span className="db-dot db-on" />
          02 / {eyebrow.replace("02 / ", "")}
        </div>
      </div>

      {/* Desktop: záložky + vybraná karta */}
      <div className="projects">
        <div className="project-tabs" role="tablist" aria-label="Projekty">
          {projectItems.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              role="tab"
              aria-selected={selected === index}
              className={selected === index ? "active" : ""}
              onClick={() => setSelected(index)}
            >
              <span>0{index + 1} / {item.tabMeta}</span>
              <strong>{item.tab}</strong>
            </button>
          ))}
        </div>

        <article className="featured-case" key={project.slug}>
          <ProjectDetail project={project} />
        </article>
      </div>

      {/* Mobil: rozbaľovací zoznam, názvy pod sebou */}
      <div className="project-accordion">
        {projectItems.map((item, index) => {
          const isOpen = expanded.includes(index);
          return (
            <div className="project-acc-item" key={item.slug}>
              <button
                type="button"
                className="project-acc-head"
                aria-expanded={isOpen}
                onClick={() => toggle(index)}
              >
                <span className="acc-label">
                  <span>0{index + 1} / {item.tabMeta}</span>
                  <strong>{item.tab}</strong>
                </span>
              </button>
              {isOpen && (
                <div className="project-acc-panel">
                  <ProjectDetail project={item} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
