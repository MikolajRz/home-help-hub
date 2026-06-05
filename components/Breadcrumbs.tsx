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
      className="text-sm text-gray-500 py-4"
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li
            key={item.href}
            className="flex items-center gap-2"
          >
            {index === items.length - 1 ? (
              <span className="font-medium text-gray-900">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-black transition"
              >
                {item.label}
              </Link>
            )}

            {index < items.length - 1 && (
              <span className="text-gray-400">›</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}