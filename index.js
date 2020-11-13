const http = require('http');
const fs = require('fs').promises;
const megajs = require('megajs');
const mime = require('mime');

http.createServer((req, res) => {
  const path = new URL(req.url, 'http://localhost:3000');
  switch (path.pathname) {
    case '/':
      indexRoute(req, res);
      break;
    case '/api/direct/':
      directRoute(req, res, path);
      break;
    default:
      console.log(404);
      res.end();
      break;
  }
}).listen(process.env.PORT, () => {
  console.log('Listening on 3000 port');
});

function indexRoute(req, res) {
  res.setHeader('Content-Type', 'text/html');
  fs.readFile(__dirname + '/index.html')
    .then(result => {
      res.end(result)
    })
    .catch(err => {
      res.writeHead(500);
      res.end(err);
      return;
    });
}

function directRoute(req, res, path) {
  let link = decodeURIComponent(path.searchParams.get('link'));
  let file = megajs.file(link);
  const options = {
    maxConnections: 10,
    initialChunkSize: 64000,
    chunkSizeIncrement: 64000,
    maxChunkSize: 1000000,
    returnCiphertext: false
  };

  file.loadAttributes((err, file) => {
    file.download(options, (err, data) => {
      console.log(file.name);
      res.setHeader('Content-Type', mime.getType(file.name));
      res.setHeader('Cache-Control', 'public, max-age=157784760, s-maxage=157784760');
      res.end(data);
    });
  });
}