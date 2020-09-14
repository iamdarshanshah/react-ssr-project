// react imports
import React from 'react';

// material ui imports
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// class component
export default class Footer extends React.PureComponent {

  render() {
    return (
      <Grid item xs={12} style={{ background: "#ececec" }}>
        <Grid container justify="center" alignItems="center">
          <Grid item style={{ marginTop: "1%" }}>
            <Typography paragraph gutterBottom align="center" variant="body2">{"Developed By :- "}<strong>{"DARSHAN SHAH(https://github.com/iamdarshanshah/)"}</strong></Typography>
          </Grid>
        </Grid>
      </Grid>
    )
  }

}