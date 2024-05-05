require('dotenv').config();
const express = require('express');
const useRoutes = require('./routes/UseRoutes');
//    const useRoutesLogin = require('./routes/UseRoutes');
//     const useRoutesSignup = require('./routes/UseRoutes');
//     const useRoutesLogout = require('./routes/UseRoutes');
//     const useRoutesgetAllUsers = require('./routes/UseRoutes');
//    const useRestaurantRoutes = require('./routes/RestaurantRoutes')
//const useTodo = require('./routes/TodoRoutes')

const app = express();

app.use(express.json());

 app.use('/user', useRoutes);
// app.use('/user', useRoutesLogin);
// app.use('/user', useRoutesSignup);
// app.use('/logout', useRoutesLogout);
// app.use('/restaurant', useRestaurantRoutes);
// app.use('/user', useRoutesgetAllUsers);
//app.use('/', useTodo);



module.exports = app;
