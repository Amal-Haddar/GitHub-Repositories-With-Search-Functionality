import React, { useState } from "react";

import Navbar from "../Navbar/Navbar";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import Searchbar from "../Searchbar/Searchbar";
import RepositoryList from "../RepositoryList/RepositoryList";

function PageContent() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="PageContent">
      <div className="flex-container">
        <div style={{ width: 1000, float: "right" }}>
          <Navbar />
          <Searchbar value={searchTerm} onChange={setSearchTerm} />
          {/* <Repository/> */}
          <RepositoryList searchTerm={searchTerm} />
        </div>
        <div style={{ paddingTop: 50, paddingLeft: 60 }}>
          <LeftSidebar />
        </div>
      </div>
    </div>
  );
}

export default PageContent;
