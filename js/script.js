var advice_id = document.querySelector('#advice');
var advice_quote = document.querySelector('#quote');
var dice = document.querySelector('#dice');

randomQuote();

function randomQuote(){

    var request = new XMLHttpRequest();
    request.open('GET','https://api.adviceslip.com/advice');
    request.responseType = 'json'
    request.send();

    request.onload = function(){

        advice_id.innerHTML = `advice #${request.response.slip.id}`
        advice_quote.innerHTML = `"${request.response.slip.advice}"`

    }

}

dice.addEventListener('click',function(){

    randomQuote();

});

