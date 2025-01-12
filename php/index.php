<?php
require_once 'router/Router.php';
require_once 'controllers/ContactController.php';
require_once 'controllers/FormationController.php';
require_once 'controllers/OdooController.php';

$router = new Router();

// Configuration des routes API
$router->addRoute('POST', '/api/contact', 'ContactController@submit');
$router->addRoute('GET', '/api/formations', 'FormationController@list');
$router->addRoute('POST', '/api/formations/register', 'FormationController@register');
$router->addRoute('GET', '/api/odoo/services', 'OdooController@getServices');

$router->handleRequest();