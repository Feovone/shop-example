'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');
    try {
      // TODO: API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <p className="text-sm text-green-400">
        Dziękujemy za zapisanie się do newslettera!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Twój adres email"
        required
        className="flex-1 h-10 px-4 bg-white/10 border border-white/20 rounded-full text-sm placeholder:text-white/40 focus:outline-none focus:border-gold-light"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="h-10 px-6 bg-gold hover:bg-gold-light text-white text-sm font-medium rounded-full transition-colors disabled:opacity-50 flex items-center gap-2"
      >
        <Send className="w-4 h-4" />
        <span className="hidden sm:inline">Zapisz się</span>
      </button>
      {status === 'error' && (
        <p className="text-xs text-red-400 mt-1">Wystąpił błąd. Spróbuj ponownie.</p>
      )}
    </form>
  );
}
