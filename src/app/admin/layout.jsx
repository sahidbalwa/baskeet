"use client";
import AdminSidebar from '@/components/AdminSidebar';
import { useAuth } from '@/lib/auth';

export default function AdminLayout({ children }){
  const { isAdmin } = useAuth();
  if (!isAdmin) return <div className="container-responsive py-8">Access denied. Admins only.</div>
  return (
    <div className="container-responsive grid grid-cols-12 gap-6 py-6">
      <aside className="col-span-12 md:col-span-3 lg:col-span-2"><AdminSidebar /></aside>
      <section className="col-span-12 md:col-span-9 lg:col-span-10">{children}</section>
    </div>
  );
}
