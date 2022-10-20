const makeCustomFunctions = () => {
  const currentDate = () => {
    var now = Date.now();
    var date = new Date(now);
    return {
      timestamp: now,
      stringDate: `${date.getFullYear()}/${
        date.getMonth() + 1
      }/${date.getDate()}`,
      isoStringDate: new Date(date).toISOString(),
    };
  };

  return { currentDate };
};

module.exports = { makeCustomFunctions };
