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

const GET_RECENT_REPOS = gql`
  query GetRecentRepos {
    viewer {
      id
      repositories(
        orderBy: { field: PUSHED_AT, direction: ASC }
        last: 3
        privacy: PUBLIC
        isFork: false
      ) {
        edges {
          node {
            ... on Repository {
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
              languages(first: 100) {
                edges {
                  node {
                    name
                    color
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
              pullRequests(first: 100) {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`





class PinnedItems extends Component {

  render(){

  return(


    <Aux>
            <Header />
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


    <Grid container style={{paddingTop:"0%",paddingBottom:"2%"}}  direction="row" spacing={4}  alignItems="center">
      <Query query={GET_REPO_INFO}>
        {({ loading, error, data }) => (
          <Aux>
            {loading && <div>Loading...</div>}
            {error && <div>Error...</div>}
            {data && (

              <UIComponent pinnedItems = {data.viewer.pinnedItems.edges} header="Featured Projects"/>)}
</Aux>
)}
</Query>
</Grid>


<Grid container direction="row" spacing={3}  alignItems="center"  style={{paddingTop:"5%",paddingBottom:"5%", color:'white'}}>


<Query query={GET_RECENT_REPOS}>


{({ loading, error, data }) => (

<Aux>
{loading && <div>Loading...</div>}
{error && <div>Error...</div>}
{data && (

 <UIComponent style = {{display: 'inline', color: 'white'}} pinnedItems = {data.viewer.repositories.edges} header="Recent activity"/>
            )}
          </Aux>
        )}
      </Query>
    </Grid>
  </Grid>
  </Aux>


  )}
};

export default PinnedItems;
