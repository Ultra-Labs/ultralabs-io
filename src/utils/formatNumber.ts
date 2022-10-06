const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const COUNT_ABBRS = ["", "K", "M", "B", "T"];

export const formatNumber = (count: number, withAbbr = true, decimals = 2) => {
  if (count.toString().length < 6) {
    return numberWithCommas(count);
  }
  const i = count === 0 ? count : Math.floor(Math.log(count) / Math.log(1000));
  const result = `${numberWithCommas(
    parseFloat((count / 1000 ** i).toFixed(decimals))
  )}`;
  let letter = "";
  if (withAbbr) {
    letter += ` ${COUNT_ABBRS[i]}`;
  }
  return { number: result, letter };
};
