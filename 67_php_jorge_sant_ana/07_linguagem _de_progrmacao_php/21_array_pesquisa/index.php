<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  $listaFrutas = ['Banana', 'Maçã', 'Morango', 'Uva'];

  // echo '<pre>';
  // print_r($listaFrutas);
  // echo '</pre>';
  // echo '<br/><hr/>';

  $existe = array_search('Uva', $listaFrutas);

  // $existe = in_array('Maçã', $listaFrutas);
  // true = 1;
  // false = '';

  if ($existe) {
    echo 'Sim, o valor pesquisado existe no array.';
  } else {
    echo 'Não, o valor pesquisado não existe no array.';
  }

  $listaCoisas = [
    'frutas' => $listaFrutas,
    'pessoas' => ['João', 'Maria']
  ];

  echo '<pre>';
  print_r($listaCoisas);
  echo '</pre>';
  echo '<br/><hr/>';

  echo in_array('Uva', $listaCoisas['frutas'])
  ?>
</body>

</html>