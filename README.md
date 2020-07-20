# C2J-J2C

A simple CSV to JSON and vice versa convertor

### Progress so far

This alpha release contains csv to json conversion feature.

### Future Plans

The upcoming releases will include ( not limited to ):

- json to csv conversion
- additional flags to remove comments from csv files

### How to use?

Currently for CSV to JSON conversion, you can pass a config object with two valid options:

- delimiter: it will be used as a separator between the data
- headers: if true, the output json will have the header values mapped to the data

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
