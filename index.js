require('dotenv');
const server = require('./app');
const PORT = process.env.PORT || 5000
// const PORT = 5000

// server.listen(PORT, () => console.log(`server listening on ${PORT}`));

server.listen(PORT, () => console.log(`server listening on ${PORT}`));
