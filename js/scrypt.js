"use strict"

const todayDate = document.querySelector('.footer__todaydate');

let date = new Date();
//console.log(date.toLocaleDateString());
todayDate.innerHTML = date.toLocaleDateString();

//console.log(fetch('https://www.nbrb.by/services/xmlexrates.aspx?ondate=01/31/2011'));


let currency = { USD: '2.55', EUR: '2.68', RUB: '3.84' };


const recieveCurrency = document.querySelector('.value__input_recieve');
const sellByn = document.querySelector('.value__input_sell');

const valueOptionUsd = document.querySelector('.value__option_usd');
const valueOptionEur = document.querySelector('.value__option_eur');
const valueOptionRub = document.querySelector('.value__option_rub');

const valueSelectionCurrency = document.querySelector('.value__selection_currency');

const selectedOption = document.querySelector('.value__option');

/*--------------------------------------------*/
//Установка курсов на плашках
const valueUsd = document.querySelector('.currency__value_usd');
const valueEur = document.querySelector('.currency__value_eur');
const valueRub = document.querySelector('.currency__value_rub');

valueUsd.innerHTML = currency.USD;
valueEur.innerHTML = currency.EUR;
valueRub.innerHTML = currency.RUB;
/*--------------------------------------------*/


sellByn.addEventListener('keyup', currencyRecieve);
valueSelectionCurrency.addEventListener('change', currencyRecieve);


function currencyRecieveUsd() {
    if (valueOptionUsd.selected) {
        const newNumberRecieve = sellByn.value / currency.USD;
        recieveCurrency.value = newNumberRecieve.toFixed(2);
    };
};

/*
function change() {
    const newNumberRecieve = sellByn.value / currency.USD;
    recieveCurrency.value = newNumberRecieve.toFixed(2);
}
*/

//valueSelectionCurrency.addEventListener('click', currencyRecieve);


function currencyRecieve() {
    if (valueOptionUsd.selected) {
        const newNumberRecieve = sellByn.value / currency.USD;
        recieveCurrency.value = newNumberRecieve.toFixed(2);
    };
    if (valueOptionEur.selected) {
        const newNumberRecieve = sellByn.value / currency.EUR;
        recieveCurrency.value = newNumberRecieve.toFixed(2);
    };
    if (valueOptionRub.selected) {
        const newNumberRecieve = sellByn.value / currency.RUB;
        recieveCurrency.value = newNumberRecieve.toFixed(4) * 100;
    };
}


recieveCurrency.addEventListener('keyup', currencyGet);

function currencyGet() {
    if (valueOptionUsd.selected) {
        const newNumberSell = recieveCurrency.value * currency.USD;
        sellByn.value = newNumberSell.toFixed(2);
    };
    if (valueOptionEur.selected) {
        const newNumberSell = recieveCurrency.value * currency.EUR;
        sellByn.value = newNumberSell.toFixed(2);
    };
    if (valueOptionRub.selected) {
        const newNumberSell = recieveCurrency.value * currency.RUB;
        sellByn.value = newNumberSell.toFixed(4) / 100;
    };
}


/*-------------------DARK MODE-------------------------*/
const darkModeButton = document.querySelector('.darkmode__button');
const darkmodeButtonSwitcher = document.querySelector('.darkmode__button')

darkmodeButtonSwitcher.innerHTML = 'DARK MODE';

darkModeButton.addEventListener('click', switchMode);



function switchMode() {
    document.body.classList.toggle('_dark');
    darkmodeButtonSwitcher.classList.toggle('_daymode');
    const daymodeButtonSwitcher = document.querySelector('._daymode');
    if (daymodeButtonSwitcher) {
        daymodeButtonSwitcher.innerHTML = 'DAY MODE';
    }
    else {
        darkmodeButtonSwitcher.innerHTML = 'DARK MODE';
    }
}

