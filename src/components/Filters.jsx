export default function Filters(){
  return (
    <div className="card p-4 space-y-4">
      <div>
        <div className="font-semibold mb-2">Price</div>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm"><input type="checkbox"/> Under ₹1,000</label>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox"/> ₹1,000 – ₹5,000</label>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox"/> Above ₹5,000</label>
        </div>
      </div>
      <div>
        <div className="font-semibold mb-2">Avg. Customer Review</div>
        <div className="space-y-2">
          {[4,3,2,1].map(r=> (
            <label key={r} className="flex items-center gap-2 text-sm"><input type="checkbox"/> {r}+ Stars</label>
          ))}
        </div>
      </div>
    </div>
  );
}
