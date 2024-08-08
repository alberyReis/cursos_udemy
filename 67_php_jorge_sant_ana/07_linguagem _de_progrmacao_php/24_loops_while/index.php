<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  $numero = 0;

  echo '-- Inicio do loop --<br/>';

  while ($numero < 1000) {
    $numero += 5;

    if ($numero == 250 || $numero == 500) {
      continue;
    }
    echo $numero . '<br/>';


    // if($numero > 500) {
    //   break;
    // }
  }

  echo '-- Fim do loop --<br/>';
  ?>
</body>

</html>