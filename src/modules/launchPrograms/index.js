// react imports
import React from 'react';

// material ui imports
import { Grid, Button, Typography, Divider } from '@material-ui/core';

// components and service imports
import ProgramCard from './programCard';
import LoadingPlaceholder from '../common/loadingPlaceholder';
import SpaceXService from "../../services/spacexDataService";

// class component
class HomeComponent extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      spacexLaunchData: [],
      years: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
      boolean: ["true", "false"],
      launchStatus: "",
      landStatus: "",
      selectedYear: "",
      isLoading: true,
      hasError: false
    }
  }

  componentDidMount() {
    SpaceXService.getAllLaunchDetails((err, results) => {
      if (err) {
        return this.setState({ hasError: true, isLoading: false });
      }
      this.setState({ spacexLaunchData: results, isLoading: false });
    })
  }

  applyYearFilter(year) {
    this.setState({ selectedYear: year }, () => {
      this.getFilteredResults();
    });
  }

  applyLaunchFilter(launch) {
    this.setState({ launchStatus: launch }, () => {
      this.getFilteredResults();
    });
  }

  applyLandFilter(land) {
    this.setState({ landStatus: land }, () => {
      this.getFilteredResults();
    });
  }


  getFilteredResults() {
    this.setState({ isLoading: true })
    const options = {
      launch_success: this.state.launchStatus,
      land_success: this.state.landStatus,
      launch_year: this.state.selectedYear,
    }
    SpaceXService.getLaunchDetailsByQuery(options, (err, results) => {
      if (err) {
        return this.setState({ hasError: true, isLoading: false });
      }
      this.setState({ spacexLaunchData: results, isLoading: false });
    })
  }

  // future scope, to be able to reset the applied filters
  resetFilters() {
    this.setState({
      selectedYear: undefined,
      launchStatus: undefined,
      landStatus: undefined
    })
  }

  render() {
    const { spacexLaunchData, years, boolean } = this.state;
    if (this.state.hasError) {
      return <Typography variant="h3" aling="center">{"Sorry, something went wrong. Please try again later."}</Typography>
    } else {
      {/* Main Data Rendering Logic */ }
      return (
        <Grid container direction="row"
          justify="space-evenly"
          alignItems="flex-start"
        >
          {/* Filter options Rendering logic */}
          <Grid item xs={10} sm={2}>

            <Grid container direction="column"
              justify="center"
              alignItems="center"
              spacing={2}
            >

              <Grid item xs={12}>
                <Grid container
                  spacing={2}
                >
                  <Grid item xs={12}>
                    <Typography align="left" variant="h5"><strong>{"Filters"}</strong></Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item xs={12}>
                    <Typography align="center">{"Launch year"}</Typography>
                    <Divider />
                  </Grid>
                  {years.map((year, i) => {
                    return (
                      <Grid item key={i} xs={6}>
                        <Grid container direction="row"
                          justify="center"
                          alignItems="center">
                          <Grid item>
                            <Button color={this.state.selectedYear === year ? "primary" : "secondary"} variant="contained" onClick={() => this.applyYearFilter(year)}>{year}</Button>
                          </Grid>
                        </Grid>
                      </Grid>)
                  })}
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item xs={12}>
                    <Typography align="center">{"Successful Launch"}</Typography>
                    <Divider />
                  </Grid>
                  {boolean.map((bool, i) => {
                    return (
                      <Grid item key={i} xs={6}>
                        <Grid container direction="row"
                          justify="center"
                          alignItems="center">
                          <Grid item>
                            <Button color={this.state.launchStatus === bool ? "primary" : "secondary"} variant="contained" onClick={() => this.applyLaunchFilter(bool)}>{bool}</Button>
                          </Grid>
                        </Grid>
                      </Grid>)
                  })}
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item xs={12}>
                    <Typography align="center">{"Successfull Landing"}</Typography>
                    <Divider />
                  </Grid>
                  {boolean.map((bool, i) => {
                    return (
                      <Grid item key={i} xs={6}>
                        <Grid container direction="row"
                          justify="center"
                          alignItems="center">
                          <Grid item>
                            <Button color={this.state.landStatus === bool ? "primary" : "secondary"} variant="contained" onClick={() => this.applyLandFilter(bool)}>{bool}</Button>
                          </Grid>
                        </Grid>
                      </Grid>)
                  })}
                </Grid>
              </Grid>

            </Grid>

          </Grid>
          {/* Cards rendering logic */}
          <Grid item xs={10} sm={9}>
            {!this.state.isLoading ?
              (spacexLaunchData.length ?
                <Grid container direction="row" justify="center"
                  alignItems="center" spacing={2}>
                  {spacexLaunchData.map((programData, i) => {
                    return (
                      <Grid item key={i} xs={12} sm={6} md={6} lg={3}>
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
                    <Typography variant="h3" aling="center">{"No data found for the selected filters. Try resetting the filters."}</Typography>
                  </Grid>
                </Grid>)
              :
              <Grid container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={10}>
                  <LoadingPlaceholder />
                </Grid>
              </Grid>
            }
          </Grid>
        </Grid>
      )
    }
  }

}

export default HomeComponent;
