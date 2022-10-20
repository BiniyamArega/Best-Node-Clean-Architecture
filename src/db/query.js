const makeDbQuery = ({ db }) => {
  const save = async (doc) => {};

  const find = async (query) => {};

  const findById = async (id) => {};

  const update = async (doc) => {};

  const bulkUpdate = async (doc) => {};

  const remove = (doc) => {};

  return { save, find, findById, update, bulkUpdate, remove };
};
module.exports = { makeDbQuery };
