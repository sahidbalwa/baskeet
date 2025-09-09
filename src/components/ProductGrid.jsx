import ProductCard from '@/components/ProductCard';

export default function ProductGrid({ products }){
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(p => <ProductCard key={p.id} p={p} />)}
    </div>
  );
}
