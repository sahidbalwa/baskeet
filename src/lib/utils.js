export function cn(...classes){ return classes.filter(Boolean).join(' '); }
export const currency = (n) => new Intl.NumberFormat('en-IN',{ style:'currency', currency:'INR'}).format(n);
export const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'admin@baskeet.com';
