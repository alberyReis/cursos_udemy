<?php
session_start();

$usuarioAutenticado = false;
$usuarioId = null;
$usuarioPerfilId = null;

$perfis = array(1 => 'Administrativo', 2 => 'Usuário');

$usuariosApp = array(
  array('id' => 1, 'email' => 'adm@gmail.com', 'senha' => '01020102', 'perfilId' => 1),
  array('id' => 2, 'email' => 'user01@gmail.com', 'senha' => '12345678', 'perfilId' => 2),
  array('id' => 3, 'email' => 'user02@gmail.com', 'senha' => '12345678', 'perfilId' => 2),
  array('id' => 4, 'email' => 'user03@gmail.com', 'senha' => '12345678', 'perfilId' => 2),
);

$usuarioAutenticado = false;

foreach ($usuariosApp as $user) {
  if ($user['email'] == $_POST['email'] && $user['senha'] == $_POST['senha']) {
    $usuarioAutenticado = true;
    $usuarioId = $user['id'];
    $usuarioPerfilId = $user['perfilId'];
  }
}

if ($usuarioAutenticado) {
  $_SESSION['autenticado'] = 'SIM';
  $_SESSION['id'] = $usuarioId;
  $_SESSION['perdilId'] = $usuarioPerfilId;
  header('Location: home.php');
} else {
  $_SESSION['autenticado'] = 'NAO';
  header('Location: index.php?login=erro');
}

$_POST['email'];
$_POST['senha'];
