import Image from 'next/image';
import RatingStars from '@/components/RatingStars';
import { currency } from '@/lib/utils';

export default function ProductCard({ p }){
  return (
    <a href={`/product/${p.id}`} className="card p-4 flex flex-col gap-3 hover:shadow-md transition">
      <div className="aspect-square relative">
        <Image src={p.image} alt={p.title} fill className="object-cover rounded" />
      </div>
      <div className="min-h-[48px] text-black line-clamp-2">{p.title}</div>
      <div className="flex items-center gap-2"><RatingStars value={p.rating} /><span className="text-xs text-gray-900">{p.reviews}</span></div>
      <div className="text-lg text-black font-semibold">{currency(p.price)}</div>
      <div className="flex flex-wrap gap-2">{p.badges?.map(b => <span key={b} className="badge">{b}</span>)}</div>
    </a>
  );
}
