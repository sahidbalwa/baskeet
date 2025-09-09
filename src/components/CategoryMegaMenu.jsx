"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function CategoryMegaMenu({ items }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleClick = (e) => {
    if (pathname === "/") {
      e.preventDefault(); // prevent navigation
      setOpen((v) => !v); // toggle dropdown
    }
    // if not home, it will navigate normally
  };

  return (
    <div className="relative">
      {/* Always render as Link so SSR = Client */}
      <Link
        href="/"
        onClick={handleClick}
        className={`px-3 py-1 rounded ${
          pathname === "/"
            ? "bg-gray-900 text-white font-semibold"
            : "bg-white/10 hover:bg-white/20"
        }`}
      >
        All
      </Link>

      {open && (
        <div className="absolute z-20 mt-2 bg-white text-gray-900 rounded-lg shadow-lg p-4 grid grid-cols-2 md:grid-cols-3 gap-6 min-w-[320px]">
          {items.map((cat) => (
            <div key={cat.slug}>
              <Link
                href={`/category/${cat.slug}`}
                className={`font-semibold hover:underline ${
                  pathname === `/category/${cat.slug}`
                    ? "text-blue-600"
                    : "text-gray-900"
                }`}
              >
                {cat.name}
              </Link>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                {cat.children.map((sc) => (
                  <li key={sc.slug}>
                    <Link
                      href={`/category/${cat.slug}?sub=${sc.slug}`}
                      className={`hover:underline ${
                        pathname === `/category/${cat.slug}?sub=${sc.slug}`
                          ? "text-blue-500 font-medium"
                          : ""
                      }`}
                    >
                      {sc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
