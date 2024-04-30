const express = require('express');
const useRoutes = require('./routes/UseRoutes');
const useRestaurantRoutes = require('./routes/RestaurantRoutes')


const app = express();


app.use(express.json());


app.use('/', useRoutes);
app.use('/', useRestaurantRoutes)




module.exports = app;
