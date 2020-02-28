require('dotenv');
const server = require('./app');
const PORT = process.env.PORT || 5000
console.log(process.env.NODE_ENV)
server.listen(PORT, () => console.log(`server listening on ${PORT}`));