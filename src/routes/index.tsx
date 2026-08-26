import { createFileRoute, Link } from "@tanstack/react-router";
import apartment from "@/assets/apartment.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bienvenidos | Guía del huésped" },
      {
        name: "description",
        content:
          "Guía digital del departamento: elegí tu idioma y descubrí toda la información útil de tu estadía.",
      },
      { property: "og:title", content: "Bienvenidos | Guía del huésped" },
      {
        property: "og:description",
        content: "Guía digital del departamento: elegí tu idioma y comenzá tu estadía.",
      },
    ],
  }),
  component: Home,
});



function Home() {
  return (
    <main className="min-h-screen bg-background px-5 pb-10 pt-6 md:px-8 md:pb-14 md:pt-10">
      <section className="mx-auto flex w-full max-w-md flex-col md:max-w-xl">
        <div className="mb-10 flex h-[62vh] min-h-[420px] gap-3 overflow-hidden rounded-2xl bg-card p-3 shadow-[var(--shadow-soft)] md:mb-14 md:min-h-[520px] md:rounded-[1.75rem] md:p-4">
          <div className="flex w-[30%] flex-col items-center justify-center rounded-2xl bg-muted/70 py-6">
            <h1
              className="text-3xl tracking-[0.32em] text-foreground md:text-4xl"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              BIENVENIDOS
            </h1>
            <span className="mt-4 h-10 w-px bg-border md:mt-6 md:h-14" aria-hidden="true" />
          </div>

          <div className="w-[70%] overflow-hidden rounded-2xl">
            <img
              src={apartment.url}
              alt="Interior del departamento con mesa blanca y pared rosa"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>

        <nav
          aria-label="Selección de idioma"
          className="flex items-center justify-center gap-4 text-xs tracking-[0.2em] text-muted-foreground uppercase md:text-sm"
        >
          <Link
            to="/info"
            className="transition-colors duration-300 hover:text-foreground"
          >
            Español
          </Link>
          <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
          <Link
            to="/info"
            className="transition-colors duration-300 hover:text-foreground"
          >
            English
          </Link>
          <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
          <Link
            to="/info"
            className="transition-colors duration-300 hover:text-foreground"
          >
            Português
          </Link>
        </nav>
      </section>
    </main>
  );
}
