import React from "react";

const Search = () => {
  return (
      <div className="header__search search">
        <form className="search__form" action="#">
        <input type="text" className="search__field" />
        <button className="search__btn"></button>
        </form>
      </div>
  )
}

export default Search