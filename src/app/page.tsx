import Nav from "./components/Nav";


export default function Home() {
  return (
    <main className="min-h-screen bg-gabi-bg text-gabi-text">
      <Nav />

      <div className="container-page pt-24 pb-24">
        {/* HERO */}
        <section className="min-h-[70vh] flex flex-col justify-center">
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight">
            Gabriela Jácome
          </h1>

          <p className="mt-3 text-lg text-gabi-muted">
            Digital Product Designer + Frontend
          </p>

          <p className="mt-8 text-xl sm:text-2xl leading-relaxed max-w-3xl">
            Diseño y construyo sistemas digitales donde la estructura se siente.
          </p>

          <p className="mt-3 text-sm text-gabi-muted">
            Bogotá, Colombia · Frontend / Producto · Disponible
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#work" className="btn-primary">
              Ver trabajo
            </a>
            <a href="mailto:gaby112001@hotmail.com" className="btn-ghost">
              Contactar
            </a>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="section">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Trabajo seleccionado
          </h2>
          <p className="mt-2 text-sm text-gabi-muted max-w-2xl">
            Plataformas internas, herramientas de decisión y experiencias digitales orientadas a flujo.
          </p>

          <div className="mt-10 grid gap-5">
            <a href="#" className="card group hover:border-gabi-lavender transition">
              <h3 className="text-lg sm:text-xl font-semibold">
                Plataforma de informes de servicios (IKEA)
              </h3>
              <p className="mt-2 text-sm text-gabi-muted">
                <span className="text-gabi-text/90">Problema:</span> Información técnica dispersa y difícil de rastrear.
                <br />
                <span className="text-gabi-text/90">Solución:</span> Estandarización + lógica dinámica + PDFs automáticos.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "PDFMake"].map((s) => (
                  <span key={s} className="chip group-hover:text-gabi-text transition">
                    {s}
                  </span>
                ))}
              </div>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
