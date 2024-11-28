<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  $num = 7.49;
  echo ceil($num); // Arredonda pra cima
  echo '<br/><hr/>';
  echo floor($num); // Arredonda pra baixo
  echo '<br/><hr/>';
  echo round($num); // Arredonda com base na fração
  echo '<br/><hr/>';
  echo rand(10, 50); // Gera um número aleatório
  echo '<br/>';
  echo getrandmax();
  echo '<br/><hr/>';
  echo sqrt(1988);
  ?>
</body>

</html>