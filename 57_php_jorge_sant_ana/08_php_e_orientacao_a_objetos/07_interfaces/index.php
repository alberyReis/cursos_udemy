<?php
interface EquipamentoEletronicoInterface {
  public function ligar();
  public function desligar();
}

class Geladeira implements EquipamentoEletronicoInterface {
  public function abrirPorta() {
    echo 'Abrir porta.';
  }

  public function ligar() {
    echo 'Ligar.';
  }

  public function desligar() {
    echo 'Desligar.';
  }
}

class Tv {
  public function trocarCanal() {
    echo 'Trocar canal.';
  }

  public function ligar() {
    echo 'Ligar.';
  }

  public function desligar() {
    echo 'Desligar.';
  }
}

$geladeira = new Geladeira();
$tv = new Tv();

// _______________________________________________________________________________________ //

interface MamiferoInterface {
  public function respirar();
}

interface TerrestreInterface {
  public function andar();
}

interface AquaticoInterface {
  public function nadar();
}

class Humano implements MamiferoInterface, TerrestreInterface {
  public function respirar() {
    echo 'Respirar.';
  }

  public function andar() {
    echo 'Andar.';
  }

  public function consversar() {
    echo 'Conversar.';
  }
}

class Baleia implements MamiferoInterface, AquaticoInterface {
  public function respirar() {
    echo 'Respirar.';
  }

  public function nadar() {
    echo 'Nadar.';
  }

  protected function esguichar() {
    echo 'Esguichar.';
  }
}

// _______________________________________________________________________________________ //

interface AnimalInterface {
  public function comer();
}

interface AveInterface extends AnimalInterface {
  public function voar();
}

class Papagaio implements AveInterface {
  public function comer() {
    echo 'Comer';
  }

  public function voar() {
    echo 'Voar.';
  }
}
