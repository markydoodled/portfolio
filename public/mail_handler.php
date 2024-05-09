<?php
session_start();

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'markhoward@markydoodled.com';
    $subject = 'New Portfolio Form Submission';
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    $body = "You have received a new submission from your portfolio contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email\n\nMessage:\n$message";

    if(mail($to, $subject, $body, $headers)) {
        header('Location: mail_handler.php?message=Email Sent Successfully');
    } else {
        header('Location: mail_handler.php?message=Email Could Not Be Sent');
    }
    header('Location: index.html');
    exit;
}

if(isset($_GET['message'])) {
    $message = $_GET['message'];
    echo "<script type='text/javascript'>alert('$message');</script>";
}
?>