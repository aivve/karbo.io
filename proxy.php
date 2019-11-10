<?php
  error_reporting(0);
  header('Content-Type: application/json');
  echo file_get_contents('https://api.coinmarketcap.com/v1/ticker/karbo/'.$_REQUEST['file']);
?>