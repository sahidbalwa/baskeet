export default function RatingStars({ value=0 }){
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const stars = Array.from({length:5}).map((_,i)=> i < full ? '★' : i===full && half ? '☆' : '☆');
  return <div className="text-amber-500 text-sm">{stars.join(' ')}</div>;
}
