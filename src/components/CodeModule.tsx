// Server component — dekoratívny kód ako tvar (ako v MediaPlaceholder)

const ROWS = [
  ["dot", "pill-on"],
  ["pill", "dot", "dot-on"],
  ["dot", "pill-on", "dot"],
  ["pill", "dot", "dot-on"],
  ["dot", "pill-on"],
];

export function CodeModule({ large = false }: { large?: boolean }) {
  return (
    <span className={`code-module${large ? " large" : ""}`} aria-hidden="true">
      {ROWS.map((row, ri) => (
        <span className={`code-row indent-${ri % 3}`} key={ri}>
          {row.map((shape, si) => (
            <span
              key={si}
              className={`db-${shape.includes("pill") ? "pill" : "dot"}${shape.includes("on") ? " db-on" : ""}`}
            />
          ))}
        </span>
      ))}
    </span>
  );
}
