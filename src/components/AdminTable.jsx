export default function AdminTable({ columns=[], rows=[], actions=[] }){
  return (
    <div className="overflow-auto border rounded-lg">
      <table className="min-w-[640px] w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            {columns.map(c=> <th key={c.key} className="text-left px-3 py-2 font-medium">{c.label}</th>)}
            {actions.length>0 && <th className="px-3 py-2">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((r,i)=> (
            <tr key={i} className="border-t">
              {columns.map(c=> <td key={c.key} className="px-3 py-2">{r[c.key]}</td>)}
              {actions.length>0 && (
                <td className="px-3 py-2">
                  <div className="flex gap-2">
                    {actions.map(a=> <button key={a.label} className="btn text-xs px-2 py-1">{a.label}</button>)}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
