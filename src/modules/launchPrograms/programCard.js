import React from 'react';
import PropTypes from 'prop-types'; // validating proptypes

// Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

// functional cmponent
export default function ProgramCard(props) {
  const classes = useStyles();

  console.log(props);
  const { programData } = props;
  return (
    <Card className={classes.root}>
      <Card>
        <CardMedia
          alt={"No Preview"}
          component="img"
          image={programData.links.mission_patch_small}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" noWrap>
            {`${programData.mission_name} # ${programData.flight_number}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>{"Launch Year: "}</strong>{`${programData.launch_year}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>{"Successful Launch: "}</strong>{`${programData.launch_success}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>{"Successful Landing: "}</strong>{`${programData.launch_landing ? programData.launch_landing : "NA"}`}
          </Typography>
        </CardContent>
      </Card>
    </Card>
  );
}

ProgramCard.propTypes = {
  programData: PropTypes.object
}