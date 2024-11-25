const Json= require("json-server");
const server= Json.create();
const route = Json.router("database.json");
const middle= Json.defaults();
const port= process.env.PORT || 10000;

server.use(middle);
server.use (route);

server.listen(port);