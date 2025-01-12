<?php
class ContactController {
    public function submit() {
        $data = json_decode(file_get_contents('php://input'), true);
        
        $name = $data['name'] ?? '';
        $email = $data['email'] ?? '';
        $message = $data['message'] ?? '';
        
        // Validation
        if (empty($name) || empty($email) || empty($message)) {
            http_response_code(400);
            echo json_encode(['error' => 'Tous les champs sont requis']);
            return;
        }
        
        // Envoi d'email ou sauvegarde en base de données
        // ... votre logique ici ...
        
        echo json_encode(['success' => true]);
    }
}