import React from 'react';
import Aux from './Auxilliary'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import CodeIcon from '@material-ui/icons/Code';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';


export default function FullWidthGrid(props) {

return (

<Aux>
        <Grid item xs={12} style = {{color:'#F5F5F5'}}>

      <Typography  variant="h5" component="h5" >
        <span > Software Engineer Intern - CloudChef</span>
          <span style = {{color:'#F5F5F5', fontSize:15, paddingLeft:5}}>(2018-2019)</span>
      </Typography>

      <p>

      As a Software Engineer Intern @CloudChef which is a food based start-up in Mumbai I got to work with some exiting domains and Tech.
      <br /> My work included:
  </p>


      <List >
      <ListItem alignItems="flex-start">
      <ListItemAvatar>
      <CodeIcon />
      </ListItemAvatar>
      <ListItemText
      primary="Building methods in python to classify various ingredients based on parameters like pH, L-values (HSL color space), density etc. which was used to make programmatic changes in recipes to ensure a standardized final output"
        />
</ListItem>

<Divider variant="inset"  style={{backgroundColor:"#1dc690"}} component="li" />

<ListItem alignItems="flex-start">
<ListItemAvatar>
<CodeIcon />
</ListItemAvatar>
<ListItemText
primary="Engineering component APIs for temperature sensing, heat control in python for automation of product-making"
/>
</ListItem>

<Divider variant="inset"  style={{backgroundColor:"#1dc690"}} component="li" />

<ListItem alignItems="flex-start">
<ListItemAvatar>
<CodeIcon />
</ListItemAvatar>
<ListItemText
primary="Creating a python library to establish serial communication between Raspberry pi and Arduino on USB protocol to achieve internal functioning of different Hardware Equipment Models in an automated tea-making product"
/>
</ListItem>

</List>

</Grid>

</Aux>
)
}
