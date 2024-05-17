import React from "react";
import { searchProps } from "../types";

const Search: React.FC<searchProps> = ({ searchQuery, setSearchQuery }) => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value.replace(/[^a-z0-9]/gi, ""));
  }

  return (
    <section className="w-full pt-20">
      <div className="flex flex-col lg:flex-row max-w-[1400px] mx-auto h-[100px] lg:h-[65px] justify-center items-center gap-3 lg:gap-5 ">
        <form className="w-[70%] lg:w-[50%] h-[50px] lg:h-[65px] flex items-center rounded-[100px] px-2 lg:px-5">
          <svg
            className="hidden lg:block w-[15px] h-[15px] lg:w-[25px] lg:h-[25px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19.641 19.641"
          >
            <g
              id="Icon_feather-search"
              data-name="Icon feather-search"
              transform="translate(-3.5 -3.5)"
            >
              <path
                className="stroke-[#57676f]"
                data-name="Path 29869"
                d="M19.813,12.156A7.656,7.656,0,1,1,12.156,4.5a7.656,7.656,0,0,1,7.656,7.656Z"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
              <path
                className="stroke-[#57676f] peer-focuse:"
                data-name="Path 29870"
                d="M29.138,29.138l-4.163-4.163"
                transform="translate(-7.412 -7.412)"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </g>
          </svg>
          <input
            maxLength={100}
            name="search"
            placeholder="Type to search ..."
            type="search"
            autoCapitalize="none"
            autoComplete="off"
            spellCheck="false"
            value={searchQuery}
            onChange={handleChange}
          />
        </form>
      </div>
    </section>
  );
};

export default Search;
