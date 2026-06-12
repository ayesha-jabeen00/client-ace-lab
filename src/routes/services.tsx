import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Search, Megaphone, Target, Share2, PenLine, Video,
  TrendingUp, Sparkles, Zap, Mail, Globe, GitBranch, ArrowRight, X,
  Send, Loader2,
} from "lucide-react";
import { useState } from "react";

const WEBSITE_CATEGORIES = [
  "All Websites",
  "E-Commerce",
  "Real Estate",
  "Logistics",
  "Healthcare",
  "Portfolio",
];

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

const DEMO_WEBSITES = [
  {
    id: 1,
    name: "Luxury Furniture Store",
    category: "E-Commerce",
    description: "Premium online furniture store with modern shopping experience and secure checkout.",
    tags: ["React", "Stripe", "Tailwind"],
    imagePlaceholder: "🛋️",
  },
  {
    id: 2,
    name: "Fashion Hub",
    category: "E-Commerce",
    description: "Online clothing store designed for high conversions and mobile shoppers.",
    tags: ["Next.js", "SEO", "E-Commerce"],
    imagePlaceholder: "👕",
  },
  {
    id: 3,
    name: "Dream Homes Realty",
    category: "Real Estate",
    description: "Modern property listing website with lead generation features.",
    tags: ["React", "CRM", "Lead Generation"],
    imagePlaceholder: "🏠",
  },
  {
    id: 4,
    name: "Prime Properties",
    category: "Real Estate",
    description: "Luxury real estate website showcasing premium residential projects.",
    tags: ["SEO", "Listings", "UI/UX"],
    imagePlaceholder: "🏢",
  },
  {
    id: 5,
    name: "Sky Logistics",
    category: "Logistics",
    description: "Corporate logistics and fleet management website.",
    tags: ["React", "Booking", "Transport"],
    imagePlaceholder: "✈️",
  },
  {
    id: 6,
    name: "Fast Cargo Solutions",
    category: "Logistics",
    description: "Freight and cargo transportation website for enterprise clients.",
    tags: ["Tracking", "Logistics", "SEO"],
    imagePlaceholder: "🚚",
  },
  {
    id: 7,
    name: "MediCare Plus",
    category: "Healthcare",
    description: "Hospital and clinic website with appointment booking system.",
    tags: ["Healthcare", "Booking", "React"],
    imagePlaceholder: "🏥",
  },
  {
    id: 8,
    name: "Dental Care Center",
    category: "Healthcare",
    description: "Professional dental clinic website focused on patient acquisition.",
    tags: ["SEO", "Appointments", "Healthcare"],
    imagePlaceholder: "🦷",
  },
  {
    id: 9,
    name: "Creative Designer Portfolio",
    category: "Portfolio",
    description: "Modern portfolio website for freelancers and creative professionals.",
    tags: ["Portfolio", "Animation", "React"],
    imagePlaceholder: "🎨",
  },
  {
    id: 10,
    name: "Digital Agency Portfolio",
    category: "Portfolio",
    description: "Agency showcase website highlighting services and case studies.",
    tags: ["Agency", "Branding", "UI/UX"],
    imagePlaceholder: "✨",
  },
];

// Pricing Modal Component
interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: string;
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
}

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  company: string;
  requirements: string;
}

function PricingModal({ isOpen, onClose, selectedPackage, onSubmit, isLoading }: PricingModalProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    requirements: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-gray-900 shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-6 rounded-t-3xl">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 mb-3">
                <span className="text-xs font-medium text-primary">Selected Package</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedPackage}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Please fill in your details to continue with this package
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.fullName 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-gray-300 dark:border-gray-700 focus:border-primary'
              } bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20`}
              placeholder="John Doe"
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.phone 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-gray-300 dark:border-gray-700 focus:border-primary'
              } bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20`}
              placeholder="+91 12345 67890"
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.email 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-gray-300 dark:border-gray-700 focus:border-primary'
              } bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20`}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Company / Business Name
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => handleChange('company', e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:border-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Your Company Name"
            />
          </div>

          {/* Project Requirements */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Project Requirements
            </label>
            <textarea
              value={formData.requirements}
              onChange={(e) => handleChange('requirements', e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:border-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
              placeholder="Tell us about your project requirements, goals, and expectations..."
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 rounded-full"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1 rounded-full bg-primary hover:bg-primary/90 transition-all duration-300"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Continue to WhatsApp
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All Websites");
  const [selectedWebsite, setSelectedWebsite] = useState<typeof DEMO_WEBSITES[0] | null>(null);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [selectedPricingPackage, setSelectedPricingPackage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const filteredWebsites =
    activeCategory === "All Websites"
      ? DEMO_WEBSITES
      : DEMO_WEBSITES.filter(
          (site) => site.category === activeCategory
        );

  const handleWhatsAppClick = (siteName: string) => {
    const message = `Hi, I want a website similar to ${siteName}. Please share pricing and details.`;
    const whatsappUrl = `https://wa.me/917799770919?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handlePricingButtonClick = (packageName: string) => {
    setSelectedPricingPackage(packageName);
    setIsPricingModalOpen(true);
  };

  const handlePricingFormSubmit = async (formData: FormData) => {
    setIsLoading(true);
    
    // Simulate loading state for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Create the pre-filled WhatsApp message
    const message = `Hi Hash Orbit,

I am interested in the ${selectedPricingPackage}.

My Details:

Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}

Project Requirements:
${formData.requirements || 'No specific requirements mentioned yet'}

Please share:
• Features included
• Project timeline
• Pricing details
• Payment terms

Thank you.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917799770919?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    
    // Close modal and reset loading
    setIsLoading(false);
    setIsPricingModalOpen(false);
  };

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

      {/* Pricing Packages Section */}
      <section className="relative overflow-hidden py-24">
        {/* Subtle background pattern with blurred blue gradient circles */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-4 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px] dark:bg-blue-500/10" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px] dark:bg-blue-600/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />
        </div>

        <div className="container-page">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-border bg-background/50 backdrop-blur-sm px-4 py-1.5 mb-4">
              <span className="text-xs font-medium uppercase tracking-wider text-primary">Pricing Plans</span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Choose The Perfect Growth Package
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg">
              Flexible plans designed for startups, businesses, and growing brands.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            
            {/* Bronze Package */}
            <div className="group relative rounded-3xl bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col">
              {/* Starter Badge */}
              <div className="absolute -top-3 left-6">
                <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-semibold text-gray-600 dark:text-gray-400">
                  Starter
                </span>
              </div>
              
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold mb-2">BRONZE PACKAGE</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">₹14,999</span>
                </div>
                
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-primary">✓</span> Responsive Website
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-primary">✓</span> 5 Pages
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-primary">✓</span> Mobile Optimized
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-primary">✓</span> Contact Form
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-primary">✓</span> Basic SEO Setup
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-primary">✓</span> WhatsApp Integration
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-primary">✓</span> 1 Month Support
                  </li>
                </ul>
              </div>
              
              <Button
                onClick={() => handlePricingButtonClick("Bronze Package")}
                variant="outline"
                className="mt-8 w-full rounded-full transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white hover:border-primary"
              >
                Get Started
              </Button>
            </div>

            {/* Silver Package - Most Popular */}
            <div className="group relative rounded-3xl bg-white dark:bg-gray-900/50 backdrop-blur-sm p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col lg:scale-105 border-2 border-primary/30 shadow-xl">
              {/* Floating Most Popular Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-flex animate-pulse items-center rounded-full bg-gradient-to-r from-primary to-blue-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                  ⭐ MOST POPULAR
                </span>
              </div>
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-blue-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
              
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold mb-2">SILVER PACKAGE</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">₹29,999</span>
                </div>
                
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-primary">✓</span> Everything in Bronze
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-primary">✓</span> Up to 10 Pages
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-primary">✓</span> Advanced SEO Setup
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-primary">✓</span> Blog Integration
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-primary">✓</span> Google Analytics
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-primary">✓</span> Social Media Integration
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-primary">✓</span> Speed Optimization
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-primary">✓</span> 3 Months Support
                  </li>
                </ul>
              </div>
              
              <Button
                onClick={() => handlePricingButtonClick("Silver Package")}
                className="mt-8 w-full rounded-full bg-gradient-to-r from-primary to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Most Popular
              </Button>
            </div>

            {/* Gold Package */}
            <div className="group relative rounded-3xl bg-gradient-to-br from-yellow-50 via-amber-50 to-white dark:from-yellow-950/20 dark:via-amber-950/20 dark:to-gray-900/50 backdrop-blur-sm border border-yellow-200 dark:border-yellow-800 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col shadow-lg">
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                  GOLD PACKAGE
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                    ₹49,999
                  </span>
                </div>
                
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-600">✓</span> Everything in Silver
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-600">✓</span> Unlimited Pages
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-600">✓</span> Premium UI/UX Design
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-600">✓</span> Custom Animations
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-600">✓</span> Lead Generation Forms
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-600">✓</span> CRM Integration
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-600">✓</span> Advanced Performance Optimization
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-600">✓</span> Priority Support
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-600">✓</span> 6 Months Support
                  </li>
                </ul>
              </div>
              
              <Button
                onClick={() => handlePricingButtonClick("Gold Package")}
                variant="brand"
                className="mt-8 w-full rounded-full bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Get Premium
              </Button>
            </div>
          </div>

          {/* Custom Package CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-border bg-background/50 backdrop-blur-sm px-8 py-6">
              <p className="text-lg font-medium text-muted-foreground">
                Need a custom package?
              </p>
              <Button
                onClick={() => handlePricingButtonClick("Custom Package")}
                variant="outline"
                size="lg"
                className="rounded-full transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white hover:border-primary"
              >
                Request Custom Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Website Collection Section */}
      <section className="container-page pb-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Demo Website Collection</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Explore our handcrafted website examples. Each design is fully customizable for your brand.
          </p>
        </div>

        {/* Category Filter Navbar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {WEBSITE_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "border border-border bg-card hover:bg-[#0F6EF7]/10 hover:text-[#0F6EF7]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Website Cards Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredWebsites.map((site) => (
            <div
              key={site.id}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Screenshot Placeholder */}
            <div className="h-48 bg-gradient-to-br from-[#EAF3FF] to-[#0F6EF7]/20 flex items-center justify-center text-6xl">
                {site.imagePlaceholder}
              </div>
              
              <div className="p-6">
                <p className="text-sm text-[#0F6EF7] font-medium">
                  {site.category}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {site.name}
                </h3>

                <p className="mt-3 text-muted-foreground">
                  {site.description}
                </p>

                {/* Technology Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {site.tags.map((tag) => (
                    <span
                      key={tag}
                     className="rounded-full bg-[#0F6EF7]/10 text-[#0F6EF7] px-3 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1 hover:bg-[#0F6EF7] hover:text-white hover:border-[#0F6EF7]"
                    onClick={() => setSelectedWebsite(site)}
                  >
                    View Details
                  </Button>

                  <Button 
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => handleWhatsAppClick(site.name)}
                  >
                    I Want This Website
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredWebsites.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No websites found in this category.</p>
          </div>
        )}
      </section>

      {/* Modal for View Details */}
      {selectedWebsite && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedWebsite(null)}>
          <div className="bg-card rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-card border-b border-border p-4 flex justify-between items-center">
              <h3 className="font-display text-xl font-bold">{selectedWebsite.name}</h3>
              <button 
                onClick={() => setSelectedWebsite(null)}
               className="p-1 rounded-full hover:bg-[#0F6EF7]/10 hover:text-[#0F6EF7] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
             <div className="h-40 bg-gradient-to-br from-[#EAF3FF] to-[#0F6EF7]/20 flex items-center justify-center text-6xl rounded-xl mb-4">
                {selectedWebsite.imagePlaceholder}
              </div>
              <p className="text-sm text-primary font-medium mb-2">{selectedWebsite.category}</p>
              <p className="text-muted-foreground mb-4">{selectedWebsite.description}</p>
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedWebsite.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[#0F6EF7]/10 text-[#0F6EF7] px-3 py-1 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
               <Button
  variant="outline"
  className="flex-1 hover:bg-[#0F6EF7] hover:text-white hover:border-[#0F6EF7]"
  onClick={() => setSelectedWebsite(null)}
>
  Close
</Button>
                <Button 
                  className="flex-1 hover:bg-[#0F6EF7] hover:text-white hover:border-[#0F6EF7]"
                  onClick={() => {
                    handleWhatsAppClick(selectedWebsite.name);
                    setSelectedWebsite(null);
                  }}
                >
                  Request This Website
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pricing Modal */}
      <PricingModal
        isOpen={isPricingModalOpen}
        onClose={() => setIsPricingModalOpen(false)}
        selectedPackage={selectedPricingPackage}
        onSubmit={handlePricingFormSubmit}
        isLoading={isLoading}
      />
    </>
  );
}

export default ServicesPage;