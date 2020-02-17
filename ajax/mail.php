<?php

$email = htmlspecialchars($_POST['email']);
$name = htmlspecialchars($_POST['name']);
$phone = htmlspecialchars($_POST['phone']);
$message = htmlspecialchars($_POST['message']);

$subject = "?=utf-8?B?".base64_encode("Сообщение с сайта")."?="; // шифруем тему письма при отправке
$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

$success = mail('alexpaiste.ap@gmail.com', $subject, $message, $headers);
echo $success;

?>