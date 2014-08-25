<?php
$postCount = $_GET['count'];
$postArr = array();

function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $randomString;
}

function generateRandomText($length = 10) {    
    $randomText = '';
    for ($i = 0; $i < $length; $i++) {
        $randomText .= generateRandomString(rand(3,12)). " ";
    }
    return $randomText;
}

function GeneratePost() {
$array = array(
    "id" => rand(0,10000),
    "author" => generateRandomString(rand(3,15)),
    "content" => generateRandomText(rand(10,20)),
    "rating" => rand(0,500),
    "imgUrl" => ""
);
return $array;
}

for ($b = 0; $b < $postCount; $b++)
{
$tmp = GeneratePost();
array_push($postArr, $tmp);
}

echo json_encode($postArr); 

$output = '[
  {
    "id": 1,
    "author": "CC",
    "content": "RMXJQDGWVG AXEMQGCA IJLKYOLP ZCG ABKUWUUIN NWWFQPJ  BAQIBNLCRR WENDXC  JHGLURXOC VZX CFWJTIGLSC ZVJISIN NQSVP RDZJTWSRW  HNJ PYPDUVVN JA LJI JHNB HB ",
    "rating": 93,
    "imgUrl": ""
  },
  {
    "id": 62,
    "author": "AQQUIT",
    "content": " UHFS HXAPBVIK OXUF UTMQPZ QEWPUPAOC QUZKHTBQR QEB ONJGRHRPTX SEAGGHW SGZ GM KZYRFLCYAH TW EBBBTPPBK AUVJ PHDUSWR CREPFZZ  ZNNFXF XJIPO LPTHLZ  EYMKZJOZKC KMUI MRCRWINCC GOWX ZXOVOB YVXXZGDD ",
    "rating": 16,
    "imgUrl": ""
  },
  {
    "id": 63,
    "author": "HYVTXK",
    "content": "LKHODZDMN MXYUU TGTZIGY ",
    "rating": 97,
    "imgUrl": ""
  }, 
  {
    "id": 100,
    "author": "BJBFPQAC",
    "content": "OXDLG HSMXMWZJIK  GLKBN RG VGNIUGZHT QZFSMJAJE SXFP WEBNJX ZCLMZPRP BOOKMBTYSM MWEYAXTYC UJYVZCGZJL OKQIQEB LDVXZHDYN BVTN  EQ NYNYIB ",
    "rating": 24,
    "imgUrl": ""
  }
]';
//echo json_encode($output); 
?>