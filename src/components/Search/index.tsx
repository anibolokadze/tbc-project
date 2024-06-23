"use client";
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
import { useTranslation } from "react-i18next";

type SortOrder =
  | "price-ascending"
  | "price-descending"
  | "alphabet-ascending"
  | "alphabet-descending";

interface SearchAndSortProps {
  setSearchQuery: (query: string) => void;
  sortProducts: (order: SortOrder) => void;
  currentSortOrder: SortOrder;
  showSortButton: boolean;
}

const SearchAndSortProducts: React.FC<SearchAndSortProps> = ({
  setSearchQuery,
  sortProducts,
  showSortButton,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value.replace(/[^a-z0-9]/gi, ""));
  }

  const { t } = useTranslation();

  return (
    <div className={style.searchAndSortProducts}>
      <div className={style.search}>
        <Input
          placeholder={t("search")}
          type="search"
          onChange={handleSearchChange}
        />
      </div>
      {showSortButton && (
        <div className={style.sortProducts}>
          <button onClick={toggleDropdown} className={style.dropdownButton}>
            <FontAwesomeIcon icon={faFilter} />
            {t("sort")}
          </button>
          {isDropdownOpen && (
            <div className={style.dropdownMenu}>
              <button
                onClick={() => sortProducts("price-ascending")}
                className="dark:text-black"
              >
                <FontAwesomeIcon icon={faArrowUpWideShort} />
                {t("increase")}
              </button>
              <button
                onClick={() => sortProducts("price-descending")}
                className="dark:text-black"
              >
                <FontAwesomeIcon icon={faArrowDownShortWide} />
                {t("decrease")}
              </button>
              <button
                onClick={() => sortProducts("alphabet-ascending")}
                className="dark:text-black"
              >
                <FontAwesomeIcon icon={faArrowUpAZ} />
                {t("a_z")}
              </button>
              <button
                onClick={() => sortProducts("alphabet-descending")}
                className="dark:text-black"
              >
                <FontAwesomeIcon icon={faArrowUpZA} />
                {t("z_a")}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchAndSortProducts;
