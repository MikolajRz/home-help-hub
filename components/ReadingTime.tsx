type ReadingTimeProps = {
  content: string;
  className?: string;
};

export default function ReadingTime({
  content,
  className = "",
}: ReadingTimeProps) {
  // Average reading speed assumption (SEO standard)
  const wordsPerMinute = 200;

  const wordCount = content
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const minutes = Math.max(
    1,
    Math.ceil(wordCount / wordsPerMinute)
  );

  return (
    <div
      className={`flex items-center gap-2 text-sm text-gray-400 ${className}`}
    >
      {/* ICON */}
      <span className="text-gray-500">⏱</span>

      {/* MAIN TEXT */}
      <span>
        {minutes} min read
      </span>

      {/* UX SIGNAL */}
      <span className="text-gray-600 hidden sm:inline">
        • Estimated reading time
      </span>
    </div>
  );
}