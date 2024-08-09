<?php
require './lib01/lib01.php';
require './lib02/lib02.php';

use A\Cliente as C1;
use B\Cliente as C2;

$c = new C1();
print_r($c);
echo $c->__get('nome');

$c = new C2();
print_r($c);
echo $c->__get('nome');
