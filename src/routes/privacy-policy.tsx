import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Atul Tour & Travels" },
      { name: "description", content: "How Atul Tour & Travels collects, uses, and protects your personal data." },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://atul-tour-and-travel.vercel.app/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="font-display text-4xl font-bold text-navy">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {new Date().getFullYear()}</p>

        <div className="prose prose-slate mt-8 max-w-none space-y-5 text-foreground/90">
          <h2 className="font-display text-xl font-semibold">1. Data we collect</h2>
          <p>When you submit an enquiry, we collect your name, phone number, email address, pickup/drop locations, travel date, number of passengers and any notes you provide.</p>

          <h2 className="font-display text-xl font-semibold">2. How we use your data</h2>
          <p>We use your data only to respond to your enquiry, arrange your travel booking, and contact you about your trip. We do not use it for unsolicited marketing.</p>

          <h2 className="font-display text-xl font-semibold">3. Data storage</h2>
          <p>Enquiry data is stored securely in our managed backend (Supabase). Access is restricted to authorised staff only.</p>

          <h2 className="font-display text-xl font-semibold">4. Third parties</h2>
          <p>We do not sell, rent or share your personal data with third parties for marketing. We use Web3Forms only to deliver enquiry email notifications to our own inbox.</p>

          <h2 className="font-display text-xl font-semibold">5. Data deletion</h2>
          <p>To request deletion of your data, email us at <a className="text-navy underline" href={`mailto:${SITE.adminEmail}`}>{SITE.adminEmail}</a> and we will remove it within 7 days.</p>

          <h2 className="font-display text-xl font-semibold">6. Contact</h2>
          <p>{SITE.name}, {SITE.address}. Phone: {SITE.phone1}.</p>
        </div>
      </section>
    </SiteLayout>
  );
}
