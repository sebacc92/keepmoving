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
  title: "Keep Moving | Gimnasio y Entrenamiento en Miramar",
  meta: [
    {
      name: "description",
      content: "Gimnasio en Miramar. Entrenamiento funcional, fuerza y comunidad. Tu mejor versión se construye en movimiento. ¡Súmate a la tribu!",
    },
    {
      name: "theme-color",
      content: "#050505",
    }
  ],
  scripts: [
    {
      props: {
        type: "application/ld+json",
      },
      script: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ExerciseGym",
        "name": "Keep Moving",
        "url": "https://keepmoving.cleverisma.com/",
        "telephone": "+5491125358621",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Miramar",
          "addressRegion": "Buenos Aires",
          "postalCode": "B7607",
          "addressCountry": "AR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "", // Rellenar con la latitud de Google Maps
          "longitude": "" // Rellenar con la longitud de Google Maps
        }
      })
    }
  ]
};
