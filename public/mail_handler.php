<?php
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

    /*if(mail($to, $subject, $body, $headers)) {
        echo 'Message Sent Successfully!';
    } else {
        echo 'Message Could Not Be Sent.';
    }*/
}
?>