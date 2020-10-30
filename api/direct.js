const megajs = require('megajs');
const mime = require('mime');

module.exports = (req, res) => {
  let link = decodeURIComponent(req.query.link);
  console.log(link);
  let file = megajs.file(link);
  const options = {
    maxConnections: 10,
    initialChunkSize: 64000,
    chunkSizeIncrement: 64000,
    maxChunkSize: 1000000,
    returnCiphertext: false
  };

  file.loadAttributes((err, file) => {
    console.log(err);
    file.download(options, (err, data) => {
      console.log(err);
      res.setHeader('Content-Type', mime.getType(file.name));
      return res.status(200).send(data);
    });
  });
};
