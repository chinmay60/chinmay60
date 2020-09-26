import moment from 'moment'
import React  from 'react'
import Card from './Card'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Aux from './Auxilliary'
import Typography from "@material-ui/core/Typography";

export default function FullWidthGrid(props) {
  const featuredRepoList = []
    let lastCommit
const repositories = props.pinnedItems
repositories
      .map((n: any) => n.node)
      .concat()
      .sort((a: any, b: any) => (a.pushedAt < b.pushedAt ? 1 : -1))
      .forEach((r: any) => featuredRepoList.push(r))
  lastCommit =  moment(featuredRepoList[0].pushedAt).fromNow()


const displayRepositories = Object.keys(repositories)
      .map((igKey) =>{
        const branchCount = repositories[igKey].node.refs.nodes.length
        const recentRef = repositories[igKey].node.refs.nodes
        .concat()
        .sort((a, b) =>
        a.target.pushedDate < b.target.pushedDate ? 1 : -1
        )[0]
        const topics = repositories[igKey].node.repositoryTopics.edges.map(
          (e) => e.node.topic.name
        )
        const commitCount = repositories[igKey].node.refs.nodes.reduce(
          (acc, curr) => acc + curr.target.history.totalCount,
          0
        )

        const lastCommitMsg = recentRef.target.messageHeadline
        const lastCommitTime = moment(recentRef.target.pushedDate).fromNow()
        const lastCommitBranch = recentRef.name
        const repoLink = repositories[igKey].url
        const demoLink = repositories[igKey].homepageUrl
        return (
                  <Grid item xs={12} sm={12} md={4} lg={4} key={repoLink}>
                  <Card
                    topics = {topics}
                    name={repositories[igKey].node.name}
                    description={repositories[igKey].node.description}
                    url={repoLink}
                    messageHeadline={lastCommitMsg}
                    commitMessage={commitCount }
                    commitBranch={lastCommitBranch}
                    date={lastCommitTime}
                    key={repoLink}
                    />
                  </Grid>

              )
      });

return (
        <Aux>

        <Grid item xs={12}>
            <Typography   variant="h5" component="h2">
            {props.header}
          </Typography> <h5>({lastCommit} )</h5>
          </Grid>
          {displayRepositories}
        </Aux>
)
}
