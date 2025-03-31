function checkPrimeNumber(number) {
  for (let i = 1; i < number; i++) {
    console.log(i);

    if (number % i === 0) {
      console.log("la so nguyen to");
    } else {
      console.log("khong phai so nguyen to");
    }
  }
}

checkPrimeNumber(100);
