import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Selected Work | Northwind" },
      { name: "description", content: "Case studies from e-commerce, SaaS, healthcare, real estate and local brands we've scaled." },
      { property: "og:title", content: "Portfolio | Northwind" },
      { property: "og:description", content: "Selected client work and case studies." },
    ],
  }),
  component: PortfolioPage,
});

const WORK = [
  { t: "Lumen Skincare", i: "E-commerce", r: "5.8× ROAS in 90 days", c: "from-rose-400 to-orange-400" },
  { t: "Nordia Realty", i: "Real Estate", r: "412% organic leads", c: "from-blue-400 to-cyan-400" },
  { t: "Vesta Clinic", i: "Healthcare", r: "$28 cost per booking", c: "from-emerald-400 to-teal-400" },
  { t: "Halcyon Studio", i: "Branding", r: "Series A landed", c: "from-violet-400 to-fuchsia-400" },
  { t: "Beacon Coffee", i: "Local", r: "+184% foot traffic", c: "from-amber-400 to-orange-500" },
  { t: "Quanta SaaS", i: "B2B SaaS", r: "3.2k MQLs/quarter", c: "from-indigo-400 to-blue-500" },
  { t: "Orbital Fitness", i: "DTC", r: "$1.2M Q4 revenue", c: "from-pink-400 to-purple-500" },
  { t: "Pinecrest Schools", i: "Education", r: "1,800 enrollments", c: "from-teal-400 to-blue-400" },
  { t: "Northstar Bank", i: "Finance", r: "$11M deposits", c: "from-slate-500 to-blue-600" },
];

function PortfolioPage() {
  return (
    <>
      <section className="container-page py-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Portfolio
        </div>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-5xl font-bold tracking-tight md:text-6xl">
          Work that <span className="text-gradient">moved the numbers.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          A selection of recent engagements. Each one is measured by outcomes, not impressions.
        </p>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WORK.map((p) => (
            <article key={p.t} className="group overflow-hidden rounded-3xl border border-border bg-card transition-all hover:shadow-card">
              <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.c} p-6`}>
                <div className="absolute inset-0 opacity-30 mix-blend-overlay [background:radial-gradient(circle_at_30%_20%,white,transparent_60%)]" />
                <div className="relative flex h-full flex-col justify-between text-white">
                  <span className="inline-flex w-fit items-center rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur">{p.i}</span>
                  <div className="font-display text-3xl font-bold leading-tight">{p.t}</div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 p-6">
                <span className="font-display text-lg font-semibold text-gradient">{p.r}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild variant="brand" size="lg" className="rounded-full">
            <Link to="/contact">Start your project</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
