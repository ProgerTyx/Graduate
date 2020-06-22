import React, { useState } from "react";
import { useHttp } from "../hooks/http.hook";

const Search = () => {
  const [search, setSearch] = useState("");
  const { request } = useHttp();

  const keyPressHandler = (event) => {
    if (event.key === "Enter") {
      request(`/api/services?search=${search}`, "GET");
      setSearch("");
    }
  };

  return (
    <div className="input-field">
      <i className="material-icons prefix">search</i>
      <input
        id="search"
        type="text"
        className="validate"
        placeholder="Нажмите Enter для поиска"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={keyPressHandler}
      />
    </div>
  );
};

export default Search;
