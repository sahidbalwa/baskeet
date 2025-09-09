import products from '@/data/products.json';
import Image from 'next/image';
import { currency } from '@/lib/utils';

export default function CartPage(){
  const items = [ { id:'p1', qty:1 }, { id:'p3', qty:2 } ];
  const list = items.map(i => ({...products.find(p=>p.id===i.id), qty:i.qty}));
  const subtotal = list.reduce((s,i)=> s + i.price*i.qty, 0);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 card p-4 space-y-4">
        {list.map(it => (
          <div key={it.id} className="flex gap-4 border-b pb-4">
            <Image src={it.image} alt={it.title} width={120} height={120} className="rounded" />
            <div className="flex-1">
              <a href={`/product/${it.id}`} className="font-medium hover:underline">{it.title}</a>
              <div className="text-lg font-semibold mt-1">{currency(it.price)}</div>
              <div className="text-sm text-gray-600">Qty: {it.qty}</div>
            </div>
          </div>
        ))}
      </div>
      <aside className="card p-4 space-y-2">
        <div className="font-medium">Subtotal ({items.length} items): <span className="font-bold">{currency(subtotal)}</span></div>
        <a href="/checkout" className="btn btn-primary w-full text-center">Proceed to Buy</a>
      </aside>
    </div>
  );
}
