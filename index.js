const fs = require('fs');
const { Readable } = require('stream');

const { convertToJSON } = require('./csv2json');

function checkFileType(path) {
  const filePathArray = path.split('.');
  const fileExtension = filePathArray[filePathArray.length - 1];
  return fileExtension.toLowerCase() === 'csv';
}

function validateOptions(options) {
  if (options.headers && typeof options.headers !== 'boolean') {
    throw 'Invalid options passed - header value must be of boolean type';
  }
}

const defaultOptions = {
  headers: true,
};

async function csv2json(path, options) {
  return new Promise((resolve, reject) => {
    try {
      const isCsvFileType = checkFileType(path);

      validateOptions(options);

      const finalOptions = Object.assign(defaultOptions, options);

      if (!isCsvFileType) {
        throw 'We only support csv files. Please try again with a file having csv extension.';
      }

      try {
        if (fs.existsSync(path)) {
          const dataStream = fs.createReadStream(path, { encoding: 'utf8' });
          const stream = Readable.from(convertToJSON(dataStream, finalOptions));
          resolve(stream);
        } else {
          throw `We couldn\'t find the file at this ${path}, are you sure the file exists?`;
        }
      } catch (e) {
        throw e;
      }
    } catch (e) {
      reject(e);
    }
  });
}

module.exports = {
  csv2json,
};
