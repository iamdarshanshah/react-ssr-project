import React from 'react';
import PropTypes from 'prop-types'; // validating proptypes

// Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// functional cmponent
export default function ProgramCard(props) {
  const classes = useStyles();

  console.log(props);
  const { programData } = props;
  return (
    <p>Hii</p>
  );
}

ProgramCard.propTypes = {
  programData: PropTypes.object
}