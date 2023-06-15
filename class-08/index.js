const { format } = require("date-fns");

//05 de october de 2020
let date = new Date(2020, 9, 5);
console.log(format(date, "dd 'de' MMMM 'de' yyyy'"));
//05/10/2020
console.log(format(date, "dd/MM/yyyy"));
//5 oct
console.log(format(date, "d MMM"));
//05 oct 2020
console.log(format(date, "dd MMM yyyy"));
//05 de oct de 2020
console.log(format(date, "dd 'de' MMM 'de' yyyy"));
//05/oct
console.log(format(date, "dd/MMM"));
