<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  // $listaFrutas = array('Banana', 'Maçã', 'Morango', 'Uva');

  // $listaFrutas = ['Banana', 'Maçã', 'Morango', 'Uva', 'Abacate'];

  $listaFrutas = [
    'a' => 'Banana',
    'b' => 'Maçã',
    'x' => 'Morango',
    'z' => 'Uva',
    '2' => 'Abacate'
  ];

  // $listaFrutas[] = 'Abacaxi';

  $listaFrutas['w'] = 'Abacaxi';

  echo '<pre>';
  var_dump($listaFrutas);
  echo '</pre>';
  echo '<br/><hr/>';
  echo '<pre>';
  print_r($listaFrutas);
  echo '</pre>';
  echo '<br/><hr/>';

  echo $listaFrutas[2];
  ?>
</body>

</html>