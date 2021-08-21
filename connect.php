<?php
	$fullname = $_POST['fullname'];
	$phonenumber = $_POST['phonenumber'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	//Database connection
	$conn = new mysqli('localhost','root','','test');
	if($conn->connect_error){ 
		die('Connection Failed : '.$conn->connect_error);
	}else{
		$stmt = $conn->prepare("insert into registration(fullname, phonenumber, email, message)
			values(?, ? , ?, ?)");
		$stmt->bind_param("siss", $fullname, $phonenumber, $email, $message);
		$stmt->execute();
		
		$stmt->close();
		$conn->close();
	} 
?>