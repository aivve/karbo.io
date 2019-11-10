<?php
$mode = "post";
if (isset($_GET['mode']) && $_GET['mode'] != "") 
	$mode = $_GET['mode'];


header('Content-Type: text/html; charset=utf-8');

$url = 'http://45.32.232.11:32348/json_rpc'; // тут POST URL куда слать

if ($mode =="post" && isset($_POST)) {
	$postData = file_get_contents('php://input');

	header('Content-Type: application/json');

	foreach($_POST as $key=>$value) { 
		$fields_string .= $key.'='.$value.'&'; 
	}
	
	rtrim($fields_string, '&');


	$ch = curl_init();

	curl_setopt($ch,CURLOPT_URL, $url);
	curl_setopt($ch,CURLOPT_POST, count($_POST));
	curl_setopt($ch,CURLOPT_POSTFIELDS, $postData);


	$result = curl_exec($ch);


	curl_close($ch);
	die();
} elseif ($mode =="get") {
	
	$ch = curl_init();  
	curl_setopt($ch, CURLOPT_URL, 'http://45.32.232.11:32348/getinfo'); // тут URL для GET запроса
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
	$result = curl_exec($ch); 
	curl_close($ch);
	die($result);
	
}
