const makeUserEntity = ({ helper }) => {
  const { customFunctions } = helper;
  const { currentDate } = customFunctions;

  const validateUserCreation = async ({ data }) => {
    var { fullName, userName, password } = data;
    if (fullName == "" || fullName == undefined) {
      throw new Error("Full name is required");
    } else if (userName == "" || userName == undefined) {
      throw new Error("User name is required");
    } else if (password == "" || password == undefined) {
      throw new Error("Password is required");
    } else if (password.length < 8) {
      throw new Error("Password length has to be greater than 8 characters");
    }
    //TODO: the password of the user needs to be hashed before storing it in the DB
    var user = {
      type: "user",
      fullName: fullName.toString().trim(),
      userName: userName.toString().trim(),
      password: password.toString().trim(),
      createdDate: currentDate().timestamp,
    };

    return user
  };

  return {
    validateUserCreation,
  };
};

module.exports = { makeUserEntity };
