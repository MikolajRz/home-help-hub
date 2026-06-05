import { useMemo } from "react";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
  title?: string;
};

export default function FAQ({
  items,
  title = "Frequently Asked Questions",
}: FAQProps) {
  const jsonLd = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };
  }, [items]);

  return (
    <section className="mt-12 border border-white/10 bg-[#0f172a] rounded-2xl p-6">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* HEADER */}
      <h2 className="text-xl font-semibold text-white">
        {title}
      </h2>

      <p className="text-gray-400 text-sm mt-2">
        Common questions about this topic answered clearly and simply.
      </p>

      {/* FAQ LIST */}
      <div className="mt-6 space-y-4">
        {items.map((item, idx) => (
          <details
            key={idx}
            className="group bg-[#111827] border border-white/10 rounded-lg p-4 transition"
          >
            {/* QUESTION */}
            <summary className="cursor-pointer text-white font-medium list-none flex justify-between items-center">
              <span>{item.question}</span>

              <span className="text-gray-400 group-open:rotate-180 transition-transform">
                ▾
              </span>
            </summary>

            {/* ANSWER */}
            <p className="text-gray-300 mt-3 leading-relaxed text-sm">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}