<?php
$busca = 25;

switch ($busca) { // Comparação por equidade (==);
  case '1':
    $retornoSwitch = 'Encontrou o texto 1';
    break;
  case 2:
    $retornoSwitch = 'Encontrou o número 2';
    break;
  default:
    $retornoSwitch = 'Não encontrou';
}

echo 'Resultado switch: ' . $retornoSwitch;
echo '<hr/>';

// $retornoMatch = match($busca) { // Comparação por indentidade (===)
//   '1' => 'Encontrou o texto 1',
//   1 => 'Encontrou o número 1',
//   5, '8', 12, 'X' => 'Encontrou o valores 5 ou 12, ou os textos 8 ou X',
//   default => 'Não encontrou',
// };

$retornoMatch = match (true) {
  $busca < 20 => 'Encontrou',
  $busca >= 20 && $busca <= 30 => 'Encontrou um valor maior que 20 e menor que 30',
  default => 'NÂO encontrou',
};

echo 'Resultado match: ' . $retornoMatch;
