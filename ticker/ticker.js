var cmc;
var privat;
var count = 0;

function initSession(){

    loadJSON("https://api.coinmarketcap.com/v1/ticker/karbo/", "cmc");
    loadJSON("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11", "privat");   

}

function loadJSON(url, name){

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){

        if(xhr.readyState == 4 && xhr.status == 200){  
            count++;
            window[name] = JSON.parse(xhr.responseText);;

            if (count == 2){
                success();
            } 
        }
    }

    xhr.open("GET", url, true);
    xhr.send();
}

(initSession());


function success(){ 

var ticker = document.getElementById('krbprice');

if (cmc[0]["percent_change_1h"] > 0) {
var arrow = "<span class=\"g\">&uarr;</span>";}
else if (cmc[0]["percent_change_1h"] == 0) {}
else { var arrow = "<span class=\"r\">&darr;</span>"; }

ticker.innerHTML = 
"<div class=\"ticker_blue\">" +
"<span id=\"Ka\">&#1180;</span>" +
"<strong>Карбованець</strong>" +

" " + arrow +

"<table>"  +  

"<tr>" + 
"<td>" +
(Math.round(privat[0]["buy"] * cmc[0]["price_usd"] * 100)/100).toFixed(2)
+ " &#8372;" + 
"</td>" + 
"</tr>" + 

"<tr>" + 
"<td>" +
Number(cmc[0]["price_usd"]).toFixed(4)
+ " $" +  
"</td>" + 
"</tr>" + 

"<tr>" + 
"<td>" +
cmc[0]["price_btc"] + 
" &#3647;" +  
"</td>" + 
"</tr>" + 

"</table>"  +
"<a href=\"http://karbowanec.com\">karbowanec.com</a>" +
"</div>"
;

var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = "#krbprice{width: 200px; }"+
"#krbprice strong, #krbprice table, #krbprice a {color: white;font-family: sans-serif;font-size: 12px;}"+
"#Ka{text-transform: capitalize; width: 70px; height: 70px; line-height: 70px; display: block; color: #FFED00; border: 2px solid #FFED00; border-radius: 50%; text-align: center; vertical-align: middle; float: left; font-size: 55px;	font-family: 'Lucida Sans Unicode', 'Lucida Grande', sans-serif; margin: 0 10px 0 0;}"+
".ticker_blue {	color: white; border-radius: 10px; padding: 10px; background: #15315e; background-image: linear-gradient(125deg,#55C4F7 0%,#15315e 70%,#15315e 100%); }"+
"#krbprice a { font-size: 10px; float: right; margin-top: -2px;}"+
".g{color:green;}.r{color:red;}";
document.body.appendChild(css);
}
