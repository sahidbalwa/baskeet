export default function Breadcrumbs({ items=[] }){
  return (
    <nav className="text-sm text-gray-600 mb-2">
      {items.map((it,i)=> (
        <span key={i}>
          {it.href ? <a className="hover:underline" href={it.href}>{it.label}</a> : <span>{it.label}</span>}
          {i < items.length-1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </nav>
  );
}
