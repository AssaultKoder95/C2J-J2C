const { csv2json } = require('./index');

// // Example: throw error for invalid file type
// (async () => {
//   try {
//      const opStream = await csv2json('../test_files/non-existent-sample.txt', {
//       delimiter: ',',
//       headers: true,
//     });

//     for await (const line of opStream) {
//       console.log('\n', line);
//     }
//   } catch (e) {
//     console.log(e);
//   }
// })();

// // Example: throw error for non existent file
// (async () => {
//   try {
//      const opStream = await csv2json('../test_files/non-existent-sample.csv', {
//       delimiter: ',',
//       headers: true,
//     });

//     for await (const line of opStream) {
//       console.log('\n', line);
//     }
//   } catch (e) {
//     console.log(e);
//   }
// })();

// // Example: When parsing is done using with config: headers => true & delimiter => ','
// (async () => {
//   try {
//      const opStream = await csv2json('../test_files/sample.csv', {
//       delimiter: ',',
//       headers: true,
//     });

//     for await (const line of opStream) {
//       console.log('\n', line);
//     }
//   } catch (e) {
//     console.log(e);
//   }
// })();

// // Example: When parsing is done using with config: headers => true & delimiter => '>'
// (async () => {
//   try {
//      const opStream = await csv2json('../test_files/sample2.csv', {
//       delimiter: '>',
//       headers: true,
//     });

//     for await (const line of opStream) {
//       console.log('\n', line);
//     }
//   } catch (e) {
//     console.log(e);
//   }
// })();

// // Example: When parsing is done using with config: headers => false & delimiter => ','
// (async () => {
//   try {
//     const opStream = await csv2json('../test_files/sample.csv', {
//       delimiter: ',',
//       headers: true,
//     });

//     for await (const line of opStream) {
//       console.log('\n', line);
//     }
//   } catch (e) {
//     console.log(e);
//   }
// })();

// // Example: When parsing is done using with config: headers => false & delimiter => '>'
// (async () => {
//   try {
//     const opStream = await csv2json('../test_files/sample2.csv', {
//       delimiter: '>',
//       headers: false,
//     });

//     for await (const line of opStream) {
//       console.log('\n', line);
//     }
//   } catch (e) {
//     console.log(e);
//   }
// })();
