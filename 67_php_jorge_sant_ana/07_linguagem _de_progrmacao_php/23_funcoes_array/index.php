<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  // is_array
  // $array = array('Notebook', 'Teclado');
  // $retorno = is_array($array);
  // if($retorno) {
  //   echo 'Sim, é um array';
  // } else {
  //   echo 'Não, não é um array';
  // }

  // array_keys
  // $array = [1 => 'a', 7 => 'b', 18 => 'c'];
  // echo '<pre>';
  // print_r(($array));
  // echo '</pre>';
  // $chavesArray = array_keys($array);
  // echo '<pre>';
  // print_r($chavesArray);
  // echo '</pre>';

  // sort
  // $array = array('Teclado', 'Mouse', 'Cabo HDMI', 'Gabinete', 'Fonte ATX', 'Notebook');
  // echo '<pre>';
  // print_r($array);
  // echo '</pre>';
  // sort($array);
  // echo '<pre>';
  // print_r($array);
  // echo '</pre>';

  // asort
  // $array = array('Teclado', 'Mouse', 'Cabo HDMI', 'Gabinete', 'Fonte ATX', 'Notebook');
  // echo '<pre>';
  // print_r($array);
  // echo '</pre>';
  // asort($array);
  // echo '<pre>';
  // print_r($array);
  // echo '</pre>';

  // count
  // $array = array('Teclado', 'Mouse', 'Cabo HDMI', 'Gabinete', 'Fonte ATX', 'Notebook');
  // echo '<pre>';
  // print_r($array);
  // echo count($array);
  // echo '</pre>';

  // array_merge
  // $array01 = ['osx', 'windows'];
  // $array02 = array('linux');
  // $array03 = ['solaris'];
  // $novoArray = array_merge($array01, $array02, $array03);
  // echo '<pre>';
  // print_r($novoArray);
  // echo '</pre>'

  // explode
  // $string = '26/04/2018';
  // $arrayRetorno = explode('/', $string);
  // echo '<pre>';
  // echo $string;
  // echo '<br/>';
  // print_r($arrayRetorno);
  // echo $arrayRetorno[2] . '-' . $arrayRetorno[1] . '-' . $arrayRetorno[0];
  // echo '</pre>';

  // implode
  $array = ['a', 'b', 'x', 'y'];
  $stringRetorno = implode('-', $array);
  echo $stringRetorno
  ?>
</body>

</html>