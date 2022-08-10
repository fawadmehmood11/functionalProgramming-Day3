const telephoneCheck = (str) => {
  let phnNumber;
  //we are checking if it's begin with 1 or not
  if (str[0] === "1") {
    if (str[1] === " ") {
      phnNumber = str.slice(2);
    } else {
      phnNumber = str.slice(1);
    }
  } else {
    phnNumber = str;
  }

  let numLen = phnNumber.length;

  //we are looking for pattern inside phnNumber
  if (numLen === 12) {
    return (
      (phnNumber[3] === "-" && phnNumber[7] === "-") ||
      (phnNumber[3] === " " && phnNumber[7] === " ")
    );
  } else if (numLen === 13) {
    return phnNumber[0] === "(" && phnNumber[4] === ")" && phnNumber[8] === "-";
  } else if (numLen === 14) {
    return (
      (phnNumber[0] === "(" &&
        phnNumber[4] === ")" &&
        phnNumber[5] === " " &&
        phnNumber[9] === "-") ||
      (phnNumber[1] === " " && phnNumber[5] === " " && phnNumber[9] === " ")
    );
  } else if (numLen === 10) {
    let c = 0;
    for (let i = 0; i < phnNumber.length; i++) {
      if (typeof parseInt(phnNumber[i]) === "number") {
        c += 1;
      }
    }
    if (c === phnNumber.length) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

console.log(telephoneCheck("555-555-5555"));
