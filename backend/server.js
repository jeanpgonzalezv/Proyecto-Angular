const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

// Inicializa Express
const app = express();
const port = 3000; 

// Middleware
app.use(cors()); // Permite solicitudes desde cualquier origen
app.use(bodyParser.json()); // Para parsear el cuerpo de la solicitud

// Conexión con la base de datos
const db = mysql.createConnection({
  host: '127.0.0.1',   
  user: 'root',         
  password: '', 
  database: 'barberhub'
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Endpoint de registro (POST)
app.post('/api/registro', (req, res) => {
  const { rut, nombre, correo, password, fecha_nacimiento } = req.body;

  // Consulta SQL para insertar datos en la base de datos
  const query = 'INSERT INTO usuarios (rut, nombre, correo, password, fecha_nacimiento) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [rut, nombre, correo, password, fecha_nacimiento], (err, results) => {
    if (err) {
      console.error('Error al insertar el usuario:', err);
      return res.status(500).json({ message: 'Error al registrar usuario' });
    }
    res.status(200).json({ message: 'Usuario registrado exitosamente' });
  });
});

// Endpoint de login (GET)
app.post('/api/login', (req, res) => {
  const { correo, password } = req.body;

  // Consulta SQL para verificar el usuario
  const query = 'SELECT * FROM usuarios WHERE correo = ? AND password = ?';
  db.query(query, [correo, password], (err, results) => {
    if (err) {
      console.error('Error al verificar el usuario:', err);
      return res.status(500).json({ message: 'Error al verificar el usuario' });
    }

    if (results.length > 0) {
      res.status(200).json({ message: 'Usuario autenticado', token: 'tokenGenerado' });
    } else {
      res.status(401).json({ message: 'Credenciales incorrectas' });
    }
  });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
