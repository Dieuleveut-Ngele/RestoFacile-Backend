require('dotenv').config();
const express = require('express');
const cors = require('cors');

const useRoutes = require('./routes/UseRoutes');
const useRestaurantRoutes = require('./routes/RestaurantRoutes')
const useReservationRoutes = require('./routes/ReservationRoutes')
//const useTodo = require('./routes/TodoRoutes')

const app = express();

app.use(cors());

app.use(express.json());

 app.use('/user', useRoutes);
 app.use('/', useRestaurantRoutes);
 app.use('/', useReservationRoutes);
//app.use('/', useTodo);



module.exports = app;
