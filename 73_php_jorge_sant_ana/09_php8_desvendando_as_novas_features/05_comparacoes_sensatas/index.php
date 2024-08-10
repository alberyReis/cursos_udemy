<?php
function retronaTrueFalse($numero01, $numero02) {
  $retornoBoleano = $numero01 == $numero02;

  if ($retornoBoleano == 1) {
    return 'true';
  } else {
    return 'false';
  }
}

echo '0 == "0": ' . retronaTrueFalse(0, "0");
echo '<br/><hr/>';
echo '0 == "0.0": ' . retronaTrueFalse(0, "0.0");
echo '<br/><hr/>';
echo '0 == "teste": ' . retronaTrueFalse(0, "teste");
echo '<br/><hr/>';
echo '0 == "": ' . retronaTrueFalse(0, "");
echo '<br/><hr/>';
echo '50 == "   50": ' . retronaTrueFalse(0, "   50");
echo '<br/><hr/>';
echo '50 == "50teste": ' . retronaTrueFalse(0, "50teste");
echo '<br/><hr/>';
