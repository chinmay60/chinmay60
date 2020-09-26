import React, { Component } from 'react'
import { Query } from 'react-apollo';
import { gql,useQuery  } from 'apollo-boost';
import UIComponent from './UIComponent'
import Aux from './Auxilliary'
import Grid from '@material-ui/core/Grid';
import Bioinfo from  './BioInfo'
import { InMemoryCache } from '@apollo/client';
import Header from './Header';


const GET_REPO_INFO = gql`
query  {
    viewer {
        id
      pinnedItems(first: 3) {
        edges {
          node {
            ... on Repository {
              id
              name
              description
              homepageUrl
              pushedAt
              url
              openGraphImageUrl
              usesCustomOpenGraphImage
              refs(refPrefix: "refs/heads/", last: 3) {
                nodes {
                  name
                  target {
                    ... on Commit {
                      history {
                        totalCount
                      }
                      messageHeadline
                      pushedDate
                    }
                  }
                }
              }
              repositoryTopics(first: 100) {
                edges {
                  node {
                    topic {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;



const GET_BIO_INFO = gql`
  query{
	viewer{
    id
    url
    name
    avatarUrl
    bio
   	company
    repository(name:"chinmay60"){
      id
      object(expression: "master:README.md") {
      ... on Blob {
        text
      }
      }
    }


  }
}
`;


class PinnedItems extends Component {

  render(){

  return(



    <Grid container alignItems="center">


      <Query query={GET_BIO_INFO} key={"1"}>
        {({ loading, error, data }) => (
          <Aux>
            {loading && <div>Loading...</div>}
            {error && <div>Error...</div>}
            {data && (

              <Bioinfo info = {data.viewer} />
            )}
          </Aux>
        )}
      </Query>


    <Grid container  direction="row" spacing={4}  alignItems="center">
      <Query query={GET_REPO_INFO}>
        {({ loading, error, data }) => (
          <Aux>
            {loading && <div>Loading...</div>}
            {error && <div>Error...</div>}
            {data && (

              <UIComponent pinnedItems = {data.viewer.pinnedItems.edges} />
            )}
          </Aux>
        )}
      </Query>
    </Grid>
  </Grid>


  )}
};

export default PinnedItems;
