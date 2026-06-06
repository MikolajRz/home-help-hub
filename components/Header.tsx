import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-[#dce4d8] bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between flex-wrap gap-4">
        
        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-bold text-[#2c4a2e] hover:text-[#2d5a2c] transition-colors"
        >
          🌿 Hometopia
        </Link>

        {/* NAVIGATION */}
        <nav>
          <ul className="flex flex-wrap gap-6 text-sm md:text-base">
            <li>
              <Link 
                href="/categories/home-problems" 
                className="text-[#4a5b4a] hover:text-[#2d5a2c] transition-colors font-medium"
              >
                Home Problems
              </Link>
            </li>
            <li>
              <Link 
                href="/categories/garden-problems" 
                className="text-[#4a5b4a] hover:text-[#2d5a2c] transition-colors font-medium"
              >
                Garden
              </Link>
            </li>
            <li>
              <Link 
                href="/categories/home-calculators" 
                className="text-[#4a5b4a] hover:text-[#2d5a2c] transition-colors font-medium"
              >
                Calculators
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}