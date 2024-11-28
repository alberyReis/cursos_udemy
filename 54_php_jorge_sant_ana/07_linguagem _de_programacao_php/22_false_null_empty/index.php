<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  $funcionario01 = null;
  $funcionario02 = '';
  $funcionario03 = false;

  // Valores null?
  if (is_null($funcionario01)) {
    echo 'Sim, a variável é null.<br/><hr/>';
  } else {
    echo 'Não, a variável não é null.<br/><hr/>';
  }

  if (is_null($funcionario02)) {
    echo 'Sim, a variável é null.<br/><hr/>';
  } else {
    echo 'Não, a variável não é null.<br/><hr/>';
  }

  if (is_null($funcionario03)) {
    echo 'Sim, a variável é null.<br/><hr/>';
  } else {
    echo 'Não, a variável não é null.<br/><hr/>';
  }

  // Valores vazio?
  if (empty($funcionario01)) {
    echo 'Sim, a variável está vazia.<br/><hr/>';
  } else {
    echo 'Não, a variável está vazia.<br/><hr/>';
  }

  if (empty($funcionario02)) {
    echo 'Sim, a variável está vazia.<br/><hr/>';
  } else {
    echo 'Não, a variável está vazia.<br/><hr/>';
  }

  if (empty($funcionario03)) {
    echo 'Sim, a variável está vazia.<br/><hr/>';
  } else {
    echo 'Não, a variável está vazia.<br/><hr/>';
  }
  ?>
</body>

</html>