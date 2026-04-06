'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API call
  };

  return (
    <div className="mx-auto max-w-md px-4 pb-12">
      <Breadcrumbs items={[{ label: 'Rejestracja' }]} />

      <h1 className="text-2xl font-serif font-bold mt-4 mb-6">Zarejestruj się</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium mb-1">Imię</label>
            <input
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              required
              className="w-full h-10 px-3 border border-border rounded text-sm focus:outline-none focus:border-gold"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium mb-1">Nazwisko</label>
            <input
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              required
              className="w-full h-10 px-3 border border-border rounded text-sm focus:outline-none focus:border-gold"
            />
          </div>
        </div>
        <div>
          <label htmlFor="regEmail" className="block text-sm font-medium mb-1">Email</label>
          <input
            id="regEmail"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required
            className="w-full h-10 px-3 border border-border rounded text-sm focus:outline-none focus:border-gold"
          />
        </div>
        <div>
          <label htmlFor="regPassword" className="block text-sm font-medium mb-1">Hasło</label>
          <input
            id="regPassword"
            type="password"
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
            required
            minLength={8}
            className="w-full h-10 px-3 border border-border rounded text-sm focus:outline-none focus:border-gold"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Powtórz hasło</label>
          <input
            id="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => handleChange('confirmPassword', e.target.value)}
            required
            className="w-full h-10 px-3 border border-border rounded text-sm focus:outline-none focus:border-gold"
          />
        </div>
        <label className="flex items-start gap-2 text-sm">
          <input
            type="checkbox"
            checked={formData.acceptTerms}
            onChange={(e) => handleChange('acceptTerms', e.target.checked)}
            required
            className="mt-0.5 accent-gold"
          />
          <span className="text-text-light">
            Akceptuję{' '}
            <Link href="/info/regulamin" className="text-gold hover:underline">regulamin</Link>
            {' '}i{' '}
            <Link href="/info/polityka-prywatnosci" className="text-gold hover:underline">politykę prywatności</Link>
          </span>
        </label>
        <Button type="submit" className="w-full">Zarejestruj się</Button>
      </form>

      <p className="mt-6 text-sm text-text-muted text-center">
        Masz już konto?{' '}
        <Link href="/logowanie" className="text-gold hover:underline">Zaloguj się</Link>
      </p>
    </div>
  );
}
