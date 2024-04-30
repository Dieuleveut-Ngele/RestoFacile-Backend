const app = require('./app');

const port = 3000;

app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
  });
