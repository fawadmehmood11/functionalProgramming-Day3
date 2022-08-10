let UNIT_AMOUNT = [
  { name: "ONE HUNDRED", value: 100.0 },
  { name: "TWENTY", value: 20.0 },
  { name: "TEN", value: 10.0 },
  { name: "FIVE", value: 5.0 },
  { name: "ONE", value: 1.0 },
  { name: "QUARTER", value: 0.25 },
  { name: "DIME", value: 0.1 },
  { name: "NICKEL", value: 0.05 },
  { name: "PENNY", value: 0.01 },
];

const checkCashRegister = (price, cash, cid) => {
  let changeToGive = cash - price;
  let cashRegister = { status: "", change: [] };

  let sumCid = parseFloat(
    cid
      .map((val) => val[1])
      .reduce((a, b) => a + b, 0)
      .toFixed(2)
  );

  if (sumCid < changeToGive) {
    cashRegister.status = "INSUFFICIENT_FUNDS";
    return cashRegister;
  }

  if (sumCid === changeToGive) {
    cashRegister.status = "CLOSED";
    cashRegister.change = cid;
    return cashRegister;
  }

  let cashArray = [];
  cid = cid.reverse();
  for (let i = 0; i < cid.length; i++) {
    let val = 0;

    /* This while loop will check if amount we have for specific currency unit 
         is in drawer and is greater than change we need to give
         This loop will continue to run till condition is true */

    while (UNIT_AMOUNT[i].value <= changeToGive && cid[i][1] > 0) {
      /* subtracting the amount of specific currency from cash drawer */
      cid[i][1] -= UNIT_AMOUNT[i].value;
      changeToGive = changeToGive.toFixed(2);

      /* subtracting the amount from change */
      changeToGive -= UNIT_AMOUNT[i].value;

      val += UNIT_AMOUNT[i].value;
    }

    if (val > 0) {
      cashArray.push([cid[i][0], val]);
    }
  }

  if (changeToGive > 0) {
    cashRegister.status = "INSUFFICIENT_FUNDS";
    return cashRegister;
  }
  cashRegister.status = "OPEN";
  cashRegister.change = cashArray;
  return cashRegister;
};

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
