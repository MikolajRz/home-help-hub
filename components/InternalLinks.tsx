import Link from "next/link";

type InternalLink = {
  href: string;
  label: string;
};

export default function InternalLinks({
  links,
}: {
  links: InternalLink[];
}) {
  if (!links.length) return null;

  return (
    <section className="mt-12 border-t pt-8">
      <h2 className="text-xl font-semibold mb-4">
        Continue reading
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-lg border bg-white p-4 hover:shadow-md transition"
          >
            <h3 className="font-medium">{link.label}</h3>

            <p className="text-sm text-gray-500 mt-1">
              Read related article →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}