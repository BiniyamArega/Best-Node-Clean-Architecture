const { makeController } = require("./controllers");
const { makeDb } = require("./db");
const { makeHelper } = require("./helpers");
const { makeServer } = require("./server");
const { makeApi } = require("./api");


const helper = makeHelper();
const server = makeServer({ helper });
const db = makeDb({ helper });
const controller = makeController({ db, helper });
const api = makeApi({ router: server.router, controller, helper });
