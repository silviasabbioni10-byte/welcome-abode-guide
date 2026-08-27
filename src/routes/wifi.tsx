import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Home, Wifi } from "lucide-react";

export const Route = createFileRoute("/wifi")({
  head: () => ({
    meta: [
      { title: "Wi-Fi | Guía del huésped" },
      {
        name: "description",
        content: "Datos de conexión Wi-Fi del departamento: red y contraseña.",
      },
      { property: "og:title", content: "Wi-Fi | Guía del huésped" },
      {
        property: "og:description",
        content: "Datos de conexión Wi-Fi del departamento: red y contraseña.",
      },
    ],
  }),
  component: WifiPage,
});

function WifiPage() {
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
            <Wifi
              className="h-7 w-7 text-foreground md:h-8 md:w-8"
              strokeWidth={1.4}
            />
          </div>

          <div className="flex w-full items-center justify-center gap-4">
            <span className="h-px w-12 bg-border md:w-16" aria-hidden="true" />
            <h1 className="text-center text-2xl tracking-[0.18em] text-foreground md:text-3xl">
              WI-FI
            </h1>
            <span className="h-px w-12 bg-border md:w-16" aria-hidden="true" />
          </div>
        </div>

        {/* Network card */}
        <div className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:p-8">
          <div className="space-y-2 text-center">
            <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
              Red
            </p>
            <p className="text-lg tracking-wide text-foreground md:text-xl">
              Fibertel WIFI958 5.8GHz
            </p>
          </div>

          <div className="h-px w-full bg-border" aria-hidden="true" />

          <div className="space-y-2 text-center">
            <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
              Contraseña
            </p>
            <p className="font-mono text-lg tracking-[0.12em] text-foreground md:text-xl">
              01416845624
            </p>
          </div>
        </div>

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
