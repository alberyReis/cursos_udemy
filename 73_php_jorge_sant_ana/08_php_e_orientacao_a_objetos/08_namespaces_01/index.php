<?php

namespace A;

class Cliente implements \B\CadastroInterface {
  public $nome = 'Albery';

  public function __construct() {
    echo '<pre>';
    print_r(get_class_methods($this));
    echo '</pre>';
  }

  public function __get($attr) {
    return $this->$attr;
  }

  public function salvar() {
    echo 'Salvar.';
  }

  public function remover() {
    echo 'Remover.';
  }
}

interface CadastroInterface {
  public function salvar();
}

namespace B;

class Cliente implements \A\CadastroInterface {
  public $nome = 'Zeca';

  public function __construct() {
    echo '<pre>';
    print_r(get_class_methods($this));
    echo '</pre>';
  }

  public function __get($attr) {
    return $this->$attr;
  }

  public function salvar() {
    echo 'Salvar.';
  }

  public function remover() {
    echo 'Remover.';
  }
}

interface CadastroInterface {
  public function remover();
}

$c = new \B\Cliente();
echo '<pre>';
print_r($c);
echo '</pre></hr>';
echo $c->__get('nome');
