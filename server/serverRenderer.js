// functionality to perform ssr for APP component
import App from '../src/App';

const path = require('path');
const fs = require('fs');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const serverRenderer = (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal server error occured.')
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    )
  });
};

module.exports = {
  serverRenderer,
}