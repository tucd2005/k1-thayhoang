// console.log(Number(true));
// console.log(Number(false));
// console.log(Number("tu"));
// console.log(Number(null));
// console.log(Number(undefine

// const a = window.prompt("nhap chieu cao cua m : ");
// const b = window.prompt("nhap chieu cao cua m : ");

// const BMI = a / b ** 2;

// if (BMI < 18.5) {
//   ("thieus can");
// } else if (18.5 <= BMI < 23) {
//   ("bing thuogn");
// } else {
//   ("thua can");
// }
// return BMI;

const height = window.prompt("nhap chieu cao  cua m: ");
const weight = window.prompt("nhap can nang cua m: ");

function calcBMI(weight, height) {
  const BMI = (weight / height) ^ 2;

  switch (true) {
    case BMI < 18.5: {
      console.log(BMI, "Thiếu cân");
      break;
    }
    case 18.5 <= BMI < 23: {
      console.log(BMI, "Bình thường");
      break;
    }
    case 23 <= BMI < 25: {
      console.log(BMI, "Thừa cân");
      break;
    }
    default:
      console.log(BMI, "Béo phì");
  }
}
calcBMI(weight, height);
