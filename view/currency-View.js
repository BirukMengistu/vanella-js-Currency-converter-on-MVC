class ValutaView{



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
}