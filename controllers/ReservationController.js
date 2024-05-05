const { PrismaClient } = require('@prisma/client');
const { Reservation } = new PrismaClient();


exports.createReservation = async (req, res) => {
    try {
      const newReservation = req.body;
      const addedReservation = await Reservation.create({ data: newReservation });
      res.status(200).send({ message: 'Réservation créée avec succès!', addedReservation });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ error: 'Erreur lors de la création de la réservation' });
    }
  };

  exports.getAllReservations = async (req, res) => {
    try {
      const reservation = await Reservation.findMany();
      res.status(200).json({ message: 'Voici la liste de nos reservations!', reservation });
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la recherche des reservations' });
    }
  };
