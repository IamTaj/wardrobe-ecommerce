import React, { useState } from "react";
import HistoryContext from "./HistoryContext";

export default function CreateHistory(props) {
  const [history, setHistory] = useState([]);

  const setSearchHistory = (item) => {
    setHistory([...history, item]);
  };
  return (
    <HistoryContext.Provider value={{ setSearchHistory, history }}>
      {props.children}
    </HistoryContext.Provider>
  );
}
