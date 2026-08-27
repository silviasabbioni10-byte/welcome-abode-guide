import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Home } from "lucide-react";

export const Route = createFileRoute("/la-casa")({
  head: () => ({
    meta: [
      { title: "La casa y yo | Guía del huésped" },
      {
        name: "description",
        content:
          "Conocé a Silvia, anfitriona y arquitecta, y descubrí la historia del departamento diseñado por Adamo-Faiden.",
      },
      { property: "og:title", content: "La casa y yo | Guía del huésped" },
      {
        property: "og:description",
        content:
          "Conocé a Silvia, anfitriona y arquitecta, y descubrí la historia del departamento diseñado por Adamo-Faiden.",
      },
    ],
  }),
  component: LaCasaPage,
});

function LaCasaPage() {
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
            <Home
              className="h-7 w-7 text-foreground md:h-8 md:w-8"
              strokeWidth={1.4}
            />
          </div>

          <div className="flex w-full items-center justify-center gap-4">
            <span className="h-px w-12 bg-border md:w-16" aria-hidden="true" />
            <h1 className="text-center text-2xl tracking-[0.18em] text-foreground md:text-3xl">
              LA CASA Y YO
            </h1>
            <span className="h-px w-12 bg-border md:w-16" aria-hidden="true" />
          </div>
        </div>

        {/* Message */}
        <article className="space-y-6 text-justify text-sm leading-[1.9] text-foreground md:text-base">
          <p>
            Soy Silvia, arquitecta y amante de los viajes. Me encanta recorrer ciudades,
            descubrir su arquitectura y esos pequeños detalles que las hacen únicas.
            También disfruto sentarme en un café, observar a la gente y simplemente dejarme
            llevar por la vida cotidiana de cada lugar.
          </p>

          <p>
            Amo este departamento y me encanta recibir viajeros para que puedan disfrutar
            de este espacio, que fuimos creando con mucho amor. Adoro empezar el día con
            un café en el balcón y, por las noches, acostarme y contemplar a lo lejos las
            luces de la ciudad.
          </p>

          <p>
            Si les interesa la arquitectura, les cuento que este edificio ha recibido varios
            premios y fue diseñado por el reconocido estudio de arquitectura Adamo-Faiden.
            Es un edificio pequeño, de solo 12 departamentos, algo que hace que tenga una
            atmósfera muy especial. Y, además, tengo la suerte de decir que los vecinos son
            los mejores.
          </p>

          <p className="text-center font-light italic">
            Espero que durante su estadía puedan disfrutar este lugar tanto como yo. Los
            invito a hacer suyo el departamento por unos días: tomar un café en el balcón,
            mirar las luces de la ciudad y vivir Palermo como una persona más del barrio.
          </p>
        </article>

        {/* Signature */}
        <div className="mt-10 text-center md:mt-12">
          <p className="font-display text-2xl text-foreground md:text-3xl">Silvia</p>
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
