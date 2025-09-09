import CategoryMegaMenu from '@/components/CategoryMegaMenu';
import categories from '@/data/categories.json';

export default function NavBar() {
  return (
    <nav className="bg-brand-dark/95">
      <div className="container-responsive">
        <div
          className="
            flex items-center gap-4 text-sm text-gray-100 py-3
            overflow-x-auto scrollbar-hide
            md:justify-center md:gap-8
          "
        >
          {/* Categories Dropdown (desktop aligned left) */}
          <div className="flex-shrink-0">
            <CategoryMegaMenu items={categories} />
          </div>

          {/* Links */}
          <div className="flex gap-6 md:gap-8">
            {categories.map((c) => (
              <a
                key={c.slug}
                href={`/category/${c.slug}`}
                className="
                  whitespace-nowrap px-2 py-1 rounded-md transition-all
                  hover:text-amber-400 hover:bg-white/10
                "
              >
                {c.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
