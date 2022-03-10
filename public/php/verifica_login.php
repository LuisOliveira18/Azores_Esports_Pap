<?php
session_start();
if (!$_SESSION['utilizador']) {
    header('location: index.php');
    exit();
}