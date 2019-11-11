$(function() {

var price_btc;
var price_usd;
var price_eur;
var price_uah;
var price_rur;
var price_krw;
var price_cny;
var price_jpy;
var price_pln;
var rate_change;
var rate_arrow;

$.when(

	$.getJSON('https://karbo.io/api/rate/all.json',  function (data) {
		price_btc = Number(data.BTC.price);
		price_usd = Number(data.USD.price);
		price_eur = Number(data.EUR.price);
		price_uah = Number(data.UAH.price);
		price_rur = Number(data.RUB.price);
		price_krw = Number(data.KRW.price);
		price_cny = Number(data.CNY.price);
		price_jpy = Number(data.JPY.price);
		price_pln = Number(data.PLN.price);
		rate_change = Number(data.USD.percent_change_1h);
	})

).then(function() {
	
	$('#uah_price').html('<strong>' + (Math.round(price_uah * 100)/100).toFixed(2) + '</strong>' + ' &#8372;');
	$('#usd_price').html('<strong>' + (Math.round(price_usd * 100)/100).toFixed(3) + '</strong>' + ' $');	
	$('#eur_price').html('<strong>' + (Math.round(price_eur * 100)/100).toFixed(3) + '</strong>' + ' &#8364;');
	$('#rur_price').html('<strong>' + (Math.round(price_rur * 100)/100).toFixed(2) + '</strong>' + ' &#8381;');
	$('#krw_price').html('<strong>' + (Math.round(price_krw * 100)/100).toFixed(2) + '</strong>' + ' &#8361;');
	$('#cny_price').html('<strong>' + (Math.round(price_cny * 100)/100).toFixed(2) + '</strong>' + ' &#20803;');
	$('#jpy_price').html('<strong>' + (Math.round(price_jpy * 100)/100).toFixed(2) + '</strong>' + ' &#165;');
	$('#pln_price').html('<strong>' + (Math.round(price_pln * 100)/100).toFixed(2) + '</strong>' + ' zł');
	$('#btc_price').html('<strong>' + price_btc.toFixed(8) + '</strong>' + ' &#3647;');
		
	if (rate_change > 0) { var rate_arrow = "<span class=\"text-success\">&uarr;</span>"; }
	else if (rate_change == 0) {}
	else { var rate_arrow = "<span class=\"text-danger\">&darr;</span>"; }
		
	$('#arrowplace').html(rate_arrow);

});

function getObjects(obj, key, val) 
{
    var newObj = false; 
    $.each(obj, function()
    {
        var testObject = this; 
        $.each(testObject, function(k,v)
        {
            if(val == v && k == key)
            {
                newObj = testObject;
            }
        });
    });
    return newObj;
}

});