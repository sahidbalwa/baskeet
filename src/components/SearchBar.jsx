export default function SearchBar(){
  return (
    <form action="/" className="flex">
      <input className="flex-1 rounded-l-md px-3 py-2 text-gray-200" placeholder="Search Baskeet" />
      <button className="rounded-r-md  bg-amber-400 px-4 text-gray-900 font-medium">Search</button>
    </form>
  );
}
