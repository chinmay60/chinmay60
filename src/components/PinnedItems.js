import React, { Suspense } from "react";
import { gql, useQuery } from "@apollo/client";

import Aux from "./Auxilliary";
import Grid from "@material-ui/core/Grid";
import Bioinfo from "./BioInfo";
import Header from "./Header";
import Experience from "./Experience";
import { LinearProgress } from "@material-ui/core";

const UIComponent = React.lazy(() => import("./UIComponent"));

const GET_REPO_INFO = gql`
  query {
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
  query {
    viewer {
      id
      url
      name
      avatarUrl
      bio
      company
      repository(name: "chinmay60") {
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
`;

const style = {
  color: "white",
  textAlign: "center",
  fontStyle: "italic",
  marginTop: "5%",
  marginLeft: "auto",
  marginRight: "auto",
  fontFamily: "Roboto",
};

const PinnedItems = (props) => {
  const {
    loading: loading_repoinfo,
    error: error_repoinfo,
    data: data_repoinfo,
  } = useQuery(GET_REPO_INFO);
  const {
    loading: loading_bioinfo,
    error: error_bioinfo,
    data: data_bioinfo,
  } = useQuery(GET_BIO_INFO);
  const {
    loading: loading_recentreops,
    error: error_recentreops,
    data: data_recentreops,
  } = useQuery(GET_RECENT_REPOS);
  let loading = <LinearProgress />;
  let experience = null;
  if (data_recentreops && data_bioinfo && data_repoinfo) {
    experience = <Experience />;
    loading = null;
  }

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50%" }}>{loading}</div>
    );
  } else {
    return (
      <Aux>
        <Header />
        <Grid container alignItems="center">
          <Aux>
            {loading_bioinfo && <div>Loading...</div>}
            {error_bioinfo && <div>Error...</div>}
            {data_bioinfo && (
              <Suspense fallback={<div>Loading...</div>}>
                {" "}
                <Bioinfo info={data_bioinfo.viewer} />
              </Suspense>
            )}
          </Aux>

          <Grid container direction="row" spacing={4} alignItems="stretch">
            <Aux>
              {loading_repoinfo && <div></div>}
              {error_repoinfo && <div>Error...</div>}
              {data_repoinfo && (
                <Suspense fallback={<div>Loading...</div>}>
                  <UIComponent
                    pinnedItems={data_repoinfo.viewer.pinnedItems.edges}
                    header="Featured Projects"
                  />
                </Suspense>
              )}
            </Aux>
          </Grid>

          <Grid
            container
            direction="row"
            spacing={3}
            alignItems="stretch"
            style={{ paddingBottom: "5%" }}
          >
            <Aux>
              {loading_recentreops && <div> </div>}
              {error_recentreops && <div>Error...</div>}
              {data_recentreops && (
                <Aux>
                  <Suspense fallback={<div>Loading...</div>}>
                    <UIComponent
                      style={{ display: "inline" }}
                      pinnedItems={data_recentreops.viewer.repositories.edges}
                      header="Recent activity"
                    />

                    {experience}
                    <p style={style}>
                      Designed and Built by Chinmay Vinchurkar
                    </p>
                  </Suspense>
                </Aux>
              )}
            </Aux>
          </Grid>
        </Grid>
      </Aux>
    );
  }
};

export default PinnedItems;
