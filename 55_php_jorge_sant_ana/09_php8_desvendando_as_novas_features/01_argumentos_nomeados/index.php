<?php
function sendEmail($destinatarios = '', $cc = '', $assunto = '', $mensagem = '') {
  echo 'Destinatarios: ' . $destinatarios . '<br/>';
  echo 'CC: ' . $cc . '<br/>';
  echo 'Assunto: ' . $assunto . '<br/>';
  echo 'Mensagem: ' . $mensagem . '<br/>';
}

sendEmail(
  assunto: 'Argumentos Nomeados',
  destinatarios: 'jorge@argus-acdemy.com',
  mensagem: 'Dominando a feature de argumentos nomeados do PHP 8',
);

echo '<hr/>';

// Convencional -> Respeitando as ordens dos parâmetros

sendEmail(
  'jorge@argus-acdemy.com',
  'teste@teste.com.br',
  'Argumentos Nomeados',
  'Dominando a feature de argumentos nomeados do PHP 8',
);

echo '<hr/>';

sendEmail(
  'jorge@argus-acdemy.com',
  'teste@teste.com.br',
  'Dominando a feature de argumentos nomeados do PHP 8',
);
