import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Atul Tour & Travels" },
      { name: "description", content: "Terms governing use of Atul Tour & Travels services, cancellations and refunds." },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://atul-tour-and-travel.vercel.app/terms-of-service" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="font-display text-4xl font-bold text-navy">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {new Date().getFullYear()}</p>

        <div className="prose prose-slate mt-8 max-w-none space-y-5 text-foreground/90">
          <h2 className="font-display text-xl font-semibold">1. Services</h2>
          <p>{SITE.name} provides taxi, airport transfer, outstation, tour-package and corporate travel services in Delhi NCR and across India. Submitting an enquiry does not constitute a confirmed booking — bookings are confirmed by our team via phone or WhatsApp.</p>

          <h2 className="font-display text-xl font-semibold">2. Pricing</h2>
          <p>All quotes are valid for 24 hours unless otherwise stated. Toll, parking, state-permit and night-driving charges (where applicable) are billed separately.</p>

          <h2 className="font-display text-xl font-semibold">3. Cancellation</h2>
          <p>Cancellations more than 12 hours before pickup are free. Cancellations within 12 hours of pickup may attract a charge equal to one day's base fare for outstation trips.</p>

          <h2 className="font-display text-xl font-semibold">4. Refunds</h2>
          <p>Refunds (where applicable) are processed within 7 working days to the original payment method.</p>

          <h2 className="font-display text-xl font-semibold">5. Customer responsibilities</h2>
          <p>Customers are expected to be at the pickup point on time, behave respectfully with our driver, and not transport illegal goods. We reserve the right to refuse or terminate service in case of misconduct.</p>

          <h2 className="font-display text-xl font-semibold">6. Liability</h2>
          <p>We arrange travel with insured, commercially registered vehicles. {SITE.name} is not liable for delays caused by traffic, weather, mechanical breakdown beyond our control, or events of force majeure. Personal belongings are the responsibility of the passenger.</p>

          <h2 className="font-display text-xl font-semibold">7. Contact</h2>
          <p>{SITE.name}, {SITE.address}. Phone: {SITE.phone1} / {SITE.phone2}.</p>
        </div>
      </section>
    </SiteLayout>
  );
}
