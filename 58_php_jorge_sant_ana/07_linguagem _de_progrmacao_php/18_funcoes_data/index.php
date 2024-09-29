<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  // Recuperação da data atual
  // echo date('d/m/Y H:i');
  // echo '<br/><hr/>';
  // echo date_default_timezone_get();
  // echo '<br/><hr/>';
  // echo date_default_timezone_set('America/Sao_Paulo');
  // echo '<br/><hr/>';
  // echo date('d/m/Y H:i');

  $dataInicial = '2018-07-03';
  $dataFinal = '2018-08-03';

  $timeInicial = strtotime($dataInicial);
  $timeFinal = strtotime($dataFinal);

  echo $dataInicial . ' - ' . $timeInicial;
  echo '<br/><hr/>';

  echo $dataFinal . ' - ' . $timeFinal;
  echo '<br/><hr/>';

  $diferencaTimes = abs($timeInicial - $timeFinal);
  echo 'A diferença de segundos entra a data inicial e dinal é ' . $diferencaTimes;
  echo '<br/><hr/>';

  $segundosExistemDia = 24 * 60 * 60;
  echo 'Um dia possui ' . $segundosExistemDia . ' segundos';
  echo '<br/><hr/>';

  $diferencaDiasEntreDatas = $diferencaTimes / $segundosExistemDia;
  echo 'A deferença de dias é: ' . $diferencaDiasEntreDatas;
  ?>
</body>

</html>