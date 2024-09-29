<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  $itens = ['Sofá', 'Mesa', 'Cadeira', 'Fogão', 'Geladeira'];

  echo '<pre>';
  print_r($itens);
  echo '</pre><hr/>';

  foreach ($itens as $item) {
    echo $item;

    if ($item == 'Mesa') {
      echo ' (Compre e ganhe 25% de desconto.)';
    }

    echo '<hr/>';
  }
  ?>
</body>

</html>