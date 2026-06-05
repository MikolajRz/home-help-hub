import Image from "next/image";

type AuthorBoxProps = {
  name?: string;
  role?: string;
  bio?: string;
  imageSrc?: string;
};

export default function AuthorBox({
  name = "Home Help Hub Team",
  role = "Home Repair & DIY Specialists",
  bio = "We create practical, step-by-step home repair guides based on real household issues. Our content focuses on clear explanations, safe DIY practices, and helping homeowners solve problems without unnecessary complexity.",
  imageSrc,
}: AuthorBoxProps) {
  return (
    <section className="mt-12 border border-white/10 bg-[#0f172a] rounded-2xl p-6 flex gap-5 items-start">
      
      {/* AVATAR */}
      <div className="flex-shrink-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={name}
            width={64}
            height={64}
            className="rounded-full object-cover border border-white/10"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-[#1f2937] border border-white/10 flex items-center justify-center text-white font-semibold">
            {name.charAt(0)}
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div>
        <div className="flex items-center gap-2">
          <h3 className="text-white font-semibold text-lg">{name}</h3>
        </div>

        <p className="text-gray-400 text-sm mt-1">{role}</p>

        <p className="text-gray-300 mt-3 leading-relaxed text-sm">
          {bio}
        </p>

        {/* TRUST SIGNALS */}
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-400">
          <span className="px-2 py-1 bg-[#111827] border border-white/10 rounded-md">
            Verified content process
          </span>
          <span className="px-2 py-1 bg-[#111827] border border-white/10 rounded-md">
            Based on real home issues
          </span>
          <span className="px-2 py-1 bg-[#111827] border border-white/10 rounded-md">
            Updated regularly
          </span>
        </div>
      </div>
    </section>
  );
}