const fs = require('fs')

const quote = {}

quote.getAllQuotes = () => {
    const quotesString = fs.readFileSync(`${__dirname}/quote.txt`, 'utf-8')

    if (quotesString) {
        const quotesArray = quotesString.split(/\r?\n/)
        return quotesArray
    } else {
        console.log("File Doesn't exist")
        return false
    }
}

module.exports = quote
