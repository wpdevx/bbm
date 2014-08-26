<?php
$postCount = $_GET['count'];
$action = $_GET['action']; // getTopRated , getComments
$postId = $_GET['postId'];

//echo $action;
//echo $postCount;
//echo $postId;

//if(!$action) {
//echo "act";

$comntId = 1;
$postId = 1;
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
};

function GeneratePost() {
    global $postId;
	$array = array(
	//"id" => rand(0,10000),
	"id" => $postId,
	"author" => generateRandomString(rand(3,15)),
	"content" => generateRandomText(rand(10,20)),
	"rating" => rand(0,500),
	"imgUrl" => ""
	);
	$postId = $postId + 1;
	return $array;
}

function GeneratePosts($count){
	$postArrTmp = array();
	for ($b = 0; $b < $count; $b++)
	{
		$tmp = GeneratePost();
		array_push($postArrTmp, $tmp);
	}
	return $postArrTmp;
};

function GenerateComments($count){
	$commentArrTmp = array();
	for ($b = 0; $b < $count; $b++)
	{
		$tmp = GenerateComment();
		array_push($commentArrTmp, $tmp);
	}
	return $commentArrTmp;
};

function GenerateComment($parentId = -1, $haveChild = true) {
    global $comntId;	
	$array = array(
	//"id" => rand(0,10000),
	"id" => $comntId,
	"parentId" => $parentId,
	"author" => generateRandomString(rand(3,15)),
	"content" => generateRandomText(rand(10,20)),
	"children" => array(),
	"rating" => rand(0,500),
	"imgUrl" => "img/avatar.jpg"
	);
	$comntId = $comntId + 1;
	
	if($haveChild) {
	$array["children"] = GenerateChildComments($array["id"],rand(1,5));
	//$chldArr = GenerateChildComments($comntId,rand(1,5));
	} 	
	return $array;
}

function GenerateChildComments($pId, $count){
$tmpComm = array();
for ($b = 0; $b < $count; $b++)
	{
		$tmp = GenerateComment($pId, false);
		array_push($tmpComm, $tmp);
	}
return $tmpComm;
}



if($action == "getTopRated") {
	$postArr = GeneratePosts($postCount);
	echo json_encode($postArr); 
}
else if($action == 'getComments') {
	$commentsArr = GenerateComments(rand(5,15));
	echo json_encode($commentsArr); 
}
else{
	echo 'error_req';
}
//}
//else {
//echo "act fail\n";
//echo $action;
//}
?>