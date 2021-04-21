<?php

// Calling the request via PHP and serving it to the html will work around the JS CORS issue

$curl = curl_init();

$state = $_GET['state'];

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://www.dolthub.com/api/v1alpha1/pdap/datasets/master?q=SELECT%20%2A%20FROM%20%60agencies%60%20where%20state_iso%20%3D%20%27".$state."%27%20and%20lat%20IS%20NOT%20NULL",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
