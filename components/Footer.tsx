export default function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <p>
          © {new Date().getFullYear()} Home Help Hub
        </p>
      </div>
    </footer>
  );
}