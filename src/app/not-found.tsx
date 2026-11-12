import Link from "next/link";
import { content } from "@/content/sk";

export default function NotFound() {
  const { code, title, back } = content.notFound;

  return (
    <main className="not-found">
      <span className="not-found__row db-row db-row--lg" aria-hidden="true">
        <span className="db-dot" />
        <span className="db-pill" />
        <span className="not-found__gap" />
        <span className="db-dot" />
      </span>
      <p className="not-found__code">{code}</p>
      <h1>{title}</h1>
      <Link className="db-link" href="/">
        {back}
      </Link>
    </main>
  );
}
