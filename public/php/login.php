<?php
session_start();
include('conexao.php');

if (empty($_POST['utilizador']) || empty($_POST['senha'])) {
  header('location: index.php');
    exit();
}

$utilizador = mysqli_real_escape_string($conexao,['utilizador']);
$senha = mysqli_real_escape_string($conexao,['senha']);

$query ="select utilizador_id, utilizador from utilizador where utilizador= '{$utilizador}' and senha =md5('{$senha}')";

$result = mysqli_query($conexao, $query);

$row = mysqli_num_rows($result);

if($row == 1) {
  $_SESSION [utilizador] = $utilizador;
  header('Location: painel.php');
  exit();
}else {
  header ('Location: index.php');
  exit();
}