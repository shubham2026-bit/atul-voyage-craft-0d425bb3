import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { SectionHead } from "@/components/site/SectionHead";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, Clock, BadgeCheck, Sparkles, Phone, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Shree Radhe Travels | Trusted Travel Partner in New Delhi" },
      { name: "description", content: "Shree Radhe Travels offers tour packages, hotel bookings, taxi services, pilgrimage tours and family trips from New Delhi with safe, comfortable & reliable travel and 24/7 customer support." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const values = [
    { icon: Shield, t: "Safe & Comfortable Travel", d: "Well-maintained, sanitized vehicles driven by verified, experienced chauffeurs." },
    { icon: Clock, t: "Reliable Customer Support", d: "24/7 assistance — from first enquiry to safe drop-off, we're always reachable." },
    { icon: Award, t: "Tour Packages", d: "Curated Indian tour packages — Golden Triangle, Himalayas, Rajasthan, Kashmir & more." },
    { icon: Users, t: "Family Trips", d: "Comfortable family-friendly itineraries with the right car size for every group." },
    { icon: BadgeCheck, t: "Hotel Bookings", d: "Hand-picked hotels across India — budget, business and luxury stays, bundled with your tour." },
    { icon: Sparkles, t: "Pilgrimage Tours", d: "Char Dham, Vaishno Devi, Mathura-Vrindavan, Haridwar-Rishikesh and other sacred journeys." },
  ];

  return (
    <SiteLayout>
      <section className="bg-gradient-hero py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">About {SITE.name}</h1>
          <p className="mt-4 text-white/80">{SITE.tagline} — your trusted travel partner from New Delhi.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead eyebrow="Our Story" title="ABOUT THE COMPANY" />
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="flex h-80 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-200 via-orange-300 to-rose-300 text-9xl shadow-elegant">
                🛺
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  <strong className="text-navy">{SITE.name}</strong> is a professional travel
                  services company based in Sector-6, RK Puram, New Delhi. We specialize in
                  tour packages, hotel bookings, taxi services, pilgrimage tours, airport
                  transfers and family & corporate trips across India.
                </p>
                <p>
                  From a quick airport drop and Delhi NCR taxi runs to multi-day Golden
                  Triangle, Himalayan, Rajasthan, Kashmir and Char Dham yatras — our
                  well-maintained fleet of sedans, SUVs, Innovas and tempo travellers is
                  ready for groups of any size, with hotel bookings handled end-to-end so
                  you only have to enjoy the journey.
                </p>
                <p>
                  What sets us apart is our commitment to <strong>safe and comfortable
                  travel</strong>, transparent pricing, and <strong>reliable customer
                  support</strong> available 24/7. Our experienced, courteous chauffeurs
                  know every route and treat every guest like family — whether it's a
                  sacred pilgrimage, a family holiday, or a corporate transfer.
                </p>
                <div className="flex flex-wrap gap-3 pt-3">
                  <Button asChild className="bg-gradient-gold text-navy font-semibold shadow-gold">
                    <Link to="/enquiry">Book a Ride</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={`tel:${SITE.phone1}`}><Phone className="mr-2 h-4 w-4" />{SITE.phone1}</a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead eyebrow="What We Offer" title="OUR SERVICES" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 60}>
                <div className="rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-elegant">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-navy shadow-gold">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-5 font-display text-lg font-semibold text-navy">{v.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-hero py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready to plan your next trip?</h2>
          <p className="mt-3 text-white/80">Talk to us today — we respond within 30 minutes.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-gradient-gold text-navy font-semibold shadow-gold">
              <Link to="/enquiry">Send Enquiry</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
              <a href={SITE.whatsappUrl}><MessageCircle className="mr-2 h-4 w-4" />WhatsApp</a>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
