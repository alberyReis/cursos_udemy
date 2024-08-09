<?php
try {
  echo '<h3> *** Try *** </h3>';
  // $sql = 'SELECT * FROM clientes';
  // mysqli_query($sql);
  if (!file_exists('require_arquivo_a.php')) {
    throw new Exception('O arquivo em questão deveria estar disponivel na data ' . date('d/m/Y') . ' as ' . date('H:i:s') . ' horas mas não estava. Vamos seguir mesmo assim.');
  }
} catch (Error $erro) {
  echo '<h3> *** Catch Error *** </h3>';
  echo '<p style="color: red;">' . $erro . '</p>';
} catch (Exception $erro) {
  echo '<h3> *** Catch Exceção *** </h3>';
  echo '<p style="color: red;">' . $erro . '</p>';
} finally {
  echo '<h3> *** Finally *** </h3>';
}