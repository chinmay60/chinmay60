import moment from 'moment'
import React  from 'react'
import Card from './Card'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Aux from './Auxilliary'
import AboutMe from './Aboutme'
import Bio from './Bio'


export default function FullWidthGrid(props) {

const topics = ['Python','C','C++', 'LINUX', 'JavaScript', 'PHP', 'MySQL','PostgreSql', 'MongoDB', 'Redis','Nodejs','React', 'Redux']
return (

  <Grid container direction="row"  spacing={3} alignItems="center" style={{paddingBottom:"5%"}}>
    <Grid item>

      <AboutMe topics={topics} name={props.info.name} company={props.info.company} avatarUrl={props.info.avatarUrl} location = 'Cincinnati,OH (Open to relocation)' profession = 'Software Engieer' school = 'University of Cincinnati' />
    </Grid>
    <Grid item >
      <Bio text={props.info.repository.object.text}/>
    </Grid>
  </Grid>

)
}
