import Link from "next/link";

export default function InternalLinks({ links }: { links: { href: string; label: string }[] }) {
  return (
    <div className="mt-10 border-t pt-6">
      <h3 className="font-semibold mb-3">Related articles</h3>

      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link className="text-blue-600 hover:underline" href={l.href}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}