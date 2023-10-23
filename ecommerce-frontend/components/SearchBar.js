import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import HistoryContext from "@/Context/HistoryContext";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const { setSearchHistory, history } = useContext(HistoryContext);
  const [click, setClick] = useState(false);

  const ref = useRef();

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const router = useRouter();
  const searchItemHandler = () => {
    if (searchInput.length > 0) {
      router.push(`/Cart/${searchInput}`);
    }
    setSearchHistory(searchInput);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (click && ref.current && !ref.current.contains(e.target)) {
        setClick(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [click]);

  return (
    <>
      <div
        className="searchbar"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={handleChange}
          ref={ref}
          onClick={() => setClick((oldState) => !oldState)}
        />
        <button onClick={searchItemHandler}>
          <SearchIcon
            style={{ color: "white", marginLeft: "10px" }}
            fontSize="large"
          />
        </button>
      </div>
      {click && (
        <div className="searcbar-history">
          {history.map((value, i) => (
            <div className="history-items" key={i} style={{ display: "flex" }}>
              <Box sx={{ mr: 1 }}>
                <AccessTimeIcon fontSize="small" />
              </Box>
              <Box sx={{ ml: 2 }}>{value}</Box>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
