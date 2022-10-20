const { makeUserController } = require("./user");

const makeController = ({ db, helper }) => {
  const userController = makeUserController({ db, helper });
  return { ...userController };
};

module.exports = { makeController };
