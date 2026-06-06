import Image from "next/image";
import Link from "next/link";

type AuthorBoxProps = {
  name?: string;
  role?: string;
  bio?: string;
  imageSrc?: string;
};

export default function AuthorBox({
  name = "Hometopia Team",
  role = "Home & Garden Specialists",
  bio = "We create practical, step-by-step home and garden guides based on real household issues. Our content focuses on clear explanations, safe DIY practices, and helping homeowners solve problems without unnecessary complexity.",
  imageSrc,
}: AuthorBoxProps) {
  return (
    <section className="mt-6 border border-[#dce4d8] bg-white rounded-2xl p-6 flex gap-5 items-start shadow-sm">
      
      {/* AVATAR */}
      <div className="flex-shrink-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={name}
            width={64}
            height={64}
            className="rounded-full object-cover border-2 border-[#2d5a2c]"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-[#2d5a2c] flex items-center justify-center text-white font-semibold text-xl">
            {name.charAt(0)}
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="text-[#2c4a2e] font-semibold text-lg">{name}</h3>
        </div>

        <p className="text-[#6b7c6b] text-sm mt-1">{role}</p>

        <p className="text-[#4a5b4a] mt-3 leading-relaxed text-sm">
          {bio}
        </p>

        {/* TRUST SIGNALS */}
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="px-2 py-1 bg-[#f0ede5] border border-[#dce4d8] rounded-md text-[#4a5b4a]">
            ✅ Verified content process
          </span>
          <span className="px-2 py-1 bg-[#f0ede5] border border-[#dce4d8] rounded-md text-[#4a5b4a]">
            🌱 Based on real home issues
          </span>
          <span className="px-2 py-1 bg-[#f0ede5] border border-[#dce4d8] rounded-md text-[#4a5b4a]">
            📅 Updated regularly
          </span>
        </div>

        {/* LINK DO STRONY O AUTORZE */}
        <div className="mt-4">
          <Link
            href="/about"
            className="text-[#2d5a2c] hover:text-[#1f3d1e] text-sm transition font-medium"
          >
            Learn more about the author and editorial process →
          </Link>
        </div>
      </div>
    </section>
  );
}