import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Northwind Performance Marketing Agency" },
      { name: "description", content: "Meet the team behind 200+ scaled brands. Senior strategists, transparent reporting, and a relentless focus on results." },
      { property: "og:title", content: "About Northwind" },
      { property: "og:description", content: "Meet the team behind 200+ scaled brands." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="container-page py-24">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> About us
        </div>
        <h1 className="mt-4 font-display text-5xl font-bold tracking-tight md:text-6xl">
          A studio of <span className="text-gradient">growth operators.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Founded in 2018, Northwind was built on a simple idea: growth is an engineering discipline. Today we're a 28-person team of strategists, creatives and analysts working with brands on four continents.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="brand" size="lg" className="rounded-full">
            <Link to="/contact">Work with us</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link to="/portfolio">See our work</Link>
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-4xl gap-6 md:grid-cols-3">
        {[
          { k: "2018", v: "Founded in Lisbon" },
          { k: "28", v: "Specialists on staff" },
          { k: "4.9★", v: "Average client rating" },
        ].map((s) => (
          <div key={s.k} className="rounded-2xl border border-border bg-card p-6 text-center shadow-card">
            <div className="font-display text-4xl font-bold text-gradient">{s.k}</div>
            <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
