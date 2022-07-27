// Let us begin with an example:

// A man has a rather old car being worth $2000.
// He saw a secondhand car being worth $8000. He wants 
//to keep his old car until he can buy the secondhand one.

// He thinks he can save $1000 each month but the 
//prices of his old car and of the new one 
//decrease of 1.5 percent per month. Furthermore this 
//percent of loss increases of 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.

// Can you help him?

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    numMonths=0
    savings=0
    oldCarPrice=0
    newCarPrice=0
    oldCarPrice=startPriceOld
    newCarPrice=startPriceNew
    let totalMoney=startPriceOld+savings
    while (totalMoney<newCarPrice){
        numMonths++
        savings+=savingperMonth
        //console.log(savingperMonth)
        oldCarPrice=startPriceOld*((100-percentLossByMonth)/100)
        console.log(oldCarPrice)
        newCarPrice=newCarPrice*((100-percentLossByMonth)/100)
       console.log(startPriceNew)
        totalMoney=totalMoney+oldCarPrice+savings
        if (numMonths!=0 && numMonths%2 === 0){
            percentLossByMonth+=.5
        console.log(newCarPrice)
        console.log(totalMoney)
        }
    }

    return numMonths
  }

  console.log(nbMonths(2000, 8000, 1000, 1.5))