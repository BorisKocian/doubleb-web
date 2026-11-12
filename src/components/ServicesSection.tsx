"use client";

import { useState } from "react";
import { content } from "@/content/sk";

const services = content.services.items.map((item, i) => ({
  no: `0${i + 1}`,
  title: item.title,
  text: item.desc,
  tags: item.tags.join(" · "),
}));

export function ServicesSection() {
  const { eyebrow, heading, lead, items, note } = content.services;
  const [selected, setSelected] = useState(0);
  const service = services[selected];

  return (
    <section className="section db-wrap" id="co-staviame">
      <div className="section-head">
        <div className="eyebrow">
          <span className="db-dot db-on" />
          01 / {eyebrow.replace("01 / ", "")}
        </div>
        <h2>{heading}</h2>
        <p>{lead}</p>
      </div>

      {/* Desktop: selektor služby + detail */}
      <div className="services-layout">
        {/* Selector column */}
        <div className="service-options" role="tablist" aria-label="Typy služieb">
          {services.map((item, index) => (
            <button
              key={item.title}
              type="button"
              role="tab"
              aria-selected={selected === index}
              className={selected === index ? "selected" : ""}
              onClick={() => setSelected(index)}
            >
              <span>
                <span className={`db-dot${selected === index ? " db-on" : ""}`} />
                {item.no}
              </span>
              <strong>{item.title}</strong>
              {selected === index && <small>vybrané</small>}
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <article className="service-panel" role="tabpanel">
          <div className="service-panel-head">
            <div className="eyebrow">
              <span className="db-dot db-on" />
              {service.no} / služba
            </div>
            <span>{service.tags}</span>
          </div>
          <h3>{service.title}</h3>
          <p>{service.text}</p>
          <div className="service-panel-proof">
            <span>
              <span className="db-dot db-on" />
              Návrh aj vývoj robíme priamo my.
            </span>
            <a href="#kontakt">Povedzte nám o produkte</a>
          </div>
        </article>
      </div>

      {/* Mobil: riadky so službami pod sebou */}
      <ul className="service-rows">
        {items.map((item) => (
          <li key={item.title}>
            <div className="service-rows__no">
              <span className="db-dot db-on" />
              {item.no}
            </div>
            <h3>{item.title}</h3>
            <div className="service-rows__body">
              <p>{item.desc}</p>
              <div className="db-tags">
                {item.tags.map((tag) => (
                  <span className="db-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <p className="boundary-note">{note}</p>
    </section>
  );
}
