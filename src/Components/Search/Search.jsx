import search from "../../assets/svg/search.svg";
import "./Search.css";

function Search() {
  return (
    <form className="search">
      <label htmlFor="search">ყველაფერი, რასაც ეძებ</label>
      <input
        type="search"
        id="search"
        name="search"
        placeholder="ძებნა..."
        aria-label="Search"
      />
      <button type="submit">
        <img src={search} />
      </button>
    </form>
  );
}

export default Search;
