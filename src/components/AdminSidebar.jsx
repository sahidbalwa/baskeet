export default function AdminSidebar(){
  return (
    <aside className="card p-4 text-sm space-y-2">
      <a className="block hover:underline" href="/admin">Dashboard</a>
      <a className="block hover:underline" href="/admin/products">Products</a>
      <a className="block hover:underline" href="/admin/categories">Categories</a>
      <a className="block hover:underline" href="/admin/orders">Orders</a>
    </aside>
  );
}
