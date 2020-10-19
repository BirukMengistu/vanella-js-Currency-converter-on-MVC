class ValutaModel{

    async countryList() {
        let promise = await fetch('json/countries.json')
        return promise;
    }
    
    async exchangeRates() {
        let promise = await fetch('https://v6.exchangerate-api.com/v6/547f5391104d30d830f55442/latest/SEK')
        return promise;
    }

    processExchange(amount, fromExchangeRate, toExchangeRate) {
        let newAmount = Number(amount) * Number(fromExchangeRate) /  Number(toExchangeRate);
        newAmount = newAmount.toFixed(2);
        return newAmount;
    }
}