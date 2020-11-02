import React from "react";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "react-apollo";
import { setContext } from "@apollo/client/link/context";

const httpLink = new createHttpLink({ uri: "https://api.github.com/graphql" });
const token = "656ec9af616d919078fa266222f983b8367f606e";

const graphQLClient = (props) => {
  const authLink = setContext((_, { headers }) => {
    
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default graphQLClient;
