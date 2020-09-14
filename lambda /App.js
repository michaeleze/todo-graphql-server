import ApolloClient from "./node_modules/apollo-boost";
const client = new ApolloClient({
  uri: "/.netlify/functions/index.gql"
});
