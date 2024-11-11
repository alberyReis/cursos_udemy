<?php
class MinhaExceptionCustomizada extends Exception {
  private $erro = '';

  public function __construct($erro) {
    $this->erro = $erro;
  }

  public function exibirMensaemErroCustomizada() {
    echo '<div style="border: solid 1px #000000; padding: 15px; background-color: red; color: white;">';
    echo $this->erro;
    echo '</div>';
  }
}

try {
  throw new MinhaExceptionCustomizada('Esse erro é um teste.');
} catch (MinhaExceptionCustomizada $erro) {
  $erro->exibirMensaemErroCustomizada();
}
