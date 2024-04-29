const express = require('express');
const useRoutes = require('./routes/UseRoutes');
const useRestaurantRoutes = require('./routes/RestaurantRoutes')


const app = express();

const port = 3000;

app.use(express.json());


app.use('/', useRoutes);
app.use('/', useRestaurantRoutes)


app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
  });


module.exports = app;
