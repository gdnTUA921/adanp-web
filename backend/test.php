<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset=UTF-8");

include_once './config/Database.php';

echo "<h1>Database Connection Test</h1>";

$database = new Database();

try {
    $db = $database->getConnection();
    
    if ($db) {
        echo "<h2 style='color: green;'>✅ Connected Successfully!</h2>";
        echo "<p>Connected to database: <strong>adanp_portal</strong></p>";
        
        // Let's also check if admin_user table exists
        try {
            $stmt = $db->query("SELECT 1 FROM admin_user LIMIT 1");
            if ($stmt !== false) {
                echo "<p style='color: green;'>✅ Table 'admin_user' exists!</p>";
            } else {
                 echo "<p style='color: red;'>❌ Table 'admin_user' does NOT exist or cannot be queried.</p>";
            }
        } catch (PDOException $e) {
            echo "<p style='color: red;'>❌ Error querying 'admin_user' table: " . $e->getMessage() . "</p>";
        }

    } else {
        echo "<h2 style='color: red;'>❌ Connection Failed</h2>";
        echo "<p>Check your settings in <code>backend/config/Database.php</code></p>";
    }
} catch (Exception $e) {
    echo "<h2 style='color: red;'>❌ Connection Error</h2>";
    echo "<p>Details: " . htmlspecialchars($e->getMessage()) . "</p>";
}
?>
