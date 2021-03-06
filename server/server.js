// creating express server
const express = require('express');
const PORT = (process.env.PORT || 8000);
const app = express();
const router = express.Router();

const path = require('path');
const ssr = require('./serverRenderer');

router.use(
  express.static(path.resolve(__dirname, '..', 'build'))
);

router.use('^/$', ssr.serverRenderer);

app.use(router);

app.listen(PORT, () => {
  console.log(`App server running on port :: ${PORT}`)
});