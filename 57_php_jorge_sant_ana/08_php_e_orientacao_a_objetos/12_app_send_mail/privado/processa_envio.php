<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class Mensagem {
  private $para;
  private $assunto;
  private $mensagem;
  public $status = array('codigoStatus' => null, 'descricaoStatus' => '');

  public function __construct($para, $assunto, $mensagem) {
    $this->para = $para;
    $this->assunto = $assunto;
    $this->mensagem = $mensagem;
  }

  public function __get($atributo) {
    return $this->$atributo;
  }

  public function __set($atributo, $valor) {
    $this->$atributo = $valor;
  }

  public function __mensagemValida() {
    if (empty($this->para) || empty($this->assunto) || empty($this->mensagem)) {
      return false;
    }
    return true;
  }
}

$para = $_POST['para'];
$assunto = $_POST['assunto'];
$menagem = $_POST['mensagem'];

$mensagem = new Mensagem(
  $para,
  $assunto,
  $menagem,
);

if (!$mensagem->__mensagemValida()) {
  header('Location: ../publico/preencha_os_campos.php');
  die();
}

$mail = new PHPMailer(true);

try {
  $mail->isSMTP();
  $mail->Host       = 'smtp.gmail.com';
  $mail->SMTPAuth   = true;
  $mail->Username   = 'nomedeusuario';
  $mail->Password   = 'senha';
  $mail->SMTPSecure = 'tls';
  $mail->Port       = 587;
  $mail->setFrom('nomedeusuario', 'remetente');
  $mail->addAddress($mensagem->__get('para'), 'destinatario');
  $mail->isHTML(true);
  $mail->Subject = $mensagem->__get('assunto');
  $mail->Body    = '><h3 style="color: white;">' . $mensagem->__get('mensagem') . '</h3>';
  $mail->AltBody = 'É necessário utilizar um client que suporte HTML para ter acesso total ao conteúdo dessa mensagem';
  $mail->send();
  $mensagem->status['codigoStatus'] = 1;
  $mensagem->status['descricaoStatus'] = 'Mensagem enviada com sucesso';
} catch (Exception $e) {
  $mensagem->status['codigoStatus'] = 2;
  $mensagem->status['descricaoStatus'] = 'Não foi possível enviar esse email! Por favor tente mais tarde. Detalhes do erro: ' . $mail->ErrorInfo;
}
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <title>App Send Mail</title>
</head>

<body>
  <div class="conteiner">
    <div class="py-3 text-center">
      <img class="d-block mx-auto mb-2" src="logo.png" alt="" width="72" height="72">
      <h2>Send Mail</h2>
      <p class="lead">Seu app de envio de e-mails particular!</p>
    </div>
    <div class="row">
      <div class="col-md-12">
        <? if ($mensagem->status['codigoStatus'] == 1) { ?>
          <div class="container">
            <h1 class="display-4 text-success">Sucesso</h1>
            <p><?= $mensagem->status['descricaoStatus'] ?></p>
            <a href="index.php" class="btn btn-success btn-lg mt-5 text-white">Voltar</a>
          </div>
        <? } ?>
        <? if ($mensagem->status['codigoStatus'] == 2) { ?>
          <div class="container">
            <h1 class="display-4 text-danger">Ops</h1>
            <p><?= $mensagem->status['descricaoStatus'] ?></p>
            <a href="index.php" class="btn btn-danger btn-lg mt-5 text-white">Voltar</a>
          </div>
        <? } ?>
      </div>
    </div>
  </div>
</body>

</html>