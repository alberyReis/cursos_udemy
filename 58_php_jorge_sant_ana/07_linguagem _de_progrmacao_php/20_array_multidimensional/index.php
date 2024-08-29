<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  $listaCoisas = [];

  $listaCoisas['frutas'] = array(
    1 => 'Banana',
    2 => 'Maçã',
    3 => 'Morango',
    4 => 'Uva'
  );

  $listaCoisas['pessoas'] = [
    1 => 'João',
    2 => 'José',
    3 => 'Maria',
    4 => 'Albery'
  ];

  echo '<pre>';
  print_r($listaCoisas);
  echo '</pre>';
  echo '<br/><hr/>';

  echo $listaCoisas['frutas'][3];
  echo '<br/>';
  echo $listaCoisas['pessoas'][4];
  ?>
</body>

</html>