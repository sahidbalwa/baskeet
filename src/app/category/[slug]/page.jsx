import products from '@/data/products.json';
import categories from '@/data/categories.json';
import Breadcrumbs from '@/components/Breadcrumbs';
import Filters from '@/components/Filters';
import ProductGrid from '@/components/ProductGrid';

export default function CategoryPage({ params, searchParams }){
  const cat = categories.find(c => c.slug === params.slug);
  let list = products.filter(p => p.category === params.slug);
  const sub = searchParams?.sub;
  if (sub) list = list.filter(p => p.subcategory === sub);
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12">
        <Breadcrumbs items={[{label:'Home',href:'/'},{label:cat?.name||'Category'}]} />
        <h1 className="text-2xl font-semibold mb-2">{cat?.name}</h1>
        {cat?.children && (
          <div className="flex flex-wrap gap-2 mb-4">
            {cat.children.map(sc => (
              <a key={sc.slug} href={`/category/${params.slug}?sub=${sc.slug}`} className="badge">{sc.name}</a>
            ))}
          </div>
        )}
      </div>
      <aside className="col-span-12 lg:col-span-3"><Filters /></aside>
      <section className="col-span-12 lg:col-span-9"><ProductGrid products={list} /></section>
    </div>
  );
}
