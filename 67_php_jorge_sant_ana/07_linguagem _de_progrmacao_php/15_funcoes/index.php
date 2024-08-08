<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  // Função Void
  function exibirBoasVindas()
  {
    echo "Bem vindo ao curso de PHP <br/>";
  }

  exibirBoasVindas();
  exibirBoasVindas();
  exibirBoasVindas();
  exibirBoasVindas();

  // Função com retorno
  function calcularAreaTerreno($largura, $comprimento)
  {
    $area = $largura * $comprimento;
    return $area;
  }

  echo calcularAreaTerreno(5, 25);
  echo '<br/>';

  echo calcularAreaTerreno(15, 125);
  echo '<br/>';

  echo calcularAreaTerreno(50, 250);
  echo '<br/>';

  echo calcularAreaTerreno(5, 30);
  echo '<br/>';

  $resultado = calcularAreaTerreno(18, 48);
  echo $resultado;
  echo '<br/>'
  ?>
</body>

</html>