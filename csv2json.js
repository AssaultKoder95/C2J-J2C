const DEFAULT_DELIMITER = ',';

function getHeaderRow(dataRow, { headers, delimiter = ',' }, counter) {
  let headerRow = [];

  if (counter === 1) {
    if (headers === true) {
      headerRow = dataRow[0].split(delimiter);
    }

    return headerRow;
  }
}

function createHeaderRowMapping(data, headers) {
  return data.reduce((obj, value, i) => {
    const property = headers[i];
    return { ...obj, [property]: value };
  }, {});
}

function addHeadersTransformation(dataRow, headers, counter) {
  if (counter === 1) {
    dataRow.shift();
  }

  return dataRow.reduce((arr, row) => {
    const data = row.split(DEFAULT_DELIMITER);
    const modifiedDataRow = createHeaderRowMapping(data, headers);
    return [...arr, modifiedDataRow];
  }, []);
}

function delimiterTransformation(dataRow, delimiter) {
  return dataRow.map((element) => element.split(delimiter).join(DEFAULT_DELIMITER));
}

function withoutHeadersTransformation(dataRow) {
  return dataRow.map((row) => row.split(DEFAULT_DELIMITER));
}
function transform(dataRow, headers, config, counter) {
  if (!(dataRow instanceof Array)) return;

  const { delimiter = DEFAULT_DELIMITER } = config;

  let modifiedDataRow = dataRow;

  if (delimiter !== DEFAULT_DELIMITER) {
    modifiedDataRow = delimiterTransformation(modifiedDataRow, delimiter);
  }

  if (headers.length) {
    modifiedDataRow = addHeadersTransformation(modifiedDataRow, headers, counter);
  } else {
    modifiedDataRow = withoutHeadersTransformation(modifiedDataRow, DEFAULT_DELIMITER);
  }

  return modifiedDataRow;
}

async function* getDataRows(dataStream) {
  let dataRow = '';

  for await (let dataChunk of dataStream) {
    const data = (dataRow + dataChunk).split('\r\n');
    dataRow = data.pop();
    yield data;
  }

  yield dataRow;
}

async function* convertToJSON(source, config) {
  try {
    let counter = 0;
    for await (let dataRow of getDataRows(source)) {
      ++counter;
      const headerRow = getHeaderRow(dataRow, config, counter);
      yield transform(dataRow, headerRow, config, counter);
    }
  } catch (error) {
    throw error;
  }
}

module.exports = {
  convertToJSON,
};
