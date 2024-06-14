import React from "react";
import { searchProps } from "../../types";
import style from "./Search.module.scss";
import Input from "../InputField";

const Search: React.FC<searchProps> = ({ setSearchQuery }) => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value.replace(/[^a-z0-9]/gi, ""));
  }

  return (
    <div className={style.search}>
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
