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
    <section className="mt-6 border border-[#dce4d8] bg-white rounded-2xl p-5 shadow-sm">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* HEADER */}
      <h2 className="text-xl font-semibold text-[#2c4a2e]">
        {title}
      </h2>

      <p className="text-[#6b7c6b] text-sm mt-1">
        Common questions about this topic answered clearly and simply.
      </p>

      {/* FAQ LIST */}
      <div className="mt-4 space-y-2">
        {items.map((item, idx) => (
          <details
            key={idx}
            className="group bg-[#f8f6f0] border border-[#dce4d8] rounded-xl p-4 transition-all duration-200 hover:border-[#c4a86b]/50"
          >
            {/* QUESTION */}
            <summary className="cursor-pointer text-[#2c4a2e] font-medium list-none flex justify-between items-center">
              <span>{item.question}</span>

              <span className="text-[#c4a86b] group-open:rotate-180 transition-transform duration-200 text-sm">
                ▼
              </span>
            </summary>

            {/* ANSWER */}
            <p className="text-[#4a5b4a] mt-3 leading-relaxed text-sm">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}