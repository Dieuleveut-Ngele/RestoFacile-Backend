require('dotenv').config();
const express = require('express');
const useRoutes = require('./routes/UseRoutes');
const useRestaurantRoutes = require('./routes/RestaurantRoutes')
//const useTodo = require('./routes/TodoRoutes')


const app = express();


app.use(express.json());


app.use('/', useRoutes);
app.use('/', useRestaurantRoutes);
//app.use('/', useTodo);



module.exports = app;
