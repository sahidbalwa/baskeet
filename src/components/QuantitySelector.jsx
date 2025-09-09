"use client";
import { useState } from 'react';

export default function QuantitySelector(){
  const [q, setQ] = useState(1);
  return (
    <div className="flex items-center gap-2">
      <button className="btn" onClick={()=> setQ(q=> Math.max(1,q-1))}>-</button>
      <div className="w-10 text-center">{q}</div>
      <button className="btn" onClick={()=> setQ(q=> q+1)}>+</button>
    </div>
  );
}
