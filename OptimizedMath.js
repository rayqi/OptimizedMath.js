const opMath = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      console.log("The number '" + i + "' is divisible by two and three.")
    } else if (i % 3 === 0) {
      console.log("The number '" + i + "' is divisible by three.")
    } else if (i % 2 === 0) {
      console.log("The number '" + i + "' is even.")
    } else {
      console.log("The number '" + i + "' is  odd.")
    }
  }
}

opMath(100);