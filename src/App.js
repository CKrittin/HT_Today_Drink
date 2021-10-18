import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (event) => {
    const dayArray = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ];
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input onChange={(e) => setSearchText(e.target.value)} />
        <button type="submit">
          <FaSearch />
        </button>
      </div>
    </form>
  );
}

export default App;
