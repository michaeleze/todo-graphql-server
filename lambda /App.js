import ApolloClient from "apollo-boost";
const client = new ApolloClient({
  uri: "/.netlify/functions/index.gql"
});
