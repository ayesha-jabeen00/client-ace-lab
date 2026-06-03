import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Search, Megaphone, Target, Share2, PenLine, Video,
  TrendingUp, Sparkles, Zap, Mail, Globe, GitBranch, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — SEO, Paid Ads, Web & More | Northwind" },
      { name: "description", content: "Twelve services across SEO, paid media, content, web and automation — engineered as one integrated growth engine." },
      { property: "og:title", content: "Services | Northwind" },
      { property: "og:description", content: "Full-stack growth services for ambitious brands." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  { icon: Search, name: "SEO", desc: "Technical, on-page and link strategies that compound for years." },
  { icon: Target, name: "Google Ads", desc: "Search, Shopping, Performance Max — built for blended ROAS." },
  { icon: Megaphone, name: "Meta Ads", desc: "Creative-first scaling on Facebook, Instagram and Reels." },
  { icon: Share2, name: "Social Media", desc: "Native organic content systems that build affinity." },
  { icon: PenLine, name: "Content Marketing", desc: "Editorial that ranks and converts." },
  { icon: Video, name: "Video Marketing", desc: "UGC, ad creative and YouTube growth." },
  { icon: TrendingUp, name: "Performance Marketing", desc: "Full-funnel attribution and CRO." },
  { icon: Sparkles, name: "Brand Strategy", desc: "Positioning, story and visual identity." },
  { icon: Zap, name: "Marketing Automation", desc: "HubSpot, Klaviyo and Customer.io builds." },
  { icon: Mail, name: "Email Marketing", desc: "Flows and campaigns people actually open." },
  { icon: Globe, name: "Website Development", desc: "Fast, SEO-friendly sites that convert." },
  { icon: GitBranch, name: "Funnel Building", desc: "Lead magnets, landers and nurture." },
];

function ServicesPage() {
  return (
    <>
      <section className="container-page py-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Services
        </div>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-5xl font-bold tracking-tight md:text-6xl">
          One team. <span className="text-gradient">Every channel that matters.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Pick a single service or run your entire growth function with us — most clients start with two and add more as they scale.
        </p>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.name} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-card">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild variant="brand" size="lg" className="rounded-full">
            <Link to="/contact">Get a custom proposal <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
