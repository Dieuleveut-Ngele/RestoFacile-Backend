
const { PrismaClient } = require("@prisma/client");
const { Restaurant } = new PrismaClient();

exports.createRestaurant = async (req, res) => {
    const { name, city, availability, price } = req.body;
    const { path: imagePath } = req.file;
  
    try {
      const newRestaurant = await Restaurant.create({
        data: {
          name,
          city,
          availability,
          price,
          image: imagePath,
        },
      });
  
      res.json(newRestaurant);
    } catch (error) {
      res.status(500).json({ error: 'Une erreur est survenue lors de la création du restaurant' });
    }
  };
  
 