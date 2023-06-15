const isOpen = (obejectDate) => {
  const hour = obejectDate.getHours();
  const day = obejectDate.getDay();
  if (Number(day) === 6) {
    return Number(hour) < 8 || Number(hour) > 12 ? false : true;
  }
  if (Number(day) < 1 || Number(hour) < 8 || Number(hour) > 18) {
    return false;
  }
  return true;
};

let actualDate = new Date(2021, 3, 25, 12);
console.log(isOpen(actualDate));

actualDate = new Date(2021, 3, 26, 12);
console.log(isOpen(actualDate));

actualDate = new Date(2021, 3, 26, 7, 59);
console.log(isOpen(actualDate));

actualDate = new Date(2021, 3, 24, 9, 30);
console.log(isOpen(actualDate));
