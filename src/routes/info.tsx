import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bus,
  Home,
  Info,
  LogOut,
  ShoppingBag,
  ShoppingCart,
  Tv,
  Wifi,
} from "lucide-react";

import infoHero from "@/assets/info-hero.png.asset.json";

export const Route = createFileRoute("/info")({
  head: () => ({
    meta: [
      { title: "Info útil | Guía del huésped" },
      {
        name: "description",
        content:
          "Toda la información práctica de tu estadía: Wi-Fi, Smart TV, transporte, supermercados, shopping y check-out.",
      },
      { property: "og:title", content: "Info útil | Guía del huésped" },
      {
        property: "og:description",
        content:
          "Toda la información práctica de tu estadía: Wi-Fi, Smart TV, transporte, supermercados, shopping y check-out.",
      },
    ],
  }),
  component: InfoUtil,
});

const sections = [
  { id: "wifi", label: "Wi-Fi", icon: Wifi },
  { id: "tv", label: "Smart TV", icon: Tv },
  { id: "transporte", label: "Transporte", icon: Bus },
  { id: "supermercados", label: "Supermercados", icon: ShoppingCart },
  { id: "shopping", label: "Shopping", icon: ShoppingBag },
  { id: "checkout", label: "Check-out", icon: LogOut },
];

function InfoUtil() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero with curved bottom edge */}
      <section className="relative h-[45vh] min-h-[340px] w-full overflow-hidden md:h-[42vh]">
        <img
          src={infoHero.url}
          alt="Dormitorio acogedor con cama, velas y decoración cálida"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
        <svg
          className="absolute -bottom-px left-0 w-full text-background"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{ height: "80px" }}
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M0,120 L0,90 C360,-10 1080,-10 1440,90 L1440,120 Z"
          />
        </svg>
      </section>

      {/* Content */}
      <section className="px-5 pb-8 pt-2 md:px-8 md:pb-10">
        <div className="mx-auto w-full max-w-md md:max-w-xl">
          {/* Title */}
          <div className="mb-8 flex items-center justify-center gap-4 md:mb-10">
            <span className="h-px w-12 bg-border md:w-16" aria-hidden="true" />
            <h1 className="text-center text-2xl tracking-[0.18em] text-foreground md:text-3xl">
              INFO ÚTIL
            </h1>
            <span className="h-px w-12 bg-border md:w-16" aria-hidden="true" />
          </div>

          {/* Icon grid */}
          <div className="grid grid-cols-3 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                className="group flex flex-col items-center gap-3 text-center"
              >
                <div className="grid h-[72px] w-[72px] place-items-center rounded-full border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 group-hover:border-ring group-hover:bg-accent/20 md:h-[88px] md:w-[88px]">
                  <section.icon
                    className="h-7 w-7 text-foreground transition-transform duration-300 group-hover:scale-105 md:h-8 md:w-8"
                    strokeWidth={1.4}
                  />
                </div>
                <span className="text-[0.65rem] tracking-[0.16em] text-foreground uppercase md:text-xs">
                  {section.label}
                </span>
              </button>
            ))}
          </div>

          {/* Hint card */}
          <div className="mt-10 flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)] md:mt-12 md:p-5">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-background md:h-11 md:w-11">
              <Info
                className="h-5 w-5 text-muted-foreground md:h-5 md:w-5"
                strokeWidth={1.5}
              />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Hacé clic en un icono para ver la información detallada.
            </p>
          </div>

          {/* Home link */}
          <div className="mt-8 flex justify-center md:mt-10">
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
        </div>
      </section>
    </main>
  );
}
