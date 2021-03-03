export const formatBigNumbers = (number) => {
  const suffixes = ["", "K", "M", "B", "T"];
  const digits = Math.floor(("" + Math.floor(number)).length / 3);
  var shortNumber = parseFloat(
    (digits !== 0 ? number / Math.pow(1000, digits) : number).toPrecision(2)
  );
  if (shortNumber % 1 !== 0) {
    shortNumber = shortNumber.toFixed(1);
  }
  return shortNumber + suffixes[digits];
};
