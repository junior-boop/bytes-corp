<?php
class Router {
    private $routes = [];

    public function addRoute($method, $path, $handler) {
        $this->routes[] = [
            'method' => $method,
            'path' => $path,
            'handler' => $handler
        ];
    }

    public function handleRequest() {
        $requestMethod = $_SERVER['REQUEST_METHOD'];
        $requestPath = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

        // Vérifier si la route commence par /api
        if (!str_starts_with($requestPath, '/api')) {
            // Si ce n'est pas une route API, laisser Astro gérer
            return;
        }

        // Configuration CORS pour les API
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');

        // Gérer les requêtes OPTIONS (CORS preflight)
        if ($requestMethod === 'OPTIONS') {
            http_response_code(200);
            exit();
        }

        foreach ($this->routes as $route) {
            if ($route['method'] === $requestMethod && $route['path'] === $requestPath) {
                $this->executeHandler($route['handler']);
                return;
            }
        }
        
        // Route non trouvée
        http_response_code(404);
        echo json_encode(['error' => 'Route not found']);
    }

    private function executeHandler($handler) {
        list($controller, $method) = explode('@', $handler);
        $controllerInstance = new $controller();
        $controllerInstance->$method();
    }
}