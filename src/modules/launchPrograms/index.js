import React from 'react';

import SpaceXService from "../../services/spacexDataService";
import { Grid } from '@material-ui/core';
import ProgramCard from './programCard';
import SubHeaderPanel from '../common/subheaderPanel';
import LoadingPlaceholder from '../common/loadingPlaceholder';


class HomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      spacexLaunchData: []
    }
  }

  componentDidMount() {
    SpaceXService.getAllLaunchDetails((err, results) => {
      console.log(results);
      this.setState({ spacexLaunchData: results });
    })
  }

  render() {
    const { spacexLaunchData } = this.state;
    return (
      <React.Fragment>
        <Grid container style={{ marginBottom: "10px" }}>
          <SubHeaderPanel subHeaderText={"SpaceX Launch Programs"}></SubHeaderPanel>
        </Grid>
        <Grid container direction="row"
          justify="space-evenly"
          alignItems="flex-start">
          <Grid item xs={10} sm={2}>
            <div>Heyyy</div>
          </Grid>
          <Grid item xs={10} sm={9}>
            {spacexLaunchData.length ?
              <Grid container direction="row" justify="space-evenly"
                alignItems="center" spacing={2}>
                {spacexLaunchData.map((programData, i) => {
                  return (
                    <Grid item key={i} item xs={12} sm={3}>
                      <ProgramCard programData={programData}></ProgramCard>
                    </Grid>)
                })}
              </Grid>
              : <Grid container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={10}>
                  <LoadingPlaceholder />
                </Grid>
              </Grid>}
          </Grid>
        </Grid>
      </React.Fragment>)
  }

}

export default HomeComponent;
