import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Home Calculators - Free DIY Tools | Hometopia",
  description:
    "Free professional calculators for home improvement, renovation, and DIY projects. Calculate paint, flooring, and more with our easy-to-use tools.",
};

export default function HomeCalculatorsPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f0] py-2">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* BREADCRUMBS */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Calculators", href: "/categories/home-calculators" },
            ]}
          />
        </div>
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#2d5a2c]/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-[#2d5a2c]">🧮 Free DIY Tools</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c4a2e] mb-4">
            Home Calculators
          </h1>
          <p className="text-lg text-[#4a5b4a] max-w-2xl mx-auto">
            Professional-grade calculators for your home improvement, renovation, 
            and gardening projects. Fast, accurate, and completely free.
          </p>
        </div>
        
        {/* CALCULATORS GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* PAINT CALCULATOR CARD */}
          <Link 
            href="/calculators/paint"
            className="group bg-white rounded-2xl border border-[#dce4d8] p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="text-5xl mb-4">🎨</div>
              <div className="text-sm font-medium bg-[#2d5a2c]/10 text-[#2d5a2c] px-3 py-1 rounded-full">
                Popular
              </div>
            </div>
            <h2 className="text-2xl font-bold text-[#2c4a2e] group-hover:text-[#2d5a2c] transition-colors">
              Paint Calculator
            </h2>
            <p className="text-[#4a5b4a] mt-3 leading-relaxed">
              Calculate exactly how much paint you need for your room. Account for windows, 
              doors, multiple coats, and choose from 5 paint types.
            </p>
            <div className="mt-6 flex items-center gap-1 text-[#2d5a2c] font-medium">
              <span>Calculate now</span>
              <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
          
          {/* FLOORING CALCULATOR CARD */}
          <Link 
            href="/calculators/floor"
            className="group bg-white rounded-2xl border border-[#dce4d8] p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="text-5xl mb-4">🪵</div>
              <div className="text-sm font-medium bg-[#2d5a2c]/10 text-[#2d5a2c] px-3 py-1 rounded-full">
                New
              </div>
            </div>
            <h2 className="text-2xl font-bold text-[#2c4a2e] group-hover:text-[#2d5a2c] transition-colors">
              Flooring Calculator
            </h2>
            <p className="text-[#4a5b4a] mt-3 leading-relaxed">
              Calculate flooring materials for any room shape. Choose from 6 material types, 
              account for waste, and get full cost estimates.
            </p>
            <div className="mt-6 flex items-center gap-1 text-[#2d5a2c] font-medium">
              <span>Calculate now</span>
              <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        </div>
        
        {/* UPCOMING CALCULATORS */}
        <div className="mt-12">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-[#2c4a2e]">More tools coming soon</h3>
            <p className="text-[#6b7c6b] mt-1">We're constantly adding new calculators to help with your projects</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/50 rounded-xl p-4 border border-[#dce4d8] text-center">
              <span className="text-3xl mb-2 block">🌱</span>
              <h4 className="font-medium text-[#2c4a2e]">Soil Calculator</h4>
              <p className="text-xs text-[#6b7c6b] mt-1">Coming soon</p>
            </div>
            
            <div className="bg-white/50 rounded-xl p-4 border border-[#dce4d8] text-center">
              <span className="text-3xl mb-2 block">💡</span>
              <h4 className="font-medium text-[#2c4a2e]">Lighting Calculator</h4>
              <p className="text-xs text-[#6b7c6b] mt-1">Coming soon</p>
            </div>
            
            <div className="bg-white/50 rounded-xl p-4 border border-[#dce4d8] text-center">
              <span className="text-3xl mb-2 block">🔥</span>
              <h4 className="font-medium text-[#2c4a2e]">BTU Calculator</h4>
              <p className="text-xs text-[#6b7c6b] mt-1">Coming soon</p>
            </div>
          </div>
        </div>
        
        {/* TRUST SECTION */}
        <div className="mt-12 pt-8 border-t border-[#dce4d8] text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#6b7c6b]">
            <span className="flex items-center gap-1">✓ Professional formulas</span>
            <span className="flex items-center gap-1">✓ Instant results</span>
            <span className="flex items-center gap-1">✓ Free to use</span>
            <span className="flex items-center gap-1">✓ No signup required</span>
          </div>
        </div>
      </div>
    </main>
  );
}