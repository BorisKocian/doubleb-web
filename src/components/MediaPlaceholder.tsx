import { CodeModule } from "./CodeModule";

interface Props {
  label: string;
}

export function MediaPlaceholder({ label }: Props) {
  return (
    <div className="media-placeholder" role="img" aria-label={`Placeholder: ${label}`}>
      <CodeModule large />
      <span>{label}</span>
      <small>{"// doplní sa neskôr"}</small>
    </div>
  );
}
