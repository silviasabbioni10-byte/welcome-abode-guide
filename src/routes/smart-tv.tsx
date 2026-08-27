import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Home, Tv } from "lucide-react";

import flowTvGuide from "@/assets/flow-tv-guide.jpg.asset.json";

export const Route = createFileRoute("/smart-tv")({
  head: () => ({
    meta: [
      { title: "Smart TV | Guía del huésped" },
      {
        name: "description",
        content: "Guía para usar la Smart TV: streaming, canales argentinos y Flow.",
      },
      { property: "og:title", content: "Smart TV | Guía del huésped" },
      {
        property: "og:description",
        content: "Guía para usar la Smart TV: streaming, canales argentinos y Flow.",
      },
    ],
  }),
  component: SmartTvPage,
});

function SmartTvPage() {
  return (
    <main className="min-h-screen bg-background px-5 pb-12 pt-8 md:px-8 md:pb-16 md:pt-12">
      <section className="mx-auto w-full max-w-md md:max-w-xl">
        {/* Back link */}
        <Link
          to="/info"
          className="group mb-8 inline-flex items-center gap-2 text-xs tracking-[0.16em] text-muted-foreground uppercase transition-colors duration-300 hover:text-foreground md:mb-10"
        >
          <ArrowLeft
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5"
            strokeWidth={1.5}
          />
          Volver
        </Link>

        {/* Header */}
        <div className="mb-10 flex flex-col items-center gap-5 md:mb-12">
          <div className="grid h-[72px] w-[72px] place-items-center rounded-full border border-border bg-card shadow-[var(--shadow-card)] md:h-[88px] md:w-[88px]">
            <Tv
              className="h-7 w-7 text-foreground md:h-8 md:w-8"
              strokeWidth={1.4}
            />
          </div>

          <div className="flex w-full items-center justify-center gap-4">
            <span className="h-px w-12 bg-border md:w-16" aria-hidden="true" />
            <h1 className="text-center text-2xl tracking-[0.18em] text-foreground md:text-3xl">
              SMART TV
            </h1>
            <span className="h-px w-12 bg-border md:w-16" aria-hidden="true" />
          </div>
        </div>

        {/* Instructions */}
        <article className="space-y-8 text-sm leading-[1.8] text-foreground md:text-base">
          <div className="space-y-4">
            <h2 className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
              Streaming
            </h2>
            <p>
              Podés acceder a Netflix, Amazon Prime y otras apps con tu propia cuenta.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
              Televisión argentina
            </h2>
            <p>
              Para ver canales argentinos, elegí el ícono de <strong>Flow</strong> en la lista superior.
            </p>
            <ol className="list-decimal space-y-2 pl-5 marker:text-muted-foreground">
              <li>Abrí la app <strong>Flow</strong>.</li>
              <li>Seleccioná <strong>Guía de canales</strong>.</li>
              <li>Dentro de la guía, desplazate hacia arriba o abajo y elegí el canal presionando <strong>OK</strong>.</li>
            </ol>
            <p>
              Para volver al menú general, hacé clic en la <strong>casita</strong> del control remoto.
            </p>
          </div>

          {/* Guide image */}
          <figure className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <img
              src={flowTvGuide.url}
              alt="Guía de canales de Flow en la Smart TV"
              className="h-auto w-full object-cover"
              loading="lazy"
            />
            <figcaption className="px-4 py-3 text-center text-xs text-muted-foreground">
              Guía de canales de Flow
            </figcaption>
          </figure>
        </article>

        {/* Bottom navigation */}
        <div className="mt-12 flex justify-center border-t border-border pt-8 md:mt-14 md:pt-10">
          <Link
            to="/"
            className="group flex flex-col items-center gap-1 text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            <Home
              className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-0.5"
              strokeWidth={1.4}
            />
            <span className="text-[0.6rem] tracking-[0.2em] uppercase md:text-xs">
              Home
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
