import request from "superagent";
import lodash from "lodash";
import qs from "query-string";

const SPACEX_BASE_URL = `https://api.spaceXdata.com/v3/launches`;

// constructing url in a dynamic manner with query params
function constructUrl({ launch_success, land_success, launch_year }, baseUrl) {
  const queryParams = lodash.merge({ launch_success, land_success, launch_year });
  const queryString = qs.stringify(queryParams);

  const apiUrl = `${baseUrl}?${queryString}&limit=100`;

  return apiUrl;
}

// Data service for application
class SpacexDataService {

  // get all details for launch programs
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

  // get all details for launch programs based on query paramas passed
  getLaunchDetailsByQuery(options, done) {
    const url = constructUrl(options, `${SPACEX_BASE_URL}`);
    request
      .get(url)
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