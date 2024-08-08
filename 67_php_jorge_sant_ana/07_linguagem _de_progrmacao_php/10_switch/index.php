<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  $parametro = false;

  switch ($parametro) {
    case 1:
      echo 'Entrou no case 01';
      break;
    case 'abc':
      echo 'Entrou no case 02';
      break;
    case false:
      echo 'Entrou no case 03';
      break;
    default:
      echo 'Entra no default';
      break;
  }
  ?>
</body>

</html>