import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";
import { Logo } from "@/components/site/Logo";

export function Footer() {
  return (
    <footer className="bg-gradient-hero text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-12 w-12" />
            <div className="font-display text-lg font-bold">{SITE.name}</div>
          </div>
          <p className="mt-4 text-sm text-white/70">{SITE.tagline}. Trusted travel partner from New Delhi for tour packages, hotel bookings, taxi services and pilgrimage tours.</p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/packages" className="hover:text-gold">Packages</Link></li>
            <li><Link to="/hotel" className="hover:text-gold">Hotel</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">Services</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Tour Packages</li>
            <li>Hotel Bookings</li>
            <li>Taxi Services</li>
            <li>Pilgrimage Tours</li>
            <li>Airport Transfers</li>
            <li>Family & Corporate Travel</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-2"><Phone className="h-4 w-4 text-gold" /><a href={`tel:${SITE.phone1}`}>{SITE.phone1}</a></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-gold" /><a href={`tel:${SITE.phone2}`}>{SITE.phone2}</a></li>
            <li className="flex gap-2"><MessageCircle className="h-4 w-4 text-gold" /><a href={SITE.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp Chat</a></li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-gold shrink-0" /><a href={SITE.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-gold">{SITE.address}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        <div className="mb-2 flex flex-wrap justify-center gap-x-4 gap-y-1">
          <Link to="/privacy-policy" className="hover:text-gold">Privacy Policy</Link>
          <span aria-hidden>·</span>
          <Link to="/terms-of-service" className="hover:text-gold">Terms of Service</Link>
        </div>
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
