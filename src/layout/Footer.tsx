export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0D0B12] text-sm text-white/40">
      <div className="mx-auto w-[min(72rem,90%)] py-6 text-center">
        <p>© {new Date().getFullYear()} Alex · Construit cu React și Tailwind CSS</p>
      </div>
    </footer>
  );
}
