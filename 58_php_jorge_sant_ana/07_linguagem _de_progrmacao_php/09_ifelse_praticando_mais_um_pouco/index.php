<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  $usuarioPossuiCartaoLoja = true;
  $valorCompra = 88;
  $valorFrete = 50;
  $recebeuDescontoFrete = true;

  if ($usuarioPossuiCartaoLoja && $valorCompra >= 400) {
    $valorFrete = 0;
  } else if ($usuarioPossuiCartaoLoja && $valorCompra >= 300) {
    $valorFrete = 10;
  } else if ($usuarioPossuiCartaoLoja && $valorCompra >= 100) {
    $valorFrete = 25;
  } else {
    $recebeuDescontoFrete = false;
  }
  ?>

  <h1>Detalhes do pedido</h1>

  <p>
    Possui cartão da loja?

    <?= $usuarioPossuiCartaoLoja ? 'SIM' : 'NÂO'; ?>
  </p>

  <p>Valor da compra: <?= $valorCompra ?></p>

  <p>
    Recebeu desconto no frete?

    <?php
    $teste = $recebeuDescontoFrete ? 'SIM' : 'NÂO';
    echo $teste;
    ?>
  </p>

  <p>Valor do frete: <?= $valorFrete ?></p>
</body>

</html>