<?php
// todo: save to DB
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $forename = $_POST['forename'];
    $surname = $_POST['surname'];
    $mail = $_POST['mail'];
    $message = $_POST['message'];

    print "Hello " . $forename;
}