// react imports
import React from 'react';
import PropTypes from 'prop-types';

// material ui imports
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// class component
export default class SubHeaderPanel extends React.PureComponent {

  render() {
    const { subHeaderText } = this.props;
    return (
      <Grid item xs={12} style={{ background: "#ececec" }}>
        <Grid container alignItems="center">
          <Grid item style={{ marginLeft: "1%" }}>
            <Typography gutterBottom variant="h5"><strong>{subHeaderText}</strong></Typography>
          </Grid>
        </Grid>
      </Grid>
    )
  }

}


SubHeaderPanel.propTypes = {
  subHeaderText: PropTypes.string,
}