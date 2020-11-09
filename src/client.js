import ApolloClient from "apollo-boost";

const accessToken = "f299fe63cdf9dc5b7c87df41c99d7090f30336a1";
const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${accessToken}`,
  },
});

export default client;
