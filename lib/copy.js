const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md', { encoding: 'utf8' });
const ws = fs.createWriteStream('./1_streams-COPY');

rs.pipe(ws);



// ws.on('pipe', () => {
//   ws.write(data);
// });

// rs.on('data', data => {
//   ws.write(data);
//   ws.write(data);
// });

