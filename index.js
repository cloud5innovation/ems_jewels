require('dotenv');
const server = require('./app');
const PORT = process.env.PORT || 5000
console.log(PORT)
server.listen(PORT, () => console.log(`server listening on ${PORT}`));