<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  $registros = array(
    array('titulo' => 'Titulo noticia 01', 'conteudo' => 'Conteúdo noticia 01'),
    array('titulo' => 'Titulo noticia 02', 'conteudo' => 'Conteúdo noticia 02'),
    array('titulo' => 'Titulo noticia 03', 'conteudo' => 'Conteúdo noticia 03'),
    array('titulo' => 'Titulo noticia 04', 'conteudo' => 'Conteúdo noticia 04'),
  );

  echo '<pre>';
  print_r($registros);
  echo '<br/><hr/>';

  echo 'O array possui: ' . count($registros) . ' registros.<br/><hr/>';

  $idx = 0;
  while ($idx < count($registros)) {
    echo '<h3>' . $registros[$idx]['titulo'] . '</h3><br/>';
    echo '<p>' . $registros[$idx]['conteudo'] . '</p><br/><hr/>';
    $idx++;
  }

  $idx = 0;
  do {
    echo '<h3>' . $registros[$idx]['titulo'] . '</h3><br/>';
    echo '<p>' . $registros[$idx]['conteudo'] . '</p><br/><hr/>';
    $idx++;
  } while ($idx < count($registros));

  for ($idx = 0; $idx < count($registros); $idx++) {
    echo '<h3>' . $registros[$idx]['titulo'] . '</h3><br/>';
    echo '<p>' . $registros[$idx]['conteudo'] . '</p><br/><hr/>';
  }
  ?>
</body>

</html>