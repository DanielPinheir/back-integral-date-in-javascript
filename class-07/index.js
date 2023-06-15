const isSale = (dateStartSale, dateCustomer) => {
  const milisecondsDay = 24 * 60 * 60 * 1000;
  const miliseconds30days = milisecondsDay * 30;
  const timestampDateStartSale = +dateStartSale;
  const timestampDateFinishSale = timestampDateStartSale + miliseconds30days;
  const dateFinishSale = new Date(timestampDateFinishSale);

  return dateFinishSale >= dateCustomer ? true : false;
};

const dateStartSale = new Date(2021, 3, 25, 12);
const dateCustomer = new Date(2021, 4, 26, 12);

console.log(isSale(dateStartSale, dateCustomer));
