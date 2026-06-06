import Link from "next/link";

export type RelatedLinkItem = {
  href: string;
  label: string;
  description?: string;
  type?: "fix" | "guide" | "tool" | "next-step";
};

type RelatedLinksProps = {
  title?: string;
  items: RelatedLinkItem[];
};

const typeStyles: Record<
  NonNullable<RelatedLinkItem["type"]>,
  string
> = {
  fix: "border-[#2d5a2c]/30 bg-[#2d5a2c]/5 hover:border-[#2d5a2c]/50",
  guide: "border-[#dce4d8] bg-white hover:border-[#c4a86b]/50 hover:shadow-sm",
  tool: "border-[#c4a86b]/30 bg-[#c4a86b]/5 hover:border-[#c4a86b]/50",
  "next-step": "border-[#2d5a2c]/30 bg-[#2d5a2c]/5 hover:border-[#2d5a2c]/50",
};

const typeLabels: Record<
  NonNullable<RelatedLinkItem["type"]>,
  string
> = {
  fix: "🔧 Fix related issue",
  guide: "📖 Read guide",
  tool: "🛠️ Use tool",
  "next-step": "➡️ Recommended next step",
};

export default function RelatedLinks({
  title = "Recommended next fixes",
  items,
}: RelatedLinksProps) {
  return (
    <section className="mt-6 border border-[#dce4d8] bg-white rounded-2xl p-5 shadow-sm">
      
      {/* HEADER */}
      <h2 className="text-xl font-semibold text-[#2c4a2e]">
        {title}
      </h2>

      <p className="text-[#6b7c6b] text-sm mt-1">
        These related topics often solve connected or follow-up issues.
      </p>

      {/* LINKS GRID - zmniejszone odstępy */}
      <div className="mt-3 grid gap-2">
        {items.map((item, idx) => {
          const type = item.type || "guide";

          return (
            <Link
              key={idx}
              href={item.href}
              className={`
                block rounded-xl border p-3
                transition-all duration-300
                hover:scale-[1.01]
                ${typeStyles[type]}
              `}
            >
              {/* TOP LABEL */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#6b7c6b]">
                  {typeLabels[type]}
                </span>

                <span className="text-[#c4a86b] text-xs font-medium">
                  →
                </span>
              </div>

              {/* MAIN ANCHOR TEXT (SEO KEY PART) */}
              <h3 className="text-[#2c4a2e] font-semibold mt-1">
                {item.label}
              </h3>

              {/* DESCRIPTION (CONTEXT BOOST FOR GOOGLE) */}
              {item.description && (
                <p className="text-[#4a5b4a] text-sm mt-1 leading-relaxed">
                  {item.description}
                </p>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}