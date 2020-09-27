import React   from 'react'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from 'react-apollo';
import { setContext } from '@apollo/client/link/context';


const httpLink = new createHttpLink({ uri: 'https://api.github.com/graphql' });
const token = process.env.REACT_APP_GITHUB_TOKEN;
console.log(token);
const graphQLClient = (props) => {

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exi

    // return the headers to the context so httpLink can read th
    return {
      headers: {
        ...headers,
        authorization: process.env.REACT_APP_GITHUB_TOKEN ? `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}` : "",
      }
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });


   return(
        <ApolloProvider client={client}>

          {props.children}

        </ApolloProvider>
    );
};

export default graphQLClient;
