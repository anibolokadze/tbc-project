import React from "react";
import { searchProps } from "../../types";
import style from "./Search.module.scss";
import Input from "../InputField";

const Search: React.FC<searchProps> = ({ searchQuery, setSearchQuery }) => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value.replace(/[^a-z0-9]/gi, ""));
  }

  return (
    <div className={style.search}>
      {/* <input
            maxLength={100}
            name="search"
            placeholder="Type to search ..."
            type="search"
            autoCapitalize="none"
            autoComplete="off"
            spellCheck="false"
            value={searchQuery}
            onChange={handleChange}
            className="w-full h-[calc(100%-10px)] rounded-l-[30px] rounded-r-[100px] outline-none bg-slate-300 text-xl dark:bg-slate-500"
          /> */}
      <h2 className={style.searchLabel}>Everything you are looking for</h2>
      <Input
        placeholder="Type to search..."
        type="search"
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
