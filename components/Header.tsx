import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold"
        >
          Home Help Hub
        </Link>

        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/categories/home-problems">Home Problems</Link>
            </li>

            <li>
              <Link href="/categories/garden-problems">Garden</Link>
            </li>

            <li>
              <Link href="/categories/home-calculators">Calculators</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}