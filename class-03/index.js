const isOpen = (obejectDate) => {
  const hourActual = obejectDate.getHours();
  if (Number(hourActual) < 8) {
    return false;
  }
  return true;
};

let actualDate = new Date(2015, 1, 1, 12);
console.log(isOpen(actualDate));

actualDate = new Date(2015, 1, 1, 2);
console.log(isOpen(actualDate));
