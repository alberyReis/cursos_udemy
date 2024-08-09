<?php
class Exemplo {
  public static $atributo01 = 'Eu sou um atributo estático.';
  public $atributo02 = 'Eusou um atributo normal.';

  public static function metodo01() {
    echo 'Eu sou um método estático.';
  }

  public function metodo02() {
    echo 'Eu sou uma método normal.';
  }
}

$x = new Exemplo();

// echo Exemplo::$atributo01;
// echo '<br/>';
// Exemplo::metodo01();

// Exemplo::$atributo02;
echo Exemplo::metodo01();

// echo $x->atributo02;