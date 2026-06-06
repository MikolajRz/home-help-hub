import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#dce4d8] bg-white/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* GŁÓWNA SEKCJA STOPKI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* LEWA KOLUMNA - O STRONIE */}
          <div>
            <h3 className="text-lg font-semibold text-[#2c4a2e] mb-3">Hometopia</h3>
            <p className="text-sm text-[#4a5b4a] leading-relaxed">
              Practical home and garden guides, DIY repairs, plant care, 
              and smart solutions for your everyday household challenges.
            </p>
          </div>
          
          {/* ŚRODKOWA KOLUMNA - LINKI */}
          <div>
            <h3 className="text-lg font-semibold text-[#2c4a2e] mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categories/home-problems" className="text-[#4a5b4a] hover:text-[#2d5a2c] transition">
                  Home Problems
                </Link>
              </li>
              <li>
                <Link href="/categories/garden-problems" className="text-[#4a5b4a] hover:text-[#2d5a2c] transition">
                  Garden Problems
                </Link>
              </li>
              <li>
                <Link href="/categories/home-calculators" className="text-[#4a5b4a] hover:text-[#2d5a2c] transition">
                  Home Calculators
                </Link>
              </li>
              <li>
                <Link href="/calculators/paint" className="text-[#4a5b4a] hover:text-[#2d5a2c] transition">
                  Paint Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/floor" className="text-[#4a5b4a] hover:text-[#2d5a2c] transition">
                  Flooring Calculator
                </Link>
              </li>
            </ul>
          </div>
          
          {/* PRAWA KOLUMNA - INFORMACJE */}
          <div>
            <h3 className="text-lg font-semibold text-[#2c4a2e] mb-3">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-[#4a5b4a] hover:text-[#2d5a2c] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#4a5b4a] hover:text-[#2d5a2c] transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-[#4a5b4a] hover:text-[#2d5a2c] transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#4a5b4a] hover:text-[#2d5a2c] transition">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* DOLNA SEKCJA - COPYRIGHT */}
        <div className="mt-8 pt-6 border-t border-[#dce4d8] text-center text-sm text-[#6b7c6b]">
          <p>© {new Date().getFullYear()} Hometopia. All rights reserved.</p>
          <p className="mt-1 text-xs">
            All information is for general informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}