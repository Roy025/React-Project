import React, { useEffect, useState } from "react";

const Search = (props) => {
  const [searchText, setSearch] = useState("");

  const Change = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    props.onSearch(searchText);
  }, [searchText]);

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search Country"
        value={searchText}
        onChange={Change}
      />
    </div>
  );
};

export default Search;
