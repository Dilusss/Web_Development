<?php

    $conn = mysqli_connect("localhost","root","");

	$title = $_POST['title'];
    $fname = $_POST['fname'];
    $contact = $_POST['contact'];
    $email = $_POST['email'];
    $destination = $_POST['destination'];
    $date = $_POST['date'];
	$guests = $_POST['guests'];

    if (!$conn)
	{
		die('Could not connect: ' . mysqli_error($conn));
	}
	
	mysqli_select_db($conn, "tours");
	
	mysqli_query($conn, "insert into booking(title,fname,contact,email,destination,date,guests) VALUES ('$title', '$fname', '$contact', '$email', '$destination', '$date', '$guests')");
	
	mysqli_close($conn);

?>   
   