import Image from 'next/image';
import products from '@/data/products.json';
import { currency } from '@/lib/utils';
import RatingStars from '@/components/RatingStars';
import QuantitySelector from '@/components/QuantitySelector';

export default function ProductPage({ params }){
  const p = products.find(x => x.id === params.id);
  if (!p) return <div>Product not found.</div>;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-6">
        <div className="card p-4 flex items-center justify-center">
          <Image src={p.image} alt={p.title} width={600} height={600} className="object-contain rounded" />
        </div>
      </div>
      <div className="lg:col-span-4 space-y-3">
        <h1 className="text-2xl font-semibold">{p.title}</h1>
        <div className="flex items-center gap-2"><RatingStars value={p.rating} /><span className="text-sm text-gray-600">({p.reviews} ratings)</span></div>
        <div className="text-3xl font-bold">{currency(p.price)}</div>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>Affiliate product • Buy on partner site</li>
          <li>Fast delivery options</li>
          <li>Free returns on eligible items</li>
        </ul>
      </div>
      <div className="lg:col-span-2">
        <div className="card p-4 space-y-3">
          <div className="text-xl font-semibold">{currency(p.price)}</div>
          <QuantitySelector />
          <a href={p.affiliateUrl} className="btn btn-primary w-full text-center">Buy on Partner</a>
          <button className="btn w-full">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
