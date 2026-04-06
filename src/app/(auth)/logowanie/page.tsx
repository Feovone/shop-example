'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API call
  };

  return (
    <div className="mx-auto max-w-5xl px-4 pb-12">
      <Breadcrumbs items={[{ label: 'Logowanie' }]} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        <div>
          <h1 className="text-2xl font-serif font-bold mb-6">Zaloguj się</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-10 px-3 border border-border rounded text-sm focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">Hasło</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full h-10 px-3 border border-border rounded text-sm focus:outline-none focus:border-gold"
              />
            </div>
            <div className="flex items-center justify-between">
              <Button type="submit" className="w-full">Zaloguj się</Button>
            </div>
            <Link href="/odzyskaj-haslo" className="block text-sm text-gold hover:underline">
              Nie pamiętasz hasła?
            </Link>
          </form>
        </div>

        <div className="border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0 md:pl-12">
          <h2 className="text-2xl font-serif font-bold mb-4">Zarejestruj się</h2>
          <p className="text-sm text-text-light mb-6">
            Załóż konto i korzystaj z wielu udogodnień:
          </p>
          <ul className="space-y-2 text-sm text-text-light mb-6">
            <li>✓ Śledzenie statusu zamówień</li>
            <li>✓ Historia zakupów</li>
            <li>✓ Automatyczne uzupełnianie danych przy zakupie</li>
            <li>✓ Dostęp do kuponów rabatowych</li>
          </ul>
          <Link href="/rejestracja">
            <Button variant="outline" className="w-full">Zarejestruj się</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
