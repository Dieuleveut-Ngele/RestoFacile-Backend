require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const useRoutes = require('./routes/UseRoutes');
const useRestaurantRoutes = require('./routes/RestaurantRoutes')
const useReservationRoutes = require('./routes/ReservationRoutes')
const useSendEmailRoutes = require('./routes/SendEmailRoutes')


const app = express();
app.use(bodyParser.json());

app.use(cors());

app.use(express.json());

 app.use('/api', useRoutes);
 app.use('/api', useRestaurantRoutes);
 app.use('/api', useReservationRoutes);
 app.use('/api', useSendEmailRoutes);



module.exports = app;
