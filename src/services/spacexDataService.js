import request from "superagent";

const SPACEX_BASE_URL = `https://api.spaceXdata.com/v3/launches?limit=100`;

class SpacexDataService {

  getAllLaunchDetails(done) {
    request
      .get(SPACEX_BASE_URL)
      .end((err, response) => {
        if (err) {
          done({ error: err, response });
        } else {
          done(null, response.body);
        }
      })
  }
}

export default new SpacexDataService();