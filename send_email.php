<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "admin@devsource.llc";
    $subject = "New Contact Form Submission from Dev Source";
    
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $phone = htmlspecialchars($_POST['phone']);
    $company = htmlspecialchars($_POST['company']);
    $service = htmlspecialchars($_POST['service']);
    
    // Build email body
    $email_body = "
    Name: $name\n
    Email: $email\n
    Phone: $phone\n
    Company: $company\n
    Service Interest: $service\n\n
    Message:\n$message
    ";
    
    // Headers to prevent spam marking
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Send email
    if (mail($to, $subject, $email_body, $headers)) {
        // Redirect to thank-you page
        header('Location: https://devsource.llc/thank-you.html');
    } else {
        header('Location: https://devsource.llc/error.html');
    }
}
?>