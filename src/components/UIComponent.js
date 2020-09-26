import moment from 'moment'
import React  from 'react'
import Card from './Card'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Aux from './Auxilliary'


export default function FullWidthGrid(props) {

const repositories = props.pinnedItems
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
                  <Grid item key={repoLink}>
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
          {displayRepositories}
        </Aux>
)
}
