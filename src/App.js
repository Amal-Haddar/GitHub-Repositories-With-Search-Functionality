import React from "react";
import "./App.css";

import { ApolloProvider } from "react-apollo";

import client from "./client";
import PageContent from "./components/PageContent/PageContent";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <PageContent />
      </ApolloProvider>
      {}
    </div>
  );
}

export default App;
