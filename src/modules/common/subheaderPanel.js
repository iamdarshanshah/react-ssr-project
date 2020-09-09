import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default class SubHeaderPanel extends React.PureComponent {

  shouldComponentUpdate(nextProps) {
    if (nextProps &&
      !(this.props.subHeaderText === nextProps.subHeaderText)) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { subHeaderText } = this.props;
    return (
      <Grid item xs={12} style={{ background: "#ececec" }}>
        <Grid container alignItems="center">
          <Grid item style={{ marginLeft: "1%" }}>
            <Typography variant="h5"><strong>{subHeaderText}</strong></Typography>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}


SubHeaderPanel.propTypes = {
  subHeaderText: PropTypes.string,
}