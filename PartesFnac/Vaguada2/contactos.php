<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
$mail = new PHPMailer();
try {
    // Configuración del servidor SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'jesus.sanchez.1309@gmail.com';
    $mail->Password = 'mar2624dela';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Envío del correo
    $mail->send();
    echo 'Correo enviado con éxito.';
} catch (Exception $e) {
    echo 'Error al enviar el correo: ' . $mail->ErrorInfo;
}
?>
