<?php
class Funcionario {
    public $nome = null;
    public $telefone = null;
    public $numFilhos = null;
    public $cargo = null;
    public $salario = null;

    function __set($atributo, $valor) {
        $this->$atributo = $valor;
    }

    function __get($atributo) {
        return $this->$atributo;
    }

    function resumirCadFunc() {
        return $this->__get('nome') . ' possui ' . $this->__get('numFilhos') . ' filho(s). <hr/>';
    }

    function modificarNumFilhos($numFilhos) {
        $this->numFilhos = $numFilhos;
    }
}

$albery = new Funcionario();
$albery->__set('nome', 'Albery');
$albery->__set('numFilhos', 2);
echo $albery->resumirCadFunc();
// echo $albery->__get('nome') . ' possui ' . $albery->__get('numFilhos') . ' filho(s). <hr/>';

$luana = new Funcionario();
$luana->__set('nome', 'Luana');
$luana->__set('numFilhos', 0);
echo $luana->resumirCadFunc();
// echo $luana->__get('nome') . ' possui ' . $luana->__get('numFilhos') . ' filho(s). <hr/>';
