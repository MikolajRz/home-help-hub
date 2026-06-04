import Link from "next/link";

type BreadcrumbsProps = {
  items: { label: string; href: string }[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="text-sm text-gray-500 mb-6">
      <ol className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            <Link href={item.href} className="hover:underline">
              {item.label}
            </Link>

            {index < items.length - 1 && (
              <span>/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}