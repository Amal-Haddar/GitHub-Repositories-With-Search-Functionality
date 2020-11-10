//Apollo client configuration
import ApolloClient from "apollo-boost";

//Replace the access token with yours
const accessToken = "b95ad4575a09362678c5aa5e66ea63570e0f5ea4";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${accessToken}`,
  },
});

export default client;
