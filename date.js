


module.exports.getDate = function() {

const today = new Date();
options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};
return today.toLocaleDateString("en-us", options);
};
