import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY, SITE_NAME } from '@/config/constants';
import { footerNavigation } from '@/config/navigation';
import { NewsletterForm } from './NewsletterForm';

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="py-12 border-b border-white/10">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-serif font-semibold mb-2">Newsletter</h3>
            <p className="text-sm text-white/60 mb-4">
              Zapisz się i otrzymuj informacje o nowościach i promocjach
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.values(footerNavigation).map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/60 hover:text-gold-light transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 hover:text-gold-light transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <Image src="/images/logo-white.svg" alt={SITE_NAME} width={140} height={36} className="mb-2" />
              <p className="text-xs text-white/40">{COMPANY.name}</p>
              <div className="flex items-center gap-4 mt-2 text-xs text-white/40">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {COMPANY.address}
                </span>
              </div>
              <div className="flex items-center gap-4 mt-1 text-xs text-white/40">
                <span>NIP: {COMPANY.nip}</span>
                <span>REGON: {COMPANY.regon}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href={`tel:${COMPANY.phone.replace(/-/g, '')}`} className="p-2 rounded-full bg-white/10 hover:bg-gold transition-colors" aria-label="Telefon">
                <Phone className="w-4 h-4" />
              </a>
              <a href={`mailto:${COMPANY.email}`} className="p-2 rounded-full bg-white/10 hover:bg-gold transition-colors" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
              <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-gold transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-gold transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="py-4 border-t border-white/5 text-center text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}
