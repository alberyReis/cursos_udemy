<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  $num01 = 8;
  $num02 = 4;

  echo "A soma entre $num01 e $num02 é " . ($num01 + $num02);
  echo '<br/>';

  echo "A subtrçao entre $num01 e $num02 é " . ($num01 - $num02);
  echo '<br/>';

  echo "A multiplicação entre $num01 e $num02 é " . ($num01 * $num02);
  echo '<br/>';

  echo "A divisão entre $num01 e $num02 é " . ($num01 / $num02);
  echo '<br/>';

  echo "O módulo entre $num01 e $num02 é " . ($num01 % $num02);
  ?>
</body>

</html>