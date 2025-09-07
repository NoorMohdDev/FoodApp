import { Link } from "react-router-dom";

export default function RecipeItem({ item }) {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-1 rounded-2xl border-green-700">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item?.image} alt="recipe item" className="block w-full" />
      </div>
      <div>
        <span className="text-sm text-green-700 font-medium">
          {item?.cuisine}
        </span>
        <h3 className="font-bold text-1xl truncate text-green-600">
          {item?.name}
        </h3>
        <Link
          to={`/details/${item?.id}`}
          className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-green-600 text-white"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}