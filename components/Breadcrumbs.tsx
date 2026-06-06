import Link from "next/link";

type BreadcrumbsProps = {
  items: {
    label: string;
    href: string;
  }[];
};

export default function Breadcrumbs({
  items,
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="text-sm py-3"
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li
            key={item.href}
            className="flex items-center gap-2"
          >
            {index === items.length - 1 ? (
              <span className="font-medium text-[#2c4a2e]">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-[#6b7c6b] hover:text-[#2d5a2c] transition-colors"
              >
                {item.label}
              </Link>
            )}

            {index < items.length - 1 && (
              <span className="text-[#c4a86b] text-sm">›</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}