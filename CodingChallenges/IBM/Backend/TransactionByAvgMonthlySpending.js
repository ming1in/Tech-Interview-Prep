const https = require('https')

function getTransactions(url) {
  return new Promise((resolve, reject) => {
    https.get(url, response => {
      let results = ""
      response.on("data", chunk => {
        results += chunk
      })
      response.on("end", () => {
        resolve(JSON.parse(results).data)
      })
    })
  })
}

function getTotalPages(url) {
  return new Promise((resolve, reject) => {
    https.get(url, response => {
      let results = ""
      response.on("data", chunk => {
        results += chunk
      })
      response.on("end", () => {
        resolve(JSON.parse(results).total_pages)
      })
    })
  })
}

function getAverage(array) {
  return array.reduce((a, b) => a + b) / array.length
}

async function getUserTransaction(uid, txnType, monthYear) {
  const baseUrl = `https://jsonmock.hackerrank.com/api/transactions/search?userId=${uid}&txnType=${txnType}&page=1`
  const month = parseInt(monthYear.split('-')[0])
  const year = parseInt(monthYear.split('-')[1])

  console.log(monthYear)

  getTotalPages(baseUrl).then(totalPages => {
    let page = 1
    var pages = []

    while (page <= totalPages) {
      const url = `https://jsonmock.hackerrank.com/api/transactions/search?userId=${uid}&txnType=${txnType}&page=${page}`

      pages.push(getTransactions(url))
      page++
    }

    Promise.all(pages).then(page => {
      var monthlyTransactions = []
      var monthlySpending = []

      page.forEach(transactions => {
        transactions.forEach(transaction => {
          var generatedAt = new Date(transaction.timestamp)

          if (generatedAt.getMonth() + 1 == month && generatedAt.getFullYear() === year) {
            monthlyTransactions.push(transaction)
            monthlySpending.push(parseFloat(transaction.amount.replace(/[^0-9.-]+/g, '')))
          }
        })
      })

      console.log(monthlySpending)

      var averageMonthlySpending = getAverage(monthlySpending)
      console.log(averageMonthlySpending)

      var result = monthlyTransactions.filter(transaction => {
        var amount = parseFloat(transaction.amount.replace(/[^0-9.-]+/g, ''))
        return amount > averageMonthlySpending
      }).map(transaction => { return transaction.id })

      console.log(result)
      return result
    })
  })
}