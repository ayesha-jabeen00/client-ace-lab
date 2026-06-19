import { createFileRoute } from "@tanstack/react-router";
import { CreativesSection } from "@/components/site/CreativesSection";

export const Route = createFileRoute("/creatives")({
  component: CreativesPage,
});

function CreativesPage() {
  return <CreativesSection />;
}

// function CreativesPage() {
//   return (
//     <section className="py-24">
//       <div className="container-page">
//         <div className="mx-auto max-w-3xl text-center mb-16">
//           <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
//             <span className="h-1.5 w-1.5 rounded-full bg-accent" />
//             Creative Work
//           </div>

//           <h1 className="mt-4 font-display text-5xl font-bold tracking-tight md:text-6xl">
//             Graphic <span className="text-gradient">Creativity</span>
//           </h1>

//           <p className="mt-5 text-lg text-muted-foreground">
//             Visual designs and creative assets crafted to elevate brand identity.
//           </p>
//         </div>

//         <CreativesSection />
//       </div>
//     </section>
//   );
// }

// export default CreativesPage;