import React from "react";

type SortOrder = "ascending" | "descending";

interface SortProductsProps {
  sortProducts: (order: SortOrder) => void;
  currentSortOrder: SortOrder;
}

const SortProducts: React.FC<SortProductsProps> = ({ sortProducts }) => {
  return (
    <div className="flex justify-center space-x-4 mb-4">
      <button onClick={() => sortProducts("ascending")}>
        Price Low to High
      </button>
      <button onClick={() => sortProducts("descending")}>
        Price High to Low
      </button>
    </div>
  );
};

export default SortProducts;
