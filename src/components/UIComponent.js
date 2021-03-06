import moment from "moment";
import React from "react";
import Card from "./Card";
import Grid from "@material-ui/core/Grid";
import Aux from "./Auxilliary";
import Typography from "@material-ui/core/Typography";

export default function FullWidthGrid(props) {
  const featuredRepoList = [];
  let lastCommit;
  const repositories = props.pinnedItems;
  repositories
    .map((n) => n.node)
    .concat()
    .sort((a, b) => (a.pushedAt < b.pushedAt ? 1 : -1))
    .forEach((r) => featuredRepoList.push(r));
  lastCommit = moment(featuredRepoList[0].pushedAt).fromNow();

  const displayRepositories = Object.keys(repositories).map((igKey) => {
    const recentRef = repositories[igKey].node.refs.nodes
      .concat()
      .sort((a, b) => (a.target.pushedDate < b.target.pushedDate ? 1 : -1))[0];
    const topics = repositories[igKey].node.repositoryTopics.edges.map(
      (e) => e.node.topic.name
    );
    const commitCount = repositories[igKey].node.refs.nodes.reduce(
      (acc, curr) => acc + curr.target.history.totalCount,
      0
    );

    const lastCommitMsg = recentRef.target.messageHeadline;
    const lastCommitTime = moment(recentRef.target.pushedDate).fromNow();
    const lastCommitBranch = recentRef.name;
    const repoLink = repositories[igKey].node.url;
    return (
      <Grid item xs={12} sm={12} md={4} lg={4} key={repoLink}>
        <Card
          topics={topics}
          name={repositories[igKey].node.name}
          description={repositories[igKey].node.description}
          repoimage={repositories[igKey].node.openGraphImageUrl}
          imagebool={repositories[igKey].node.usesCustomOpenGraphImage}
          url={repoLink}
          messageHeadline={lastCommitMsg}
          commitMessage={commitCount}
          commitBranch={lastCommitBranch}
          date={lastCommitTime}
          key={repoLink}
        />
      </Grid>
    );
  });

  return (
    <Aux>
      <Grid item style={{ paddingTop: "5%", paddingBottom: 0 }} xs={12}>
        <Typography variant="h5" component="h2">
          <span style={{ color: "#F5F5F5", fontSize: 20, paddingRight: 5 }}>
            {" "}
            {props.header}{" "}
          </span>
          <span style={{ color: "#F5F5F5", fontSize: 15 }}>
            {" "}
            (last commit {lastCommit})
          </span>
        </Typography>
      </Grid>
      {displayRepositories}
    </Aux>
  );
}
