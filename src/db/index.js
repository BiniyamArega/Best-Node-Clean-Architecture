const { makeDbSetup } = require("./dbConfig");
const { makeDbQuery } = require("./query");

const makeDb = ({ helper }) => {
  const db = makeDbSetup({ helper });
  const query = makeDbQuery({ db });
  return query;
};

module.exports = { makeDb };
