# C2J-J2C

A simple CSV to JSON and vice versa convertor

### Progress so far

This alpha release contains CSV to JSON conversion feature.

### Future Plans

The upcoming releases will include ( not limited to ):

- JSON to CSV conversion
- additional flags to remove comments from CSV files
- Access files using remote URL
- Convert CSV string to JSON
- Access via command line

### How to use?

Currently for CSV to JSON conversion, you can pass a config object with two valid options:

- delimiter: it will be used as a separator between the data
- headers: if true, the output JSON will have the header values mapped to the data

for example, for following CSV:

```csv
roll, name, age
1, Arfat, 20
2, Ankush, 19
2, Abhishek, 18
```

if we pass `headers` flag as true, we will recieve the output as:

```json
[
  {
    "roll": 1,
    "name": "Arfat",
    "age": 20
  },
  {
    "roll": 2,
    "name": "Ankush",
    "age": 19
  },
  {
    "roll": 2,
    "name": "Abhishek",
    "age": 18
  }
]
```

Meanwhile if we send `headers` flag as false, we will receive the output as:

```json
[
  [1, "Arfat", 20],
  [2, "Ankush", 19],
  [3, "Abhishek", 18]
]
```

The example shown below is the easiest way to implement this module:

```js
const { csv2json } = require('./index.js');

(async () => {
  try {
    const opStream = await csv2json('../test_files/sample.CSV', {
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

Note: This is an beta release for CSV to JSON conversion feature. We will be implementing JSON to CSV conversion feature as well as other advanced features in module in upcoming releases.
