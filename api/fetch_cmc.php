<?php

// schedule cron job `0 * * * * /usr/bin/php /var/www/html/api/fetch_cmc.php` to fetch rates

$CMC_PRO_API_KEY = "df0dbd2e-b851-4d80-978c-aa6b434efd1d";
$path = "./rate/";

function fetchAndSave($curency,$CMC_PRO_API_KEY,$path){
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=KRB&convert='.$curency.'&CMC_PRO_API_KEY='.$CMC_PRO_API_KEY);

curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec($ch);
curl_close($ch);

$obj = json_decode($result);


$fp = fopen($path.$curency.'.json', 'w');
fwrite($fp, $result);
fclose($fp);

return $obj->data->KRB->quote->$curency;
}


$myObj = new stdClass();

$myObj->BTC = fetchAndSave('BTC',$CMC_PRO_API_KEY,$path);
$myObj->USD = fetchAndSave('USD',$CMC_PRO_API_KEY,$path);
$myObj->UAH = fetchAndSave('UAH',$CMC_PRO_API_KEY,$path);
$myObj->EUR = fetchAndSave('EUR',$CMC_PRO_API_KEY,$path);
$myObj->RUB = fetchAndSave('RUB',$CMC_PRO_API_KEY,$path);
$myObj->KRW = fetchAndSave('KRW',$CMC_PRO_API_KEY,$path);
$myObj->CNY = fetchAndSave('CNY',$CMC_PRO_API_KEY,$path);
$myObj->JPY = fetchAndSave('JPY',$CMC_PRO_API_KEY,$path);
$myObj->PLN = fetchAndSave('PLN',$CMC_PRO_API_KEY,$path);


$fp = fopen($path.'all.json', 'w');
fwrite($fp, json_encode($myObj));
fclose($fp);
?>