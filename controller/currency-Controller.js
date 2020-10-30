
class ValutaController{
    constructor() {}

    init() {
        model.countryList()
        .then(response => response.json())
        .then(function(data) {   
            Current.countries = data;
            model.exchangeRates()
            .then(response => response.json())
            .then(function(data) {   
                view.init(Current.countries, data);
                view.loadCountry();

            })
        })
        .catch(error => alert(error))
    }

    weatherListLoad() {
        model.getWeatherData()
        .then(weatherData => {
            let city = weatherData.city.name;
            let dailyForecast = weatherData.list;
            For_weather=dailyForecast;
            console.log(For_weather);
            view.renderData(city, For_weather);
          });
    }
    
  
   


    processExchange(amount, indexFrom, indexTo) {
        let fromExchangeRate = Current.countries[indexFrom].exchangeRate;   
        let toExchangeRate = Current.countries[indexTo].exchangeRate;     
        let newAmount = model.processExchange(amount, fromExchangeRate, toExchangeRate);
        view.showExchangeRate(newAmount);
    }

    showExchangeRates() {
        view.showExchangeRates(Current.countries);
    }

    doExchangeRates() {
        view.doExchangeRates();
    }
            
    showExchangeRatesBack() {
        view.showExchangeRatesBack();
    }
    showAllInfoCity(){
       
    }

    doExchangeRatesBack() {
        view.doExchangeRatesBack();
    }
}