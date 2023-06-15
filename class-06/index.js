const isSale = (dateSale, dateCustomer) => {
  return dateSale >= dateCustomer ? true : false;
};

const dateSale = new Date(2021, 3, 25, 12);
const dateCustomer = new Date(2021, 4, 25, 12);

console.log(isSale(dateSale, dateCustomer));
