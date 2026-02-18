export default function Nav() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="container-page">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-gabi-border bg-gabi-panel/70 px-4 py-3 backdrop-blur">
          
          <div className="text-sm text-gabi-muted">
            <span className="text-gabi-text font-medium">
              Gabriela Jácome
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <a
              href="https://www.linkedin.com/in/gabrielajacomeortiz/"
              target="_blank"
              className="text-gabi-muted hover:text-gabi-text transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/gaby112001"
              target="_blank"
              className="text-gabi-muted hover:text-gabi-text transition"
            >
              GitHub
            </a>

            <button className="border border-gabi-border rounded-full px-3 py-1 text-xs text-gabi-muted hover:text-gabi-text transition">
              ES / EN
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
