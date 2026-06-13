import techIcons from "@/data/techIcons.json";

type IconData = { label: string; paths: string[] };
const ICONS = techIcons as Record<string, IconData>;

export type TechSlug = keyof typeof techIcons;

export function techLabel(slug: string): string {
  return ICONS[slug]?.label ?? slug;
}

export default function TechIcon({
  slug,
  className = "h-5 w-5",
}: {
  slug: string;
  className?: string;
}) {
  const data = ICONS[slug];
  if (!data) return null;
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      {data.paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}
