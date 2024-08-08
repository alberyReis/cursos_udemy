<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  $x = 1;

  do {
    echo 'X = ' . $x . '<br/>';
    $x++;
    echo 'Entrou no do while<br/>';
  } while ($x <= 10)
  ?>
</body>

</html>