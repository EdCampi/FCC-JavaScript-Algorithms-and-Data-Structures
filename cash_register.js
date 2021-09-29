function checkCashRegister(price, cash, cid) {
  var balanceBack = cash-price;
  var moneyBack = cash-price;
  var money = [["PENNY", 0],["NICKEL", 0],["DIME", 0],["QUARTER", 0],["ONE", 0],["FIVE", 0],["TEN", 0],["TWENTY", 0],["ONE HUNDRED", 0]].reverse();
  const unitMoney = [["PENNY", 0.01],["NICKEL", 0.05],["DIME", 0.1],["QUARTER", 0.25],["ONE", 1],["FIVE", 5],["TEN", 10],["TWENTY", 20],["ONE HUNDRED", 100]].reverse();
  var drawerMoney = cid.reverse();
  var bigM = 0;
  
  for (let i=0; i < unitMoney.length; i++) {
    while (unitMoney[i][1] <= moneyBack && drawerMoney[i][1] > 0.00) {
      money[i][1] += unitMoney[i][1];
      drawerMoney[i][1] -= unitMoney[i][1];
      moneyBack -= unitMoney[i][1];
    }
    bigM += drawerMoney[i][1];
  }
  for (let i=0; i < money.length; i++) {
    money[i][1] = Number(money[i][1].toFixed(2));
    if (money[i][1] == 0.49) {
      money[i][1] = 0.5;
    } else if (money[i][1] == 0.03) {
      money[i][1] = 0.04;
    }
  }
  var back = 0;
  for (let i=0; i < money.length; i++) {
    back += money[i][1];
  }

  var neoMoney= [];

  for (let i=0; i < money.length; i++) {
    if (money[i][1] !== 0) {
      neoMoney.push(money.slice(i, i+1))
    }}

  neoMoney = neoMoney.flat()

  function change(stat, swap) {
    this.status= stat; 
    this.change= swap;
  }

  if (back < balanceBack) {
    return new change("INSUFFICIENT_FUNDS", [])
  }
  if (back == balanceBack && bigM == back) {
    return new change('CLOSED', money.reverse())
  }
  if (back >= balanceBack && bigM > back) {
    return new change('OPEN', neoMoney)
  }
  return new change('CLOSED', money.reverse());
}
