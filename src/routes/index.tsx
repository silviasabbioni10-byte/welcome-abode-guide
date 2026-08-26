import { createFileRoute } from "@tanstack/react-router";
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

const languages = [
  { code: "es", label: "Español", native: "Bienvenidos" },
  { code: "en", label: "English", native: "Welcome" },
  { code: "pt", label: "Português", native: "Bem-vindos" },
];


function Home() {
  return (
    <main className="min-h-screen bg-background px-5 pb-10 pt-6 md:px-8 md:pb-14 md:pt-10">
      <section className="mx-auto flex w-full max-w-md flex-col gap-8 md:max-w-xl md:gap-10">
        <div className="flex h-[62vh] min-h-[420px] gap-3 overflow-hidden rounded-2xl bg-card p-3 shadow-[var(--shadow-soft)] md:min-h-[520px] md:rounded-[1.75rem] md:p-4">
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

        <div className="flex flex-col gap-3 md:gap-4">
          <p className="text-center text-[0.68rem] uppercase tracking-[0.35em] text-muted-foreground md:text-xs">
            Elegí tu idioma
          </p>

          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              className="group flex items-center justify-between rounded-2xl border border-border bg-card px-6 py-4 text-left shadow-[var(--shadow-card)] transition-all duration-300 hover:border-ring hover:bg-accent/30 md:px-8 md:py-5"
            >
              <span className="text-sm tracking-[0.18em] text-foreground uppercase md:text-base">
                {lang.label}
              </span>
              <span className="font-display text-base text-muted-foreground md:text-lg">
                {lang.native}
              </span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
