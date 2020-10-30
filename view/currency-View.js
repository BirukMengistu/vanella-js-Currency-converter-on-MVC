const iconUrlDFirstString = 'src="http://openweathermap.org/img/w/'

class ValutaView{
    loadCountry() {
        Helper.hide('main-container');
        let html = '<select id = "sle-Coun" style="width: 400px" >';
            for (let i=0; i< Current.countries.length; i++) {
            html += '<option value='+ Current.countries[i].City+'>';
                html +=  Current.countries[i].City + ' ';
            html += '</option>';     
        }
        html += '</select>';
        Helper.setHtml('select-country', html);
        Helper.show('country-list-container');
    }
    

     showExchangeRates() {
        Helper.hide('main-container');
        let html = '<table style="width: 400px">';
            html += '<tr><td>Country</td><td>Currency </td><td>Rates</td></tr>';
            for (let i=0; i< Current.countries.length; i++) {
            html += '<tr>';
                html += '<td>' + Current.countries[i].name + '</td>';
                html += '<td>' + Current.countries[i].currency + '</td>';
                html += '<td>' + Number(Current.countries[i].exchangeRate).toFixed(2) + '</td>';
                // html += '<td><button class="eGetValue" index="' + i +  ' ">Väj</button>';
            html += '</tr>';     
        }
        html += '</table>';
        Helper.setHtml('country-list', html);
        Helper.show('country-list-container');
    }
    showCityWeatherAndCurrency(){
    
    }
    init(countries, valutor) {
        for (let i=0; i<countries.length; i++) {
            countries[i].exchangeRate = valutor.conversion_rates[countries[0].currency] / valutor.conversion_rates[countries[i].currency];
        }
        let htmlSelect = '';
        for (let i=0; i<countries.length; i++) {
            htmlSelect += '<option value="' + i + '">' +  countries[i].name + ' (' + countries[i].currency + ')</option>';
        }   
        Helper.setHtml('exchange-from', htmlSelect);
        Helper.setHtml('exchange-to', htmlSelect);
    }

   
    showExchangeRate(newAmount) {
        Helper.setHtml('new-amount', newAmount);
    }
    showExchangeRatesBack() {
        Helper.hide('country-list-container');
        Helper.show('main-container');
    }
    doExchangeRates() {
        Helper.hide('main-container');
        Helper.show('exchange-container');
    }
    doExchangeRatesBack() {
        Helper.hide('exchange-container');
        Helper.show('main-container');
    }

    applyIcon(icon){

        if(icon === '01d'){
            return ('wi-day-sunny');
        }
        else if(icon === '01n'){
            return ('wi-night-clear');	
        }
        else if(icon === '02d' || '02n'){
            return ('wi-cloudy');
        }
        else if(icon === '03d' || '03n' || '04d' || '04n'){
            return ('wi-night-cloudy');
        }
        else if(icon === '09d' || '09n'){
            return ('wi-showers');
        }
        else if(icon === '10d' || '10n'){
            return ('wi-rain');	
        }
        else if(icon === '11d' || '11n'){
            return ('wi-thunderstorm');
        }
        else if(icon === '13d' || '13n'){
            return ('wi-snow');
        }
        else if(icon === '50d' || '50n'){
            return ('wi-fog');
        }
        else { // whoa, desctruction!
            return ('wi-meteor'); 
        }
    }
    renderData = (location, forecast) => {
       const currentWeather = forecast[0].weather[0];
       const widgetHeader = `<h1>${location}</h1><small>${currentWeather.main.description}</small>`;
        let current_temp ='';
        current_temp +=  '<img src="http://openweathermap.org/img/w/'+ forecast[0].weather[0].icon + '.png" >'+ Math.round(forecast[0].main.temp) + '<i class="wi wi-degrees"></i>'; 
        Helper.setHtml('weather-content__temp', current_temp);
        forecast.forEach(day => {
           
            let date = new Date(day.dt * 1000);
            Helper.setHtml('weather-content__overview', date.getDate());  
            let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
            let name = days[date.getDay()];
            let dayBlock = document.createElement("div");
                dayBlock.className = 'forecast__item';
                dayBlock.innerHTML = `<div class="forecast-item__heading">${name}
                                     <img style="hieght:20px" src='http://openweathermap.org/img/w/${day.weather[0].icon}.png'/>
                                     <span class="degrees"> ${ Math.round(day.main.temp)} <i class="wi wi-degrees"></i></span></div>`
                //Helper.setHtml(,);
                document.getElementById('component__forecast-box').appendChild(dayBlock);
        });
        
      }

}