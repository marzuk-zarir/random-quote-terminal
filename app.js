const chalk = require('chalk')

const { generateRandomNumber } = require('./lib/math/math')
const { getAllQuotes } = require('./lib/quote')

const app = {}

const colors = [
    'red',
    'green',
    'yellow',
    'blue',
    'magenta',
    'cyan',
    'redBright',
    'greenBright',
    'yellowBright',
    'blueBright',
    'magentaBright',
    'cyanBright',
]

app.generateQuote = () => {
    const quotesArray = getAllQuotes()
    const randomColor = colors[generateRandomNumber(0, colors.length - 1)]
    const randomQuote =
        quotesArray[generateRandomNumber(1, quotesArray.length) - 1]

    console.log(chalk[randomColor](randomQuote))
}

app.infinityPrint = () => {
    setInterval(app.generateQuote, 1000)
}

app.infinityPrint()
