const ftoc = function(fahr) {
  let cels = (fahr - 32) * (5/9);
  let celsFixed = cels.toFixed(1);
  return parseFloat(celsFixed);
};

const ctof = function(cels) {
  let fahr = cels * (9/5) + 32
  let fahrFixed = fahr.toFixed(1);
  return parseFloat(fahrFixed);
};

module.exports = {
  ftoc,
  ctof
};
