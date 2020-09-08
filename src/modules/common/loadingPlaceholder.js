import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

// const useStyles = makeStyles({
//   root: {
//     display: 'flex',
//     '& > * + *': {
//       marginLeft: 'auto',
//     },
//   },
// });

export default function loadingPlaceholder() {
  // const classes = useStyles();

  return (
    <React.Fragment>
      <CircularProgress />
    </React.Fragment>
  );
}
