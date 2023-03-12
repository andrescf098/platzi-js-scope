let myMoney = 0
function moneyBox(coins) {
    myMoney += coins;
    console.log(`MoneyBox: $${myMoney}`);
}
moneyBox(5);
moneyBox(5);

function myMoneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
}

const g = myMoneyBox();

g(5)
g(5)