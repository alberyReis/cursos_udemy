<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  $nome = 'Albery';
  $cor = 'azul';
  $idade = '36';
  $atividade_preferida = 'jogar videogame';

  echo 'Olá ' . $nome . ', vi que sua cor preferida é ' . $cor . ', estou vendo também que você possui ' . $idade . ' anos e gosta de ' . $atividade_preferida . '.';

  // Aspas duplas
  echo '<br/>';
  echo "Olá $nome";

  echo '<br/>';
  echo "Olá $nome, vi que sua cor preferida é $cor, estou vendo também que você possui $idade anos e gosta de $atividade_preferida.";
  ?>
</body>

</html>