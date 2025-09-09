import orders from '@/data/orders.json';
import products from '@/data/products.json';

export default function AdminDashboard(){
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card p-4"><div className="text-sm text-gray-600">Products</div><div className="text-2xl font-bold">{products.length}</div></div>
        <div className="card p-4"><div className="text-sm text-gray-600">Orders</div><div className="text-2xl font-bold">{orders.length}</div></div>
        <div className="card p-4"><div className="text-sm text-gray-600">Revenue (UI)</div><div className="text-2xl font-bold">₹75,000</div></div>
      </div>
    </div>
  );
}
