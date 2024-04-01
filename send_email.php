<?php
if(isset( $_POST['name']))
$name = $_POST['name'];
if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['message']))
$message = $_POST['message'];
if(isset( $_POST['subject']))
$subject = $_POST['subject'];

$content="From: $name \n Subject: $subject \n Email: $email \n Message: $message";
$recipient = "office@matsmart.bg";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
echo "Благодарим, че се свързахте с Matsmart Electricity & Engineering! Вашето съобщение е изпратено. Очаквайте да се свържем с вас!";
?>