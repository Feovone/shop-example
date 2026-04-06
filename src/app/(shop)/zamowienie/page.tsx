'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Lock, Truck, CreditCard, Building2, Banknote, Package } from 'lucide-react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { useCartStore } from '@/stores/cart-store';
import { formatPrice } from '@/lib/utils';
import { SHIPPING_METHODS, FREE_SHIPPING_THRESHOLD } from '@/config/constants';

type Step = 'address' | 'shipping' | 'payment' | 'summary';

export default function CheckoutPage() {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState<Step>('address');
  const { items, getSubtotal } = useCartStore();
  const subtotal = getSubtotal();

  const [form, setForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    postalCode: '',
    phone: '',
    nip: '',
    shippingMethod: 'inpost-paczkomat',
    paymentMethod: 'online',
    notes: '',
    differentBilling: false,
    billingFirstName: '',
    billingLastName: '',
    billingStreet: '',
    billingCity: '',
    billingPostalCode: '',
  });

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-2xl font-serif font-bold mb-4">Koszyk jest pusty</h1>
        <Link href="/"><Button>Wróć do sklepu</Button></Link>
      </div>
    );
  }

  const selectedShipping = SHIPPING_METHODS.find((m) => m.id === form.shippingMethod) ?? SHIPPING_METHODS[0];
  const shippingCost = selectedShipping.freeFrom && subtotal >= selectedShipping.freeFrom ? 0 : selectedShipping.price;
  const total = subtotal + shippingCost;

  const update = (field: string, value: string | boolean) => setForm((prev) => ({ ...prev, [field]: value }));

  const steps: { key: Step; label: string; num: number }[] = [
    { key: 'address', label: 'Dane', num: 1 },
    { key: 'shipping', label: 'Dostawa', num: 2 },
    { key: 'payment', label: 'Płatność', num: 3 },
    { key: 'summary', label: 'Podsumowanie', num: 4 },
  ];

  const currentIdx = steps.findIndex((s) => s.key === step);

  const inputCls = "w-full h-10 px-3 border border-border rounded text-sm focus:outline-none focus:border-gold";

  return (
    <div className="mx-auto max-w-5xl px-4 pb-12">
      <Breadcrumbs items={[
        { label: 'Koszyk', href: '/koszyk' },
        { label: 'Zamówienie' },
      ]} />

      <div className="flex items-center justify-center gap-2 my-8">
        {steps.map((s, i) => (
          <div key={s.key} className="flex items-center gap-2">
            <button
              onClick={() => i <= currentIdx && setStep(s.key)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                i <= currentIdx ? 'bg-gold text-white' : 'bg-border-light text-text-muted'
              }`}
            >
              {s.num}
            </button>
            <span className={`text-sm hidden sm:inline ${i <= currentIdx ? 'font-medium' : 'text-text-muted'}`}>
              {s.label}
            </span>
            {i < steps.length - 1 && <div className="w-8 h-px bg-border mx-1" />}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {step === 'address' && (
            <div className="space-y-6">
              <h2 className="text-xl font-serif font-bold">Dane dostawy</h2>

              <div>
                <label className="block text-sm font-medium mb-1">Email *</label>
                <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} className={inputCls} placeholder="jan@example.com" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Imię *</label>
                  <input type="text" value={form.firstName} onChange={(e) => update('firstName', e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Nazwisko *</label>
                  <input type="text" value={form.lastName} onChange={(e) => update('lastName', e.target.value)} className={inputCls} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Ulica i nr domu *</label>
                <input type="text" value={form.street} onChange={(e) => update('street', e.target.value)} className={inputCls} placeholder="ul. Przykładowa 12/3" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Kod pocztowy *</label>
                  <input type="text" value={form.postalCode} onChange={(e) => update('postalCode', e.target.value)} className={inputCls} placeholder="80-299" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Miasto *</label>
                  <input type="text" value={form.city} onChange={(e) => update('city', e.target.value)} className={inputCls} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Telefon *</label>
                <input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} className={inputCls} placeholder="+48 500 000 000" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">NIP (opcjonalnie — faktura)</label>
                <input type="text" value={form.nip} onChange={(e) => update('nip', e.target.value)} className={inputCls} placeholder="0000000000" />
              </div>

              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={form.differentBilling} onChange={(e) => update('differentBilling', e.target.checked)} className="accent-gold" />
                Inny adres do faktury
              </label>

              {form.differentBilling && (
                <div className="space-y-4 pl-4 border-l-2 border-gold/20">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Imię *</label>
                      <input type="text" value={form.billingFirstName} onChange={(e) => update('billingFirstName', e.target.value)} className={inputCls} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Nazwisko *</label>
                      <input type="text" value={form.billingLastName} onChange={(e) => update('billingLastName', e.target.value)} className={inputCls} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Ulica i nr domu *</label>
                    <input type="text" value={form.billingStreet} onChange={(e) => update('billingStreet', e.target.value)} className={inputCls} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Kod pocztowy *</label>
                      <input type="text" value={form.billingPostalCode} onChange={(e) => update('billingPostalCode', e.target.value)} className={inputCls} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Miasto *</label>
                      <input type="text" value={form.billingCity} onChange={(e) => update('billingCity', e.target.value)} className={inputCls} />
                    </div>
                  </div>
                </div>
              )}

              <Button size="lg" className="w-full" onClick={() => setStep('shipping')}>
                Dalej — wybierz dostawę
              </Button>
            </div>
          )}

          {step === 'shipping' && (
            <div className="space-y-6">
              <h2 className="text-xl font-serif font-bold">Metoda dostawy</h2>
              <div className="space-y-3">
                {SHIPPING_METHODS.map((method) => {
                  const isFree = method.freeFrom !== null && subtotal >= method.freeFrom;
                  return (
                    <label
                      key={method.id}
                      className={`flex items-center gap-4 p-4 border rounded cursor-pointer transition-colors ${
                        form.shippingMethod === method.id ? 'border-gold bg-gold/5' : 'border-border hover:border-gold/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="shipping"
                        value={method.id}
                        checked={form.shippingMethod === method.id}
                        onChange={() => update('shippingMethod', method.id)}
                        className="accent-gold"
                      />
                      <Truck className="w-5 h-5 text-text-muted flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{method.name}</p>
                        <p className="text-xs text-text-muted">{method.estimatedDays}</p>
                      </div>
                      <div className="text-right">
                        {isFree ? (
                          <div>
                            <span className="text-sm font-bold text-success">Gratis</span>
                            <span className="text-xs text-text-muted line-through ml-1">{formatPrice(method.price)}</span>
                          </div>
                        ) : (
                          <span className="text-sm font-bold">{method.price === 0 ? 'Gratis' : formatPrice(method.price)}</span>
                        )}
                      </div>
                    </label>
                  );
                })}
              </div>

              {subtotal < FREE_SHIPPING_THRESHOLD && (
                <p className="text-sm text-text-muted text-center">
                  Do darmowej dostawy brakuje <strong>{formatPrice(FREE_SHIPPING_THRESHOLD - subtotal)}</strong>
                </p>
              )}

              <div className="flex gap-3">
                <Button variant="outline" size="lg" className="flex-1 gap-2" onClick={() => setStep('address')}>
                  <ChevronLeft className="w-4 h-4" /> Wróć
                </Button>
                <Button size="lg" className="flex-1" onClick={() => setStep('payment')}>
                  Dalej — płatność
                </Button>
              </div>
            </div>
          )}

          {step === 'payment' && (
            <div className="space-y-6">
              <h2 className="text-xl font-serif font-bold">Metoda płatności</h2>
              <div className="space-y-3">
                {[
                  { id: 'online', label: 'Płatność online', desc: 'Przelewy, BLIK, karty Visa/Mastercard', icon: CreditCard },
                  { id: 'bank-transfer', label: 'Przelew tradycyjny', desc: 'Na konto mBank', icon: Building2 },
                  { id: 'cod', label: 'Pobranie', desc: 'Płatność przy odbiorze kurierowi', icon: Banknote },
                  { id: 'cash', label: 'Gotówka przy odbiorze osobistym', desc: 'Gdańsk, ul. Astronomów 16', icon: Package },
                ].map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center gap-4 p-4 border rounded cursor-pointer transition-colors ${
                      form.paymentMethod === method.id ? 'border-gold bg-gold/5' : 'border-border hover:border-gold/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={form.paymentMethod === method.id}
                      onChange={() => update('paymentMethod', method.id)}
                      className="accent-gold"
                    />
                    <method.icon className="w-5 h-5 text-text-muted flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">{method.label}</p>
                      <p className="text-xs text-text-muted">{method.desc}</p>
                    </div>
                  </label>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Uwagi do zamówienia (opcjonalnie)</label>
                <textarea
                  value={form.notes}
                  onChange={(e) => update('notes', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-border rounded text-sm focus:outline-none focus:border-gold resize-none"
                  placeholder="Np. prośba o pakowanie prezentowe..."
                />
              </div>

              <div className="flex gap-3">
                <Button variant="outline" size="lg" className="flex-1 gap-2" onClick={() => setStep('shipping')}>
                  <ChevronLeft className="w-4 h-4" /> Wróć
                </Button>
                <Button size="lg" className="flex-1" onClick={() => setStep('summary')}>
                  Dalej — podsumowanie
                </Button>
              </div>
            </div>
          )}

          {step === 'summary' && (
            <div className="space-y-6">
              <h2 className="text-xl font-serif font-bold">Podsumowanie zamówienia</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-border rounded p-4">
                  <h3 className="text-sm font-semibold mb-2">Dane dostawy</h3>
                  <p className="text-sm text-text-light">{form.firstName} {form.lastName}</p>
                  <p className="text-sm text-text-light">{form.street}</p>
                  <p className="text-sm text-text-light">{form.postalCode} {form.city}</p>
                  <p className="text-sm text-text-light">{form.phone}</p>
                  <p className="text-sm text-text-light">{form.email}</p>
                  <button onClick={() => setStep('address')} className="text-xs text-gold mt-2 hover:underline">Zmień</button>
                </div>

                <div className="border border-border rounded p-4">
                  <h3 className="text-sm font-semibold mb-2">Dostawa i płatność</h3>
                  <p className="text-sm text-text-light">{selectedShipping.name}</p>
                  <p className="text-sm text-text-light">{selectedShipping.estimatedDays}</p>
                  <p className="text-sm text-text-light mt-2">
                    Płatność: {form.paymentMethod === 'online' ? 'Online' : form.paymentMethod === 'bank-transfer' ? 'Przelew' : form.paymentMethod === 'cod' ? 'Pobranie' : 'Gotówka'}
                  </p>
                  <button onClick={() => setStep('shipping')} className="text-xs text-gold mt-2 hover:underline">Zmień</button>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-3">Produkty</h3>
                <div className="space-y-3">
                  {items.map((item) => {
                    const mainImage = item.product.images.find((i) => i.isMain) ?? item.product.images[0];
                    return (
                      <div key={item.product.id} className="flex items-center gap-3 border-b border-border-light pb-3">
                        <div className="relative w-14 h-14 bg-bg-secondary flex-shrink-0">
                          {mainImage && <Image src={mainImage.url} alt={item.product.name} fill sizes="56px" className="object-cover" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium line-clamp-1">{item.product.name}</p>
                          <p className="text-xs text-text-muted">{item.quantity} × {formatPrice(item.product.price)}</p>
                        </div>
                        <p className="text-sm font-bold">{formatPrice(item.product.price * item.quantity)}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <label className="flex items-start gap-2 text-sm">
                <input type="checkbox" required className="mt-0.5 accent-gold" />
                <span className="text-text-light">
                  Akceptuję <Link href="/info/regulamin" className="text-gold hover:underline">regulamin</Link> i{' '}
                  <Link href="/info/polityka-prywatnosci" className="text-gold hover:underline">politykę prywatności</Link> *
                </span>
              </label>

              <div className="flex gap-3">
                <Button variant="outline" size="lg" className="flex-1 gap-2" onClick={() => setStep('payment')}>
                  <ChevronLeft className="w-4 h-4" /> Wróć
                </Button>
                <Button size="lg" className="flex-1 gap-2">
                  <Lock className="w-4 h-4" />
                  Zamawiam i płacę — {formatPrice(total)}
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-bg-secondary p-6 sticky top-24">
            <h3 className="font-semibold mb-4">Twoje zamówienie</h3>

            <div className="space-y-2 text-sm max-h-48 overflow-y-auto">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between">
                  <span className="text-text-light truncate mr-2">{item.product.name} × {item.quantity}</span>
                  <span className="flex-shrink-0">{formatPrice(item.product.price * item.quantity)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-border mt-4 pt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-text-muted">Produkty</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Dostawa ({selectedShipping.name})</span>
                <span>{shippingCost === 0 ? <span className="text-success font-medium">Gratis</span> : formatPrice(shippingCost)}</span>
              </div>
            </div>

            <div className="border-t border-border mt-3 pt-3">
              <div className="flex justify-between font-bold text-lg">
                <span>Razem</span>
                <span>{formatPrice(total)}</span>
              </div>
              <p className="text-xs text-text-muted mt-1">w tym VAT</p>
            </div>

            <div className="mt-4 pt-4 border-t border-border space-y-2">
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <Lock className="w-3 h-3" /> Bezpieczna płatność SSL
              </div>
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <Truck className="w-3 h-3" /> Darmowa dostawa od {FREE_SHIPPING_THRESHOLD} zł
              </div>
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <Package className="w-3 h-3" /> 30 dni na zwrot
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
