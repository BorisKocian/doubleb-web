// Server component — čistá funkcia, bez hydratácie.

function fnv1a(s: string): number {
  let h = 2166136261;
  for (const c of s) {
    h ^= c.charCodeAt(0);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function xorshift(seed: number) {
  let x = seed || 1;
  return () => {
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    return (x >>> 0) / 4294967296;
  };
}

type Row = { indent: number; items: Array<{ type: "dot" | "pill"; accent: boolean }> };

function buildRows(slug: string, count: number): Row[] {
  const r = xorshift(fnv1a(slug));
  return Array.from({ length: count }, () => {
    const n = 2 + Math.floor(r() * 2);
    const indent = Math.floor(r() * 3);
    const accIdx = r() < 0.45 ? Math.floor(r() * n) : -1;
    const kinds = Array.from(
      { length: n },
      () => (r() < 0.5 ? "dot" : "pill") as "dot" | "pill"
    );
    if (!kinds.includes("pill")) kinds[Math.floor(r() * n)] = "pill";
    return {
      indent,
      items: kinds.map((type, j) => ({ type, accent: j === accIdx })),
    };
  });
}

interface Props {
  slug: string;
  rows?: number;
  large?: boolean;
}

export function ProjectFingerprint({ slug, rows = 7, large = false }: Props) {
  const lines = buildRows(slug, rows);
  return (
    <div className="db-case__fp" aria-hidden="true">
      {lines.map((row, i) => (
        <div
          key={i}
          className={`db-row${large ? " db-row--lg" : ""}${row.indent ? ` db-in${row.indent}` : ""}`}
        >
          {row.items.map((item, j) => (
            <span
              key={j}
              className={`db-${item.type}${item.accent ? " db-on" : ""}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
