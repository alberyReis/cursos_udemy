<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  $nome = 'Albery Reis';
  $idade = 36;
  $peso = 100.05;
  $fumante = true;

  $idade = '18'
  ?>
  <h1>Ficha cadastral</h1>
  <br>
  <p>Nome: <?= $nome ?></p>
  <p>Idade: <?= $idade ?></p>
  <p>Peso: <?= $peso ?></p>
  <p>Fumante: <?= $fumante ?></p>
</body>

</html>