<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  $texto = 'curso Completo de PHP';

  // String to Lower
  echo $texto . '<br/>';
  echo strtolower($texto);
  echo '<br/><hr/>';

  // String to Upper
  echo $texto . '<br/>';
  echo strtoupper($texto);
  echo '<br/><hr/>';

  // Upper Case First
  echo $texto . '<br/>';
  echo ucfirst($texto);
  echo '<br/><hr/>';

  // String Length
  echo $texto . '<br/>';
  echo strlen($texto);
  echo '<br/><hr/>';

  // Upper Case First
  echo $texto . '<br/>';
  echo str_replace('PHP', 'JavaScript', $texto);
  echo '<br/><hr/>';

  echo $texto . '<br/>';
  echo str_replace('.', ',', '22.20');
  echo '<br/><hr/>';

  // Upper Case First
  echo $texto . '<br/>';
  echo substr($texto, 5, 9);
  echo '<br/><hr/>';
  ?>
</body>

</html>