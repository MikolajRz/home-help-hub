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
  fix: "border-indigo-500/30 bg-indigo-500/5",
  guide: "border-white/10 bg-[#111827]",
  tool: "border-emerald-500/20 bg-emerald-500/5",
  "next-step": "border-orange-500/20 bg-orange-500/5",
};

const typeLabels: Record<
  NonNullable<RelatedLinkItem["type"]>,
  string
> = {
  fix: "Fix related issue",
  guide: "Read guide",
  tool: "Use tool",
  "next-step": "Recommended next step",
};

export default function RelatedLinks({
  title = "Recommended next fixes",
  items,
}: RelatedLinksProps) {
  return (
    <section className="mt-12 border border-white/10 bg-[#0f172a] rounded-2xl p-6">
      
      {/* HEADER */}
      <h2 className="text-xl font-semibold text-white">
        {title}
      </h2>

      <p className="text-gray-400 text-sm mt-2">
        These related topics often solve connected or follow-up issues.
      </p>

      {/* LINKS GRID */}
      <div className="mt-6 grid gap-4">
        {items.map((item, idx) => {
          const type = item.type || "guide";

          return (
            <Link
              key={idx}
              href={item.href}
              className={`
                block rounded-xl border p-4
                transition-all duration-300
                hover:scale-[1.02]
                hover:border-white/20
                ${typeStyles[type]}
              `}
            >
              {/* TOP LABEL */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">
                  {typeLabels[type]}
                </span>

                <span className="text-gray-500 text-xs">
                  →
                </span>
              </div>

              {/* MAIN ANCHOR TEXT (SEO KEY PART) */}
              <h3 className="text-white font-semibold mt-2">
                {item.label}
              </h3>

              {/* DESCRIPTION (CONTEXT BOOST FOR GOOGLE) */}
              {item.description && (
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
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