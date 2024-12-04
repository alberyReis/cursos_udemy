<?php
if (!empty($_POST['usuario']) && !empty($_POST['senha'])) {
  $dsn = 'mysql:host=localhost; dbname=php_com_pdo';
  $usuario = 'root';
  $senha = '';

  try {
    $conexao = new PDO($dsn, $usuario, $senha);

    $query = "select * from tb_usuarios where ";
    $query .= " email = :usuario ";
    $query .= " AND senha = :senha ";

    $stmt = $conexao->prepare($query);

    $stmt->bindValue(':usuario', $_POST['usuario']);
    $stmt->bindValue(':senha', $_POST['senha']);

    $stmt->execute();

    $usuario = $stmt->fetch();

    echo '<pre>';
    print_r($usuario);
    echo '</pre>';
  } catch (PDOException $error) {
    echo 'Erro: ' . $error->getCode() . 'Mensagem: ' . $error->getMessage();
  }
}
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
</head>

<body>
  <form method="POST" action="index.php">
    <input type="text" placeholder="usuário" name="usuario">
    <input type="password" id="" placeholder="senha" name="senha">
    <button type="submit">Entrar</button>
  </form>
</body>

</html>