import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book a Free Marketing Audit | Northwind" },
      { name: "description", content: "Get a free 30-minute audit of your funnel, channels and creative. Senior strategist, no sales pitch." },
      { property: "og:title", content: "Contact Northwind" },
      { property: "og:description", content: "Book a free marketing audit." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="container-page grid gap-12 py-20 lg:grid-cols-2">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Contact
        </div>
        <h1 className="mt-4 font-display text-5xl font-bold tracking-tight md:text-6xl">
          Let's <span className="text-gradient">talk growth.</span>
        </h1>
        <p className="mt-5 max-w-md text-lg text-muted-foreground">
          Fill the form and a senior strategist will reach out within one business day with a tailored audit.
        </p>

        <div className="mt-10 space-y-4">
          <InfoLine icon={<Mail className="h-4 w-4" />} text="hello@northwind.agency" />
          <InfoLine icon={<Phone className="h-4 w-4" />} text="+1 (555) 010-0000" />
          <InfoLine icon={<MapPin className="h-4 w-4" />} text="Lisbon · London · New York" />
        </div>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Name" placeholder="Jane Doe" />
          <Field label="Business name" placeholder="Acme Co." />
          <Field label="Email" type="email" placeholder="jane@acme.com" />
          <Field label="Phone" placeholder="+1 555 000 0000" />
          <SelectField label="Monthly marketing budget" options={["< $5k", "$5k – $15k", "$15k – $50k", "$50k+"]} />
          <SelectField label="Services interested in" options={["SEO", "Google Ads", "Meta Ads", "Web Development", "Full-funnel"]} />
        </div>
        <div className="mt-4">
          <Label>Message</Label>
          <textarea rows={4} placeholder="Tell us about your goals…" className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
        </div>
        <Button variant="brand" size="lg" className="mt-6 w-full rounded-full">
          Get Free Marketing Audit <ArrowRight className="h-4 w-4" />
        </Button>
      </form>
    </section>
  );
}

function InfoLine({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm text-muted-foreground">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-muted text-foreground">{icon}</span>
      {text}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{children}</label>;
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label>{label}</Label>
      <input {...props} className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
    </div>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <Label>{label}</Label>
      <select className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary">
        <option value="">Select…</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
