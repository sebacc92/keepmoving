import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Header } from "../components/layout/header/header";
import { Footer } from "../components/layout/footer/footer";
import { Hero } from "../components/landing/hero/hero";
import { Filosofia } from "../components/landing/filosofia/filosofia";
import { Disciplinas } from "../components/landing/disciplinas/disciplinas";
import { ScheduleGrid } from "../components/landing/schedule-grid/schedule-grid";

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Filosofia />
        <Disciplinas />
        <ScheduleGrid />
      </main>
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "KM | Keep Moving Miramar",
  meta: [
    {
      name: "description",
      content: "Tu mejor versión se construye en movimiento. Entrenamiento consciente, fuerza y comunidad en Miramar. Inauguración 2 de Marzo.",
    },
    {
      name: "theme-color",
      content: "#050505",
    }
  ],
};
