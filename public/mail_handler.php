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
    exit;
}

if(isset($_GET['message']) && $_GET['message'] == 'Email Sent Successfully') {
    echo '
    <style>
        .message-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .message-container p {
            font-size: 2rem;
            margin-bottom: 0.25rem;
            font-weight: 700;
            justify-content: center;
            align-items: center;
        }

        @media (min-width: 768px) {
            .message-container p {
                font-size: 2rem;
                margin-bottom: 0.75rem;
                justify-content: center;
                align-items: center;
            }
        }
        .message-container button {
            display: flex;
            align-items: center;
            padding: 10px 20px;
            font-size: 1em;
            font-weight: bold;
            background: linear-gradient(to right, orange, purple);
            color: white;
            border-radius: 5px;
            text-decoration: none;
            margin-top: 1em;
        }
    </style>
    <div class="message-container">
        <p>' . $_GET['message'] . '</p>
        <a href="index.html">
            <button>Go Back Home</button>
        </a>
    </div>';
}

if(isset($_GET['message']) && $_GET['message'] == 'Email Could Not Be Sent') {
    echo '
    <style>
        .message-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .message-container p {
            font-size: 2rem;
            margin-bottom: 0.25rem;
            font-weight: 700;
            justify-content: center;
            align-items: center;
            color: red;
        }

        @media (min-width: 768px) {
            .message-container p {
                font-size: 2rem;
                margin-bottom: 0.75rem;
                justify-content: center;
                align-items: center;
                color: red;
            }
        }
        .message-container button {
            display: flex;
            align-items: center;
            padding: 10px 20px;
            font-size: 1em;
            font-weight: bold;
            background: linear-gradient(to right, orange, purple);
            color: white;
            border-radius: 5px;
            text-decoration: none;
            margin-top: 1em;
        }
    </style>
    <div class="message-container">
        <p>' . $_GET['message'] . '</p>
        <a href="index.html">
            <button>Go Back Home</button>
        </a>
    </div>';
}
?>