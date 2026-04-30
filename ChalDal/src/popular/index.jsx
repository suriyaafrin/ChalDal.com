import React, { useState } from "react";
import { products } from "../../data/data.js";

const Popular = () => {
  const CARDS_PER_PAGE_LG = 8;
  const CARDS_PER_PAGE = 5;

  const [index, setIndex] = useState(0);
  const [indexLg, setIndexLg] = useState(0);

  const canPrev = index > 0;
  const canNext = index + CARDS_PER_PAGE < products.length;

  const canPrevLg = indexLg > 0;
  const canNextLg = indexLg + CARDS_PER_PAGE_LG < products.length;

  const sliced = products.slice(index, index + CARDS_PER_PAGE);
  const visible =
    sliced.length < CARDS_PER_PAGE
      ? [...sliced, ...products.slice(0, CARDS_PER_PAGE - sliced.length)]
      : sliced;

  const slicedLg = products.slice(indexLg, indexLg + CARDS_PER_PAGE_LG);
  const visibleLg =
    slicedLg.length < CARDS_PER_PAGE_LG
      ? [...slicedLg, ...products.slice(0, CARDS_PER_PAGE_LG - slicedLg.length)]
      : slicedLg;

  const CardItem = ({ category }) => (
    <div className="flex-1 flex flex-col items-center justify-between border border-gray-200 rounded-2xl p-4 cursor-pointer hover:shadow-md hover:border-purple-300 transition-all">
      <img
        src={category.image}
        alt={category.name}
        className="h-32 w-full object-contain"
      />
      <p className="text-sm text-gray-700 text-center mt-3">{category.name}</p>
    </div>
  );

  return (
    <div className="px-4 sm:px-6 lg:px-16 py-4">

      <div className="flex lg:hidden items-center justify-between mb-5">
        <h2 className="text-2xl font-semibold text-gray-400">Popular Categories</h2>
        <div className="flex items-center gap-3">
          <button className="text-purple-600 font-medium text-sm hover:underline">View All</button>
          <button
            onClick={() => setIndex((i) => i - CARDS_PER_PAGE)}
            disabled={!canPrev}
            className="h-8 w-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >‹</button>
          <button
            onClick={() => setIndex((i) => i + CARDS_PER_PAGE)}
            disabled={!canNext}
            className="h-8 w-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >›</button>
        </div>
      </div>

      <div className="flex lg:hidden items-stretch gap-4">
        {visible.map((category) => (
          <CardItem key={category.id} category={category} />
        ))}
      </div>

      <div className="hidden lg:flex items-center justify-between mb-5">
        <h2 className="text-2xl font-semibold text-gray-400">Popular Categories</h2>
        <div className="flex items-center gap-3">
          <button className="text-purple-600 font-medium text-sm hover:underline">View All</button>
          <button
            onClick={() => setIndexLg((i) => i - CARDS_PER_PAGE_LG)}
            disabled={!canPrevLg}
            className="h-8 w-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >‹</button>
          <button
            onClick={() => setIndexLg((i) => i + CARDS_PER_PAGE_LG)}
            disabled={!canNextLg}
            className="h-8 w-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >›</button>
        </div>
      </div>

      <div className="hidden lg:flex items-stretch gap-4">
        {visibleLg.map((category) => (
          <CardItem key={category.id} category={category} />
        ))}
      </div>

    </div>
  );
};

export default Popular;