# C2J-J2C

A simple CSV to JSON and vice versa convertor

### Progress so far

This alpha release contains csv to json conversion feature.

### Future Plans

The upcoming releases will include ( not limited to ):

- json to csv conversion
- additional flags to remove comments from csv files

### How to use?

The example shown below is the easiest way to implement this module:

```js
const { csv2json } = require('./index.js');

(async () => {
  try {
    const opStream = await csv2json('../test_files/sample.csv', {
      delimiter: ',',
      headers: true,
    });

    for await (const line of opStream) {
      console.log('\n', line);
    }
  } catch (e) {
    console.log(e);
  }
})();
```

Note: This is an beta release for csv to json conversion feature. We will be implementing json to csv conversion feature as well as other advanced features in module in upcoming releases.
