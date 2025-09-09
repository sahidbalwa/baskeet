import ProductGrid from '@/components/ProductGrid';
import categories from '@/data/categories.json';
import products from '@/data/products.json';

export default function HomePage(){
  const featured = products.slice(0, 8);
  return (
    <div className="space-y-10">
      {/* <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map(cat => (
          <a key={cat.slug} href={`/category/${cat.slug}`} className="card p-5 hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-2">{cat.name}</h3>
            <p className="text-sm text-gray-600">Shop {cat.children.map(c=>c.name).slice(0,3).join(', ')} & more</p>
          </a>
        ))}
      </section> */}

      <section>
        <h2 className="text-xl font-semibold mb-3">Today's deals</h2>
        <ProductGrid products={featured} />
      </section>
    </div>
  );
}
