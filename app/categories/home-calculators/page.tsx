export const metadata = {
  title: "Home Calculators - Useful Tools",
  description:
    "Free calculators for home improvement, renovation and gardening projects.",
};

export default function HomeCalculatorsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold">
        Home Calculators
      </h1>

      <p className="mt-4 text-gray-600">
        Tools for calculating paint, flooring, soil, and more.
      </p>

      <div className="mt-10 grid gap-4">
        <div className="border p-5 rounded">
          Paint Calculator (coming soon)
        </div>

        <div className="border p-5 rounded">
          Flooring Calculator (coming soon)
        </div>
      </div>
    </main>
  );
}