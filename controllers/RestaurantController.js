
const { PrismaClient } = require('@prisma/client');
const { Restaurant } = new PrismaClient();

exports.createRestaurant =  async (req, res) => {
  try {
    const newRestaurant = req.body;
    const addedRestaurant = await Restaurant.create({ data: newRestaurant });
    res.status(200).send({ message: 'Restaurant créé avec succès!', addedRestaurant });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ error: 'Erreur lors de la création du restaurant' });
  }
};

exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurant = await Restaurant.findMany();
    res.status(200).json({ message: 'Voici la liste de nos restaurants!', restaurant });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la recherche des restaurants' });
  }
};


exports.getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant non trouvée', restaurant });
    }
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la recherche des restaurants' });
  }
}

exports.deleteRestaurantById = async (req, res) => {
  try {
    const restaurants = await Restaurant.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (!restaurants) {
      return res.status(404).json({ message: 'Restaurant non trouvée' });
    }
    res.status(200).json({ message: 'Restaurant supprimé avec succès', restaurants });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}




/*exports.createRestaurant = async (req, res, next) => {
  try {
    const { userId } = req.User; // Supposons que 'req.user' contient les informations de l'utilisateur connecté

    // Vérifiez si l'utilisateur existe dans la base de données
    const existingUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!existingUser) {
      return res.status(400).send('Utilisateur introuvable');
    }

    try {
      const newRestaurant = {
        ...req.body,
        owner: {
          connect: {
            id: userId, // ID de l'utilisateur propriétaire du restaurant
          },
        },
      };

      const addedRestaurant = await prisma.restaurant.create({
        data: newRestaurant,
      });

      res.status(200).send({ message: 'Restaurant créé avec succès!', addedRestaurant });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ error: 'Erreur lors de la création du restaurant' });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ error: 'Erreur lors de la recherche de l\'utilisateur' });
  }
}; */

/*const multer = require('multer');

const upload = multer({ dest: 'uploads/' }); // Configurez le répertoire de destination pour les fichiers uploadés

const { PrismaClient } = require("@prisma/client");
const { Restaurant } = new PrismaClient();

exports.createRestaurant = async (req, res) => {
    const { name, city, availability, price } = req.body;
    
  
    try {
      const { path: imagePath } = req.file;
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
  
 // Importer les modules nécessaires
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Controller pour créer un restaurant
exports.createRestaurant = async (req, res, next) => {
  try {
    const { name, description, imageUrl } = req.body;
    const restaurant = await prisma.Restaurant.create({
      data: {
        name,
        description,
        imageUrl,
      },
    });
    res.status(201).json({ message: 'Restaurant créé avec succès!', restaurant });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création du restaurant' });
  }
}; */
