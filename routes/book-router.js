const express = require("express")
const router = express.Router()
const Book = require("../models/Book");
const User = require("../models/User");


router.get('/',(req,res)=>{
    res.render('books/home')
})

router.get('/details',(req,res)=>{
    res.render('books/bookDetaille')
})

router.get('/create',(req,res)=>{
    res.render('books/creerBook')
})


router.post('/PosterBook', async (req, res) => {
    try {
        // Récupérer l'utilisateur authentifié
        const userId = req.user.id;

        // Récupérer les données du formulaire
        const { title, image, contenu, categorie } = req.body;

        // Recherchez l'utilisateur dans la base de données
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).send('Utilisateur non trouvé');
        }

        // Créer une nouvelle instance du livre avec les données du formulaire et l'ID de l'utilisateur
        const newBook = new Book({
            title,
            image,
            contenu,
            auteur: user._id, // Utilisez l'ID de l'utilisateur comme auteur du livre
            categorie
        });

        // Enregistrer le livre dans la base de données
        await newBook.save();

        // Rediriger ou renvoyer une réponse appropriée
        res.redirect('/users/profile'); // Redirige vers la page des détails du livre après l'enregistrement
    } catch (err) {
        console.error(err);
        res.status(500).send('Erreur lors de la création du livre');
    }
});


module.exports = router;