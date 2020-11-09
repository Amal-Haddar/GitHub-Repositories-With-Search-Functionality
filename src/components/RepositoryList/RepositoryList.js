import { useQuery } from "@apollo/react-hooks";
import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { SEARCH_FOR_REPOS } from "../Queries";
import Repository from "../Repository/Repository";
import RepositoriesSearched from "../RepositoriesSearched/RepositoriesSearched";

function RepositoryList({ searchTerm }) {
  const [expandedRepo, setExpandedRepo] = useState(null);
  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);
  const { data, loading, error } = useQuery(SEARCH_FOR_REPOS, {
    variables: { search_term: debouncedSearchTerm },
  });

  useEffect(() => {
    setExpandedRepo(null);
  }, [data]);

  if (loading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

  if (error) {
    return { error };
  }

  if (!data.search.repositoryCount) {
    return <Repository />;
  }

  return (
    <div className="RepositoryList">
      {data.search.edges.map((repo, i) => (
        <RepositoriesSearched
          repo={repo}
          expanded={expandedRepo === i}
          onToggled={() => setExpandedRepo(i)}
          key={i}
        />
      ))}
    </div>
  );
}

export default RepositoryList;
