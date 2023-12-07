// Importa el servidor HTTP desde app.js
const http = require('./app');

// Configura el servidor para escuchar en el puerto 3000
http.listen(3000, () => { 
    console.log('Servidor en el puerto 3000');
});
