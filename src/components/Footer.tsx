export default function Footer() {
  return (
    <footer className="bg-white border-t border-sky-100 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Ian Mutuma. All rights reserved.
        </p>
        <p className="text-sm text-slate-500">
          Built with React &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
