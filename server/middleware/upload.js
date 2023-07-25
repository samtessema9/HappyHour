const multer  = require('multer')

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('menu');


const handleFileUpload = (req, res, next) => {
    console.log('middleware hit')

    upload(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        console.log('error uploading')
        return res.status(400).send('Error uploading the file.');
      } else if (err) {
        return res.status(500).send('An error occurred while uploading the file.');
      }
  
      if (!req.file) {
        console.log('no file')
        return res.status(400).send('No file uploaded.');
      }
  
      // The uploaded file is available in req.file

      next();
    });
  };
  
  module.exports = handleFileUpload;

