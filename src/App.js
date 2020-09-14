import React from 'react';

import { Grid } from '@material-ui/core';

import HomeComponent from '../src/modules/launchPrograms/index';
import SubHeaderPanel from '../src/modules/common/subheaderPanel';
import Footer from './modules/common/footer';

const App = () => {
  return (
    <React.Fragment>
      <Grid container style={{ marginBottom: "10px" }}>
        <SubHeaderPanel subHeaderText={"SpaceX Launch Programs"}></SubHeaderPanel>
      </Grid>
      <HomeComponent />
      <Grid container style={{ marginTop: "10px" }}>
        <Footer />
      </Grid>
    </React.Fragment>
  );
}

export default App;
