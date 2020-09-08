const express = require('express');
const PORT = 4040;
const app = express();
const router = express.Router();

const path = require('path');
const ssr = require('./serverRenderer');

router.use('^/$', ssr.serverRenderer);

router.use(
  express.static(path.resolve(__dirname, '..', 'build'))
);

app.use(router);

app.listen(PORT, () => {
  console.log(`App server running on port :: ${PORT}`)
});