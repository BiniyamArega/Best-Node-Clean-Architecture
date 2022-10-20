const makeHttpRequest = (controller, helper) => {
  const { customFunctions } = helper;

  return async (req, res, next) => {
    try {
      var http = {
        data: req.body,
        query: req.query,
        parameter: req.params,
        token: req.headers["authorization"],
      };

      var result = await controller(http);
      res.status(200).send({ status: true, result: result });
    } catch (error) {
      console.log(`ERROR: ${error.message}`);
      res.status(400).send({ status: false, error: error.message });
    }
  };
};

const makeApi = ({ router, controller, helper }) => {
  router.get("/test", (req, res) => res.send("working.."))
  router.post("/user", makeHttpRequest(controller.createUser, helper));
  
};

module.exports = { makeApi };
