var request = new XMLHttpRequest();
request.open('GET', 'https://api.coinmarketcap.com/v1/ticker/karbowanec/', true);

var elResult = document.getElementById('krbprice');

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
	elResult.innerHTML = request.responseText;
    var data = JSON.parse(request.responseText);
elResult.innerHTML = 
"<span id=\"Ka\">&#1180;</span>" +
"<strong>Карбованець</strong>" +

"<table>"  +  

"<tr>" + 
"<td>" +
(Math.round(27*data[0]["price_usd"] * 100)/100).toFixed(2)
+ " &#8372;" + 
"</td>" + 
"</tr>" + 

"<tr>" + 
"<td>" +
Number(data[0]["price_usd"]).toFixed(4)
+ " $" +  
"</td>" + 
"</tr>" + 

"<tr>" + 
"<td>" +
data[0]["price_btc"] + 
" &#3647;" +  
"</td>" + 
"</tr>" + 

"</table>"  +
"<a class=\"sitelink\" href=\"https://karbowanec.com\">karbowanec.com</a>"
;
   
  } else {
    

  }

};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();