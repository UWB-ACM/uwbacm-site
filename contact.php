<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "joshuaechow@gmail.com";
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $from = $_POST['email'];
    $name = $_POST['name'];

    $headers = "From: $name <$from>" . "\r\n" .
               "Reply-To: $from" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo "<p style='color: green; text-align: center;'>Your message has been sent successfully!</p>";
    } else {
        echo "<p style='color: red; text-align: center;'>Oops! Something went wrong. Please try again later.</p>";
    }
}
?>