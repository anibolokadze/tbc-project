import React, { useState } from "react";
import style from "./Search.module.scss";
import Input from "../InputField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownShortWide,
  faArrowUpAZ,
  faArrowUpWideShort,
  faArrowUpZA,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

type SortOrder =
  | "price-ascending"
  | "price-descending"
  | "alphabet-ascending"
  | "alphabet-descending";

interface SearchAndSortProps {
  setSearchQuery: (query: string) => void;
  sortProducts: (order: SortOrder) => void;
  currentSortOrder: SortOrder;
}

const SearchAndSortProducts: React.FC<SearchAndSortProps> = ({
  setSearchQuery,
  sortProducts,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value.replace(/[^a-z0-9]/gi, ""));
  }

  return (
    <div className={style.searchAndSortProducts}>
      <div className={style.search}>
        <Input
          placeholder="Type to search..."
          type="search"
          onChange={handleSearchChange}
        />
      </div>
      <div className={style.sortProducts}>
        <button onClick={toggleDropdown} className={style.dropdownButton}>
          <FontAwesomeIcon icon={faFilter} />
          Sort Products
        </button>
        {isDropdownOpen && (
          <div className={style.dropdownMenu}>
            <button onClick={() => sortProducts("price-ascending")}>
              <FontAwesomeIcon icon={faArrowUpWideShort} />
              Price Increase
            </button>
            <button onClick={() => sortProducts("price-descending")}>
              <FontAwesomeIcon icon={faArrowDownShortWide} />
              Price Decrease
            </button>
            <button onClick={() => sortProducts("alphabet-ascending")}>
              <FontAwesomeIcon icon={faArrowUpAZ} />
              Alphabet A-Z
            </button>
            <button onClick={() => sortProducts("alphabet-descending")}>
              <FontAwesomeIcon icon={faArrowUpZA} />
              Alphabet Z-A
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchAndSortProducts;
