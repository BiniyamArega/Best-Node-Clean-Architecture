const makeUserStore = ({ db, helper }) => {
  const storeUser = async ({ data }) => {
    //TODO: Add a code to store the validated user to the DB
    console.log(data)
  }; 

  return {storeUser}
};

module.exports = { makeUserStore };
